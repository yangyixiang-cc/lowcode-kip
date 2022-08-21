import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from 'path'

export default defineConfig({
  server: {
    port: 3030
  },
  preview: {
    port: 8080
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      "components": resolve(__dirname,'./src/components')
    },
  },
  plugins: [vue(),
  AutoImport({
    resolvers: [ElementPlusResolver()],
  }),
  Components({
    resolvers: [ElementPlusResolver()],
  }),],
  css: {
    // css预处理器
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/assets/css/main.scss";'
      }
    },
    modules: {},
    postcss: {
      plugins: [
       
      ]
    }
  }


})
