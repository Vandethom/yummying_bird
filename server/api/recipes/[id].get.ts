export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, 'id')
    
    if (!id) {
      throw createError({
        statusCode: 400,
        statusMessage: 'ID de recette manquant'
      })
    }

    // Récupérer la recette depuis l'API Node.js
    const response = await fetch(`http://localhost:3001/api/recipes/${id}`)
    
    if (!response.ok) {
      throw createError({
        statusCode: response.status,
        statusMessage: `Erreur API: ${response.statusText}`
      })
    }
    
    const data = await response.json()
    return data
  } catch (error: any) {
    console.error('Erreur lors de la récupération de la recette:', error)
    
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.statusMessage || 'Erreur lors de la récupération de la recette'
    })
  }
})
