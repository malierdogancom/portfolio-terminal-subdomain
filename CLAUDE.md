# CLAUDE.md — Terminal

## Proje Özeti
Terminal temalı portfolio sitesi. `terminal.malierdogan.com` adresinde yayınlanır.
- **Subdomain:** terminal.malierdogan.com
- **GitHub Org:** github.com/malierdogancom/terminal
- **Firebase Hosting:** `portfolio-mali-erdogan` projesi, target: `terminal` → `terminal-subdomain`

## Tech Stack
- **Framework:** Next.js 16.0.5 (static export)
- **React:** 19.2.0
- **TypeScript:** Evet
- **Styling:** Tailwind CSS 4
- **Build output:** `out/` (static HTML/CSS/JS)
- **Node:** 20

## Firebase Yapısı
- **Project ID:** `portfolio-mali-erdogan`
- **Hosting target:** `terminal` → site ID: `terminal-subdomain`
- **Firestore:** Hayır
- **Storage:** Hayır
- **Auth:** Hayır
- Sadece statik hosting — Firebase SDK bağımlılığı yok

## CI/CD Süreci
- **Trigger:** `main` branch'e push → production deploy, PR → preview channel deploy
- **Workflow:** `.github/workflows/firebase-deploy.yml`
- **Build:** `npm ci` → `npm run build` (output: `out/`)
- **Deploy tool:** `FirebaseExtended/action-hosting-deploy@v0`
- **Target:** `terminal`
- **Secrets gerekli:**
  - `FIREBASE_SERVICE_ACCOUNT_PORTFOLIO_MALI_ERDOGAN` (org secret — otomatik)

## Build & Deploy Detayları
```bash
npm ci
npm run build      # → out/ klasörü oluşur
firebase deploy --only hosting:terminal --project portfolio-mali-erdogan
```

## Bilinen Kısıtlar
- `output: 'export'` → tamamen statik site
- Firebase/backend entegrasyonu yok — en basit deploy süreci

---

## Yeni Subdomain Ekleme Rehberi

(Bkz. `portfolio/CLAUDE.md` → Yeni Subdomain Ekleme Rehberi bölümü — adımlar aynı)
