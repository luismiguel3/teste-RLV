import { FormProvider, useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Plus } from "@geist-ui/icons";

import CreateModal from "@/components/modal/Create";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "../components/ui/dialog";

export default function DocumentHeader() {
  const methods = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Dialog onOpenChange={(open) => !open && methods.reset()}>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit, (errors) => {
            console.log(errors);
          })}>
          <DialogTrigger asChild className="xs:hidden md:flex mt-6">
            <Button variant="primary">
              <Plus color="white" />
              Adicionar Documento
            </Button>
          </DialogTrigger>
          <DialogContent className="max-h-screen overflow-y-scroll" >
            <CreateModal />
            <Button type="submit">Save changes</Button>
          </DialogContent>
        </form>
      </FormProvider>
    </Dialog>
  );
}
