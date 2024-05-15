import react from '@vitejs/plugin-react'
import url from 'node:url'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@assets': url.fileURLToPath(new URL('./assets', import.meta.url)),
			'@pages': url.fileURLToPath(new URL('./src/pages', import.meta.url)),
			'@ui': url.fileURLToPath(new URL('./src/ui', import.meta.url)),
			'@utils': url.fileURLToPath(new URL('./src/utils', import.meta.url)),
			'@helpers': url.fileURLToPath(new URL('./src/helpers', import.meta.url)),
			'@hooks': url.fileURLToPath(new URL('./src/hooks', import.meta.url)),
			'@components': url.fileURLToPath(new URL('./src/components', import.meta.url))
		}
	}
})
