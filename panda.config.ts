import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./packages/bennie-ui/**/*.{js,jsx,ts,tsx}",
    "./packages/bd-shared-ui/components/**/*.{js,jsx,ts,tsx}",
    "./packages/bd-shared-ui/themes/**/*.{js,jsx,ts,tsx}",
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },
  conditions: {
    extend: {
      dark: '.dark &, [data-theme="dark"] &, [data-mode="dark"] &'
    }
  },

  // The output directory for your css system
  outdir: "styled-system",
});
