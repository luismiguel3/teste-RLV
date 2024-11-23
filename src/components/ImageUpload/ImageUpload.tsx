import axios from "axios";
import { FileUp } from "lucide-react";
import { useEffect, useState } from "react";
import { Progress } from "../ui/progress";

export default function ImageUpload({ image }: { image: File }) {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [uploadProgress, setUploadProgress] = useState<number>(0);

  useEffect(() => {
    setImagePreview(URL.createObjectURL(image));
    return () => URL.revokeObjectURL(imagePreview);
  }, [image]);

  useEffect(() => {
    if (image) {
      uploadImage();
    }
  }, [image]);

  async function uploadImage() {
    const formData = new FormData();
    formData.append("file", image);
    try {
      const { data } = await axios.post(`api/file`, formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
          console.log(
            `Upload progress: ${Math.round(
              (progressEvent.loaded / progressEvent.total) * 100
            )}%`
          );
          setUploadProgress(
            Math.round((progressEvent.loaded / progressEvent.total) * 100)
          );
        },
        onDownloadProgress: (progressEvent) => {
          console.log(
            `Download progress: ${Math.round(
              (progressEvent.loaded / progressEvent.total) * 100
            )}%`
          );
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

 const sizeToMb = (size: number) => {
    return (size / 1024 / 1024).toFixed(2);
  };

  return (
    <div>
      <div className="flex flex-row items-center gap-8 pl-4 py-4 border-4 border-opacity-60 rounded-md mb-3">
        <FileUp size={28} color="gray" className="opacity-60" />
        <div className="flex flex-col w-3/4">
          <span>{image.name}</span>
          <span>{sizeToMb(image.size)} MB  </span>
          <Progress value={uploadProgress} indicatorColor="bg-primary" />
        </div>
      </div>
      <span className="text-primary">Pré visualizar</span>
    </div>
  );
}
