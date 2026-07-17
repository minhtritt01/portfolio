import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    target: 'es2022',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // motion ships a `motion/react` entrypoint — match it before the react
            // rules below, or it lands in vendor-react and the chunks go circular.
            if (id.includes('node_modules/motion') || id.includes('node_modules/framer-motion')) {
              return 'vendor-motion'
            }
            if (id.includes('react-router') || id.includes('@remix-run')) {
              return 'vendor-router'
            }
            if (id.includes('react-dom') || id.includes('react')) {
              return 'vendor-react'
            }
          }
        },
      },
    },
  },
})
