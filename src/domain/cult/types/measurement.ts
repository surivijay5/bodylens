export interface Measurement {
  id: string; memberId: string; measuredAt: string; measuredAtRaw: string;
  profileSnapshot: { name: string; gender: string | null; age: number | null; heightCm: number | null };
  healthScore: number | null;
  bodyComposition: { weightKg: number | null; totalBodyWaterKg: number | null; proteinMassKg: number | null; fatMassKg: number | null; mineralsKg: number | null };
  segmentalFat: { leftArmKg: number | null; rightArmKg: number | null; leftLegKg: number | null; rightLegKg: number | null; trunkKg: number | null };
  muscleBalance: { leftArmKg: number | null; rightArmKg: number | null; leftLegKg: number | null; rightLegKg: number | null; trunkKg: number | null };
  fatAnalysis: { fatRatioPercent: number | null; fatMassKg: number | null; visceralFat: number | null; obesityLevel: string | null };
  bmi: { value: number | null; normalRange: string | null; classification: string | null };
  weightManagement: { standardWeightKg: number | null; weightControlKg: number | null; fatControlKg: number | null; muscleControlKg: number | null; bmrKcal: number | null };
  classifications: { bodyType: string | null; muscleMassClassification: string | null; bodyFatClassification: string | null };
  otherIndicators: { bodyAge: number | null; subcutaneousFatMassKg: number | null; healthEvaluation: string | null; leanBodyMassKg: number | null };
  provenance: { sourceManufacturer: string; sourceReport: string; extractionMethod: string; parserVersion: string; manuallyModified: boolean; importedAt: string };
  notes: string | null; createdAt: string; updatedAt: string;
}
