import * as recipesService from '../services/recipesService.js'

/**
 * Récupérer toutes les recettes
 */
export const getAllRecipes = async (req, res) => {
  try {
    const { category, search } = req.query
    const recipes = await recipesService.getAllRecipes({ category, search })
    
    res.json({
      success: true,
      count: recipes.length,
      data: recipes
    })
  } catch (error) {
    console.error('Erreur lors de la récupération des recettes:', error)
    res.status(500).json({
      success: false,
      error: 'Erreur lors de la récupération des recettes'
    })
  }
}

/**
 * Récupérer une recette par ID
 */
export const getRecipeById = async (req, res) => {
  try {
    const { id } = req.params
    const recipe = await recipesService.getRecipeById(id)
    
    if (!recipe) {
      return res.status(404).json({
        success: false,
        error: 'Recette non trouvée'
      })
    }
    
    res.json({
      success: true,
      data: recipe
    })
  } catch (error) {
    console.error('Erreur lors de la récupération de la recette:', error)
    res.status(500).json({
      success: false,
      error: 'Erreur lors de la récupération de la recette'
    })
  }
}

/**
 * Créer une nouvelle recette
 */
export const createRecipe = async (req, res) => {
  try {
    const recipeData = req.body
    
    // Validation des données
    const validationError = validateRecipe(recipeData)
    if (validationError) {
      return res.status(400).json({
        success: false,
        error: validationError
      })
    }
    
    const newRecipe = await recipesService.createRecipe(recipeData)
    
    res.status(201).json({
      success: true,
      message: 'Recette créée avec succès',
      data: newRecipe
    })
  } catch (error) {
    console.error('Erreur lors de la création de la recette:', error)
    res.status(500).json({
      success: false,
      error: 'Erreur lors de la création de la recette'
    })
  }
}

/**
 * Mettre à jour une recette
 */
export const updateRecipe = async (req, res) => {
  try {
    const { id } = req.params
    const recipeData = req.body
    
    const updatedRecipe = await recipesService.updateRecipe(id, recipeData)
    
    if (!updatedRecipe) {
      return res.status(404).json({
        success: false,
        error: 'Recette non trouvée'
      })
    }
    
    res.json({
      success: true,
      message: 'Recette mise à jour avec succès',
      data: updatedRecipe
    })
  } catch (error) {
    console.error('Erreur lors de la mise à jour de la recette:', error)
    res.status(500).json({
      success: false,
      error: 'Erreur lors de la mise à jour de la recette'
    })
  }
}

/**
 * Supprimer une recette
 */
export const deleteRecipe = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await recipesService.deleteRecipe(id)
    
    if (!deleted) {
      return res.status(404).json({
        success: false,
        error: 'Recette non trouvée'
      })
    }
    
    res.json({
      success: true,
      message: 'Recette supprimée avec succès'
    })
  } catch (error) {
    console.error('Erreur lors de la suppression de la recette:', error)
    res.status(500).json({
      success: false,
      error: 'Erreur lors de la suppression de la recette'
    })
  }
}

/**
 * Valider les données d'une recette
 */
function validateRecipe(recipe) {
  if (!recipe.title || recipe.title.trim() === '') {
    return 'Le titre est requis'
  }
  
  if (!recipe.description || recipe.description.trim() === '') {
    return 'La description est requise'
  }
  
  if (!recipe.image || recipe.image.trim() === '') {
    return 'L\'image est requise'
  }
  
  if (!recipe.category || recipe.category.trim() === '') {
    return 'La catégorie est requise'
  }
  
  if (!recipe.prepTime || recipe.prepTime <= 0) {
    return 'Le temps de préparation doit être supérieur à 0'
  }
  
  if (!recipe.cookTime || recipe.cookTime <= 0) {
    return 'Le temps de cuisson doit être supérieur à 0'
  }
  
  if (!recipe.servings || recipe.servings <= 0) {
    return 'Le nombre de personnes doit être supérieur à 0'
  }
  
  if (!Array.isArray(recipe.ingredients) || recipe.ingredients.length === 0) {
    return 'Au moins un ingrédient est requis'
  }
  
  if (!Array.isArray(recipe.instructions) || recipe.instructions.length === 0) {
    return 'Au moins une instruction est requise'
  }
  
  return null
}
