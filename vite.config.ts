import {
  vitePlugin as remix,
  cloudflareDevProxyVitePlugin as remixCloudflareDevProxy,
} from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";
import fs from "fs";

const bennieUiRoots = [
  "components/primitives",
  "components/composites",
  "components/composites/forms",
  "components/composites/feedback",
  "libraries",
];

const bennieUiAliases = bennieUiRoots.flatMap((dir) => {
  const base = path.resolve(__dirname, "packages/bennie-ui", dir);
  if (!fs.existsSync(base)) return [];
  return fs.readdirSync(base)
    .filter((name) => fs.existsSync(path.join(base, name, "package.json")))
    .map((name) => {
      const pkg = JSON.parse(fs.readFileSync(path.join(base, name, "package.json"), "utf-8"));
      return {
        find: pkg.name,
        replacement: path.resolve(base, name),
      };
    });
});

export default defineConfig({
  plugins: [
    remixCloudflareDevProxy(),
    remix({
      ignoredRouteFiles: ["**/*.css"],
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        v3_singleFetch: true,
        v3_lazyRouteDiscovery: true,
      },
    }),
    tsconfigPaths(),
  ],
  resolve: {
    dedupe: ["react", "react-dom"],
    alias: [
      { find: "styled-system", replacement: path.resolve(__dirname, "styled-system") },
      ...bennieUiAliases,
    ],
  },
  ssr: {
    noExternal: ["@heroicons/react", "recharts", "react-smooth", "react-transition-group"],
  },
  server: {
    host: true,
    allowedHosts: true,
    hmr: {
      host: "brawney.local",
      port: 5173,
    },
  },
});
