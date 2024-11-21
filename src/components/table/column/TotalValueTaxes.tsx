import { ColumnDef } from "@tanstack/react-table";
import { headerFilter } from "../headerSorting";
import { DocumentTableType } from "../types";


const TotalValueTributes: ColumnDef<DocumentTableType> = {
  accessorKey: "valor_tributo_total",
  header: ({ column }) => headerFilter({ column, title: "Valor total dos tributos" }),
  cell: (row) => {
    const valor = parseFloat(row.row.original.valor_tributo_total.toString());
    return valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  },
};

export default TotalValueTributes;
