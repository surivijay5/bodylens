import { useEffect, useState } from 'react';
import type { Measurement } from '../../domain/cult/types/measurement';
import { MeasurementService } from './measurementService';
const service = new MeasurementService();
export function useMeasurements() { const [items,setItems] = useState<Measurement[] | null>(null); const [error,setError] = useState<string | null>(null); useEffect(() => { let mounted=true; service.list().then((data) => { if(mounted)setItems(data.sort((a,b)=>b.measuredAt.localeCompare(a.measuredAt))); }).catch(() => { if(mounted){setError('Measurements are stored in this browser. Check that local storage is available.');setItems([]);} }); return () => {mounted=false;}; }, []); return {items,error}; }
