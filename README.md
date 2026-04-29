# brawney-web

The Brawney web app — built with Remix v2, Cloudflare Pages, and PandaCSS.

## Stack

- **Framework**: [Remix v2](https://remix.run) with Cloudflare Pages adapter
- **Styling**: [PandaCSS](https://panda-css.com) (dark mode by default)
- **UI**: [bennie-ui](https://github.com/bennie-ui/bennie-ui) (git submodule at `packages/bennie-ui`)
- **Runtime**: Cloudflare Pages Functions
- **Package manager**: [Bun](https://bun.sh)

## Getting started

```sh
git clone --recurse-submodules <repo>
bun install
bun run dev
```

The app runs at `http://localhost:5173`.

If you already cloned without submodules:

```sh
git submodule update --init --recursive
bun install
```

## Development

```sh
bun run dev       # start Remix dev server (runs panda codegen first)
bun run panda     # regenerate styled-system manually
bun run test      # run tests
bun run typecheck # type check
```

The local dev server is proxied through Grand Central Station at `http://brawney.local`. Make sure GCS is running with `--mount=brawney-web`.

## Building & deploying

```sh
# Build
bun run build

# Deploy to staging
task prod:deploy:staging

# Deploy to production
task prod:deploy
```

Deployments require Cloudflare credentials via [Doppler](https://doppler.com) (`doppler run --project devops --config prod`).

CI/CD is handled by GitHub Actions:
- Push to `staging` → deploys to staging (`https://staging.brawney.dev`)
- Push to `main` → deploys to production (`https://brawney.dev`)

## Project structure

```
app/
  routes/       # Remix route modules (URL → page mapping)
  pages/        # Screen components
  components/   # Shared UI components
  contexts/     # React context providers (Auth, MainMenu, Notifications, Theme)
  styles/       # Shared style definitions
packages/
  bennie-ui/    # UI component library (git submodule)
styled-system/  # Generated PandaCSS output (do not edit)
functions/      # Cloudflare Pages Functions entry point
```

## Cutting a release

```sh
git checkout -b release/YYYY.MM.X
bdctl release
git push origin release/YYYY.MM.X
git push origin vYYYY.MM.X
# then open a PR to main
```
