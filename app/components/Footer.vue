<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-top">
        <!-- Logo -->
        <div class="footer-section footer-logo">
          <div class="logo-text">Logo</div>
        </div>

        <!-- Navigation -->
        <div class="footer-section">
          <h4 class="footer-title">Navigation</h4>
          <ul class="footer-links">
            <li><NuxtLink to="/">Accueil</NuxtLink></li>
            <li><NuxtLink to="/carte">Carte</NuxtLink></li>
            <li><a href="#">Réservations</a></li>
            <li><NuxtLink to="/recettes">Recettes</NuxtLink></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <!-- Découvrir -->
        <div class="footer-section">
          <h4 class="footer-title">Découvrir</h4>
          <ul class="footer-links">
            <li><a href="#">Entrées</a></li>
            <li><a href="#">Plats</a></li>
            <li><a href="#">Desserts</a></li>
            <li><a href="#">Boissons</a></li>
            <li><a href="#">Spécialités</a></li>
          </ul>
        </div>

        <!-- Ressources -->
        <div class="footer-section">
          <h4 class="footer-title">Ressources</h4>
          <ul class="footer-links">
            <li><NuxtLink to="/a-propos">À propos</NuxtLink></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Galerie</a></li>
            <li><a href="#">Événements</a></li>
            <li><a href="#">Partenaires</a></li>
          </ul>
        </div>

        <!-- Infolettre -->
        <div class="footer-section footer-newsletter">
          <h4 class="footer-title">Infolettre</h4>
          <p class="newsletter-text">
            Restez informé de nos nouveaux plats et événements culinaires.
          </p>
          <form class="newsletter-form">
            <input 
              type="email" 
              placeholder="Votre courriel" 
              class="newsletter-input"
              required
            >
            <button type="submit" class="newsletter-btn">S'abonner</button>
          </form>
          <p class="newsletter-disclaimer">
            En vous abonnant, vous acceptez notre politique de confidentialité.
          </p>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="footer-bottom">
        <div class="footer-copyright">
          © 2024 YummyingBird. Tous droits réservés.
        </div>
        <div class="footer-legal">
          <a href="#">Politique de confidentialité</a>
          <a href="#">Conditions d'utilisation</a>
          <a href="#">Paramètres des cookies</a>
        </div>
        <div class="footer-social">
          <a href="#" aria-label="Facebook" class="social-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a href="#" aria-label="Instagram" class="social-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a href="#" aria-label="X (Twitter)" class="social-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a href="#" aria-label="LinkedIn" class="social-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="#" aria-label="YouTube" class="social-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #2c4a5e;
  color: white;
  padding: 4rem 2rem 2rem;
}

.footer-container {
  max-width: 1400px;
  margin: 0 auto;
}

.footer-top {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1.5fr;
  gap: 3rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
}

.footer-logo {
  display: flex;
  align-items: flex-start;
}

.logo-text {
  font-size: 2rem;
  font-weight: 700;
  font-style: italic;
  color: white;
}

.footer-section {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.footer-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
  color: white;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-links a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: white;
}

.footer-newsletter {
  gap: 1rem;
}

.newsletter-text {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
  margin: 0;
}

.newsletter-form {
  display: flex;
  gap: 0.5rem;
}

.newsletter-input {
  flex: 1;
  padding: 0.75rem 1rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 6px;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 0.95rem;
}

.newsletter-input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.newsletter-input:focus {
  outline: none;
  border-color: rgba(255, 255, 255, 0.5);
  background-color: rgba(255, 255, 255, 0.15);
}

.newsletter-btn {
  padding: 0.75rem 1.5rem;
  background-color: white;
  color: #2c4a5e;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.newsletter-btn:hover {
  background-color: #f0f0f0;
  transform: translateY(-1px);
}

.newsletter-disclaimer {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
  line-height: 1.4;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  gap: 2rem;
  flex-wrap: wrap;
}

.footer-copyright {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
}

.footer-legal {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
}

.footer-legal a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.footer-legal a:hover {
  color: white;
  text-decoration: underline;
}

.footer-social {
  display: flex;
  gap: 1rem;
}

.social-link {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.7);
  transition: color 0.3s ease;
}

.social-link:hover {
  color: white;
}

/* Responsive */
@media (max-width: 1024px) {
  .footer-top {
    grid-template-columns: repeat(3, 1fr);
  }

  .footer-newsletter {
    grid-column: span 3;
  }
}

@media (max-width: 768px) {
  .footer {
    padding: 3rem 1.5rem 1.5rem;
  }

  .footer-top {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  .footer-logo {
    grid-column: span 2;
  }

  .footer-newsletter {
    grid-column: span 2;
  }

  .newsletter-form {
    flex-direction: column;
  }

  .newsletter-btn {
    width: 100%;
  }

  .footer-bottom {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
  }

  .footer-legal {
    flex-direction: column;
    gap: 0.75rem;
  }
}

@media (max-width: 480px) {
  .footer-top {
    grid-template-columns: 1fr;
  }

  .footer-logo,
  .footer-newsletter {
    grid-column: span 1;
  }
}
</style>
