const base = '/cube-app/';
export default {
	mode: 'universal',
	router: {
		base
	},
	head: {
		title: process.env.npm_package_name || '',
		meta: [
			{ 
				charset: 'utf-8' 
			},
			{ 
				name: 'viewport',
				content: 'width=device-width, initial-scale=1' 
			},
			{
				hid: 'author',
				name: 'author',
				content: 'Yurii Golskyi'
			},
			{ 
				hid: 'description', 
				name: 'description', 
				content: 'Simple application where cube sides is a link to other page' 
			},
			{
				hid: 'keyword',
				name: 'keyword',
				content: 'Cube, Animation, Frontend, JavaScript, Vue, Nuxt'
			},
			{
				hid: 'url',
				name: 'url',
				content: 'https://yuriiholskiy.github.io/cube-app'
			}
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: base + 'favicon.ico' },
		],
		bodyAttrs: {
			class: 'hidden'
		}
	},
	
	loading: { color: 'blue' },
	
	css: [
		'~/assets/main.css'
	],

	plugins: [
		{
			src: '~/plugins/custom-appear',
			mode: 'client'
		}
	],
	
	build: {
		publicPath: '/assets/',
	}
}
