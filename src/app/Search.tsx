import { Input } from "@/components/ui/input";
import { Search as SearchIcon } from "lucide-react";
import { Table } from "@tanstack/react-table";
import { DocumentTableType } from "@/components/table/types";
import useTable  from "@/contexts/TableRef";


export default function Search() {

  const { tableRef: table} = useTable()
  console.log("table search")

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
