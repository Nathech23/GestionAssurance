This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

# Application de Gestion - Sécurité Sociale

## Description
Cette application Next.js implémente un système de gestion pour un organisme de sécurité sociale, permettant la gestion des assurés, médecins, consultations et remboursements.

## Fonctionnalités Principales

### Pour l'Organisme de Sécurité Sociale (Assureur)
- Inscription et gestion des assurés
- Enregistrement et gestion des médecins
- Consultation des feuilles de maladie
- Gestion des remboursements (100% généralistes, 80% spécialistes)
- Choix du mode de paiement (virement/cash)

### Pour les Médecins
- Enregistrement des feuilles de maladie
- Prescription de médicaments
- Prescription de consultations chez les spécialistes
- Gestion de la liste des patients

### Pour les Assurés
- Consultation de l'historique des consultations
- Suivi des remboursements
- Informations sur le médecin traitant

## Installation et Utilisation

1. Installer les dépendances :
```bash
npm install
```

2. Lancer l'application en mode développement :
```bash
npm run dev
```

3. Accéder à l'application sur http://localhost:3000

## Structure des Pages

- `/` - Page d'accueil avec sélection du rôle
- `/assureur/*` - Pages de l'organisme de sécurité sociale
- `/medecin/*` - Pages des médecins
- `/assure/*` - Pages des assurés

## Technologies Utilisées

- Next.js 14
- React 18
- CSS modules pour le styling
- State management avec React hooks

## Modèle de Données

L'application implémente les entités principales identifiées dans l'analyse UML :
- Personne (classe de base)
- Assuré (hérite de Personne)
- Médecin (hérite de Personne)
  - Généraliste
  - Spécialiste
- Consultation
- Prescription
- Feuille de Maladie
- Remboursement

## Note
Cette implémentation est une version de démonstration utilisant un état local React pour simuler une base de données. Dans un environnement de production, il faudrait ajouter un backend avec une vraie base de données.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
