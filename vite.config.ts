import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  base: 'https://mishamyrt.github.io/display-align-tool',
  plugins: [svelte()]
})