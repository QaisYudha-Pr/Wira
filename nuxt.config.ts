// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Still Progress',
      meta: [
        { name: 'description', content: 'Deskripsi situs saya' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/ada.jpg' },
      ],
    }
  },

  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  modules: ["@nuxt/image", "@nuxt/fonts", "@nuxtjs/google-fonts"],
});