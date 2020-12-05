<template>
  <div class="relative z-20 pt-4 pb-4">
    <div class="max-w-6xl mx-auto px-4 sm:px-0">
      <nav class="relative flex items-center justify-between sm:h-6 md:justify-center">
        <div class="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
          <div class="flex items-center justify-between w-full md:w-auto">
            <nuxt-link :to=" { name : 'index' }">
              <strong class="text-2xl text-indigo-1 font-courgette">iaLearn</strong>
            </nuxt-link>
            <div class="-mr-2 flex items-center md:hidden">
              <button @click.prevent=" menuOpen = !menuOpen " type="button" class="transform -translate-y-1 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <!-- Link on middle <div class="hidden md:block"> <nuxt-link :to=" { name : '' } " class="ml-10 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out">Cours</nuxt-link> </div> -->
        <div class="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 space-x-2 md:right-0">
          <button class="inline-flex"> <!-- @click.prevent="$modal.show('login-modal')" -->
            <nuxt-link :to="{ name : 'auth-login' }" class="inline-flex items-center text-sm text-gray-700 leading-6 font-medium border border-transparent rounded-md focus:outline-none transition duration-150 ease-in-out py-2">
              <svg class="fill-current text-gray-900 w-6 h-auto" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                <path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"></path>
              </svg>
            </nuxt-link>
          </button>
        </div>
      </nav>
    </div>
    <div class="max-w-6xl mx-auto border-b border-gray-300 mt-2"></div>
    <div class="max-w-6xl mx-auto mt-3">
      <div class="hidden md:block space-x-6">
          <nuxt-link :to=" { name : '' } " class="text-gray-900 text-sm font-semibold italic tracking-wide hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out">Universités</nuxt-link>
          <span class="border-l border-gray-500 px-1"></span>
          <nuxt-link :to=" { name : 'index' } " class="text-gray-900 text-sm font-semibold tracking-wide hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out">Accueil</nuxt-link>
          <nuxt-link :to=" { name : 'courses' } " class="text-gray-900 text-sm font-semibold tracking-wide hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out">Cours</nuxt-link>
        </div>
    </div>
    <!-- Hamburger Menu - Responsive mobile -->
    <div class="absolute z-50 top-0 inset-x-0 p-2 px-4 transition transform origin-top-right md:hidden" v-if="menuOpen">
      <div class="rounded-lg shadow-md">
        <div class="rounded-lg bg-white shadow-xs overflow-hidden">
          <div class="flex items-center justify-between px-5 pt-4">
            <div>
              <strong class="text-2xl text-indigo-1 font-courgette">iaLearn</strong>
            </div>
            <div class="-mr-2 transform -translate-y-1">
              <button @click.prevent=" menuOpen = !menuOpen " type="button" class="inline-flex items-center justify-center rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div class="px-2 pt-8 pb-16">
            <nuxt-link :to=" { name : '' } " class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out">Universités</nuxt-link>
            <nuxt-link :to=" { name : '' } " class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out">Accueil</nuxt-link>
            <nuxt-link :to=" { name : '' } " class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out">Cours</nuxt-link>
          </div>
          <div>
            <nuxt-link :to=" { name : 'auth-login' } " class="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100 hover:text-indigo-700 focus:outline-none focus:bg-gray-100 focus:text-indigo-700 transition duration-150 ease-in-out">
              Se connecter
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <!-- -->
  </div>
</template>
<script>
  import loginModal from "../pages/auth/loginModal";
  export default {
    components: { loginModal },
    data () {
      return {
        menuOpen : false
      }
    },
  }
</script>
