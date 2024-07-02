"use client";

import * as React from "react";
import { addDays, format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { Controller } from "react-hook-form";

export function DatePickerWithRange({ className, control, title, name }) {
  return (
    <div className={cn("grid gap-2 z-50", className)}>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <>
            <Label>{title}</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[240px] pl-3 text-left font-normal",
                    !value && "text-muted-foreground"
                  )}
                >
                  {value ? (
                    format(value, "dd/MM/yyyy")
                  ) : (
                    <span>Escolha uma data</span>
                  )}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={value}
                  onSelect={onChange}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </>
        )}
      />
    </div>
  );
}
