<template>
  <header class="header">
    <div class="header-container">
      <!-- Logo à gauche -->
      <div class="logo">
        <img src="/images/logo.png" alt="Logo">
      </div>

      <!-- Navigation au centre -->
      <nav class="nav">
        <NuxtLink to="/" class="nav-link">Accueil</NuxtLink>
        <NuxtLink to="/carte" class="nav-link">Carte</NuxtLink>
        <NuxtLink to="/recettes" class="nav-link">Recettes</NuxtLink>
        <NuxtLink to="/a-propos" class="nav-link">A propos</NuxtLink>
      </nav>

      <!-- Bouton Réserver à droite -->
      <div class="actions">
        <button class="btn-reserver">Réserver</button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  background-color: #d6e5f2;
  padding: 1rem 2rem;
  position: sticky;
  height: 72px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 0;
  display: flex;
  align-items: center;
}

.header-container {
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.logo {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  background-color: #d6e5f2;
  padding: 0.5rem;
  border-radius: 8px;
}

.logo img {
  max-height: 50px;
  width: auto;
  object-fit: contain;
}

.logo-placeholder {
  font-weight: bold;
  font-size: 1.5rem;
  color: #333;
}

.nav {
  display: flex;
  align-items: center;
  gap: 2rem;
  flex: 1;
  justify-content: center;
}

.nav-link {
  color: #333;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  transition: color 0.3s ease;
  position: relative;
}

.nav-link:hover {
  color: #c14b25;
}

.nav-link.router-link-active {
  color: #c14b25;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #c14b25;
  transition: width 0.3s ease;
}

.nav-link:hover::after,
.nav-link.router-link-active::after {
  width: 100%;
}

.actions {
  flex-shrink: 0;
}

.btn-reserver {
  background-color: #c14b25;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(193, 75, 37, 0.3);
}

.btn-reserver:hover {
  background-color: #a03d1f;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(193, 75, 37, 0.4);
}

.btn-reserver:active {
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(193, 75, 37, 0.3);
}

/* Responsive */
@media (max-width: 768px) {
  .header {
    padding: 1rem;
  }

  .header-container {
    gap: 1rem;
  }

  .nav {
    gap: 1rem;
  }

  .nav-link {
    font-size: 0.9rem;
  }

  .btn-reserver {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }
}

@media (max-width: 576px) {
  .header-container {
    flex-wrap: wrap;
  }

  .logo {
    flex: 1;
  }

  .nav {
    order: 3;
    width: 100%;
    justify-content: space-around;
    margin-top: 0.5rem;
  }

  .nav-link {
    font-size: 0.85rem;
  }

  .btn-reserver {
    padding: 0.5rem 1rem;
    font-size: 0.85rem;
  }
}
</style>
