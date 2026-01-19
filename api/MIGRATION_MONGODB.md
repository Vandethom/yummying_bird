# Guide de migration vers MongoDB

Ce guide vous montre comment migrer du stockage JSON vers MongoDB.

## 1. Installation

```bash
npm install mongodb mongoose
```

## 2. Configuration

Ajoutez à votre `.env` :
```env
MONGODB_URI=mongodb://localhost:27017/yummyingbird
# Ou pour MongoDB Atlas (cloud)
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/yummyingbird
```

## 3. Créer le modèle Mongoose

Créez `src/models/Recipe.js` :

```javascript
import mongoose from 'mongoose'

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['Entrées', 'Plats', 'Desserts', 'Apéritifs']
  },
  prepTime: {
    type: Number,
    required: true,
    min: 0
  },
  cookTime: {
    type: Number,
    required: true,
    min: 0
  },
  servings: {
    type: Number,
    required: true,
    min: 1
  },
  ingredients: [{
    type: String,
    required: true
  }],
  instructions: [{
    type: String,
    required: true
  }],
  tags: [String]
}, {
  timestamps: true // Ajoute automatiquement createdAt et updatedAt
})

export default mongoose.model('Recipe', recipeSchema)
```

## 4. Modifier le service

Remplacez `src/services/recipesService.js` :

```javascript
import Recipe from '../models/Recipe.js'

export const getAllRecipes = async ({ category, search } = {}) => {
  const query = {}
  
  if (category) {
    query.category = category
  }
  
  if (search) {
    query.$or = [
      { title: { $regex: search, $options: 'i' } },
      { description: { $regex: search, $options: 'i' } }
    ]
  }
  
  return await Recipe.find(query).sort({ createdAt: -1 })
}

export const getRecipeById = async (id) => {
  return await Recipe.findById(id)
}

export const createRecipe = async (recipeData) => {
  const recipe = new Recipe(recipeData)
  return await recipe.save()
}

export const updateRecipe = async (id, recipeData) => {
  return await Recipe.findByIdAndUpdate(
    id, 
    recipeData, 
    { new: true, runValidators: true }
  )
}

export const deleteRecipe = async (id) => {
  const result = await Recipe.findByIdAndDelete(id)
  return !!result
}

export const getRecipesStats = async () => {
  const total = await Recipe.countDocuments()
  const categories = await Recipe.aggregate([
    { $group: { _id: '$category', count: { $sum: 1 } } }
  ])
  
  return {
    total,
    categories: Object.fromEntries(
      categories.map(c => [c._id, c.count])
    )
  }
}
```

## 5. Connecter MongoDB au démarrage

Modifiez `src/server.js` :

```javascript
import mongoose from 'mongoose'

// Connexion à MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ Connecté à MongoDB'))
  .catch(err => console.error('❌ Erreur de connexion MongoDB:', err))

// ... reste du code
```

## 6. Importer les données existantes

Créez `scripts/importData.js` :

```javascript
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import fs from 'fs/promises'
import Recipe from '../src/models/Recipe.js'

dotenv.config()

const importData = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('Connecté à MongoDB')
    
    // Lire le fichier JSON
    const data = await fs.readFile('./data/recipes.json', 'utf-8')
    const recipes = JSON.parse(data)
    
    // Supprimer les données existantes
    await Recipe.deleteMany()
    
    // Importer les nouvelles données
    await Recipe.insertMany(recipes)
    
    console.log(`✅ ${recipes.length} recettes importées avec succès`)
    process.exit(0)
  } catch (error) {
    console.error('Erreur:', error)
    process.exit(1)
  }
}

importData()
```

Ajoutez le script dans `package.json` :
```json
"scripts": {
  "import": "node scripts/importData.js"
}
```

## 7. Lancer l'import

```bash
npm run import
```

Voilà ! Votre API utilise maintenant MongoDB. 🎉
