import {
  SelectTrigger,
  Select,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Plus } from "@geist-ui/icons";
import { Button } from "@/components/ui/button";

export default function Filters() {
  return (
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
  );
}
