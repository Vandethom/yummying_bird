<template>
  <div class="recipe-detail-page">
    <!-- Loading State -->
    <div v-if="loading" class="loading-container">
      <div class="loading-spinner"></div>
      <p>Chargement de la recette...</p>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="error-container">
      <h2>Erreur</h2>
      <p>{{ error }}</p>
      <NuxtLink to="/recettes" class="btn-back">Retour aux recettes</NuxtLink>
    </div>

    <!-- Recipe Content -->
    <div v-else-if="recipe" class="recipe-detail">
      <!-- Header avec image -->
      <section class="recipe-header">
        <div class="header-container">
          <NuxtLink to="/recettes" class="back-link">
            ← Retour aux recettes
          </NuxtLink>
          
          <div class="header-content">
            <div class="header-image">
              <img :src="recipe.image" :alt="recipe.title" class="recipe-hero-img">
            </div>
            
            <div class="header-info">
              <div class="recipe-tags">
                <span class="recipe-tag">{{ recipe.category }}</span>
                <span v-for="tag in recipe.tags" :key="tag" class="recipe-tag">{{ tag }}</span>
              </div>
              
              <h1 class="recipe-title">{{ recipe.title }}</h1>
              <p class="recipe-description">{{ recipe.description }}</p>
              
              <div class="recipe-meta">
                <div class="meta-item">
                  <span class="meta-icon">⏱️</span>
                  <div class="meta-content">
                    <span class="meta-label">Préparation</span>
                    <span class="meta-value">{{ recipe.prepTime }} min</span>
                  </div>
                </div>
                
                <div class="meta-item">
                  <span class="meta-icon">🍳</span>
                  <div class="meta-content">
                    <span class="meta-label">Cuisson</span>
                    <span class="meta-value">{{ recipe.cookTime }} min</span>
                  </div>
                </div>
                
                <div class="meta-item">
                  <span class="meta-icon">👥</span>
                  <div class="meta-content">
                    <span class="meta-label">Personnes</span>
                    <span class="meta-value">{{ recipe.servings }}</span>
                  </div>
                </div>
                
                <div class="meta-item">
                  <span class="meta-icon">⏲️</span>
                  <div class="meta-content">
                    <span class="meta-label">Total</span>
                    <span class="meta-value">{{ recipe.prepTime + recipe.cookTime }} min</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Ingrédients et Instructions -->
      <section class="recipe-body">
        <div class="body-container">
          <!-- Ingrédients -->
          <div class="ingredients-section">
            <h2 class="section-title">Ingrédients</h2>
            <ul class="ingredients-list">
              <li v-for="(ingredient, index) in recipe.ingredients" :key="index" class="ingredient-item">
                <span class="ingredient-bullet">•</span>
                <span class="ingredient-text">{{ ingredient }}</span>
              </li>
            </ul>
          </div>

          <!-- Instructions -->
          <div class="instructions-section">
            <h2 class="section-title">Préparation</h2>
            <ol class="instructions-list">
              <li v-for="(instruction, index) in recipe.instructions" :key="index" class="instruction-item">
                <span class="instruction-number">{{ index + 1 }}</span>
                <p class="instruction-text">{{ instruction }}</p>
              </li>
            </ol>
          </div>
        </div>
      </section>

      <!-- Actions -->
      <section class="recipe-actions">
        <div class="actions-container">
          <button class="btn btn-primary" @click="printRecipe">
            🖨️ Imprimer
          </button>
          <button class="btn btn-secondary" @click="shareRecipe">
            📤 Partager
          </button>
        </div>
      </section>
    </div>
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

const route = useRoute()
const recipe = ref<Recipe | null>(null)
const loading = ref(true)
const error = ref('')

const fetchRecipe = async () => {
  try {
    loading.value = true
    error.value = ''
    
    const response = await $fetch(`/api/recipes/${route.params.id}`)
    
    console.log('Response:', response) // Debug
    
    if (response && response.success && response.data) {
      recipe.value = response.data
    } else if (response && response.data) {
      // Au cas où la structure est différente
      recipe.value = response.data
    } else {
      error.value = 'Recette non trouvée'
    }
  } catch (err: any) {
    console.error('Erreur lors de la récupération de la recette:', err)
    error.value = err.data?.message || err.message || 'Impossible de charger la recette. Assurez-vous que l\'API Node.js est démarrée sur le port 3001.'
  } finally {
    loading.value = false
  }
}

const printRecipe = () => {
  window.print()
}

const shareRecipe = async () => {
  const url = window.location.href
  const title = recipe.value?.title || 'Recette'
  
  if (navigator.share) {
    try {
      await navigator.share({
        title: title,
        text: recipe.value?.description || '',
        url: url
      })
    } catch (err) {
      console.log('Partage annulé')
    }
  } else {
    // Fallback: copier le lien
    navigator.clipboard.writeText(url)
    alert('Lien copié dans le presse-papier !')
  }
}

