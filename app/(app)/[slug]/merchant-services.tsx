"use client";
import React from "react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function MerchantServices() {
  return (
    <div className="flex flex-col gap-2 w-full overflow-hidden max-w-full">
      <h4 className="text-lg font-semibold">Services</h4>
      <div className="flex items-center gap-2 overflow-x-auto scrollbar w-full no-scrollbar">
        {[
          "Features",
          "Specialty treatments",
          "Personalized service",
          "Beauty and wellness",
          "Hair and beauty",
          "Skin care",
          "Makeup and skin care",
          "Nail care",
          "Massage",
          "Spa treatments",
          "Wellness",
          "Healthy living",
          "Fitness",
          "Yoga",
          "Pilates",
          "Meditation",
          "Nutrition",
          "Diet",
          "Weight loss",
          "Exercise",
          "Gym",
          "Sports",
        ].map((categoryName, index) => (
          <Badge
            variant={cn({
              default: index === 0,
              outline: index !== 0,
            })}
            className="whitespace-nowrap cursor-pointer h-7"
            key={index}
          >
            {categoryName}
          </Badge>
        ))}
      </div>
    </div>
  );
}
