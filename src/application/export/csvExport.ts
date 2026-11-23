import type { Measurement } from '../../domain/cult/types/measurement';
export function measurementsToCsv(items: Measurement[]): string {
 const headers = ['id','memberId','measuredAt','name','weightKg','fatRatioPercent','fatMassKg','visceralFat','bmi'];
 const rows = items.map((item) => [item.id,item.memberId,item.measuredAt,item.profileSnapshot.name,item.bodyComposition.weightKg,item.fatAnalysis.fatRatioPercent,item.fatAnalysis.fatMassKg,item.fatAnalysis.visceralFat,item.bmi.value]);
 return [headers, ...rows].map((row) => row.map((value) => `"${String(value ?? '').replaceAll('"','""')}"`).join(',')).join('\n');
}
