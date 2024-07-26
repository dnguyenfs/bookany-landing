"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { isValidPhoneNumber } from "react-phone-number-input";
import { cn } from "@/lib/utils";
import { PhoneInput } from "@/components/phone-input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useBookingStore } from "./context";
import { format } from "date-fns";
import { convertMinutesToHourMinutes } from "@/lib/datetime";
import { Button } from "@/components/ui/button";
import GoogleSVG from "@/public/svg/GoogleSVG";
import { useGoogleLogin } from "@react-oauth/google";
import FacebookSVG from "@/public/svg/FacebookSVG";
import { precheckToken, savePhoneNumber } from "./actions";
import { getProfileApi } from "@/api/account";
import { toast } from "sonner";
import { addPlus } from "@/lib/utils/phone";
import { formatNumber } from "libphonenumber-js";
import { useState } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { LoaderCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const formSchema = z.object({
  firstname: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  lastname: z.string(),
  phone: z.any(),
  email: z.string().email("Invalid email"),
  note: z.string(),
  agreePolicy: z.boolean(),
});

export function Confirm() {
  const merchant = useBookingStore((s) => s.merchant);
  const date = useBookingStore((s) => s.date);
  const staffId = useBookingStore((s) => s.staffId);
  const services = useBookingStore((s) => s.services);
  const serviceMapping = useBookingStore((s) => s.serviceMapping);
  const staffMapping = useBookingStore((s) => s.staffMapping);
  const beginAt = useBookingStore((s) => s.beginAt);
  const user = useBookingStore((s) => s.user);
  const setUser = useBookingStore((s) => s.setUser);
  const [openConfirmOtp, setOpenConfirmOtp] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const requiredAuthenticated = merchant.settings.requiredAuthenticated;
  const collectPhone = merchant.settings.collectPhone;
  const slug = merchant.slug;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: user?.name ? user.name?.split(" ")[0] : "",
      lastname: user?.name ? user.name?.split(" ")?.[1] ?? "" : "",
      phone: user?.phone ?? "",
      email: user?.email ?? "",
      note: "",
      agreePolicy: true,
    },
  });

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      await precheckToken({
        slug,
        code: tokenResponse.access_token,
        userAgent: navigator.userAgent,
      });

      const user = await getProfileApi();
      if (!user) {
        toast.info("There was an error logging in. Please try again.");
        return;
      }
      setUser(user);
      form.setValue("email", user.email);
      form.setValue("firstname", user.name?.split(" ")[0]);
      form.setValue("lastname", user.name?.split(" ")?.[1] ?? "");
    },
    scope: "openid email profile",
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setOpenConfirmOtp(true);
  }

  const createBooking = () => {
    const values = form.getValues();
    if (!isDesktop) {
      setOpenConfirmOtp(false);
    }
    console.log("create booking", values);
  };

  const requiredLoginSection = (
    <>
      <div className="absolute w-full h-full bg-foreground/50"></div>
      <div className="sticky bg-background rounded-t-3xl border bottom-0 left-0 right-0 flex flex-col gap-4 px-8 py-6 justify-center items-center w-full z-10">
        <div className="flex flex-col gap-2 items-center justify-center text-center">
          <p className="text-sm font-semibold">Please sign in to continue</p>
          <p className="text-sm text-muted-foreground">
            Create an account or sign in to book and manage your appointments
          </p>
        </div>
        <Button
          className="w-full max-w-[300px] justify-start gap-3 px-8"
          onClick={() => login()}
          variant="outline"
          type="button"
        >
          <GoogleSVG className="mr-2 w-5 h-5" />
          Continue with Google
        </Button>
        <Button
          className="w-full max-w-[300px] px-8 gap-3 justify-start"
          onClick={() => login()}
          variant="outline"
          type="button"
        >
          <FacebookSVG className="mr-2 w-5 h-5" />
          Continue with Facebook
        </Button>
      </div>
    </>
  );

  const confirmSmartOtp = isDesktop ? (
    <>
      <div className="absolute w-full h-full bg-foreground/50"></div>
      <ConfirmOtp
        onAccept={createBooking}
        className="sticky bg-background rounded-t-3xl border bottom-0 left-0 right-0"
      />
    </>
  ) : (
    <Drawer open={openConfirmOtp} onOpenChange={setOpenConfirmOtp}>
      <DrawerContent>
        <ConfirmOtp onAccept={createBooking} />
      </DrawerContent>
    </Drawer>
  );

  return (
    <div className="flex flex-col relative">
      <div className="flex flex-col justify-center items-center gap-6 p-4 bg-accent">
        <span className="text-sm">{format(date, "EEEE, MMMM dd, yyyy")}</span>
        <div className="flex flex-col items-center justify-center">
          {services.map((sv) => {
            const service = serviceMapping.get(sv.id);
            if (!service) return null;
            return (
              <>
                <p className="text-sm font-semibold">
                  {service.name} ({service.price}
                  {merchant.currency})
                </p>
                {/* <p className="text-sm">(Barber cut, Short/pixie Haircut)</p> */}
              </>
            );
          })}

          {staffId && (
            <p className="text-sm">
              with{" "}
              <span className="font-semibold">
                {staffId === "_system"
                  ? "Anyone"
                  : staffMapping.get(staffId)?.name}
              </span>{" "}
              at{" "}
              <span className="font-semibold">
                {convertMinutesToHourMinutes(beginAt ?? 0, true)}
              </span>
            </p>
          )}
        </div>
      </div>

      <div className="">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid grid-cols-2 gap-4 p-4"
          >
            {!requiredAuthenticated ? (
              <>
                <FormField
                  control={form.control}
                  name="firstname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter first name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter last name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="col-span-2">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem className="flex flex-col gap-1">
                        <FormLabel>Phone number</FormLabel>
                        <FormControl>
                          <PhoneInput
                            value={field.value}
                            onChange={(value) => {
                              if (value && !isValidPhoneNumber(value)) {
                                form.setError("phone", {
                                  message: "Invalid phone number",
                                });
                              } else {
                                form.clearErrors("phone");
                              }
                              field.onChange(value);
                            }}
                            countryCode={merchant.countryCode}
                            className={cn({
                              "!ring-red-500":
                                field.value && !isValidPhoneNumber(field.value),
                            })}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="col-span-2">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </>
            ) : (
              user && (
                <>
                  <div className="col-span-2 flex flex-col gap-2 mt-4">
                    <p className="text-sm font-semibold">User information:</p>

                    <div className="flex flex-col gap-1">
                      <p className="text-sm">
                        <span className="font-semibold">Name:</span> {user.name}
                      </p>
                      <p className="text-sm">
                        <span className="font-semibold">Email:</span>{" "}
                        {user.email}
                      </p>

                      {user.phone && (
                        <p className="text-sm">
                          <span className="font-semibold">Phone:</span>{" "}
                          {formatNumber(addPlus(user.phone), "INTERNATIONAL")}
                          {" • "}
                          <span className="text-blue-500 underline hover:text-blue-800 hover:cursor-pointer">
                            Change phone
                          </span>
                        </p>
                      )}
                    </div>
                  </div>
                </>
              )
            )}

            <div className="col-span-2 flex flex-col gap-2 mt-4">
              <p className="text-sm font-semibold">Cancellation policy:</p>
              <p className="text-sm">
                For appointments canceled within 24 hours or "no-show"
                appointments, We charge 100% of the service total.
              </p>
              <FormField
                control={form.control}
                name="agreePolicy"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="flex items-center gap-2">
                        <Switch
                          checked={field.value}
                          id="agree-cancellation-policy"
                        />
                        <Label
                          htmlFor="agree-cancellation-policy"
                          className="text-sm cursor-pointer"
                        >
                          I agree to the cancellation policy
                        </Label>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="col-span-2 flex flex-col gap-2">
              <FormField
                control={form.control}
                name="note"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Note</FormLabel>
                    <FormControl>
                      <Textarea
                        rows={4}
                        placeholder="Enter any note"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit" className="w-full col-span-2">
              Submit
            </Button>
          </form>
        </Form>
      </div>
      {requiredAuthenticated &&
        (!user ? (
          <>
            <div className="absolute w-full h-full bg-foreground/50"></div>
            {requiredLoginSection}
          </>
        ) : user && collectPhone && !user.phone ? (
          <>
            <div className="absolute w-full h-full bg-foreground/50"></div>
            <RequiredPhone />
          </>
        ) : null)}

      {openConfirmOtp && confirmSmartOtp}
    </div>
  );
}

