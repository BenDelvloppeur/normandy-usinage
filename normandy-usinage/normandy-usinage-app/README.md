# Normandy Usinage - Site Web

Site web vitrine développé pour **Normandy Usinage** (Granville), spécialisé dans l'usinage industriel et la mécanique de précision.

## 🛠 Stack Technique

- **Framework** : [Next.js 14](https://nextjs.org/) (App Router)
- **Langage** : TypeScript
- **Styles** : Tailwind CSS
- **Icônes** : Lucide React
- **Animations** : Framer Motion
- **Polices** : Oswald (Titres) & Inter (Texte) via `next/font`

## 🚀 Installation & Démarrage

1.  **Accéder au dossier** :
    ```bash
    cd normandy-usinage-app
    ```

2.  **Installer les dépendances** :
    ```bash
    npm install
    ```

3.  **Lancer le serveur de développement** :
    ```bash
    npm run dev
    ```
    Le site sera accessible sur [http://localhost:3000](http://localhost:3000).

## 📁 Structure du Projet

- `src/app` : Les pages du site (Accueil, Services, Contact...).
- `src/components` : Composants réutilisables.
  - `layout` : Header, Footer.
  - `ui` : Boutons, Cards, etc.
- `src/lib/site-config.ts` : **Fichier important** contenant toutes les infos de l'entreprise (Adresse, Tél, Horaires). Modifiez ce fichier pour mettre à jour les coordonnées partout sur le site.

## 🎨 Design System

- **Couleurs** :
  - Fond : Slate-950 (Anthracite)
  - Accent : Orange-600 (Industriel/Sécurité)
  - Texte : Slate-300 / White
- **Typographie** :
  - Titres : Oswald (Moderne, robuste)
  - Corps : Inter (Lisible)

## 📝 Check-list avant mise en ligne

- [ ] Vérifier le numéro de téléphone final dans `src/lib/site-config.ts`.
- [ ] Remplacer les images placeholders par de vraies photos de l'atelier (dossier `public` ou hébergement externe).
- [ ] Configurer un service d'envoi d'email pour les formulaires (ex: Resend, EmailJS ou API route).
- [ ] Vérifier les mentions légales.

## 📦 Déploiement

Le site est optimisé pour être déployé sur **Vercel** ou **Netlify**.
Importez simplement le dépôt Git et la configuration se fera automatiquement.
