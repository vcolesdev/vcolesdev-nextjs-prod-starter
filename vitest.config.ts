import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { configDefaults, defineConfig, ViteUserConfig } from "vitest/config";

const config: ViteUserConfig = defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    port: 3000,
  },
  test: {
    environment: "happy-dom",
    exclude: [
      ...configDefaults.exclude,
      "./node_modules/**",
      "./build/**",
      "./postgres-data/**",
    ],
    globals: true,
    setupFiles: ["./src/tests/setup-test-environment.ts"],
    include: [
      "./src/**/*.{spec,test}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}",
      "./src/components/__tests__/**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}",
      "./src/features/__tests__/**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}",
      "./src/modules/__tests__/**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}",
    ],
    coverage: {
      reporter: ["text", "json", "html"],
    },
    watch: true,
  },
});

export default config;
