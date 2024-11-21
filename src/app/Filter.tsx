import { addDays, format } from "date-fns";
import { Filter, Search } from "lucide-react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import SheetFilters from "../components/Filters";
import { Button } from "../components/ui/button";
import { Sheet, SheetTrigger } from "../components/ui/sheet";
import { Table } from "@tanstack/react-table";
import { DocumentTableType } from "../components/table/types";

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

export default function SearchFilter({ table }:{ table: Table<DocumentTableType>;}) {
  const methods = useForm<Inputs>({
    defaultValues: {
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
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            className="font-semibold xs:w-full md:w-auto  ">
            <Filter color="black" />
            Filtrar
          </Button>
        </SheetTrigger>
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className="w-full gap-8 flex flex-col">
            <SheetFilters />
          </form>
        </FormProvider>
      </Sheet>
    </div>
  );
}
