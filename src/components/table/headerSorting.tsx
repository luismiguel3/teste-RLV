import { Column } from "@tanstack/react-table";
import { ChevronDown, ChevronUp, ChevronsUpDown } from "lucide-react";
import { DocumentTableType } from "./types";

type HeaderFilterProps = {
  column: Column<DocumentTableType, any>;
  title: string;
};

export const headerFilter = ({ column, title }: HeaderFilterProps) => {
  return (
    <div>
      <button
        className="flex-row flex items-center gap-4"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        <span>{title}</span>
        {
          {
            asc: <ChevronUp size={20} />,
            desc: <ChevronDown size={20} />,
            false: <ChevronsUpDown size={20} />,
          }[column.getIsSorted() || "false"]
        }
      </button>
    </div>
  );
};
