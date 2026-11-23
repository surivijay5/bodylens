import { createBrowserRouter, Navigate } from 'react-router-dom';
import { AppShell } from '../layout/AppShell';
import { DashboardPage } from '../../features/dashboard/DashboardPage';
import { HistoryPage } from '../../features/measurements/HistoryPage';
import { TrendsPage } from '../../features/trends/TrendsPage';
import { ComparePage } from '../../features/comparison/ComparePage';
import { ImportPage } from '../../features/import/ImportPage';
import { SettingsPage } from '../../features/settings/SettingsPage';
import { MeasurementDetailPage } from '../../features/measurements/MeasurementDetailPage';
export const router = createBrowserRouter([{ path: '/', element: <AppShell />, children: [
 { index: true, element: <Navigate to="/dashboard" replace /> }, { path: 'dashboard', element: <DashboardPage /> }, { path: 'history', element: <HistoryPage /> }, { path: 'trends', element: <TrendsPage /> }, { path: 'compare', element: <ComparePage /> }, { path: 'import', element: <ImportPage /> }, { path: 'settings', element: <SettingsPage /> }, { path: 'measurements/:measurementId', element: <MeasurementDetailPage /> },
]}]);
