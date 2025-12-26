import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

const eventAssetPlugin = {
  name: 'event-asset-loader',
  resolveId(id: string) {
    if (id.startsWith('event:asset/')) {
      const assetPath = id.replace('event:asset/', '')
      const resolved = path.resolve(__dirname, './src/assets', assetPath)
      return resolved
    }
  },
}

export default defineConfig({
  plugins: [
    eventAssetPlugin,
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },
})
