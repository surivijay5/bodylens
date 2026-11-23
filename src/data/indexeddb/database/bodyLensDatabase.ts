const DATABASE_NAME = 'bodylens';
const DATABASE_VERSION = 1;
export function openBodyLensDatabase(): Promise<IDBDatabase> {
 return new Promise((resolve, reject) => {
  const request = indexedDB.open(DATABASE_NAME, DATABASE_VERSION);
  request.onupgradeneeded = () => {
   const db = request.result;
   if (!db.objectStoreNames.contains('members')) { const store = db.createObjectStore('members', { keyPath: 'id' }); store.createIndex('id', 'id'); }
   if (!db.objectStoreNames.contains('measurements')) { const store = db.createObjectStore('measurements', { keyPath: 'id' }); store.createIndex('id', 'id'); store.createIndex('memberId', 'memberId'); store.createIndex('measuredAt', 'measuredAt'); store.createIndex('[memberId, measuredAt]', ['memberId', 'measuredAt']); }
   if (!db.objectStoreNames.contains('importHistory')) { const store = db.createObjectStore('importHistory', { keyPath: 'id' }); store.createIndex('createdAt', 'createdAt'); }
   if (!db.objectStoreNames.contains('preferences')) db.createObjectStore('preferences', { keyPath: 'key' });
  };
  request.onsuccess = () => resolve(request.result); request.onerror = () => reject(request.error ?? new Error('Could not open local storage.'));
 });
}
