import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

export default function Origin() {
  return (
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
  );
}
