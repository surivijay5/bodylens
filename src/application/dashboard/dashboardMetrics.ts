import type { Measurement } from '../../domain/cult/types/measurement';
export interface MetricValue { label: string; value: number | null; unit: string }
export function latestMetrics(measurement: Measurement): MetricValue[] { return [
 { label: 'Weight', value: measurement.bodyComposition.weightKg, unit: 'kg' },
 { label: 'Body Fat', value: measurement.fatAnalysis.fatRatioPercent, unit: '%' },
 { label: 'Fat Mass', value: measurement.fatAnalysis.fatMassKg, unit: 'kg' },
 { label: 'Visceral Fat', value: measurement.fatAnalysis.visceralFat, unit: '' },
 { label: 'BMI', value: measurement.bmi.value, unit: '' },
]; }
export function difference(current: number | null, previous: number | null): number | null { return current === null || previous === null ? null : current - previous; }
