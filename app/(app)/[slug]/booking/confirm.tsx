"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
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

const formSchema = z.object({
  firstname: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  lastname: z.string(),
  phone: z.any(),
  email: z.string().email("Invalid email"),
  note: z.string(),
});

export function Confirm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
      note: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <div className="flex flex-col">
        <div className="flex flex-col justify-center items-center gap-6 p-4 bg-accent">
          <span className="text-sm">Tuesday, July 8, 2024</span>
          <div className="flex flex-col items-center justify-center">
            <p className="text-sm font-semibold">Gloss / Toner (90$)</p>
            <p className="text-sm">(Barber cut, Short/pixie Haircut)</p>
            <p className="text-sm">
              with <span className="font-semibold">Neesha</span> at{" "}
              <span className="font-semibold">12:00 pm</span>
            </p>
          </div>
        </div>
        <div className="">
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid grid-cols-2 gap-4 p-4"
          >
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
            <div className="col-span-2 flex flex-col gap-2 mt-4">
              <p className="text-sm font-semibold">Cancellation policy:</p>
              <p className="text-sm">
                For appointments canceled within 24 hours or "no-show"
                appointments, We charge 100% of the service total.
              </p>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="flex items-center gap-2">
                        <Switch id="agree-cancellation-policy" />
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
          </form>
        </div>
      </div>
    </Form>
  );
}
