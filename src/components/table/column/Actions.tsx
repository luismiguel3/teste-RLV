import { ColumnDef } from "@tanstack/react-table";
import { DocumentTableType } from "../types";

const Actions: ColumnDef<DocumentTableType> =  {
  header: "",
  accessorKey: "actions",
  cell: () => {
    return (
      <div className="flex-row flex items-center gap-4">
        <button className="btn btn-primary">Editar</button>
        <button className="btn btn-danger">Excluir</button>
      </div>
    );
  },
}

export default Actions;