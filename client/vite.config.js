import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      "/api":"https://socialmedia-biwk.onrender.com"}
  },
  plugins: [
    react(),
    ViteImageOptimizer({
      png: {
        // https://sharp.pixelplumbing.com/api-output#png
        quality: 10,
      },
      jpeg: {
        // https://sharp.pixelplumbing.com/api-output#jpeg
        quality: 10,
      },
      jpg: {
        // https://sharp.pixelplumbing.com/api-output#jpeg
        quality: 10,
      },
      tiff: {
        // https://sharp.pixelplumbing.com/api-output#tiff
        quality: 10,
      },
      // gif does not support lossless compression
      // https://sharp.pixelplumbing.com/api-output#gif
      gif: {},
      webp: {
        // https://sharp.pixelplumbing.com/api-output#webp
        lossless: true,
      },
      avif: {
        // https://sharp.pixelplumbing.com/api-output#avif
        lossless: true,
      },
    })
  ],
})
