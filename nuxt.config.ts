// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/supabase',
  ],
  supabase: {
    url: 'https://sydvxfmlcgdusxjnealn.supabase.co',
    key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN5ZHZ4Zm1sY2dkdXN4am5lYWxuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIxNTkzMzgsImV4cCI6MjAwNzczNTMzOH0.vsqB2HaZA-2f7lpPhMl7z0ellrstd2cLWgduglKbrak',
  }
})
