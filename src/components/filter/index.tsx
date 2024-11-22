import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon, Info } from "lucide-react";
import { Controller, useFormContext } from "react-hook-form";
import { Input } from "../ui/input";

export default function Filters() {
  const { control } = useFormContext();

  const moneyMask = (value: string) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d+)(\d{2})/g, "$1,$2")
      .replace(/(\d)(?=(\d{3})+,)/g, "$1.");
  };

  return (
    <div>
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

      <SheetFooter>
        <div className="flex-col flex w-full gap-4">
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
          <Controller
            control={control}
            name="docType"
            render={({ field: { value, onChange } }) => (
              <Select onValueChange={onChange} defaultValue={value}>
                <SelectGroup>
                  <SelectLabel>Origem do documento</SelectLabel>
                  <SelectTrigger>
                    <SelectValue placeholder="Origem do Documento">
                      {value}
                    </SelectValue>
                  </SelectTrigger>
                </SelectGroup>
                <SelectContent>
                  <SelectItem value="NFe">NFe</SelectItem>
                  <SelectItem value="CTe">CTe</SelectItem>
                  <SelectItem value="MDFe">MDFe</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
          <Controller
            control={control}
            name="issuer"
            render={({ field: { value, onChange } }) => (
              <div>
                <label className="text-sm font-semibold py-2">Emitente</label>
                <Input
                  onChange={(e) => onChange(e.target.value)}
                  value={value}
                  placeholder="Razão social do emitente"
                />
              </div>
            )}
          />
          <Controller
            control={control}
            name="valueTaxes"
            render={({ field: { value, onChange } }) => (
              <div>
                <label className="text-sm font-semibold py-2">
                  Valor total dos tributos
                </label>
                <Input
                  onChange={(e) => {
                    onChange(moneyMask(e.target.value));
                  }}
                  value={value}
                  placeholder="Valor em R$"
                />
              </div>
            )}
          />
          <Controller
            control={control}
            name="valueLiquid"
            render={({ field: { value, onChange } }) => (
              <div>
                <label className="text-sm font-semibold py-2">
                  Valor líquido
                </label>
                <Input
                  onChange={(e) => {
                    onChange(moneyMask(e.target.value));
                  }}
                  value={value}
                  placeholder="Valor em R$"
                />
              </div>
            )}
          />
        </div>
      </SheetFooter>
    </div>
  );
}
