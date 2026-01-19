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
        
        <div class="recipes-grid">
          <div class="recipe-card">
            <div class="recipe-image">
              <img src="/images/recette-hero.jpg" alt="Soupe à l'oignon gratinée" class="recipe-img">
            </div>
            <div class="recipe-content">
              <div class="recipe-tags">
                <span class="recipe-tag">Entrées</span>
                <span class="recipe-tag">Lecture rapide</span>
              </div>
              <h3 class="recipe-title">Soupe à l'oignon gratinée</h3>
              <p class="recipe-text">Une recette classique qui demande du temps et de la patience pour réussir.</p>
              <a href="#" class="recipe-link">Lire plus →</a>
            </div>
          </div>
          
          <div class="recipe-card">
            <div class="recipe-image">
              <img src="/images/recette-hero.jpg" alt="Coq au vin avec légumes" class="recipe-img">
            </div>
            <div class="recipe-content">
              <div class="recipe-tags">
                <span class="recipe-tag">Plats</span>
                <span class="recipe-tag">Lecture rapide</span>
              </div>
              <h3 class="recipe-title">Coq au vin avec légumes</h3>
              <p class="recipe-text">Un plat qui raconte l'histoire de la cuisine française authentique et généreuse.</p>
              <a href="#" class="recipe-link">Lire plus →</a>
            </div>
          </div>
          
          <div class="recipe-card">
            <div class="recipe-image">
              <img src="/images/recette-hero.jpg" alt="Tarte aux pommes maison" class="recipe-img">
            </div>
            <div class="recipe-content">
              <div class="recipe-tags">
                <span class="recipe-tag">Desserts</span>
                <span class="recipe-tag">Lecture rapide</span>
              </div>
              <h3 class="recipe-title">Tarte aux pommes maison</h3>
              <p class="recipe-text">Simple et délicieuse, cette tarte montre comment les bons ingrédients suffisent.</p>
              <a href="#" class="recipe-link">Lire plus →</a>
            </div>
          </div>
          
          <div class="recipe-card">
            <div class="recipe-image">
              <img src="/images/recette-hero.jpg" alt="Soupe à l'oignon gratinée" class="recipe-img">
            </div>
            <div class="recipe-content">
              <div class="recipe-tags">
                <span class="recipe-tag">Entrées</span>
                <span class="recipe-tag">Dix minutes</span>
              </div>
              <h3 class="recipe-title">Soupe à l'oignon gratinée</h3>
              <p class="recipe-text">Une recette classique qui demande du temps et de la patience pour réussir.</p>
              <a href="#" class="recipe-link">Voir toutes →</a>
            </div>
          </div>
        </div>
        
        <div class="creations-footer">
          <button class="voir-plus-btn">Voir plus</button>
        </div>
      </div>
    </section>
  </div>
</template>

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

.voir-plus-btn:hover {
  background-color: #333;
  color: white;
  transform: translateY(-2px);
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