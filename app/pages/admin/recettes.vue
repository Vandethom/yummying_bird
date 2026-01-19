<template>
  <div class="admin-page">
    <div class="admin-container">
      <h1 class="admin-title">Ajouter une recette</h1>
      
      <form @submit.prevent="submitRecipe" class="recipe-form">
        <!-- Titre de la recette -->
        <div class="form-group">
          <label for="title" class="form-label">Titre de la recette</label>
          <input 
            v-model="recipe.title" 
            type="text" 
            id="title" 
            class="form-input" 
            placeholder="Ex: Soupe à l'oignon gratinée"
            required
          >
        </div>

        <!-- Description -->
        <div class="form-group">
          <label for="description" class="form-label">Description</label>
          <textarea 
            v-model="recipe.description" 
            id="description" 
            class="form-textarea" 
            rows="4"
            placeholder="Une courte description de la recette..."
            required
          ></textarea>
        </div>

        <!-- Image URL -->
        <div class="form-group">
          <label for="image" class="form-label">URL de l'image</label>
          <input 
            v-model="recipe.image" 
            type="url" 
            id="image" 
            class="form-input" 
            placeholder="/images/recette-hero.jpg"
            required
          >
        </div>

        <!-- Catégorie -->
        <div class="form-group">
          <label for="category" class="form-label">Catégorie</label>
          <select v-model="recipe.category" id="category" class="form-select" required>
            <option value="">Sélectionner une catégorie</option>
            <option value="Entrées">Entrées</option>
            <option value="Plats">Plats</option>
            <option value="Desserts">Desserts</option>
            <option value="Apéritifs">Apéritifs</option>
          </select>
        </div>

        <!-- Temps de préparation -->
        <div class="form-group">
          <label for="prepTime" class="form-label">Temps de préparation (minutes)</label>
          <input 
            v-model.number="recipe.prepTime" 
            type="number" 
            id="prepTime" 
            class="form-input" 
            placeholder="30"
            required
          >
        </div>

        <!-- Temps de cuisson -->
        <div class="form-group">
          <label for="cookTime" class="form-label">Temps de cuisson (minutes)</label>
          <input 
            v-model.number="recipe.cookTime" 
            type="number" 
            id="cookTime" 
            class="form-input" 
            placeholder="45"
            required
          >
        </div>

        <!-- Nombre de personnes -->
        <div class="form-group">
          <label for="servings" class="form-label">Nombre de personnes</label>
          <input 
            v-model.number="recipe.servings" 
            type="number" 
            id="servings" 
            class="form-input" 
            placeholder="4"
            required
          >
        </div>

        <!-- Ingrédients -->
        <div class="form-group">
          <label class="form-label">Ingrédients</label>
          <div v-for="(ingredient, index) in recipe.ingredients" :key="index" class="ingredient-row">
            <input 
              v-model="recipe.ingredients[index]" 
              type="text" 
              class="form-input" 
              placeholder="Ex: 200g de farine"
              required
            >
            <button 
              type="button" 
              @click="removeIngredient(index)" 
              class="btn-remove"
              v-if="recipe.ingredients.length > 1"
            >
              ×
            </button>
          </div>
          <button type="button" @click="addIngredient" class="btn-add">
            + Ajouter un ingrédient
          </button>
        </div>

        <!-- Instructions -->
        <div class="form-group">
          <label class="form-label">Instructions</label>
          <div v-for="(step, index) in recipe.instructions" :key="index" class="instruction-row">
            <span class="step-number">{{ index + 1 }}</span>
            <textarea 
              v-model="recipe.instructions[index]" 
              class="form-textarea" 
              rows="2"
              placeholder="Décrivez l'étape..."
              required
            ></textarea>
            <button 
              type="button" 
              @click="removeInstruction(index)" 
              class="btn-remove"
              v-if="recipe.instructions.length > 1"
            >
              ×
            </button>
          </div>
          <button type="button" @click="addInstruction" class="btn-add">
            + Ajouter une étape
          </button>
        </div>

        <!-- Tags -->
        <div class="form-group">
          <label for="tags" class="form-label">Tags (séparés par des virgules)</label>
          <input 
            v-model="recipe.tags" 
            type="text" 
            id="tags" 
            class="form-input" 
            placeholder="Lecture rapide, Classique, Facile"
          >
        </div>

        <!-- Messages -->
        <div v-if="message" :class="['message', messageType]">
          {{ message }}
        </div>

        <!-- Boutons -->
        <div class="form-actions">
          <button type="submit" class="btn btn-primary" :disabled="isSubmitting">
            {{ isSubmitting ? 'Enregistrement...' : 'Enregistrer la recette' }}
          </button>
          <button type="button" @click="resetForm" class="btn btn-secondary">
            Réinitialiser
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Recipe {
  title: string
  description: string
  image: string
  category: string
  prepTime: number | null
  cookTime: number | null
  servings: number | null
  ingredients: string[]
  instructions: string[]
  tags: string
}

