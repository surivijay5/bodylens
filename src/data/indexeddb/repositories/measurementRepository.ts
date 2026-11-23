import type { Measurement } from '../../../domain/cult/types/measurement';
import { IndexedDbRepository } from './indexedDbRepository';
export class MeasurementRepository extends IndexedDbRepository<Measurement> { constructor() { super('measurements'); } async byMember(memberId: string): Promise<Measurement[]> { return (await this.getAll()).filter((item) => item.memberId === memberId).sort((a, b) => b.measuredAt.localeCompare(a.measuredAt)); } }
