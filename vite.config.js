import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [handlebars()],
    server: {
        port: 3000,
    },
    root: resolve(__dirname),
    build: {
        outDir: resolve(__dirname, 'dist'),
    },
});
