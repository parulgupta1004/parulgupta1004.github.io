import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "build",
    sourcemap: true,
  },
  test: {
    environment: "happy-dom",
    globals: true,
    environmentOptions: {
      happyDOM: {
        settings: {
          enableIframePageLoading: true,
          navigation: { disableChildFrameNavigation: true },
        },
      },
    },
    include: ["src/**/*.test.{js,jsx}"],
    setupFiles: ["./src/test-setup.js"],
  },
});
