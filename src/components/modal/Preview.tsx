// import ReactPdf,{ PDFViewer, render } from '@react-pdf/renderer';
"use client";
import { DialogContent, DialogTitle } from "../ui/dialog";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function Preview() {
  return (
    <DialogContent className="sm:max-w-[900px] lg:h-[500px] xl:h-[550px] 2xl:h-[850px]">
      <DialogTitle>Pré visualização do arquivo</DialogTitle>
      <object
        data={"https://s28.q4cdn.com/392171258/files/doc_downloads/test.pdf"}
        type="application/pdf"
        width="100%"
        height=""
        className="2xl:h-[750px] lg:h-[450px]">
        <Document file="https://s28.q4cdn.com/392171258/files/doc_downloads/test.pdf">
          <Page pageNumber={1} />
        </Document>
      </object>
    </DialogContent>
  );
}
