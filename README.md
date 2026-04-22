# Terminal — terminal.malierdogan.com

A terminal-themed portfolio/CV experience built mostly for fun and experimentation.

## What It Does

An interactive browser terminal where visitors can explore information about me using command-line style inputs. Supports commands like `ls`, `cat`, `help`, `whoami`, and more. Includes a simulated filesystem with files like `about.txt`, `contact.md`, and `education.txt`.

## Why It Was Built

Primarily a fun experiment — a different way to present a portfolio without the usual card-and-grid layout. Also used as a sandbox for testing Next.js features and Tailwind. No real business value, but it's a good conversation piece.

## Tech Stack

- **Framework:** Next.js 16 (static export)
- **Styling:** Tailwind CSS 4
- **Backend:** None (fully static, no Firebase)
- **Hosting:** Firebase Hosting (target: `terminal-subdomain`)

## Deployment

Push to `main` → GitHub Actions builds and deploys automatically. PRs get a preview URL.

```bash
npm run dev    # local development
npm run build  # static export → out/
```
