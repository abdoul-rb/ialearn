<template>
  <div class="min-h-screen overflow-hidden">
    <nav class="bg-white shadow">
      <div class="max-w-6xl mx-auto px-8 sm:px-6 lg:px-0">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <div class="flex items-center">
              <nuxt-link :to="{ name: 'index' }" aria-label="Home" class="text-2xl text-indigo-600 font-bold tracking-wide flex-shrink-0 flex items-center transform translate-y-1 -translate-x-4">iaLEARN</nuxt-link>
            </div>
            <div class="hidden sm:ml-6 sm:flex">
              <nuxt-link :to=" { name : 'dashboard' } " class="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-semibold leading-5 text-gray-900 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 transition duration-150 ease-in-out">Tableau de bord</nuxt-link>
              <nuxt-link :to=" { name : 'courses' } " class="ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-semibold leading-5 text-gray-900 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 transition duration-150 ease-in-out">Cours</nuxt-link>
            </div>
          </div>
          <div class="hidden sm:ml-6 sm:flex sm:items-center">
            <div class="ml-3 relative">
              <div>
                <button @click.prevent="dropdownOpen = !dropdownOpen" class="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-transparent transition duration-150 ease-in-out" aria-label="User menu" aria-haspopup="true">
                  <div class="flex items-center">
                    <div class="text-sm font-medium italic tracking-wider text-gray-800">Abdoul Rahim</div>
                    <svg class="stroke-current text-gray-700 w-4 h-4 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                  <!-- <img class="h-10 w-10 rounded-full object-cover object-top" src="https://images.unsplash.com/photo-1580130379624-3a069adbffc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="User profile" /> -->
                </button>
              </div>
              <div class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg" v-show="dropdownOpen">
                <div class="py-1 rounded-md bg-white shadow-xs" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                  <a href="#" :to=" { name : '' } " class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">Mon profil</a>
                  <a href="#" :to=" { name : '' } " class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">Déconnexion</a>
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
        </div>
      </div>
      <div :class=" isOpen ? 'block' : 'hidden' ">
        <div class="pt-2 pb-3">
          <nuxt-link :to=" { name : 'dashboard' } " class="block pl-3 pr-4 py-2 border-l-4 border-indigo-500 text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out">Tableau de bord</nuxt-link>
          <nuxt-link :to=" { name : 'courses' } " class="mt-1 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out">Cours</nuxt-link>
        </div>
        <div class="pt-4 pb-3 border-t border-gray-200">
          <div class="flex items-center px-4">
            <div class="">
              <div class="text-base font-medium leading-6 text-gray-800">Aminata Keita</div>
              <div class="text-sm font-medium leading-5 text-gray-500">aminata.keita@learn.com</div>
            </div>
          </div>
          <div class="mt-3">
            <nuxt-link to="/" class="mt-1 block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:text-gray-800 focus:bg-gray-100 transition duration-150 ease-in-out">Mon profil</nuxt-link>
            <nuxt-link to="/" class="mt-1 block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:text-gray-800 focus:bg-gray-100 transition duration-150 ease-in-out">Déconnexion</nuxt-link>
          </div>
        </div>
      </div>
    </nav>
    <div class="py-10">
      <main>
        <div class="px-4 xl:px-0 pb-16">
          <nuxt />
        </div>
      </main>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        isOpen : false,
        dropdownOpen : false
      }
    }
  }
</script>