function ConfirmOtp({
  onAccept,
  className,
}: {
  onAccept: () => void;
  className?: string;
}) {
  const otp = (function () {
    //generate 6 random numbers
    const numbers = [];
    for (let i = 0; i < 6; i++) {
      numbers.push(Math.floor(Math.random() * 10));
    }
    return numbers.join("");
  })();

  return (
    <div
      className={cn(
        "flex flex-col gap-4 px-8 py-6 justify-center items-center w-full z-10",
        className
      )}
    >
      <div className="flex flex-col gap-4 items-center justify-center text-center">
        <p className="text-sm font-semibold">Confirm transaction</p>
        <p className="text-sm text-muted-foreground">
          Here is smart otp of this transaction. Please confirm to finish.
        </p>
        <div className="flex relative border rounded-full w-full p-3">
          <div className="flex-1 space-x-4">
            {otp.split("").map((char, index) => (
              <span key={index} className="text-chart-1 text-3xl font-medium">
                {char}
              </span>
            ))}
          </div>
          <LoaderCircle className="w-8 h-8 text-primary animate-spin" />
          <Badge
            variant={"outline"}
            className="absolute bg-background w-fit mx-auto -top-3 left-0 right-0"
          >
            Smart-OTP
          </Badge>
        </div>
      </div>
      <Button onClick={onAccept} className="w-full" type="button">
        Confirm
      </Button>
    </div>
  );
}

