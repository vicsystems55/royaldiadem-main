<template>
  <header class="bg-gray-800 text-white p-4">
    <div class="flex flex-col md:flex-row md:justify-between md:items-center">
      <!-- Logo and Hamburger -->
      <div class="flex justify-between items-center">
        <!-- Logo Image -->
        <img src="@/assets/logo.png" alt="Royal Diadem Logo" class="h-20" />

        <!-- Hamburger Button (mobile only) -->
        <button @click="toggleMenu" class="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <!-- Navigation -->
      <nav
        :class="[isMenuOpen ? 'block' : 'hidden', 'mt-4 md:mt-0 md:flex md:items-center gap-4']"
      >
        <router-link to="/" class="block md:inline-block px-2 py-1 hover:underline">Home</router-link>
        <router-link to="/blog" class="block md:inline-block px-2 py-1 hover:underline">Blog</router-link>
        <router-link to="/contact" class="block md:inline-block px-2 py-1 hover:underline">Contact</router-link>
        <router-link to="/training" class="block md:inline-block px-2 py-1 hover:underline">Training</router-link>
        <router-link to="/clinic" class="block md:inline-block px-2 py-1 hover:underline">Clinic</router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isMenuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
};
</script>
