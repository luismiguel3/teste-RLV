import { FormProvider, useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Plus } from "@geist-ui/icons";

import CreateModal from "@/components/modal/Create";
import { Dialog, DialogTrigger } from "../components/ui/dialog";
import Preview from "@/components/modal/Preview";
import useModalPreview from "@/contexts/Modal";

export default function DocumentHeader() {
  const methods = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const { fileUrl } = useModalPreview();

  return (
    <Dialog onOpenChange={(open) => !open && methods.reset()}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <FormProvider {...methods}>
          <DialogTrigger asChild className="xs:hidden md:flex mt-6">
            <Button variant="primary">
              <Plus color="white" />
              Adicionar Documento
            </Button>
          </DialogTrigger>
          {/* <CreateModal />
          <Preview /> */}
          {fileUrl ? <Preview /> : <CreateModal />}


        </FormProvider>
      </form>
    </Dialog>
  );
}
