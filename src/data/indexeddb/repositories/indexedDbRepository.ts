import { openBodyLensDatabase } from '../database/bodyLensDatabase';
export interface Repository<T extends { id: string }> { getAll(): Promise<T[]>; get(id: string): Promise<T | undefined>; put(value: T): Promise<void>; delete(id: string): Promise<void> }
export class IndexedDbRepository<T extends { id: string }> implements Repository<T> {
 constructor(private readonly storeName: string) {}
 private async run<R>(mode: IDBTransactionMode, action: (store: IDBObjectStore) => IDBRequest<R>): Promise<R> {
  const db = await openBodyLensDatabase();
  return new Promise((resolve, reject) => { const tx = db.transaction(this.storeName, mode); const req = action(tx.objectStore(this.storeName)); req.onsuccess = () => resolve(req.result); req.onerror = () => reject(req.error ?? new Error('Local storage request failed.')); tx.oncomplete = () => db.close(); tx.onerror = () => reject(tx.error ?? new Error('Local storage transaction failed.')); });
 }
 getAll(): Promise<T[]> { return this.run('readonly', (store) => store.getAll()); }
 get(id: string): Promise<T | undefined> { return this.run('readonly', (store) => store.get(id)); }
 async put(value: T): Promise<void> { await this.run('readwrite', (store) => store.put(value)); }
 async delete(id: string): Promise<void> { await this.run('readwrite', (store) => store.delete(id)); }
}
