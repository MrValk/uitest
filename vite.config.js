import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	experimental: {
		useVitePreprocess: true
	}
};

export default config;
