// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { hid: 'og:image', property: 'og:image', content: '/ogimage.png' },
        { name: "theme-color", content: "#F20000" },
        { name: "background-color", content: "#F20000" },
        { name: "msapplication-TileColor", content: "#F20000" },
        { name: 'title', content: 'Inaudita' },
        { name: 'description', content: 'Apoyamos el cine en el que nadie confia.' },
      ],
      link: [
        { rel: "icon", type: "image/png", href: "/favicon-48x48.png", sizes: "48x48"},
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg"},
        { rel: "shortcut icon", href: "/favicon.ico"},
        { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png"},
        { rel: "manifest", href: "/site.webmanifest" },
      ],
    },
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: [
    [
			'@storyblok/nuxt',
			{
				accessToken: process.env.STORYBLOK_TOKEN,
			},
		],
  ]
})
