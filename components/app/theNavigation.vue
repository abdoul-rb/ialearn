<template>
  <div class="relative z-20 pt-4 pb-4 font-nunito">
    <div class="max-w-6xl mx-auto px-4 sm:px-0">
      <nav class="relative flex items-center justify-between sm:h-6 md:justify-center">
        <div class="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
          <div class="flex items-center justify-between w-full md:w-auto">
            <nuxt-link :to=" { name : 'index' }">
              <strong class="text-2xl text-indigo-1 font-courgette">iaLearn</strong>
            </nuxt-link>
            <div class="-mr-2 flex items-center md:hidden">
              <button @click.prevent=" isOpen = !isOpen" type="button" class="transform -translate-y-1 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 space-x-2 md:right-0">
          <template v-if="!$auth.loggedIn">
            <button class="inline-flex focus:outline-none" @click.prevent="$modal.show('LoginModal')">
              <svg class="fill-current text-gray-900 w-6 h-auto" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                <path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"></path>
              </svg>
            </button>
          </template>
          <template v-else>
            <div class="hidden sm:ml-6 sm:flex sm:items-center" v-if="$auth.loggedIn">
              <div class="ml-3 relative">
                <div>
                  <button @click.prevent="dropdownOpen = !dropdownOpen" class="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-transparent transition duration-150 ease-in-out" aria-label="User menu" aria-haspopup="true">
                    <div class="flex items-center">
                      <div class="text-sm font-medium italic tracking-wider text-gray-800">{{ $auth.user.name }}</div>
                      <svg class="stroke-current text-gray-700 w-4 h-4 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                  </button>
                </div>
                <div class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg" v-show="dropdownOpen">
                  <div class="py-1 rounded-md bg-white shadow-xs" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                    <a href="#" :to=" { name : '' } " class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">Mon profil</a>
                    <a href="#" @click.prevent="logout" class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">Déconnexion</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="-mr-2 flex items-center sm:hidden">
              <button @click.prevent="isOpen = !isOpen" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out" aria-label="Main menu" aria-expanded="false">
                <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24" :class=" isOpen ? 'hidden' : 'block' ">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
                <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24" :class=" isOpen ? 'block' : 'hidden' ">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
          </template>
        </div>
      </nav>
    </div>
    <div class="max-w-6xl mx-auto border-b border-gray-300 mt-2"></div>
    <div class="max-w-6xl mx-auto mt-3">
      <div class="hidden md:block space-x-6">
          <nuxt-link :to=" { name : '' } " class="text-gray-900 text-md font-bold italic tracking-wide hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out">Universités</nuxt-link>
          <span class="border-l border-gray-500 px-1"></span>
          <nuxt-link :to=" { name : 'index' } " class="text-gray-900 text-md font-bold tracking-wide hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out">Accueil</nuxt-link>
          <nuxt-link :to=" { name : 'courses' } " class="text-gray-900 text-md font-bold tracking-wide hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out">Cours</nuxt-link>
        </div>
    </div>
    <!-- Hamburger Menu - Responsive mobile -->
    <div class="absolute z-50 top-0 inset-x-0 p-2 px-4 transition transform origin-top-right md:hidden" v-if="isOpen">
      <div class="rounded-lg shadow-md">
        <div class="rounded-lg bg-white shadow-xs overflow-hidden">
          <div class="flex items-center justify-between px-5 pt-4">
            <div>
              <strong class="text-2xl text-indigo-1 font-courgette">iaLearn</strong>
            </div>
            <div class="-mr-2 transform -translate-y-1">
              <button @click.prevent=" isOpen = !isOpen " type="button" class="inline-flex items-center justify-center rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div class="px-2 pt-8 pb-16 font-nunito">
            <nuxt-link :to=" { name : '' } " class="block rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out px-3 py-2">Universités</nuxt-link>
            <nuxt-link :to=" { name : '' } " class="block rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out px-3 py-2 mt-1">Accueil</nuxt-link>
            <nuxt-link :to=" { name : '' } " class="block rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out px-3 py-2 mt-1">Cours</nuxt-link>
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
    <login-modal />
  </div>
</template>
<script>
  import loginModal from "../../pages/auth/loginModal";
  export default {
    components: { loginModal },
    data () {
      return {
        isOpen : false,
        dropdownOpen : false
      }
    },
    methods : {
      logout () {
        this.$auth.logout()
      },
    },
  }
</script>
