import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Controller, useFormContext } from "react-hook-form";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "../../lib/utils";

export default function CreationInterval() {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name="creationInterval"
      render={({ field: { value, onChange } }) => (
        <div className="w-full">
          <label>Periodo de criação </label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                id="date"
                variant={"outline"}
                className={cn(
                  "w-full justify-between text-left font-normal",
                  !value && "text-muted-foreground"
                )}>
                {value?.from ? (
                  value.to ? (
                    <>
                      {format(value.from, "dd/MM/yyyy")} -{" "}
                      {format(value.to, "dd/MM/yyyy")}
                    </>
                  ) : (
                    format(value.from, "dd/MM/yyyy")
                  )
                ) : (
                  <span>Selecionar Periodo</span>
                )}
                <CalendarIcon />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                initialFocus
                mode="range"
                defaultMonth={value?.from}
                selected={value}
                onSelect={onChange}
                numberOfMonths={1}
              />
            </PopoverContent>
          </Popover>
        </div>
      )}
    />
  );
}
