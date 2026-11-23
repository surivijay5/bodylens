import type { ExtractedDocument, ManufacturerParser } from './contracts';
/** Extraction is deliberately fail-closed until report fixtures establish verified field mappings. */
export class CultParser implements ManufacturerParser<never> {
 readonly manufacturer = 'Cult';
 parse(document: ExtractedDocument): never { void document; throw new Error('Cult field mapping requires a verified report fixture.'); }
}
