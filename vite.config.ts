import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // This app is configured for deployment at the domain root.
  // If cPanel serves it from a subfolder, change this to match that path, for example: "/app/".
  base: "/",
  plugins: [react()],
});
