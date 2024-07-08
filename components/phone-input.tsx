import { cn } from "@/lib/utils";
import * as React from "react";
import Input, { Country } from "react-phone-number-input/input";
import { E164Number } from "libphonenumber-js/core";

export interface InputProps {
  className?: string;
  value: E164Number;
  onChange: (value: E164Number) => void;
  country?: Country;
  countryCode?: string;
}

const PhoneInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, value, onChange, countryCode, ...props }, ref) => {
    return (
      <Input
        country={(countryCode ?? "US") as Country}
        international
        withCountryCallingCode
        onChange={onChange}
        value={value}
        className={cn(
          "flex h-9 w-full rounded border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-base file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
        ref={ref}
      />
    );
  }
);
PhoneInput.displayName = "PhoneInput";

export { PhoneInput };
