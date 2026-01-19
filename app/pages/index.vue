<template>
  <div class="home">
    <section class="hero">
      <div class="hero-container">

        <div class="hero-content">
          <h1 class="hero-title">Cuisine simple, honnête et gourmande</h1>
          <p class="hero-text">
            Bienvenue à YummyingBird, où chaque assiette raconte une histoire. 
            Je cuisine ce que la terre me donne, quand elle le donne.
          </p>
          <div class="hero-actions">
            <button class="btn btn-primary">Réserver</button>
            <button class="btn btn-secondary">Découvrir</button>
          </div>
        </div>

        <div class="hero-images">
          <img src="/images/food1.jpg" alt="Plat principal" class="food-main">
          <img src="/images/food2.jpg" alt="Plat 2" class="food-secondary food-bottom-left">
          <img src="/images/food3.jpg" alt="Plat 3" class="food-secondary food-top-right">
        </div>
      </div>
    </section>

    <!-- Section Ce qui nous définit -->
    <section class="definition">
      <div class="definition-container">
        <h2 class="section-title">Ce qui nous définit</h2>
        <p class="section-subtitle">Les saisons dictent nos menus, jamais l'inverse</p>
        
        <div class="cards-grid">
          <div class="card">
            <div class="card-icon">🌿</div>
            <h3 class="card-title">Ingrédients de saison</h3>
            <p class="card-text">Nous travaillons avec les producteurs locaux qui connaissent leur métier.</p>
          </div>
          
          <div class="card">
            <div class="card-icon">☕</div>
            <h3 class="card-title">Sourcing local</h3>
            <p class="card-text">Chaque ingrédient vient d'une ferme, d'un verger, d'une terre qu'on respecte.</p>
          </div>
          
          <div class="card">
            <div class="card-icon">👥</div>
            <h3 class="card-title">Votre expérience personnalisée</h3>
            <p class="card-text">Vos goûts, vos restrictions, vos envies guident notre cuisine.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Comment nous travaillons -->
    <section class="how-we-work">
      <div class="how-container">
        <h2 class="section-title">Comment nous travaillons</h2>
        
        <div class="work-cards">
          <div class="work-card work-card-large">
            <div class="work-label">Dîner</div>
            <h3 class="work-title">Repas sur place</h3>
            <p class="work-text">Venez à notre table. Nous cuisinons pour vous, devant vous, avec ce qu'il y a de meilleur.</p>
            <div class="work-actions">
              <button class="work-btn work-btn-primary">Réserver</button>
              <button class="work-btn work-btn-secondary">Voir →</button>
            </div>
          </div>
          
          <div class="work-card">
            <h3 class="work-title">Événements privés</h3>
            <p class="work-text">Célébrez vos moments importants avec une cuisine qui compte.</p>
            <button class="work-btn work-btn-secondary">Voir →</button>
          </div>
          
          <div class="work-card">
            <h3 class="work-title">Ateliers de cuisine</h3>
            <p class="work-text">Apprenez les gestes simples qui font la différence.</p>
            <button class="work-btn work-btn-secondary">Voir →</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Newsletter -->
    <section class="newsletter">
      <div class="newsletter-container">
        <div class="newsletter-content">
          <h2 class="newsletter-title">Recettes et nouvelles</h2>
          <p class="newsletter-text">
            Inscrivez-vous pour recevoir les recettes du chef et les actualités saisonnières.
          </p>
          <form class="newsletter-form">
            <input type="email" placeholder="Votre email" class="newsletter-input" required>
            <button type="submit" class="newsletter-btn">S'inscrire</button>
          </form>
          <p class="newsletter-disclaimer">
            En vous inscrivant, vous acceptez nos conditions d'utilisation.
          </p>
        </div>
        
        <div class="newsletter-image">
          <!-- <img src="/images/newsletter.jpg" alt="Newsletter" class="newsletter-img"> -->
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home {
  min-height: 100vh;
}

.hero {
  padding: 4rem 2rem;
  background-color: #f2dbd3;
}

.hero-container {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 4rem;
}

/* Images à gauche */
.hero-images {
  flex: 1;
  position: relative;
  height: 600px;
  min-width: 530px;
}

.food-main {
  width: 530px;
  height: 600px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.food-secondary {
  position: absolute;
  width: 245px;
  height: 170px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  border: 4px solid white;
}

.food-bottom-left {
  bottom: 20px;
  left: -40px;
}

.food-top-right {
  top: 20px;
  right: -40px;
}

/* Contenu texte à droite */
.hero-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
  color: #333;
  line-height: 1.2;
  margin: 0;
}

.hero-text {
  font-size: 1.25rem;
  color: #666;
  line-height: 1.6;
  margin: 0;
}

.hero-actions {
  display: flex;
  gap: 1.5rem;
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
  color: #c14b25;
  border: 2px solid #c14b25;
}

.btn-secondary:hover {
  background-color: #c14b25;
  color: white;
  transform: translateY(-2px);
}

