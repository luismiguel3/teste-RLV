import { Input } from "@/components/ui/input";
import { Search as SearchIcon } from "lucide-react";
import { Table } from "@tanstack/react-table";
import { DocumentTableType } from "@/components/table/types";


export default function Search({ table }: { table: Table<DocumentTableType>;}) {
  return (
    <div className="flex-grow xs:w-full md:w-auto">
      <Input
        value={(table.getColumn("doc_name")?.getFilterValue() as string) ?? ""}
        onChange={(event) =>
          table.getColumn("doc_name")?.setFilterValue(event.target.value)
        }
        placeholder="Buscar Documentos"
        rightIcon={<SearchIcon />}
      />
    </div>
  );
}
