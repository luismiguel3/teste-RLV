import { Controller, useFormContext } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export default function Origin() {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name="Origin"
      render={({ field: { value, onChange } }) => (
        <Select onValueChange={onChange} defaultValue={value}>
          <SelectGroup>
            <SelectLabel>Origem do documento</SelectLabel>
            <SelectTrigger>
              <SelectValue placeholder="Selecionar a origem do documento">
                {value}
              </SelectValue>
            </SelectTrigger>
          </SelectGroup>
          <SelectContent>
            <SelectItem value="NFe">NFe</SelectItem>
            <SelectItem value="CTe">CTe</SelectItem>
            <SelectItem value="MDFe">MDFe</SelectItem>
          </SelectContent>
        </Select>
      )}
    />
  );
}
