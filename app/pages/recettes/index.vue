<template>
  <div class="recettes-page">
    <!-- Hero Section -->
    <section class="recettes-hero">
      <div class="hero-container">
        <div class="hero-image">
          <img src="/images/recettes-hero.jpg" alt="Recettes" class="hero-img">
        </div>
        
        <div class="hero-content">
          <h1 class="hero-title">Les recettes du chef YummyingBird</h1>
          <p class="hero-text">
            Découvrez comment transformer les ingrédients simples en créations extraordinaires. 
            Chaque recette raconte une histoire de passion et de maîtrise culinaire.
          </p>
          <div class="hero-actions">
            <button class="btn btn-primary">Explorer</button>
            <button class="btn btn-secondary">Réserver</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Créations -->
    <section class="creations">
      <div class="creations-container">
        <p class="creations-label">Recettes</p>
        <h2 class="creations-title">Les créations du chef</h2>
        <p class="creations-subtitle">Découvrez chaque recette avec ses secrets et ses astuces.</p>
        
        <div v-if="loading" class="loading">Chargement des recettes...</div>
        
        <div v-else-if="error" class="error-message">{{ error }}</div>
        
        <div v-else-if="recipes.length === 0" class="no-recipes">
          Aucune recette disponible pour le moment.
        </div>
        
        <div v-else class="recipes-grid">
          <div v-for="recipe in displayedRecipes" :key="recipe.id" class="recipe-card">
            <div class="recipe-image">
              <img :src="recipe.image" :alt="recipe.title" class="recipe-img">
            </div>
            <div class="recipe-content">
              <div class="recipe-tags">
                <span class="recipe-tag">{{ recipe.category }}</span>
                <span v-for="tag in recipe.tags" :key="tag" class="recipe-tag">{{ tag }}</span>
              </div>
              <h3 class="recipe-title">{{ recipe.title }}</h3>
              <p class="recipe-text">{{ recipe.description }}</p>
              <div class="recipe-meta">
                <span class="recipe-time">⏱️ {{ recipe.prepTime + recipe.cookTime }} min</span>
                <span class="recipe-servings">👥 {{ recipe.servings }} pers.</span>
              </div>
              <NuxtLink :to="`/recettes/${recipe.id}`" class="recipe-link">Lire plus →</NuxtLink>
            </div>
          </div>
        </div>
        
        <div v-if="recipes.length > recipesPerPage" class="creations-footer">
          <button class="voir-plus-btn" @click="loadMore" :disabled="displayedRecipes.length >= recipes.length">
            {{ displayedRecipes.length >= recipes.length ? 'Toutes les recettes affichées' : 'Voir plus' }}
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
interface Recipe {
  id: string
  title: string
  description: string
  image: string
  category: string
  prepTime: number
  cookTime: number
  servings: number
  ingredients: string[]
  instructions: string[]
  tags: string[]
  createdAt: string
}

const recipes = ref<Recipe[]>([])
const loading = ref(true)
const error = ref('')
const recipesPerPage = 4
const displayedCount = ref(recipesPerPage)

const displayedRecipes = computed(() => {
  return recipes.value.slice(0, displayedCount.value)
})

const loadMore = () => {
  displayedCount.value += recipesPerPage
}

const fetchRecipes = async () => {
  try {
    loading.value = true
    error.value = ''
    
    const response = await $fetch('/api/recipes')
    
    if (response.success && Array.isArray(response.data)) {
      recipes.value = response.data
    } else {
      recipes.value = []
    }
  } catch (err: any) {
    console.error('Erreur lors de la récupération des recettes:', err)
    error.value = 'Impossible de charger les recettes. Veuillez réessayer plus tard.'
  } finally {
    loading.value = false
  }
}

// Charger les recettes au montage du composant
onMounted(() => {
  fetchRecipes()
})
</script>

<style scoped>
.recettes-page {
  min-height: 100vh;
  background-color: #f2dbd3;
}

.recettes-hero {
  padding: 6rem 2rem;
  background-color: #f2dbd3;
}

