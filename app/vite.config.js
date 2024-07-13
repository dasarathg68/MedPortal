import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss("./tailwind.config.js")],
  define: {
    global: {},
    __APP_ENV__: process.env.VITE_VERCEL_ENV,
  },

  optimizeDeps: {
    disabled: false,
  },
});
