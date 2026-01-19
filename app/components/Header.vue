<template>
  <header class="header">
    <div class="header-container">
      <!-- Logo à gauche -->
      <div class="logo">
        <img src="/images/logo.png" alt="Logo">
      </div>

      <!-- Burger menu pour mobile -->
      <button class="burger-menu" @click="toggleMenu" :class="{ 'active': isMenuOpen }">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <!-- Navigation au centre -->
      <nav class="nav" :class="{ 'active': isMenuOpen }">
        <NuxtLink to="/" class="nav-link" @click="closeMenu">Accueil</NuxtLink>
        <NuxtLink to="/carte" class="nav-link" @click="closeMenu">Carte</NuxtLink>
        <NuxtLink to="/recettes" class="nav-link" @click="closeMenu">Recettes</NuxtLink>
        <NuxtLink to="/a-propos" class="nav-link" @click="closeMenu">A propos</NuxtLink>
        
        <!-- Bouton Réserver dans le menu mobile -->
        <button class="btn-reserver mobile-only" @click="closeMenu">Réserver</button>
      </nav>

      <!-- Bouton Réserver à droite (desktop uniquement) -->
      <div class="actions desktop-only">
        <button class="btn-reserver">Réserver</button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

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

/* Burger Menu */
.burger-menu {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1001;
}

.burger-menu span {
  width: 25px;
  height: 3px;
  background-color: #333;
  transition: all 0.3s ease;
  border-radius: 2px;
}

.burger-menu.active span:nth-child(1) {
  transform: rotate(45deg) translate(8px, 8px);
}

.burger-menu.active span:nth-child(2) {
  opacity: 0;
}

.burger-menu.active span:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -7px);
}

.mobile-only {
  display: none;
}

.desktop-only {
  display: flex;
}

/* Responsive */
@media (max-width: 1024px) {
  .nav {
    gap: 1.5rem;
  }

  .nav-link {
    font-size: 0.95rem;
  }
}

@media (max-width: 768px) {
  .header {
    padding: 1rem 1.5rem;
    height: auto;
  }

  .burger-menu {
    display: flex;
  }

  .desktop-only {
    display: none;
  }

  .nav {
    position: fixed;
    top: 72px;
    left: 0;
    right: 0;
    background: #d6e5f2;
    flex-direction: column;
    padding: 2rem;
    gap: 1.5rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transform: translateX(-100%);
    transition: transform 0.3s ease;
    max-height: calc(100vh - 72px);
    overflow-y: auto;
  }

  .nav.active {
    transform: translateX(0);
  }

  .nav-link {
    font-size: 1.1rem;
    padding: 0.5rem 0;
    width: 100%;
    text-align: left;
  }

  .nav-link::after {
    display: none;
  }

  .mobile-only {
    display: block;
    width: 100%;
    margin-top: 1rem;
  }
}

@media (max-width: 480px) {
  .header {
    padding: 1rem;
  }

  .logo img {
    max-height: 40px;
  }

  .nav {
    padding: 1.5rem 1rem;
  }

  .nav-link {
    font-size: 1rem;
  }
}
</style>
