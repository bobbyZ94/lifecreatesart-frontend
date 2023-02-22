/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', require('path').join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
	theme: {
		extend: {
      fontFamily: {
        chilanka: ['Chilanka'],
      },
      colors: {
        'lifecreatesart-background': '#DAE6FF',
        'lifecreatesart-foreground': '#c0d3fa',
        'lifecreatesart-link': '#E0B042',
      }
    },
	},
	plugins: [...require('@skeletonlabs/skeleton/tailwind/skeleton.cjs')(), require('@tailwindcss/typography'), require('@tailwindcss/line-clamp')],
}
