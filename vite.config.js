import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
	build: {
		lib: {
			entry: {
				'': resolve(__dirname, 'src/index.ts'),
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
		minify: false,
		outDir: './dist',
	},
	plugins: [react()],
	server: {
		open: false,
	},
});
