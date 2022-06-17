import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
const { resolve } = require("path");
console.log(__dirname);
// https://vitejs.dev/config/
export default defineConfig({
  base:'/vue3-techical-v1/',
  plugins: [vue()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
});
