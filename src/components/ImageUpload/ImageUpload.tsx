import axios from "axios";
import { useEffect, useState } from "react";

export default function ImageUpload({ image }: { image: File }) {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

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
      const apiUrl = process.env.NODE_ENV === 'development'
        ? 'http://localhost:3000'
        : process.env.NEXT_PUBLIC_API_URL;

      const { data } = await axios.post(
        `${apiUrl}/api/file`,
        formData,
        {
          headers: {
            "content-type": "multipart/form-data",
          },
          onUploadProgress: (progressEvent) => {
            console.log(
              `Upload progress: ${Math.round(
                (progressEvent.loaded / progressEvent.total) * 100
              )}%`
            );
          },
          onDownloadProgress: (progressEvent) => {
            console.log(
              `Download progress: ${Math.round(
                (progressEvent.loaded / progressEvent.total) * 100
              )}%`
            );
          },
        }
      );

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <img
        src={imagePreview}
        alt="preview"
        className="w-full h-full object1-cover"
      />
    </div>
  );
}