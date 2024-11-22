import { Controller, useFormContext } from "react-hook-form";
import { Input } from "../ui/input";

export default function Issuer() {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name="issuer"
      render={({ field: { value, onChange } }) => (
        <div>
          <label className="text-sm font-semibold py-2">Emitente</label>
          <Input
            onChange={(e) => onChange(e.target.value)}
            value={value}
            placeholder="Razão social do emitente"
          />
        </div>
      )}
    />
  );
}
