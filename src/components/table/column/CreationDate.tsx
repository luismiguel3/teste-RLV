import { ColumnDef } from "@tanstack/react-table";
import { headerFilter } from "../headerSorting";
import { DocumentTableType } from "../types";

const CreationDate: ColumnDef<DocumentTableType> =  {
  header: ({ column }) => headerFilter({ column, title: "Data de criação" }),
  accessorKey: "data_criacao",
};

export default CreationDate;