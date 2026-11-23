import type { ExtractedDocument, ReportDetector } from '../parser/contracts';
export class CultReportDetector implements ReportDetector { supports(document: ExtractedDocument): boolean { return /cult\s*(smart\s*)?(scale|health)|cult\s*fit/i.test(document.text); } }
