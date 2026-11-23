export interface ExtractedDocument { text: string; pageCount: number }
export interface PdfExtractor { extract(file: File): Promise<ExtractedDocument> }
export interface ReportDetector { supports(document: ExtractedDocument): boolean }
export interface ManufacturerParser<T> { readonly manufacturer: string; parse(document: ExtractedDocument): T }
export class PdfJsExtractor implements PdfExtractor {
 async extract(file: File): Promise<ExtractedDocument> {
  const pdfjs = await import('pdfjs-dist');
  pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.mjs', import.meta.url).toString();
  const pdf = await pdfjs.getDocument({ data: await file.arrayBuffer() }).promise;
  const pages: string[] = [];
  for (let pageNo = 1; pageNo <= pdf.numPages; pageNo += 1) { const page = await pdf.getPage(pageNo); const content = await page.getTextContent(); pages.push(content.items.map((item) => ('str' in item ? item.str : '')).join(' ')); }
  return { text: pages.join('\n'), pageCount: pdf.numPages };
 }
}