// Charger la recette au montage
onMounted(() => {
  fetchRecipe()
})

// SEO
useHead(() => ({
  title: recipe.value ? `${recipe.value.title} - YummyingBird` : 'Recette - YummyingBird',
  meta: [
    {
      name: 'description',
      content: recipe.value?.description || 'Découvrez cette délicieuse recette'
    }
  ]
}))
</script>

<style scoped>
.recipe-detail-page {
  min-height: 100vh;
  background: #f2dbd3;
}

/* Loading & Error */
.loading-container,
.error-container {
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  text-align: center;
}

.loading-spinner {
  width: 50px;
  height: 50px;
  border: 4px solid #ddd;
  border-top-color: #c14b25;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 1rem;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.error-container h2 {
  font-size: 2rem;
  color: #e74c3c;
  margin-bottom: 1rem;
}

.btn-back {
  display: inline-block;
  padding: 0.875rem 2rem;
  background: #c14b25;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  margin-top: 1.5rem;
  transition: all 0.3s ease;
}

.btn-back:hover {
  background: #a03d1f;
  transform: translateY(-2px);
}

/* Recipe Header */
.recipe-header {
  background: #f2dbd3;
  padding: 3rem 2rem;
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #333;
  text-decoration: none;
  font-weight: 600;
  margin-bottom: 2rem;
  transition: color 0.3s ease;
}

.back-link:hover {
  color: #c14b25;
}

.header-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;
}

.header-image {
  width: 100%;
  height: 500px;
  border-radius: 12px;
  overflow: hidden;
  background: #d8d8d8;
}

.recipe-hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.header-info {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.recipe-tags {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.recipe-tag {
  font-size: 0.9rem;
  font-weight: 600;
  color: #c14b25;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.recipe-title {
  font-size: 3rem;
  font-weight: 700;
  color: #333;
  margin: 0;
  line-height: 1.2;
}

.recipe-description {
  font-size: 1.2rem;
  color: #666;
  line-height: 1.7;
  margin: 0;
}

.recipe-meta {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-top: 1rem;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem;
  background: white;
  border-radius: 8px;
}

.meta-icon {
  font-size: 2rem;
}

.meta-content {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.meta-label {
  font-size: 0.85rem;
  color: #999;
  font-weight: 500;
}

.meta-value {
  font-size: 1.1rem;
  color: #333;
  font-weight: 700;
}

/* Recipe Body */
.recipe-body {
  background: white;
  padding: 4rem 2rem;
}

.body-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 4rem;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  color: #333;
  margin: 0 0 2rem 0;
}

/* Ingrédients */
.ingredients-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.ingredient-item {
  display: flex;
  align-items: start;
  gap: 1rem;
  padding: 1rem;
  background: #f9f9f9;
  border-radius: 8px;
}

.ingredient-bullet {
  color: #c14b25;
  font-size: 1.5rem;
  line-height: 1;
}

.ingredient-text {
  font-size: 1rem;
  color: #333;
  line-height: 1.6;
}

/* Instructions */
.instructions-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  counter-reset: step;
}

.instruction-item {
  display: flex;
  gap: 1.5rem;
  align-items: start;
}

.instruction-number {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  height: 40px;
  background: #c14b25;
  color: white;
  border-radius: 50%;
  font-weight: 700;
  font-size: 1.1rem;
  flex-shrink: 0;
}

.instruction-text {
  font-size: 1.05rem;
  color: #333;
  line-height: 1.7;
  margin: 0.5rem 0 0 0;
}

/* Actions */
.recipe-actions {
  background: #f2dbd3;
  padding: 3rem 2rem;
}

.actions-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  gap: 1.5rem;
  justify-content: center;
}

.btn {
  padding: 1rem 2.5rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-primary {
  background: #c14b25;
  color: white;
}

.btn-primary:hover {
  background: #a03d1f;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(193, 75, 37, 0.4);
}

.btn-secondary {
  background: white;
  color: #333;
  border: 2px solid #333;
}

.btn-secondary:hover {
  background: #333;
  color: white;
  transform: translateY(-2px);
}

/* Responsive */
@media (max-width: 1024px) {
  .header-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .body-container {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .recipe-title {
    font-size: 2.5rem;
  }
}

@media (max-width: 768px) {
  .recipe-header,
  .recipe-body,
  .recipe-actions {
    padding: 2rem 1.5rem;
  }

  .header-image {
    height: 300px;
  }

  .recipe-title {
    font-size: 2rem;
  }

  .recipe-meta {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .section-title {
    font-size: 1.75rem;
  }

  .actions-container {
    flex-direction: column;
  }

  .btn {
    width: 100%;
    justify-content: center;
  }
}

/* Print styles */
@media print {
  .back-link,
  .recipe-actions {
    display: none;
  }

  .recipe-detail-page {
    background: white;
  }
}
</style>
