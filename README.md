# Sweetmoon Brand Builder

Plateforme SaaS (Next.js 14 + TS) permettant à des marques émergentes de créer et gérer leurs compléments alimentaires (gélules), avec personnalisation, commandes et suivi logistique.

## Lancer en local

```bash
pnpm i   # ou npm i / yarn
cp .env.example .env.local # renseigner les valeurs
pnpm dev
```

## Déploiement
- Cible : **Vercel**
- Variables d'environnement : MONGODB_URI, NEXTAUTH_SECRET, NEXTAUTH_URL, ADMIN_EMAIL, ADMIN_PASSWORD

## Dossiers
- `src/app` : App Router + UI
- `src/app/api/*` : route handlers CRUD (produits / commandes / marques / auth)
- `src/lib` : db, auth, i18n, utils
- `src/models` : schémas Mongoose
- `src/components` : UI (shadcn-like), charts, etc.
