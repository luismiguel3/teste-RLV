"use client";
import DocumentHeader from "@/components/HomeHeader";
import { columns } from "@/components/table/columns";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

import { Plus } from "@geist-ui/icons";
import {
  ColumnFiltersState,
  SortingState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import DocumentTable from "@/components/table";
import { useState } from "react";
import { Sheet } from "@/components/ui/sheet";

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
    data_criacao: "01/01/2021",
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

  const table = useReactTable({
    columns: columns,
    data: data,

    getPaginationRowModel: getPaginationRowModel(),
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnFiltersChange: setNameFilter,
    state: {
      sorting,
      columnFilters: nameFilter,
    },
  });

  return (
    <div className="mt-8 px-0 md:px-4">
      <Sheet>
        <DocumentHeader table={table} />
      </Sheet>
      <Separator className="mt-5" />
      <div className="flex justify-between flex-row grid-cols-2 mt-5 items-center">
        <div className="grid md:grid-cols-2 xs:grid-cols-1  md:w-1/2 xs:w-full gap-4">
          <div className="xs:w-full md:w-auto">
            <label className="font-semibold">Origem do documento</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Digitalizado" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="xs:w-full md:w-auto">
            <label className="font-semibold">Tipo do documento</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Buscar Documentos" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="xs:hidden md:flex mt-6">
          <Button variant="primary">
            <Plus color="white" />
            Adicionar Documento
          </Button>
        </div>
      </div>
      <DocumentTable table={table} />
    </div>
  );
}
