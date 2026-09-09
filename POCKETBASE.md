# Editable content via PocketBase

All content that used to be hardcoded in `app/page.tsx` (hero text, services,
projects, team members, contact info) now lives in a small [PocketBase](https://pocketbase.io)
instance. The site fetches it at request time (with a 60s cache), and it's
edited through PocketBase's own admin dashboard — no custom login/editor was
built.

## 1. Deploy PocketBase on your VPS

```bash
# on the VPS, from a copy of this repo (or just the pocketbase/ folder)
cd pocketbase
docker compose up -d --build
```

This builds a small image that downloads the latest PocketBase release and
runs it on port 8090, with `pb_data` (the database + uploaded files) and
`pb_migrations` (the collection schema, committed to this repo) mounted as
volumes. The collections (`settings`, `features`, `projects`, `team_members`)
are created automatically on first boot from `pb_migrations/`.

Put this behind your existing reverse proxy / TLS termination (nginx, Caddy,
Traefik, ...) so it's reachable at a proper HTTPS URL — PocketBase itself
only serves plain HTTP on port 8090.

## 2. Create the admin (superuser) login

```bash
docker compose exec pocketbase /pb/pocketbase superuser upsert you@example.com "a-strong-password"
```

This is the login used at `https://your-pocketbase-url/_/` — that dashboard
*is* the content editor. There's no separate app login to build or maintain.

## 3. Seed the initial content (one-off)

Run this once, from your machine, against the freshly deployed instance, to
carry over the content that used to be hardcoded (including the existing
images from `public/assets/images`):

```bash
POCKETBASE_URL=https://your-pocketbase-url \
POCKETBASE_SUPERUSER_EMAIL=you@example.com \
POCKETBASE_SUPERUSER_PASSWORD=a-strong-password \
node pocketbase/seed.mjs
```

It's safe to re-run — it skips any collection that already has records.

## 4. Point the Next.js app at it

Set `POCKETBASE_URL` (to the public HTTPS URL from step 1) wherever the site
is hosted/built (e.g. Vercel project settings → Environment Variables), and
locally in `.env.local` for development. See `.env.local.example`.

## 5. Editing content going forward

Log into `https://your-pocketbase-url/_/` and edit records directly:

| Collection | Controls |
| --- | --- |
| `settings` | Single record: hero text, section headings/intros, contact details |
| `features` | The 4 service tiles ("Heizung", "Sanitär", ...) — `order` controls left-to-right position |
| `projects` | The project cards — `order` controls position, `image` is uploaded directly |
| `team_members` | The people in "Über uns" — `order` controls position |

Changes appear on the live site within about a minute (or immediately on the
next full page load once the 60s cache in `lib/pocketbase.ts` expires).

**Note on `features.icon`:** it's a fixed dropdown (fire / wrench /
home-modern / sun) mapped to icons in `app/page.tsx`. Adding a genuinely new
icon still requires a small code change — that's the one deliberate exception
to "no code changes needed."

## Later: Microsoft Entra ID (Azure AD) login

PocketBase supports OIDC/OAuth2 login providers per collection, configurable
entirely from the admin UI (Settings → Auth providers) — once you have an
Entra ID app registration, this can be wired up without touching any code
here.
