import React, { createContext, useContext, useState } from "react";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/cloudflare";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { AuthProvider } from "~/contexts/AuthContext";
import { MainMenuProvider } from "~/contexts/MainMenuContext";
import { NotificationsProvider } from "~/contexts/NotificationsContext";
import { Notifications } from "~/components/notifications";
import { BrawneyErrorBoundary } from "~/components/error";
import appStylesHref from "./app.css?url";
import { body_styles, main_styles } from "./app.styles";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: appStylesHref },
];

// ── Theme ─────────────────────────────────────────────────────────────────────
type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  toggleTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const toggleTheme = () => setTheme(t => t === "dark" ? "light" : "dark");
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// ── Query client ──────────────────────────────────────────────────────────────
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 30 * 60 * 1000,
      refetchOnWindowFocus: false,
    },
  },
});

export function Layout({ children }: { children: React.ReactNode }) {
  const { theme } = useContext(ThemeContext);
  return (
    <html lang="en" className={theme}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className={body_styles}>
        <div id="main-content" className={main_styles}>
          {children}
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <BrawneyErrorBoundary>
        <QueryClientProvider client={queryClient}>
          <NotificationsProvider>
            <AuthProvider>
              <MainMenuProvider>
                <Notifications />
                <Outlet />
              </MainMenuProvider>
            </AuthProvider>
          </NotificationsProvider>
        </QueryClientProvider>
      </BrawneyErrorBoundary>
    </ThemeProvider>
  );
}
