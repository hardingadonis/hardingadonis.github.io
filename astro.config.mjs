// @ts-check
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://astro.build/config
export default defineConfig({
	site: 'https://hardingadonis.top',
	base: '/',
	integrations: [react(), sitemap()],
	vite: {
		plugins: [tailwindcss(), tsconfigPaths()],
	},
});
