import { create } from "zustand";


type ModalPreviewType = {
  fileUrl: string | null;
  setFileUrl: (fileUrl: string | null) => void;
};

const useModalPreview = create<ModalPreviewType>((set) => ({
  fileUrl: null,
  setFileUrl: (fileUrl: string | null) => set({ fileUrl }),
}));

export default useModalPreview;
