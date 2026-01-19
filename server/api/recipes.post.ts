export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)

    // Validation des données
    if (!body.title || !body.description || !body.image || !body.category) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Tous les champs obligatoires doivent être remplis'
      })
    }

    if (!body.prepTime || !body.cookTime || !body.servings) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Les temps et le nombre de personnes sont requis'
      })
    }

    if (!Array.isArray(body.ingredients) || body.ingredients.length === 0) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Au moins un ingrédient est requis'
      })
    }

    if (!Array.isArray(body.instructions) || body.instructions.length === 0) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Au moins une instruction est requise'
      })
    }

    // Créer l'objet recette
    const recipe = {
      id: Date.now().toString(),
      title: body.title,
      description: body.description,
      image: body.image,
      category: body.category,
      prepTime: body.prepTime,
      cookTime: body.cookTime,
      servings: body.servings,
      ingredients: body.ingredients,
      instructions: body.instructions,
      tags: Array.isArray(body.tags) ? body.tags : [],
      createdAt: new Date().toISOString()
    }

    // TODO: Sauvegarder la recette dans une base de données
    // Pour l'instant, on simule juste une réponse réussie
    // Vous pourrez intégrer une vraie base de données plus tard (MongoDB, PostgreSQL, etc.)
    
    console.log('Nouvelle recette créée:', recipe)

    return {
      success: true,
      message: 'Recette ajoutée avec succès',
      recipe
    }
  } catch (error: any) {
    console.error('Erreur lors de la création de la recette:', error)
    
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.statusMessage || 'Erreur lors de la création de la recette'
    })
  }
})
