import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
	stories: ['../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: ['@storybook/addon-essentials', '@storybook/addon-onboarding', '@storybook/addon-interactions'],
	framework: {
		name: '@storybook/react-vite',
		options: {},
	},
	docs: {
		autodocs: 'tag',
	},
	core: {
		builder: {
			name: '@storybook/builder-vite',
			options: {
				viteConfigPath: './vite.config.js',
			},
		},
	},
};
export default config;