const requiredPhoneSchema = z.object({
  phone: z.any(),
});

function RequiredPhone() {
  const merchant = useBookingStore((s) => s.merchant);
  const setUser = useBookingStore((s) => s.setUser);

  const form = useForm<z.infer<typeof requiredPhoneSchema>>({
    resolver: zodResolver(requiredPhoneSchema),
    defaultValues: {
      phone: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof requiredPhoneSchema>) => {
    const newUser = await savePhoneNumber({
      phone: values.phone,
      userAgent: navigator.userAgent,
    });

    if (!newUser) {
      toast.info("There was an error logging in. Please try again.");
      return;
    }
    setUser(newUser);
    toast.info("Phone number updated successfully");
  };

  return (
    <Form {...form}>
      <form
        className="sticky bg-background rounded-t-3xl border bottom-0 left-0 right-0 flex flex-col gap-4 px-8 py-6 justify-center items-center w-full z-10"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-2 items-center justify-center text-center">
          <p className="text-sm font-semibold">Almost done!</p>
          <p className="text-sm text-muted-foreground">
            Please provide your phone number to continue
          </p>
        </div>
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1 w-full">
              <FormLabel>Phone number</FormLabel>
              <FormControl>
                <PhoneInput
                  value={field.value}
                  onChange={(value) => {
                    if (value && !isValidPhoneNumber(value)) {
                      console.log("error");
                      form.setError("phone", {
                        message: "Invalid phone number",
                      });
                    } else {
                      console.log("no error");
                      form.clearErrors("phone");
                    }
                    field.onChange(value);
                  }}
                  autoFocus
                  countryCode={merchant.countryCode}
                  className={cn({
                    "!ring-red-500":
                      field.value && !isValidPhoneNumber(field.value),
                  })}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          disabled={!form.formState.isValid}
          className="w-full col-span-2"
          type="submit"
        >
          Update
        </Button>
      </form>
    </Form>
  );
}