/* Responsive */
@media (max-width: 1024px) {
  .hero-container {
    flex-direction: column-reverse;
    gap: 3rem;
  }

  .hero-images {
    min-width: auto;
    width: 100%;
    max-width: 530px;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-text {
    font-size: 1.1rem;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 3rem 1.5rem;
  }

  .hero-images {
    height: 500px;
    min-width: auto;
  }

  .food-main {
    width: 100%;
    max-width: 440px;
    height: 500px;
  }

  .food-bottom-left {
    left: -20px;
    bottom: 10px;
  }

  .food-top-right {
    right: -20px;
    top: 10px;
  }

  .hero-title {
    font-size: 2rem;
  }

  .hero-text {
    font-size: 1rem;
  }

  .hero-actions {
    flex-direction: column;
  }

  .btn {
    width: 100%;
    padding: 0.9rem 2rem;
  }
}

@media (max-width: 480px) {
  .hero-images {
    height: 400px;
  }

  .food-main {
    max-width: 350px;
    height: 400px;
  }

  .food-secondary {
    width: 180px;
    height: 125px;
  }

  .hero-title {
    font-size: 1.75rem;
  }
}

/* Section Définition */
.definition {
  padding: 5rem 2rem;
  background-color: #f2dbd3;
}

.definition-container {
  max-width: 1400px;
  margin: 0 auto;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  text-align: center;
  margin: 0 0 1rem 0;
}

.section-subtitle {
  font-size: 1.25rem;
  color: #666;
  text-align: center;
  margin: 0 0 4rem 0;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.card {
  background-color: #fff;
  padding: 3rem 2rem;
  border-radius: 12px;
  border: 1px solid #e0e0e0;
  text-align: center;
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.card-icon {
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
}

.card-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin: 0 0 1rem 0;
}

.card-text {
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
  margin: 0;
}

/* Responsive pour la section définition */
@media (max-width: 768px) {
  .definition {
    padding: 4rem 1.5rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .section-subtitle {
    font-size: 1.1rem;
    margin-bottom: 3rem;
  }

  .cards-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .card {
    padding: 2.5rem 1.5rem;
  }

  .card-icon {
    font-size: 3rem;
  }

  .card-title {
    font-size: 1.3rem;
  }

  .card-text {
    font-size: 1rem;
  }
}

/* Section Comment nous travaillons */
.how-we-work {
  padding: 5rem 2rem;
  background-color: #f2dbd3;
}

.how-container {
  max-width: 1400px;
  margin: 0 auto;
}

.work-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3rem;
}

.work-card {
  background-color: #fff;
  padding: 3rem 2rem;
  border-radius: 12px;
  border: 1px solid #e0e0e0;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  transition: all 0.3s ease;
}

.work-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.work-label {
  font-size: 0.9rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #666;
}

.work-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin: 0;
  line-height: 1.3;
}

.work-text {
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
  margin: 0;
  flex-grow: 1;
}

.work-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.work-btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.work-btn-primary {
  background-color: #c14b25;
  color: white;
  box-shadow: 0 4px 12px rgba(193, 75, 37, 0.3);
}

.work-btn-primary:hover {
  background-color: #a03d1f;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(193, 75, 37, 0.4);
}

.work-btn-secondary {
  background-color: transparent;
  color: #c14b25;
  border: 2px solid #c14b25;
}

.work-btn-secondary:hover {
  background-color: #c14b25;
  color: white;
  transform: translateY(-2px);
}

/* Responsive pour Comment nous travaillons */
@media (max-width: 1024px) {
  .work-cards {
    grid-template-columns: 1fr;
  }

  .work-card-large {
    grid-column: span 1;
  }
}

@media (max-width: 768px) {
  .how-we-work {
    padding: 4rem 1.5rem;
  }

  .work-card {
    padding: 2.5rem 2rem;
  }

  .work-title {
    font-size: 1.5rem;
  }

  .work-actions {
    flex-direction: column;
  }

  .work-btn {
    width: 100%;
  }
}

/* Section Newsletter */
.newsletter {
  padding: 5rem 2rem;
  background-color: #1a3d5c;
}

.newsletter-container {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  border: 2px dotted rgba(255, 255, 255, 0.3);
  padding: 4rem;
  border-radius: 16px;
}

.newsletter-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.newsletter-title {
  font-size: 3rem;
  font-weight: 700;
  color: white;
  margin: 0;
  line-height: 1.2;
}

.newsletter-text {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  margin: 0;
}

.newsletter-form {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.newsletter-input {
  flex: 1;
  padding: 1rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  backdrop-filter: blur(10px);
}

.newsletter-input::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

.newsletter-input:focus {
  outline: 2px solid rgba(255, 255, 255, 0.3);
  background-color: rgba(255, 255, 255, 0.15);
}

.newsletter-btn {
  padding: 1rem 2.5rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  background-color: #c14b25;
  color: white;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.newsletter-btn:hover {
  background-color: #a03d1f;
  transform: translateY(-2px);
}

.newsletter-disclaimer {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
}

.newsletter-image {
  width: 100%;
  height: 400px;
  background-color: #d1d1d1;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.newsletter-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Responsive pour Newsletter */
@media (max-width: 1024px) {
  .newsletter-container {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}

@media (max-width: 768px) {
  .newsletter {
    padding: 4rem 1.5rem;
  }

  .newsletter-container {
    padding: 3rem 2rem;
  }

  .newsletter-title {
    font-size: 2.5rem;
  }

  .newsletter-text {
    font-size: 1rem;
  }

  .newsletter-form {
    flex-direction: column;
  }

  .newsletter-btn {
    width: 100%;
  }

  .newsletter-image {
    height: 300px;
  }
}

@media (max-width: 480px) {
  .newsletter-title {
    font-size: 2rem;
  }

  .newsletter-container {
    padding: 2rem 1.5rem;
  }
}
</style>
