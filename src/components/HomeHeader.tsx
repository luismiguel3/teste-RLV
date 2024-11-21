import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Filter, Search } from "@geist-ui/icons";
import { Table } from "@tanstack/react-table";
import { DocumentTableType } from "@/components/table/types";
import { addDays, format } from "date-fns";
import {
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from "./ui/sheet";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "./ui/separator";
import { CalendarIcon, Info } from "lucide-react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Calendar } from "./ui/calendar";
import { cn } from "@/lib/utils";

type Inputs = {
  creationInterval: {
    from: Date;
    to: Date;
  };
  docType: string;
  issuer: string;
  valueTaxes: number;
  valueLiquid: number;
};

export default function DocumentHeader({
  table,
}: {
  table: Table<DocumentTableType>;
}) {
  const { handleSubmit, control } = useForm<Inputs>({
    initialValues: {
      creationInterval: {
        from: new Date(),
        to: addDays(new Date(), 7),
      },
      docType: "",
      issuer: "",
      valueTaxes: 0,
      valueLiquid: 0,
    },
  });
  const onSubmit: SubmitHandler<Inputs> = (data) =>
    console.log({
      from: format(data.creationInterval.from, "dd/MM/yyyy"),
      to: format(data.creationInterval.to, "dd/MM/yyyy"),
    });

  return (
    <div className="flex justify-between flex-row flex-wrap xs:justify-center md:justify-between w-full gap-4">
      <div>
        <h2 className="text-2xl font-semibold ">Documentos</h2>
        <h3 className="min-[320px]:text-sm min-[768px]:text-lg">
          Crie, gerencie e visualize os documentos
        </h3>
      </div>
      <div className="items-center gap-4 flex xs:flex-col md:flex-row xs:w-full md:w-auto">
        <div className="flex-grow xs:w-full md:w-auto ">
          <Input
            value={
              (table.getColumn("doc_name")?.getFilterValue() as string) ?? ""
            }
            onChange={(event) =>
              table.getColumn("doc_name")?.setFilterValue(event.target.value)
            }
            placeholder="Buscar Documentos"
            rightIcon={<Search />}
          />
        </div>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            className="font-semibold xs:w-full md:w-auto  ">
            <Filter color="black" />
            Filtrar
          </Button>
        </SheetTrigger>
      </div>
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

        <SheetFooter>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full gap-8 flex flex-col">
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
          </form>
        </SheetFooter>
      </SheetContent>
    </div>
  );
}
