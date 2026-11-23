import { describe, expect, it } from 'vitest'; import { difference } from './dashboardMetrics';
describe('difference',()=>{it('returns change from stored values',()=>expect(difference(66.2,67)).toBeCloseTo(-0.8));it('preserves missing values',()=>expect(difference(null,67)).toBeNull());});
