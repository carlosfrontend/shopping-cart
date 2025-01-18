import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import browserslist from 'browserslist';
import {browserslistToTargets} from 'lightningcss';



// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  globals: true,
  test: {
    environment: 'jsdom',
    setupFiles: './tests/setup.js',
  },
  css: {
    transformer: 'lightningcss',
    lightningcss: {
      cssModules: true,
      targets: browserslistToTargets(browserslist('>= 0.25%'))
    },
    modules: {
      localsConvention:'camelCaseOnly'
    }
  },
  build: {
    cssMinify: 'lightningcss'
  }
 
})