.hero-container {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.hero-image {
  width: 100%;
  height: 500px;
  background-color: #d1d1d1;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  color: #333;
  margin: 0;
  line-height: 1.2;
}

.hero-text {
  font-size: 1.2rem;
  color: #666;
  line-height: 1.7;
  margin: 0;
}

.hero-actions {
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;
}

.btn {
  padding: 1rem 2.5rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary {
  background-color: #c14b25;
  color: white;
  box-shadow: 0 4px 12px rgba(193, 75, 37, 0.3);
}

.btn-primary:hover {
  background-color: #a03d1f;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(193, 75, 37, 0.4);
}

.btn-secondary {
  background-color: transparent;
  color: #333;
  border: 2px solid #333;
}

.btn-secondary:hover {
  background-color: #333;
  color: white;
  transform: translateY(-2px);
}

/* Responsive */
@media (max-width: 1024px) {
  .hero-container {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .hero-title {
    font-size: 3rem;
  }
}

@media (max-width: 768px) {
  .recettes-hero {
    padding: 4rem 1.5rem;
  }

  .hero-image {
    height: 350px;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-text {
    font-size: 1.1rem;
  }

  .hero-actions {
    flex-direction: column;
  }

  .btn {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .hero-image {
    height: 300px;
  }

  .hero-title {
    font-size: 2rem;
  }

  .hero-text {
    font-size: 1rem;
  }
}

/* Section Créations */
.creations {
  padding: 5rem 2rem;
  background-color: #f2dbd3;
}

.creations-container {
  max-width: 1400px;
  margin: 0 auto;
}

.creations-label {
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #333;
  margin: 0 0 1rem 0;
  text-align: center;
}

.creations-title {
  font-size: 3rem;
  font-weight: 700;
  color: #333;
  text-align: center;
  margin: 0 0 1rem 0;
  line-height: 1.2;
}

.creations-subtitle {
  font-size: 1.2rem;
  color: #666;
  text-align: center;
  margin: 0 0 4rem 0;
}

.recipes-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
}

.recipe-card {
  background-color: #fff;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.recipe-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.recipe-image {
  width: 100%;
  height: 250px;
  background-color: #d8d8d8;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.recipe-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.recipe-content {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.recipe-tags {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.recipe-tag {
  font-size: 0.85rem;
  font-weight: 500;
  color: #333;
  background-color: transparent;
  padding: 0;
}

.recipe-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin: 0;
  line-height: 1.3;
}

.recipe-text {
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
  margin: 0;
  flex-grow: 1;
}

.recipe-link {
  font-size: 0.95rem;
  font-weight: 600;
  color: #333;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.3s ease;
}

.recipe-link:hover {
  color: #c14b25;
}

.recipe-meta {
  display: flex;
  gap: 1.5rem;
  font-size: 0.9rem;
  color: #666;
  margin-top: 0.5rem;
}

.recipe-time,
.recipe-servings {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.loading,
.error-message,
.no-recipes {
  text-align: center;
  padding: 3rem;
  font-size: 1.1rem;
  color: #666;
}

.error-message {
  color: #e74c3c;
  background-color: #ffebee;
  border-radius: 8px;
  padding: 2rem;
  margin: 2rem 0;
}

.creations-footer {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.voir-plus-btn {
  padding: 1rem 3rem;
  border: 2px solid #333;
  border-radius: 8px;
  background-color: transparent;
  color: #333;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.voir-plus-btn:hover:not(:disabled) {
  background-color: #333;
  color: white;
  transform: translateY(-2px);
}

.voir-plus-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Responsive pour Créations */
@media (max-width: 768px) {
  .creations {
    padding: 4rem 1.5rem;
  }

  .creations-title {
    font-size: 2.5rem;
  }

  .creations-subtitle {
    font-size: 1.1rem;
    margin-bottom: 3rem;
  }

  .recipes-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .recipe-image {
    height: 200px;
  }

  .recipe-content {
    padding: 1.5rem;
  }

  .recipe-title {
    font-size: 1.3rem;
  }
}

@media (max-width: 480px) {
  .creations-title {
    font-size: 2rem;
  }

  .recipe-content {
    padding: 1.25rem;
  }
}
</style>