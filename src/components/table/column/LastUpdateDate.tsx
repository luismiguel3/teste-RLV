import { ColumnDef } from "@tanstack/react-table";
import { headerFilter } from "../headerSorting";
import { DocumentTableType } from "../types";

const LastUpdateDate: ColumnDef<DocumentTableType> =  {
  header: ({ column }) =>
    headerFilter({ column, title: "Ultima atualização" }),
  accessorKey: "last_update",
};

export default LastUpdateDate;
