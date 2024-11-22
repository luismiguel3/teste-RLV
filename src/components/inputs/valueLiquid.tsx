import { Controller, useFormContext } from "react-hook-form";
import { Input } from "../ui/input";
import moneyMask  from "../../utils/MoneyMask";


export default function ValueLiquid() {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name="valueLiquid"
      render={({ field: { value, onChange } }) => (
        <div>
          <label className="text-sm font-semibold py-2">
            Valor líquido
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