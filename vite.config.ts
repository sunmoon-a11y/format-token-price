import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import typescript from '@rollup/plugin-typescript'

import pkg from './package.json'

function resolve(str: string) {
  return path.resolve(__dirname, str)
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),typescript({
    target: 'es5',
    rootDir: resolve('src'),
    declaration: true,
    declarationDir: resolve('dist'),
    exclude: resolve('node_modules/**'),
    allowSyntheticDefaultImports: true,
  })],
  build: {
    lib: {
      entry: resolve('src/index.ts'),
      name: path.dirname(pkg.name),
      fileName: (format) => `index.${format}.js`,
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "react-dom",
        },
      },
    },
  }
})
