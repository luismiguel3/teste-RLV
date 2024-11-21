import { ColumnDef } from "@tanstack/react-table";
import { headerFilter } from "../headerSorting";
import { DocumentTableType } from "../types";

const issuer: ColumnDef<DocumentTableType> = {
  header: ({ column }) => headerFilter({ column, title: "Emitente" }),
  accessorKey: "Emitente",
};

export default issuer;

