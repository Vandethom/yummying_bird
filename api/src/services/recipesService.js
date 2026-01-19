import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Chemin vers le fichier de stockage
const DATA_DIR = path.join(__dirname, '../../data')
const RECIPES_FILE = path.join(DATA_DIR, 'recipes.json')

/**
 * Initialiser le fichier de stockage
 */
const initStorage = async () => {
  try {
    await fs.access(DATA_DIR)
  } catch {
    await fs.mkdir(DATA_DIR, { recursive: true })
  }
  
  try {
    await fs.access(RECIPES_FILE)
  } catch {
    await fs.writeFile(RECIPES_FILE, JSON.stringify([], null, 2))
  }
}

/**
 * Lire les recettes depuis le fichier
 */
const readRecipes = async () => {
  try {
    await initStorage()
    const data = await fs.readFile(RECIPES_FILE, 'utf-8')
    return JSON.parse(data)
  } catch (error) {
    console.error('Erreur lors de la lecture des recettes:', error)
    return []
  }
}

/**
 * Écrire les recettes dans le fichier
 */
const writeRecipes = async (recipes) => {
  try {
    await initStorage()
    await fs.writeFile(RECIPES_FILE, JSON.stringify(recipes, null, 2))
    return true
  } catch (error) {
    console.error('Erreur lors de l\'écriture des recettes:', error)
    return false
  }
}

/**
 * Récupérer toutes les recettes avec filtres optionnels
 */
export const getAllRecipes = async ({ category, search } = {}) => {
  let recipes = await readRecipes()
  
  // Filtrer par catégorie
  if (category) {
    recipes = recipes.filter(
      recipe => recipe.category.toLowerCase() === category.toLowerCase()
    )
  }
  
  // Recherche par titre ou description
  if (search) {
    const searchLower = search.toLowerCase()
    recipes = recipes.filter(
      recipe => 
        recipe.title.toLowerCase().includes(searchLower) ||
        recipe.description.toLowerCase().includes(searchLower)
    )
  }
  
  // Trier par date de création (plus récent en premier)
  recipes.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
  
  return recipes
}

/**
 * Récupérer une recette par ID
 */
export const getRecipeById = async (id) => {
  const recipes = await readRecipes()
  return recipes.find(recipe => recipe.id === id)
}

/**
 * Créer une nouvelle recette
 */
export const createRecipe = async (recipeData) => {
  const recipes = await readRecipes()
  
  const newRecipe = {
    id: Date.now().toString(),
    ...recipeData,
    tags: Array.isArray(recipeData.tags) ? recipeData.tags : [],
    createdAt: new Date().toISOString()
  }
  
  recipes.push(newRecipe)
  await writeRecipes(recipes)
  
  return newRecipe
}

/**
 * Mettre à jour une recette
 */
export const updateRecipe = async (id, recipeData) => {
  const recipes = await readRecipes()
  const index = recipes.findIndex(recipe => recipe.id === id)
  
  if (index === -1) {
    return null
  }
  
  recipes[index] = {
    ...recipes[index],
    ...recipeData,
    id: recipes[index].id, // Garder l'ID original
    createdAt: recipes[index].createdAt, // Garder la date de création
    updatedAt: new Date().toISOString()
  }
  
  await writeRecipes(recipes)
  return recipes[index]
}

/**
 * Supprimer une recette
 */
export const deleteRecipe = async (id) => {
  const recipes = await readRecipes()
  const index = recipes.findIndex(recipe => recipe.id === id)
  
  if (index === -1) {
    return false
  }
  
  recipes.splice(index, 1)
  await writeRecipes(recipes)
  
  return true
}

/**
 * Récupérer les statistiques des recettes
 */
export const getRecipesStats = async () => {
  const recipes = await readRecipes()
  const categories = {}
  
  recipes.forEach(recipe => {
    if (categories[recipe.category]) {
      categories[recipe.category]++
    } else {
      categories[recipe.category] = 1
    }
  })
  
  return {
    total: recipes.length,
    categories
  }
}
