import { ColumnDef } from "@tanstack/react-table";
import { FileText } from "lucide-react";
import { headerFilter } from "../headerSorting";
import { DocumentTableType } from "../types";

const DocumentName: ColumnDef<DocumentTableType> = {
  header: ({ column }) => headerFilter({ column, title: "Nome do Documento" }),
  accessorKey: "doc_name",
  cell: ({ row }) => {
    return (
      <div className="flex-row flex items-center gap-4">
        <FileText color="green" size={30} />
        <div className="flex flex-col font-semibold">
          <span className="opacity-60">Cód. {row.original.doc_id}</span>
          <span className="font-semibold">{row.original.doc_name}</span>
        </div>
      </div>
    );
  },
  sortingFn: (a, b) => a.original.doc_id - b.original.doc_id,
};

export default DocumentName;
