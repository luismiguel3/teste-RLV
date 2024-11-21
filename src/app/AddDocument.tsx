import { DocumentTableType } from "@/components/table/types";
import { Button } from "@/components/ui/button";
import { Plus } from "@geist-ui/icons";
import { Table } from "@tanstack/react-table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import Origin from "./Origin";
import Type from "./Type";

export default function DocumentHeader({
  table,
}: {
  table: Table<DocumentTableType>;
}) {
  return (
    <div className="xs:hidden md:flex mt-6">
      <Button variant="primary">
        <Plus color="white" />
        Adicionar Documento
      </Button>
    </div>
  );
}
