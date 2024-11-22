import { create } from "zustand";
import { Table } from "@tanstack/react-table";
import { DocumentTableType } from "../components/table/types";

type TableRef = {
  tableRef?: Table<DocumentTableType>;
  setTableRef: (ref: Table<DocumentTableType>) => void;
};

const useTable = create<TableRef>((set) => ({
  tableRef: null,
  setTableRef: (ref) => set({ tableRef: ref }),
}));

export default useTable;