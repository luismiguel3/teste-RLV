import { FormProvider, useForm } from "react-hook-form";
import DocType from "../inputs/docType";
import { Button } from "../ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from "../ui/dialog";

export default function CreateModal() {
  const methods = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <DialogContent className="xs:max-w-full md:max-w-2xl lg:max-w-[700px]">
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <FormProvider {...methods}>
          <DialogHeader>
            <DialogTitle className="text-lg">Criar novo documento</DialogTitle>
            <DialogDescription>
              insira os dados necessários para criar
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 mt-4">
            <DocType />
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </FormProvider>
      </form>
    </DialogContent>
  );
}
