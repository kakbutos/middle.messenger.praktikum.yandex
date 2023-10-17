import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    plugins: [handlebars()],
    server: {
        port: 3000,
    },
    root: resolve(__dirname),
    build: {
        outDir: resolve(__dirname, 'dist'),
    },
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src')
		}
	}
});
