export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap',
        },
      ],
    },
  },
  plugins: [{ src: '~/plugins/vue-datepicker', ssr: false }],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    'nuxt-icon',
    'nuxt-swiper',
    '@pinia/nuxt',
  ],
  swiper: {
    modules: ['pagination', 'effect-coverflow', 'autoplay'],
  },
});
