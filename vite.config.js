import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import pandacss from '@pandacss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    pandacss({ transform: true }),
    react()
  ],
  build: {
    lib: {
      entry: 'src/index.js',
      formats: ['es'],
      fileName: 'index',
      cssFileName: 'styles',
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        'react/jsx-dev-runtime',
      ],
    },
  },
  experimental: {
    renderBuiltUrl(filename) {
      if (filename.endsWith('.ttf')) {
        return `./${filename}`
      }
    },
  },
  resolve: {
    alias: {
      '@': new URL('./src', import.meta.url).pathname,
      '@styled-system': new URL('./styled-system', import.meta.url).pathname,
    },
  },
})