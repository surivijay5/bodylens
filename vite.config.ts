import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
export default defineConfig({ plugins: [react(), VitePWA({ registerType: 'autoUpdate', includeAssets: ['favicon.svg'], manifest: { name: 'BodyLens', short_name: 'BodyLens', description: 'Local body metrics analytics', theme_color: '#111317', background_color: '#111317', display: 'standalone', start_url: '/', icons: [{ src: '/favicon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' }] } })] });
