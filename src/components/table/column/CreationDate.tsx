import { ColumnDef } from "@tanstack/react-table";
import { headerFilter } from "../headerSorting";
import { DocumentTableType } from "../types";
import { isWithinInterval, parse } from "date-fns";

const CreationDate: ColumnDef<DocumentTableType> = {
  header: ({ column }) => headerFilter({ column, title: "Data de criação" }),
  accessorKey: "data_criacao",
  filterFn: (row, id, filterValue) => {

    const dataTable: string = row.getValue(id);
    const value = isWithinInterval(parse(dataTable, "dd/MM/yyyy", new Date()), {
      start: parse(filterValue.from, "dd/MM/yyyy", new Date()),
      end: parse(filterValue.to, "dd/MM/yyyy", new Date()),
    });

    return value;
  },
};

export default CreationDate;
