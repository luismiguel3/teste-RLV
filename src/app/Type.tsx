import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

export default function Type() {
  return (
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
  );
}
