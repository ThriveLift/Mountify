import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Mountify/", // Ensure this matches your repository name for GitHub Pages
});
