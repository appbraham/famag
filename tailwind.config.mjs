/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';
const plugin = require('tailwindcss/plugin');

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container: {
			center:	true,
			padding: '1rem',		
		},
		extend: {
			fontFamily: {
				sans: ['Poppins', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				'mirage': {
				'50': '#f4f6fb',
				'100': '#e8ecf6',
				'200': '#cbd8ec',
				'300': '#9db6dc',
				'400': '#6990c7',
				'500': '#4672b1',
				'600': '#345995',
				'700': '#2b4779',
				'800': '#273e65',
				'900': '#253555',
				'950': '#111827',
    			},    
			},
		},
	},
	plugins: [
		plugin(function({ addComponents }) {
			addComponents({
			  '.link-gradient': {
				// 'background': 'linear-gradient(to bottom, #6990c7, #2b4779)',
				// 'background-color':'transparent',
				'display': 'block',
				'&:hover':{
					'background': 'linear-gradient(to bottom, #2b4779, #6990c7)',
				}				
			  },
			  '.active-link': {
				'background': 'linear-gradient(to bottom, #6990c7, #2b4779)',
			  },	  
			})
		  })
	],
}