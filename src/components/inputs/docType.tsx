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

export default function DocType() {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name="docType"
      render={({ field: { value, onChange } }) => (
        <Select onValueChange={onChange} defaultValue={value}>
          <SelectGroup>
            <SelectLabel>Tipo de documento</SelectLabel>
            <SelectTrigger>
              <SelectValue placeholder="Selecionar o tipo do documento">
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
