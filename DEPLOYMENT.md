# Deploying this portfolio to Vercel

This repo is a **monorepo**: a Vite/React frontend in `frontend/` and a FastAPI
backend in `backend/`. Vercel deploys them as **two projects from the same
repository** (the documented monorepo flow), because a static site and a Python
serverless API have different build settings.

| Project (Vercel) | Root Directory | What it is | Resulting URL |
| --- | --- | --- | --- |
| `portfolio-api` | `backend` | FastAPI on Vercel Functions (Python 3.12) | `https://portfolio-api-<scope>.vercel.app` |
| `portfolio` | `frontend` | Vite build served from the CDN | `https://portfolio-<scope>.vercel.app` |

The frontend talks to the API through the build-time variable `VITE_API_URL`.
If that variable is missing, the app silently falls back to
`frontend/src/data/portfolioData.js`, so the site still renders perfectly.

**Nothing secret is required** — the backend has no database and no API keys.

### Files that exist to make this work

| File | Why |
| --- | --- |
| `backend/.python-version` | Pins Python `3.12` (Vercel's default, but explicit = reproducible). Supported: 3.12 / 3.13 / 3.14 |
| `frontend/vercel.json` | SPA fallback rewrite + long-lived cache headers for hashed `/assets` and `/images` |
| `frontend/.env.example` | Documents `VITE_API_URL` (your real `.env.local` stays gitignored) |
| `backend/main.py` | CORS reads `FRONTEND_ORIGIN` as a comma-separated allowlist |

---

## Step 1 — Deploy the backend first

1. Go to <https://vercel.com/new>.
2. Under **Import Git Repository**, pick `mustansir-mota-ghar-wala/Portfolio` and
   click **Import**.
3. **Project Name:** `portfolio-api`.
4. **Root Directory:** click **Edit** and select **`backend`**.
   ⚠️ This is the single most important setting. If it stays at the repo root,
   Vercel will not find the Python app and you will get 404s.
5. **Framework Preset:** leave the auto-detected **FastAPI** (if it shows
   *Other*, choose **FastAPI**).
6. **Build Command / Output Directory / Install Command:** leave empty
   (zero-config Python runtime).
7. **Environment Variables:** skip for now — an unset `FRONTEND_ORIGIN`
   defaults to `*`, which lets you test before the frontend exists. You will add
   it in Step 3.
8. Click **Deploy** and wait for *Congratulations*.
9. Smoke-test the API in your browser (replace with your real URL):
   - `https://portfolio-api-xxx.vercel.app/` → `{"message":"Portfolio API is running successfully."}`
   - `https://portfolio-api-xxx.vercel.app/api/profile` → your profile JSON
   - also try `/api/skills`, `/api/projects`, `/api/experience`,
     `/api/education`, `/api/certifications`, `/api/activities`
10. Copy the production domain from **Project → Domains**
    (e.g. `https://portfolio-api.vercel.app`). **No trailing slash.**

> Note: `/docs` (Swagger UI) also works on Vercel, so you can show off the API.

---

## Step 2 — Deploy the frontend

1. Go to <https://vercel.com/new> again and import the **same** repository.
   (Importing one repo into several Vercel projects is expected and supported.)
2. **Project Name:** `portfolio` — this becomes your public URL, so choose it
   carefully (`https://portfolio-<scope>.vercel.app`).
3. **Root Directory:** click **Edit** and select **`frontend`**.
4. **Framework Preset:** **Vite** (auto-detected). The defaults are correct:
   - Install Command: `npm install`
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. **Environment Variables:** add
   - Key: `VITE_API_URL`
   - Value: the backend URL from Step 1, e.g. `https://portfolio-api.vercel.app`
     (**no trailing slash**)
   - Environments: tick **Production** (tick Preview too if you want preview
     deployments to hit the API)
6. Click **Deploy**.
7. Open the deployment URL and confirm the site renders.

> `VITE_*` variables are inlined into the static bundle at **build time**. After
> changing `VITE_API_URL` you must rebuild: **Deployments → ⋯ → Redeploy**.

---

## Step 3 — Lock down CORS (optional but recommended)

While `FRONTEND_ORIGIN` is unset the API answers `Access-Control-Allow-Origin: *`,
which already works for this public, read-only API. To restrict it:

1. Backend project → **Settings → Environment Variables**.
2. Add `FRONTEND_ORIGIN` = `https://portfolio-<scope>.vercel.app`
   (exact origin, `https://`, no trailing slash). Several origins, comma separated:
   `https://portfolio-<scope>.vercel.app,http://localhost:5173`
3. **Deployments → newest → ⋯ → Redeploy** — environment changes only apply to
   new deployments.


---

## Step 4 — Verify the live deployment

Open the frontend URL and check:

1. **Content loads** — hero, designation line, all sections as you scroll.
2. **API is really being used** — DevTools (F12) → **Network** → filter `api`:
   you should see 7 requests (`profile`, `skills`, `projects`, `experience`,
   `education`, `certifications`, `activities`), all **200**, all on the
   `portfolio-api…` domain.
3. **No silent fallback** — if the Console shows
   `Backend API fetch error, fallback to local data`, the API is *not* being
   reached and the page is rendering the bundled copy. Fix `VITE_API_URL` and
   redeploy.
4. **Static assets** — the resume downloads from `/resume/Mustansir_Resume.pdf`,
   project images load from `/images/…`, theme toggle works, hamburger appears
   below 992 px.

Quick command-line equivalents:

```bash
curl -s -o NUL -w "%{http_code}\n" https://YOUR-FRONTEND.vercel.app/
curl -s -o NUL -w "%{http_code}\n" https://YOUR-BACKEND.vercel.app/api/projects
curl -s -o NUL -w "%{http_code}\n" https://YOUR-FRONTEND.vercel.app/resume/Mustansir_Resume.pdf
```

---

## Step 5 — Custom domain (optional)

1. Frontend project → **Settings → Domains → Add**.
2. Type your domain (e.g. `mustansir.dev`) and follow the DNS instructions
   (Vercel shows the exact `A` / `CNAME` records, or use Vercel nameservers).
3. Add `www` too if you want both, then set the redirect to whichever you prefer.
4. After the domain is live, add it to the backend's `FRONTEND_ORIGIN`
   (comma-separated) and **redeploy the backend**, otherwise the browser will
   block cross-origin API calls from the new domain.

Free `.vercel.app` domains are enough — a custom domain is optional.

---

## Step 6 — Day-to-day workflow

* `git push` to `main` → **both** projects redeploy automatically.
* Vercel skips the build of the project whose folder did not change, so editing
  only `backend/` does not rebuild the frontend.
* Every branch/PR gets its own Preview URL (frontend previews only hit the API
  if you enabled the `VITE_API_URL` variable for the *Preview* environment).
* Rollback: **Deployments → ⋯ → Promote to Production** on an older build.

---

## Troubleshooting

| Symptom | Cause / fix |
| --- | --- |
| `404: NOT_FOUND` at the backend URL | Root Directory was left at the repo root. Set it to `backend` and redeploy |
| Frontend build fails: *Could not read package.json* | Root Directory must be `frontend` |
| API calls fail, console shows the fallback warning | `VITE_API_URL` missing at build time, has a trailing slash, or points to `localhost`. Fix the variable and **Redeploy** |
| CORS error in the console | `FRONTEND_ORIGIN` must match the frontend origin exactly (`https://`, no trailing slash, `www` counts as a different origin). Redeploy the backend after changing it |
| `FUNCTION_INVOCATION_FAILED` | Backend project → **Logs** tab. Usually a dependency/import problem — verify `backend/requirements.txt` before pushing |
| API works, `/docs` works, but the UI looks empty/unstyled | Open DevTools → Console for JS errors; the build output lives in `frontend/dist` |
| Resume 404 | Ensure `frontend/public/resume/Mustansir_Resume.pdf` is committed (it is) |
| Wrong Python version | `backend/.python-version` pins `3.12`; Vercel supports 3.12 / 3.13 / 3.14 |

---

## Optional: one project, one domain (advanced)

Vercel **Services** (beta) can host both parts under a single project/domain:

```json
{
  "experimentalServices": {
    "frontend": { "root": "frontend", "framework": "vite", "routePrefix": "/" },
    "backend": { "root": "backend", "framework": "fastapi", "routePrefix": "/api" }
  }
}
```

This removes the CORS concern, but the feature is still labelled beta, so the
two-project setup above is the safer default. A middle ground is a same-origin
proxy from the frontend project:

```json
{ "rewrites": [{ "source": "/api/:path*", "destination": "https://YOUR-BACKEND.vercel.app/api/:path*" }] }
```

---

## What *not* to do

* Do **not** deploy either project with the Root Directory set to the repository
  root — both halves are in subfolders.
* Do **not** commit `frontend/.env.local` (it is gitignored on purpose); it holds
  your machine-specific `VITE_API_URL`.
* Do **not** keep `VITE_API_URL` pointed at `http://localhost:8000` in production.
