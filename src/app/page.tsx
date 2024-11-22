"use client";
import AddDocument from "@/app/AddDocument";
import { columns } from "@/components/table/columns";
import { Separator } from "@/components/ui/separator";
import useTable from "@/contexts/TableRef";

import Filter from "@/app/Filter";
import DocumentTable from "@/components/table";
import {
  ColumnFiltersState,
  SortingState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useLayoutEffect, useState } from "react";
import Origin from "./Origin";
import Search from "./Search";
import Type from "./Type";

const data = [
  {
    doc_id: 100,
    doc_name: "TESTPI",
    Emitente: "AAAAAAAAA",
    valor_tributo_total: 100,
    valor_liquido: 100,
    data_criacao: "01/01/2021",
    last_update: "01/01/2021",
  },
  {
    doc_id: 2,
    doc_name: "Nota Fiscal",
    Emitente: "OPA ",
    valor_tributo_total: 100,
    valor_liquido: 100,
    data_criacao: "01/01/2021",
    last_update: "01/01/2021",
  },
  {
    doc_id: 3,
    doc_name: "Nota Fiscal",
    Emitente: "EAE",
    valor_tributo_total: 100,
    valor_liquido: 100,
    data_criacao: "01/01/2021",
    last_update: "01/01/2021",
  },
  {
    doc_id: 4,
    doc_name: "Nota Fiscal",
    Emitente: "ZZZZZ",
    valor_tributo_total: 100,
    valor_liquido: 100,
    data_criacao: "01/01/2021",
    last_update: "01/01/2021",
  },
  {
    doc_id: 454510,
    doc_name: "Nota Fiscal",
    Emitente: "Empresa X",
    valor_tributo_total: 100,
    valor_liquido: 100,
    data_criacao: "01/01/2021",
    last_update: "01/01/2021",
  },
  {
    doc_id: 6,
    doc_name: "ZEBRA",
    Emitente: "Empresa X",
    valor_tributo_total: 100,
    valor_liquido: 100,
    data_criacao: "01/01/2021",
    last_update: "01/01/2021",
  },
  {
    doc_id: 7,
    doc_name: "Nota Fiscal",
    Emitente: "Empresa X",
    valor_tributo_total: 100,
    valor_liquido: 100,
    data_criacao: "01/01/2021",
    last_update: "01/01/2021",
  },
  {
    doc_id: 8,
    doc_name: "Nota Fiscal",
    Emitente: "Empresa X",
    valor_tributo_total: 100,
    valor_liquido: 100,
    data_criacao: "01/01/2021",
    last_update: "01/01/2021",
  },
  {
    doc_id: 9,
    doc_name: "Nota Fiscal",
    Emitente: "Empresa X",
    valor_tributo_total: 100,
    valor_liquido: 100,
    data_criacao: "01/01/2021",
    last_update: "01/01/2021",
  },
  {
    doc_id: 10,
    doc_name: "Nota Fiscal",
    Emitente: "Empresa X",
    valor_tributo_total: 100,
    valor_liquido: 100,
    data_criacao: "01/01/2021",
    last_update: "01/01/2021",
  },
  {
    doc_id: 11,
    doc_name: "Nota Fiscal",
    Emitente: "Empresa X",
    valor_tributo_total: 100,
    valor_liquido: 100,
    data_criacao: "01/01/2021",
    last_update: "01/01/2021",
  },
  {
    doc_id: 12,
    doc_name: "Nota Fiscal",
    Emitente: "Empresa X",
    valor_tributo_total: 100,
    valor_liquido: 100,
    data_criacao: "01/11/2024",
    last_update: "01/01/2021",
  },
  {
    doc_id: 13,
    doc_name: "Nota Fiscal",
    Emitente: "Empresa X",
    valor_tributo_total: 100,
    valor_liquido: 100,
    data_criacao: "01/01/2021",
    last_update: "01/01/2023",
  },
];

export default function Home() {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [nameFilter, setNameFilter] = useState<ColumnFiltersState>([]);
  const { setTableRef, tableRef } = useTable();

  const table = useReactTable({
    columns: columns,
    data: data,

    getPaginationRowModel: getPaginationRowModel(),
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnFiltersChange: setNameFilter,
    onStateChange(updater) {
      setTableRef(table);
    },
    state: {
      sorting,
      columnFilters: nameFilter,
    },
  });

  useLayoutEffect(() => {
    setTableRef(table);
  }, []);

  if (!tableRef) {
    return <></>;
  }

  return (
    <div className="mt-8 px-0 md:px-4">
      <div className="flex justify-between flex-row flex-wrap xs:justify-center md:justify-between w-full gap-4">
        <div>
          <h2 className="text-2xl font-semibold ">Documentos</h2>
          <h3 className="min-[320px]:text-sm min-[768px]:text-lg">
            Crie, gerencie e visualize os documentos
          </h3>
        </div>
        <div className="items-center gap-4 flex xs:flex-col md:flex-row xs:w-full md:w-auto">
          <Search />
          <Filter />
        </div>
      </div>

      <div className="flex justify-between flex-row grid-cols-2 mt-5 items-center">
        <div className="grid md:grid-cols-2 xs:grid-cols-1  md:w-1/2 xs:w-full gap-4">
          <Origin />
          <Type />
        </div>
        <AddDocument table={table} />
      </div>
      <Separator className="mt-5" />
      <DocumentTable />
    </div>
  );
}
