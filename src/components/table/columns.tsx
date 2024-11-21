"use client";
import { ColumnDef } from "@tanstack/react-table";
import { DocumentTableType } from "./types";

import TotalValueTributes from "./column/TotalValueTaxes";
import DocumentName from "./column/DocumentName";
import issuer from "./column/Issuer";
import LiquidValue from "./column/LiquidValue";
import CreationDate from "./column/CreationDate";
import LastUpdateDate from "./column/LastUpdateDate";
import Actions from "./column/Actions";
import CheckBox from "./column/CheckBox";

export const columns: ColumnDef<DocumentTableType>[] = [
  CheckBox,
  DocumentName,
  issuer,
  TotalValueTributes,
  LiquidValue,
  CreationDate,
  LastUpdateDate,
  Actions,
];
