import yaml from '@rollup/plugin-yaml';
import preprocess from 'svelte-preprocess';
import vercel from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({}),
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		
		target: '#svelte',
		adapter: vercel(),
		vite: () => ({
			plugins: [yaml()],
			
		})
	}
};

export default config;
