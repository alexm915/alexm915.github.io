// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://alexm915.github.io',
	server: { host: true },
	integrations: [mdx(), sitemap()],
	markdown: {
		shikiConfig: {
			theme: 'dracula',
		},
	},
	fonts: [
		{
			provider: fontProviders.local(),
			name: 'HackNerdFontMono',
			cssVariable: '--font-hack-nerd',
			fallbacks: ['monospace'],
			options: {
				variants: [
					{
						src: ['./src/assets/fonts/HackNerdFontMono-Regular.ttf'],
						weight: 400,
						style: 'normal',
						display: 'swap',
					},
					{
						src: ['./src/assets/fonts/HackNerdFontMono-Bold.ttf'],
						weight: 700,
						style: 'normal',
						display: 'swap',
					},
				],
			},
		},
	],
});
