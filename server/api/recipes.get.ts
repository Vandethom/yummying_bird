export default defineEventHandler(async (event) => {
  try {
    // Récupérer les recettes depuis l'API Node.js
    const recipes = await $fetch('http://localhost:3001/api/recipes', {
      method: 'GET'
    })

    return recipes
  } catch (error: any) {
    console.error('Erreur lors de la récupération des recettes:', error)
    
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: 'Erreur lors de la récupération des recettes'
    })
  }
})
