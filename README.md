# Expo + NativeWind (TailwindCSS) Starter

This repo is my personal **Expo + NativeWind (TailwindCSS) template**, so I don’t have to set up Tailwind every time I start a new Expo app.

It’s already wired for:
- **Expo SDK 54**
- **Expo Router**
- **NativeWind v4 + TailwindCSS**
- **Web support** (Tailwind compiled via PostCSS, `global.css` import)

## Quick start

Install deps:

```bash
npm install
```

Run:

```bash
npx expo start
```

If ports are busy on Windows, run with a port:

```bash
npx expo start --port 8084
```

Web:

```bash
npx expo start --web --port 8084
```

## How to confirm Tailwind works

Open the app and check the home screen (`app/index.tsx`).  
If you see a **dark rounded card** and styled text, **NativeWind is working** (it uses `className` with Tailwind utilities).

## What makes this work (important files)

- **`babel.config.js`**: enables NativeWind + Reanimated Babel transforms  
  - Note: `nativewind/babel` is added as a **preset** (not a plugin).
- **`tailwind.config.js`**: Tailwind config using `nativewind/preset`
- **`global.css`**: Tailwind directives (`@tailwind base/components/utilities`)
- **`postcss.config.js`**: lets web compile the Tailwind directives in `global.css`
- **`metro.config.js`**: allows importing `.css` (web)
- **`nativewind-env.d.ts`**: TypeScript types for `className`
- **`app/_layout.tsx`**: imports `../global.css`

## Reuse this template for a new app

The easiest workflow:
- Copy this folder and rename the app in `app.json` + `package.json`
- Keep the config files listed above
- Start building your screens in `app/`

## Notes

- NativeWind works best when you consistently use `className` on React Native components (`View`, `Text`, etc.).
- If you change Tailwind config, restart Expo with cache clear:

```bash
npx expo start --clear
```
