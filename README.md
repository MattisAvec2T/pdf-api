# Projet Api Lettres

Ce projet est une application permettant de générer des Lettres sous format PDF.

## Initialisation de l'application

### Clonage du Projet

```bash
git clone https://github.com/MattisAvec2T/pdf-api.git
```

### Installation des dépendances

```bash
# Installation des dépendances du dossier api/
cd api
npm i

# Retour à la racine
cd ..

# Installation des dépendances du dossier frontend/
cd frontend
npm i
```

### Environnement

Le fichier `.env` des 2 parties du projet sont déjà configuré pour un lancement mais libre à vous de les modifier.

### Lancement des serveurs

Dans un premier Terminal : (Lancement de l'API)

```bash
cd api
npm run start
```

Dans un deuxième Terminal : (Lancement du Frontend)

```bash
cd frontend
npm run start
```

## Technologies utilisées

- Typescript
- Node/Express
(- Librairie PDFKit)
- PostgreSQL (Hébergé donc le projet nécessite une connexion internet)

## Auteur

Mattis ALMEIDA LIMA | Web2 - Groupe 1
