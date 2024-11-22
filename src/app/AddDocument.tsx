import { DocumentTableType } from "@/components/table/types";
import { Button } from "@/components/ui/button";
import { Plus } from "@geist-ui/icons";
import { Table } from "@tanstack/react-table";

import CreateModal from "@/components/modal";
import {
  Dialog,
  DialogTrigger,
} from "../components/ui/dialog";

export default function DocumentHeader() {
  return (
    <Dialog>
      <DialogTrigger asChild className="xs:hidden md:flex mt-6">
        <Button variant="primary">
          <Plus color="white" />
          Adicionar Documento
        </Button>
      </DialogTrigger>
      <CreateModal />
    </Dialog>
  );
}
