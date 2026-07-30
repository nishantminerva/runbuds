# Advance — web app deploy branch

This orphan branch serves the **Advance web app** (the Expo/React Native app
exported for web) through the same Vercel project that hosts the marketing
site. It intentionally shares no history with `main`:

- `main` → marketing site (Next.js) → `www.advancetouring.app`
- `web-app` (this branch) → the app's prebuilt static export in `dist/`
  → assign the domain `app.advancetouring.app` to this branch in
  Vercel → Project → Settings → Domains.

There is no build step: `dist/` is committed prebuilt (env values are baked in
at export time). **Never merge this branch into `main`.**

## Updating the app

From the app repo (`React-Native/Advance`):

```bash
npx expo export -p web -c        # via: node ./scripts/with-env.js .env.production -- …
cp 'dist/+not-found.html' dist/404.html
```

Then replace `dist/` on this branch with the new export and push.