const recipe = ref<Recipe>({
  title: '',
  description: '',
  image: '',
  category: '',
  prepTime: null,
  cookTime: null,
  servings: null,
  ingredients: [''],
  instructions: [''],
  tags: ''
})

const isSubmitting = ref(false)
const message = ref('')
const messageType = ref<'success' | 'error'>('success')

const addIngredient = () => {
  recipe.value.ingredients.push('')
}

const removeIngredient = (index: number) => {
  recipe.value.ingredients.splice(index, 1)
}

const addInstruction = () => {
  recipe.value.instructions.push('')
}

const removeInstruction = (index: number) => {
  recipe.value.instructions.splice(index, 1)
}

const submitRecipe = async () => {
  isSubmitting.value = true
  message.value = ''

  try {
    // Valider que tous les ingrédients et instructions sont remplis
    const hasEmptyIngredients = recipe.value.ingredients.some(i => !i.trim())
    const hasEmptyInstructions = recipe.value.instructions.some(i => !i.trim())

    if (hasEmptyIngredients || hasEmptyInstructions) {
      throw new Error('Veuillez remplir tous les champs d\'ingrédients et d\'instructions')
    }

    const response = await $fetch('http://localhost:3001/api/recipes', {
      method: 'POST',
      body: {
        ...recipe.value,
        tags: recipe.value.tags.split(',').map(t => t.trim()).filter(t => t)
      }
    })

    message.value = 'Recette ajoutée avec succès !'
    messageType.value = 'success'
    
    // Réinitialiser le formulaire après 2 secondes
    setTimeout(() => {
      resetForm()
      message.value = ''
    }, 2000)
  } catch (error: any) {
    message.value = error.message || 'Une erreur est survenue lors de l\'enregistrement'
    messageType.value = 'error'
  } finally {
    isSubmitting.value = false
  }
}

const resetForm = () => {
  recipe.value = {
    title: '',
    description: '',
    image: '',
    category: '',
    prepTime: null,
    cookTime: null,
    servings: null,
    ingredients: [''],
    instructions: [''],
    tags: ''
  }
}
</script>

<style scoped>
.admin-page {
  min-height: 100vh;
  background: #f5f5f5;
  padding: 2rem 1rem;
}

.admin-container {
  max-width: 800px;
  margin: 0 auto;
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.admin-title {
  font-size: 2rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 2rem;
  text-align: center;
}

.recipe-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-label {
  font-weight: 600;
  color: #2c3e50;
  font-size: 0.95rem;
}

.form-input,
.form-textarea,
.form-select {
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.form-input:focus,
.form-textarea:focus,
.form-select:focus {
  outline: none;
  border-color: #3498db;
}

.form-textarea {
  resize: vertical;
  font-family: inherit;
}

.ingredient-row,
.instruction-row {
  display: flex;
  gap: 0.5rem;
  align-items: flex-start;
}

.instruction-row {
  position: relative;
}

.step-number {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 28px;
  height: 28px;
  background: #3498db;
  color: white;
  border-radius: 50%;
  font-weight: 600;
  font-size: 0.85rem;
  margin-top: 0.75rem;
}

.btn-add,
.btn-remove {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-add {
  background: #e8f5e9;
  color: #27ae60;
  margin-top: 0.5rem;
}

.btn-add:hover {
  background: #27ae60;
  color: white;
}

.btn-remove {
  background: #ffebee;
  color: #e74c3c;
  min-width: 36px;
  font-size: 1.5rem;
  padding: 0.25rem 0.5rem;
  line-height: 1;
}

.btn-remove:hover {
  background: #e74c3c;
  color: white;
}

.message {
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  font-weight: 600;
}

.message.success {
  background: #e8f5e9;
  color: #27ae60;
  border: 1px solid #27ae60;
}

.message.error {
  background: #ffebee;
  color: #e74c3c;
  border: 1px solid #e74c3c;
}

.form-actions {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.btn {
  padding: 0.875rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  flex: 1;
}

.btn-primary {
  background: #3498db;
  color: white;
}

.btn-primary:hover:not(:disabled) {
  background: #2980b9;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(52, 152, 219, 0.4);
}

.btn-primary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.btn-secondary {
  background: #ecf0f1;
  color: #2c3e50;
}

.btn-secondary:hover {
  background: #bdc3c7;
}

@media (max-width: 768px) {
  .admin-container {
    padding: 1.5rem;
  }

  .form-actions {
    flex-direction: column;
  }
}
</style>
