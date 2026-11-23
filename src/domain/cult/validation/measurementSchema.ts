import { z } from 'zod';
const nullableNumber = z.number().finite().nullable();
const nullableString = z.string().nullable();
export const measurementSchema = z.object({
 id: z.string().min(1), memberId: z.string().min(1), measuredAt: z.string().datetime(), measuredAtRaw: z.string(),
 profileSnapshot: z.object({ name: z.string(), gender: nullableString, age: nullableNumber, heightCm: nullableNumber }), healthScore: nullableNumber,
 bodyComposition: z.object({ weightKg: nullableNumber, totalBodyWaterKg: nullableNumber, proteinMassKg: nullableNumber, fatMassKg: nullableNumber, mineralsKg: nullableNumber }),
 segmentalFat: z.object({ leftArmKg: nullableNumber, rightArmKg: nullableNumber, leftLegKg: nullableNumber, rightLegKg: nullableNumber, trunkKg: nullableNumber }),
 muscleBalance: z.object({ leftArmKg: nullableNumber, rightArmKg: nullableNumber, leftLegKg: nullableNumber, rightLegKg: nullableNumber, trunkKg: nullableNumber }),
 fatAnalysis: z.object({ fatRatioPercent: nullableNumber, fatMassKg: nullableNumber, visceralFat: nullableNumber, obesityLevel: nullableString }), bmi: z.object({ value: nullableNumber, normalRange: nullableString, classification: nullableString }),
 weightManagement: z.object({ standardWeightKg: nullableNumber, weightControlKg: nullableNumber, fatControlKg: nullableNumber, muscleControlKg: nullableNumber, bmrKcal: nullableNumber }),
 classifications: z.object({ bodyType: nullableString, muscleMassClassification: nullableString, bodyFatClassification: nullableString }), otherIndicators: z.object({ bodyAge: nullableNumber, subcutaneousFatMassKg: nullableNumber, healthEvaluation: nullableString, leanBodyMassKg: nullableNumber }),
 provenance: z.object({ sourceManufacturer: z.string(), sourceReport: z.string(), extractionMethod: z.string(), parserVersion: z.string(), manuallyModified: z.boolean(), importedAt: z.string().datetime() }), notes: nullableString, createdAt: z.string().datetime(), updatedAt: z.string().datetime()
});
