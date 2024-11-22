import {
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Info } from "lucide-react";
import CreationInterval from "../inputs/creationInterval";
import DocType from "../inputs/docType";
import Issuer from "../inputs/Issuer";
import ValueTaxes from "../inputs/ValueTaxes";
import ValueLiquid from "../inputs/valueLiquid";
import { Separator } from "../ui/separator";

export default function Filters() {
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
          <CreationInterval />
          <DocType />
          <Issuer />
          <ValueTaxes />
          <ValueLiquid />
        </div>
      </SheetFooter>
    </div>
  );
}
