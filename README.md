# 🚀 Alt Dashboard v2

Alt Dashboard v2 est une application de monitoring interne des outils SaaS développée pour une équipe IT.

L’objectif est de proposer une interface claire et moderne permettant de visualiser, filtrer et analyser les outils utilisés au sein d’une organisation.

---

## 🧭 Pages principales

### 🏠 Dashboard (`/`)

* Vue globale avec KPIs
* Cartes récapitulatives
* Layout responsive en grid

### 🛠 Tools (`/tools`)

* Catalogue complet des outils
* Filtres dynamiques (département, statut, catégorie, coût)
* Recherche par nom
* Composants réutilisables (cards, badges, inputs)

### 📊 Analytics (`/analytics`)

* Visualisation des données
* Analyse des tendances
* Présentation structurée et claire des métriques

---

## 🎯 Objectifs du projet

* Construire un **design system cohérent**
* Créer des **composants réutilisables**
* Assurer un **responsive design mobile-first**
* Mettre en place une navigation fluide
* Maintenir un code propre et typé avec TypeScript

---

## 🛠 Stack technique

### ⚛️ Framework & Langage

* React 19
* TypeScript
* Vite

### 🎨 UI & Styling

* Tailwind CSS
* Lucide React (icônes)

### 🧭 Routing

* React Router DOM v7

### 🧹 Qualité

* ESLint
* TypeScript strict mode

---

## 📦 Dépendances principales

```json
"dependencies": {
  "@tailwindcss/vite": "^4.1.18",
  "lucide-react": "^0.563.0",
  "react": "^19.2.0",
  "react-dom": "^19.2.0",
  "react-router-dom": "^7.13.0"
}
```

---

## 🚀 Installation & Lancement

### 1️⃣ Cloner le projet

```bash
git clone https://github.com/gRAKLECLER/ALT-DASHBOARD_V2.git
cd alt-dashboardv2
```

### 2️⃣ Installer les dépendances

```bash
yarn
```

### 3️⃣ Lancer le serveur de développement

```bash
yarn dev
```
---

## 📂 Architecture du projet

```
src/
├── components/       # Composants réutilisables (cards, badges, inputs)
├── hooks/            # Hooks personnalisés
├── pages/            # Dashboard, Tools, Analytics
├── types/           # Configuration Tailwind
└── App.tsx           # Routing & layout global
```

ℹ️ L’architecture ne comprend pas de dossier `utils`.
Le projet reste volontairement simple et structuré autour des composants, hooks et pages.

---

## 🎨 Choix CSS & UI

### Tailwind CSS

* Design system cohérent
* Approche utility-first
* Responsive mobile-first
* Rapidité de développement

### Lucide React

* Icônes modernes et légères
* Intégration simple dans les composants
* Personnalisation via props

L’association Tailwind + Lucide permet une interface moderne sans dépendances lourdes.

---

## 🔮 Améliorations futures

* 🌙 Ajout d’un **mode Dark / Light** avec sauvegarde en localStorage
* 🧪 Ajout de **tests unitaires et tests d’intégration** pour améliorer la qualité et la robustesse du projet

---
