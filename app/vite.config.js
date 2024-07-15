import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    global: {},
  },
  build: {
    rollupOptions: {
      external: ["@aws-sdk/client-s3"],
    },
  },
  optimizeDeps: {
    include: ["@aws-sdk/client-s3"],
  },
});
