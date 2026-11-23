import type { Measurement } from '../../domain/cult/types/measurement';
import { MeasurementRepository } from '../../data/indexeddb/repositories/measurementRepository';
export class MeasurementService {
 constructor(private readonly repository = new MeasurementRepository()) {}
 list(memberId?: string): Promise<Measurement[]> { return memberId ? this.repository.byMember(memberId) : this.repository.getAll(); }
 get(id: string): Promise<Measurement | undefined> { return this.repository.get(id); }
 save(measurement: Measurement): Promise<void> { return this.repository.put(measurement); }
 remove(id: string): Promise<void> { return this.repository.delete(id); }
}
