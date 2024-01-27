import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: "src",
  test: {
    environment: "happy-dom", //by default it's gonna use js-dom which is heavier and slower than happy-dom
    setupFiles: ["./setupVitest.ts"], // run before all of your tests
  },
});
