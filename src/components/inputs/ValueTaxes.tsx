import { Input } from "../ui/input";
import { Controller, useFormContext } from "react-hook-form";
import moneyMask from "../../utils/MoneyMask";

export default function ValueTaxes() {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name="valueTaxes"
      render={({ field: { value, onChange } }) => (
        <div>
          <label className="text-sm font-semibold py-2">
            Valor total dos tributos
          </label>
          <Input
            onChange={(e) => {
              onChange(moneyMask(e.target.value));
            }}
            value={value}
            placeholder="Valor em R$"
          />
        </div>
      )}
    />
  );
}
