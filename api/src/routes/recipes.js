import express from 'express'
import * as recipesController from '../controllers/recipesController.js'

const router = express.Router()

// GET /api/recipes - Récupérer toutes les recettes
router.get('/', recipesController.getAllRecipes)

// GET /api/recipes/:id - Récupérer une recette par ID
router.get('/:id', recipesController.getRecipeById)

// POST /api/recipes - Créer une nouvelle recette
router.post('/', recipesController.createRecipe)

// PUT /api/recipes/:id - Mettre à jour une recette
router.put('/:id', recipesController.updateRecipe)

// DELETE /api/recipes/:id - Supprimer une recette
router.delete('/:id', recipesController.deleteRecipe)

export default router
