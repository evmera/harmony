import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  presets: ['@pandacss/preset-base', '@pandacss/preset-panda'],
  preflight: true,
  include: ['./src/**/*.{js,jsx}'],
  exclude: [],
  theme: {
    extend: {},
  },
  outdir: "styled-system",
  hash: true,
  prefix: 'hm',
  separator: '-',
})
