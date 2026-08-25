import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// C-DriveLab frontend build config.
// Kept intentionally minimal — no extra plugins until a real need appears.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
  build: {
    outDir: "dist",
    sourcemap: true,
  },
});
