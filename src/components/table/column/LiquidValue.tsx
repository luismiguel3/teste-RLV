import { ColumnDef } from "@tanstack/react-table";
import { headerFilter } from "../headerSorting";
import { DocumentTableType } from "../types";


const LiquidValue: ColumnDef<DocumentTableType> = {
  header: ({ column }) => headerFilter({ column, title: "Valor liquido" }),
  cell: (row) => {
    const valor = parseFloat(row.row.original.valor_liquido.toString());
    return valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  },
  accessorKey: "Valor liquido",
};

export default LiquidValue;