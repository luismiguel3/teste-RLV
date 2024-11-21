import { Info, CalendarIcon } from "lucide-react";
import { Button } from "../ui/button";
import {
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "../ui/sheet";
import { Controller, useForm } from "react-hook-form";
import { format } from "date-fns";
import { Calendar } from "../ui/calendar";
import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Separator } from "../ui/separator";

export default function SheetFilter() {
  const { control } = useForm();

  return (
    <SheetContent>
      <SheetHeader className="pb-4">
        <SheetTitle className="font-bold text-lg">
          Filtrar Documentos
        </SheetTitle>
        <SheetDescription className="text-sm">
          Indique os dados necessários para realizar a filtragem
        </SheetDescription>
        <Separator className="mb-8" />
        <div className="text-md font-semibold text-start flex-row flex col-span-2 gap-2 p-4 border-2 rounded-md border-gray-200">
          <div>
            <Info size={20} />
          </div>
          <span className="text-md font-normal text-start">
            Selecione o tipo de documento necessário para, a partir dele,
            selecionar os tipos de índice para a filtragem.
          </span>
        </div>
      </SheetHeader>

      <SheetFooter className="w-full gap-8 flex flex-col">
        <Controller
          control={control}
          name="creationInterval"
          render={({ field: { value, onChange } }) => (
            <div className="flex flex-col">
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
        <div className="flex justify-end gap-4">
          <Button variant="outline">Limpar</Button>
          <Button type="submit" variant="primary">
            Aplicar Filtro
          </Button>

          {/* <SheetClose asChild>
                <Button type="submit">Save changes</Button>
              </SheetClose> */}
        </div>
      </SheetFooter>
    </SheetContent>
  );
}
