import { Filter } from "lucide-react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import SheetFilters from "../components/filter";
import { Button } from "../components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "../components/ui/sheet";
import useTable from "../contexts/TableRef";

type Inputs = {
  creationInterval: {
    from: Date;
    to: Date;
  };
  docType: string;
  issuer: string;
  valueTaxes: string;
  valueLiquid: string;
};

export default function SearchFilter() {
  const table = useTable((state) => state.tableRef);

  const methods = useForm<Inputs>({
    defaultValues: {
      creationInterval: {
        from: null,
        to: null,
      },
      docType: "",
      issuer: "",
      valueTaxes: "",
      valueLiquid: "",
    },
  });

  const { reset } = methods;

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const { creationInterval, docType, issuer, valueTaxes, valueLiquid } = data;

    table.setColumnFilters([
      {
        id: "data_criacao",
        value: {
          from: format(creationInterval.from, "dd/MM/yyyy"),
          to: format(creationInterval.to, "dd/MM/yyyy"),
        },
      },
      {
        id: "doc_name",
        value: docType,
      },
      {
        id: "Emitente",
        value: issuer,
      },
      {
        id: "valor_tributo_total",
        value: valueTaxes,
      },
      {
        id: "Valor liquido",
        value: valueLiquid,
      },
    ]);
  };

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
        <SheetContent className="overflow-scroll">
          <FormProvider {...methods}>
            <form
              onSubmit={methods.handleSubmit(onSubmit, (errors) => {
                console.log(errors);
              })}
              className="w-full gap-8 flex flex-col">
              <SheetFilters />
              <div className="flex justify-end mt-4 gap-4">
                <Button
                  variant="outline"
                  type="reset"
                  onClick={() => {
                    reset();
                    table.setColumnFilters([]);
                  }}>
                  Limpar
                </Button>
                <SheetClose asChild>
                  <Button variant="primary" type="submit">
                    Aplicar Filtro
                  </Button>
                </SheetClose>
              </div>
            </form>
          </FormProvider>
        </SheetContent>
      </Sheet>
    </div>
  );
}
