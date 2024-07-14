import { getShortDate } from "@/lib/datetime";
import { z } from "zod";
import { StoreApi, Mutate, UseBoundStore, create } from "zustand";
import createContext from "zustand/context";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const IStep = z.enum(["services", "staff", "date", "confirm"]);
type IStep = z.infer<typeof IStep>;

const IService = z.object({
  id: z.string(),
  serviceOptionIds: z.array(z.string()),
});

const IInitStates = z.object({
  _hasHydrated: z.boolean(),
  step: IStep,
  services: z.array(IService),
  staffId: z.string().nullable(),
  date: z.union([z.date(), z.string()]),
});

type IInitStates = z.infer<typeof IInitStates>;

type IBookingState = IInitStates & {
  setStep: (step: IStep) => void;
};

type UseBearStore = UseBoundStore<
  Mutate<StoreApi<IBookingState>, [["zustand/persist", IBookingState]]>
>;

const BookingContext = createContext<UseBearStore>();

export const useBookingStore = BookingContext.useStore;

export const BookingStoreProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <BookingContext.Provider
      createStore={() =>
        create<IBookingState>()(
          persist(
            immer((set) => ({
              _hasHydrated: false,
              step: "services",
              staffId: null,
              services: [],
              date: getShortDate(new Date()),
              setStep: (step) =>
                set((s) => {
                  s.step = step;
                  return s;
                }),
            })),
            {
              name: "bk-draft-order",
              onRehydrateStorage: (localState) => (state) => {
                if (state) {
                  state._hasHydrated = true;
                }
              },
            }
          )
        )
      }
    >
      {children}
    </BookingContext.Provider>
  );
};
