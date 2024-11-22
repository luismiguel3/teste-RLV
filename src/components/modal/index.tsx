import React, { useCallback, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { FileUp } from "lucide-react";
import DocType from "../inputs/docType";
import { Button } from "../ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import Origin from "../inputs/Origin";
import { useDropzone } from "react-dropzone";
import ImageUpload from "../ImageUpload/ImageUpload";

export default function CreateModal() {
  const methods = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const [image, setImage] = useState<File>(null);

  const onDrop = useCallback((acceptedFiles) => {
    setImage(acceptedFiles[0]);
  }, []);
  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDrop,
  });

  return (
    <DialogContent className="xs:max-w-full md:max-w-2xl lg:max-w-[700px] overflow-y-scroll max-h-screen">
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <FormProvider {...methods}>
          <DialogHeader>
            <DialogTitle className="text-lg">Criar novo documento</DialogTitle>
            <DialogDescription>
              insira os dados necessários para criar
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 mt-4">
            <Origin />
            <DocType />
          </div>
          <div
            {...getRootProps({
              className: "border-2 py-20 my-4 border-dashed border-green-500",
              onClick: (event) => event.stopPropagation(),
            })}>
            <input {...getInputProps()} />
            {isDragActive ? (
              <p>Drop the files here ...</p>
            ) : (
              <div className="flex flex-col items-center gap-4">
                <FileUp size={40} color="#22c55e" />
                <span>
                  Arraste e solte aquui ou selecione o arquivo para upload
                </span>
                <Button onClick={open}>Procurar e Selecionar arquivo</Button>
                <span className="opacity-60  text-sm">
                  Tamanho máximo: 10MB
                </span>
              </div>
            )}
          </div>
          {image && <ImageUpload image={image} />}
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </FormProvider>
      </form>
    </DialogContent>
  );
}
