# API YummyingBird

API REST Node.js pour gérer les recettes du site YummyingBird.

## 🚀 Installation

```bash
cd api
npm install
```

## ⚙️ Configuration

1. Copier le fichier `.env.example` en `.env`
2. Modifier les variables d'environnement selon vos besoins

```bash
cp .env.example .env
```

## 🏃 Démarrage

### Mode développement (avec rechargement automatique)
```bash
npm run dev
```

### Mode production
```bash
npm start
```

L'API sera accessible sur `http://localhost:3001`

## 📚 Documentation des endpoints

### Base URL
```
http://localhost:3001/api
```

### Recettes

#### Récupérer toutes les recettes
```http
GET /recipes
```

**Query parameters:**
- `category` (optionnel) - Filtrer par catégorie (Entrées, Plats, Desserts, Apéritifs)
- `search` (optionnel) - Rechercher dans les titres et descriptions

**Réponse:**
```json
{
  "success": true,
  "count": 10,
  "data": [...]
}
```

#### Récupérer une recette
```http
GET /recipes/:id
```

**Réponse:**
```json
{
  "success": true,
  "data": {
    "id": "1",
    "title": "Soupe à l'oignon gratinée",
    ...
  }
}
```

#### Créer une recette
```http
POST /recipes
Content-Type: application/json

{
  "title": "Ma recette",
  "description": "Description de la recette",
  "image": "/images/recette.jpg",
  "category": "Entrées",
  "prepTime": 20,
  "cookTime": 30,
  "servings": 4,
  "ingredients": ["ingrédient 1", "ingrédient 2"],
  "instructions": ["étape 1", "étape 2"],
  "tags": ["tag1", "tag2"]
}
```

**Réponse:**
```json
{
  "success": true,
  "message": "Recette créée avec succès",
  "data": {...}
}
```

#### Mettre à jour une recette
```http
PUT /recipes/:id
Content-Type: application/json

{
  "title": "Nouveau titre",
  ...
}
```

#### Supprimer une recette
```http
DELETE /recipes/:id
```

## 🗄️ Base de données

### Stockage actuel : Fichier JSON

L'API utilise actuellement un fichier JSON (`data/recipes.json`) pour stocker les recettes de manière persistante. C'est une solution simple et fonctionnelle pour démarrer rapidement.

**Avantages :**
- Aucune installation nécessaire
- Simple à utiliser
- Parfait pour le développement et les petits projets

**Limitations :**
- Non adapté pour une production à grande échelle
- Pas de transactions
- Performance limitée avec beaucoup de données

### Migration vers une vraie base de données

Pour une utilisation en production, vous devriez migrer vers une vraie base de données :

#### Option 1 : MongoDB (Recommandé)
```bash
npm install mongodb mongoose
```

**Pourquoi MongoDB ?**
- Structure flexible (NoSQL)
- Parfait pour stocker des recettes avec leurs ingrédients et instructions
- Facile à mettre en place avec MongoDB Atlas (gratuit)

#### Option 2 : PostgreSQL
```bash
npm install pg
```

**Pourquoi PostgreSQL ?**
- Base relationnelle robuste
- Excellent pour les données structurées
- Support des relations complexes

#### Option 3 : Supabase
```bash
npm install @supabase/supabase-js
```

**Pourquoi Supabase ?**
- PostgreSQL + API en temps réel
- Authentification incluse
- Interface d'administration
- Gratuit pour commencer

#### Option 4 : SQLite
```bash
npm install better-sqlite3
```

**Pourquoi SQLite ?**
- Très léger
- Aucun serveur nécessaire
- Parfait pour les petites applications

## 📁 Structure du projet

```
api/
├── src/
│   ├── controllers/     # Logique des routes
│   ├── services/        # Logique métier
│   ├── routes/          # Définition des routes
│   └── server.js        # Point d'entrée
├── .env.example         # Variables d'environnement
├── package.json
└── README.md
```

## 🔧 Prochaines étapes

- [ ] Intégrer une base de données
- [ ] Ajouter l'authentification JWT
- [ ] Ajouter l'upload d'images
- [ ] Ajouter des tests unitaires
- [ ] Ajouter la pagination
- [ ] Documenter avec Swagger/OpenAPI
