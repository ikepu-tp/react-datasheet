import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [react()],
	build: {
		lib: {
			entry: {
				DatasheetCell: resolve(__dirname, 'src/DatasheetCell.tsx'),
				DatasheetContext: resolve(__dirname, 'src/DatasheetContext.tsx'),
				DatasheetRow: resolve(__dirname, 'src/DatasheetRow.tsx'),
				DatasheetSheet: resolve(__dirname, 'src/DatasheetSheet.tsx'),
				DatasheetProvider: resolve(__dirname, 'src/DatasheetProvider.tsx'),
				DatasheetProvider: resolve(__dirname, 'src/DatasheetProvider.tsx'),
				DefaultTheme: resolve(__dirname, 'src/DefaultTheme.tsx'),
				useDatasheet: resolve(__dirname, 'src/useDatasheet.tsx'),
			},
			name: '@ikepu-tp/react-datasheet',
			fileName: (format, entryName) => {
				return `${format}/${entryName ? `${entryName}/` : ''}index.js`;
			},
			formats: ['cjs', 'esm'],
		},
		rollupOptions: {
			external: ['react', 'react-dom'],
			output: {
				globals: {
					react: 'React',
				},
			},
		},
		outDir: './dist',
	},
	server: {
		open: false,
	},
});
