import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "build", // Change output folder to 'build'
  },
  base: "/react-stepper/",
  plugins: [react()],
});
