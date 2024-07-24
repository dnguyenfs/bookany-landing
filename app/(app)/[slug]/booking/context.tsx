import { getShortDate } from "@/lib/datetime";
import { ICategory } from "@/types/category";
import { IMerchant } from "@/types/merchant";
import { IService } from "@/types/service";
import { IStaff } from "@/types/staff";
import { IUser } from "@/types/user";
import { toast } from "sonner";
import { z } from "zod";
import { StoreApi, Mutate, UseBoundStore, create } from "zustand";
import createContext from "zustand/context";
import { immer } from "zustand/middleware/immer";

const IStep = z.enum(["services", "staff", "date", "confirm"]);
type IStep = z.infer<typeof IStep>;

const IServiceOption = z.object({
  id: z.string(),
  categoryId: z.string(),
  serviceOptionIds: z.array(z.string()),
});

const IExternalStates = z.object({
  merchant: IMerchant,
  slug: z.string(),
  categories: z.array(ICategory),
  user: IUser.nullable(),
  staff: z.array(IStaff),
  serviceMapping: z.map(z.string(), IService),
  staffMapping: z.map(z.string(), IStaff),
});

type IExternalStates = z.infer<typeof IExternalStates>;

const IInitStates = z.object({
  step: IStep,
  services: z.array(IServiceOption),
  staffId: z.string().nullable(),
  date: z.date(),
  beginAt: z.number().nullable(),
});

type IInitStates = z.infer<typeof IInitStates>;

type IBookingState = IExternalStates &
  IInitStates & {
    setStep: (step: IStep) => void;
    nextStep: () => void;
    prevStep: () => void;
    selectService: (categoryId: string, serviceId: string) => void;
    selectStaff: (staffId: string) => void;
    selectDate: (date: Date) => void;
    selectBeginAt: (beginAt: number | null) => void;
  };

type UseBearStore = UseBoundStore<Mutate<StoreApi<IBookingState>, []>>;

const BookingContext = createContext<UseBearStore>();

export const useBookingStore = BookingContext.useStore;

export const isSelectedServiceSelector =
  (serviceId: string) => (state: IBookingState) =>
    state.services.findIndex((service) => service.id === serviceId) > -1;

export const serviceCountByCategoryIdSelector =
  (categoryId: string) => (state: IBookingState) =>
    state.services.filter((service) => service.categoryId === categoryId)
      .length;

export const matchStaffSelector = (state: IBookingState) => {
  const serviceIds = state.services.map((service) => service.id);
  return state.staff.filter((staff) => {
    const staffServiceIds = staff.serviceStaffs.map(
      (serviceStaff) => serviceStaff.serviceId
    );
    return serviceIds.every((serviceId) => staffServiceIds.includes(serviceId));
  });
};

export const BookingStoreProvider = ({
  children,
  initialState,
}: {
  initialState: IExternalStates;
  children: React.ReactNode;
}) => {
  return (
    <BookingContext.Provider
      createStore={() =>
        create<IBookingState>()(
          immer((set) => ({
            ...initialState,
            _hasHydrated: false,
            step: "services",
            staffId: null,
            services: [],
            date: new Date(),
            beginAt: null,
            setStep: (step) =>
              set((s) => {
                s.step = step;
                return s;
              }),
            nextStep: () =>
              set((s) => {
                switch (s.step) {
                  case "services": {
                    const serviceLength = s.services.length;
                    if (serviceLength === 0) {
                      toast.info("Please select at least one service");
                      return s;
                    }

                    s.step = "staff";
                    return s;
                  }
                  case "staff": {
                    const staffId = s.staffId;
                    if (!staffId) {
                      toast.info("Please select a staff");
                      return s;
                    }

                    s.step = "date";
                    return s;
                  }

                  case "date": {
                    const date = s.date;
                    const beginAt = s.beginAt;
                    if (!date) {
                      toast.info("Please select a date");
                      return s;
                    }

                    if (!beginAt) {
                      toast.info("Please select a time");
                      return s;
                    }

                    s.step = "confirm";
                    return s;
                  }

                  default:
                    return s;
                }
              }),
            prevStep: () =>
              set((s) => {
                switch (s.step) {
                  case "confirm": {
                    s.step = "date";
                    return s;
                  }
                  case "date": {
                    s.step = "staff";
                    return s;
                  }
                  case "staff": {
                    s.step = "services";
                    return s;
                  }
                  default:
                    return s;
                }
              }),
            selectService: (categoryId, serviceId) =>
              set((s) => {
                const isExisted =
                  s.services.findIndex((service) => service.id === serviceId) >
                  -1;
                s.services = isExisted
                  ? s.services.filter((service) => service.id !== serviceId)
                  : [
                      ...s.services,
                      { id: serviceId, serviceOptionIds: [], categoryId },
                    ];

                s.staffId = null;
                s.date = new Date();
                s.beginAt = null;

                return s;
              }),
            selectStaff: (staffId) =>
              set((s) => {
                s.staffId = staffId;
                return s;
              }),
            selectDate: (date) =>
              set((s) => {
                s.date = date;
                return s;
              }),
            selectBeginAt: (beginAt) =>
              set((s) => {
                s.beginAt = beginAt;
                return s;
              }),
          }))
        )
      }
    >
      {children}
    </BookingContext.Provider>
  );
};
