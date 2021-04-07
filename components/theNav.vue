<template>
  <div class="bg-gray-200 mb-20 fixed top-0 py-3 w-full z-50 transition-all duration-700 border border-red-400">
    <nav class="px-4 sm:px-6 lg:px-24 border border-red-400">
      <div class="flex items-center justify-between sm:h-10 lg:justify-start pt-1 border border-blue-400">
        <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0 border border-green-400">
          <div class="flex items-center justify-between w-full md:w-auto border border-red-400">
            <nuxt-link :to="{ name: 'index' }" aria-label="Home" class="text-xl text-indigo-1 font-black tracking-wide">ialearn</nuxt-link>
            <div class="-mr-2 flex items-center md:hidden">
              <button @click.prevent="isOpen = true" type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out" id="main-menu" aria-label="Main menu" aria-haspopup="true">
                <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class="hidden w-full md:block md:ml-10 md:pr-0" :class=" isOpen ? 'block' : 'hidden' ">
          <div class="relative w-full flex">
            <div class="">
              <nuxt-link :to="{ name: 'index' }" class="font-medium text-black hover:bg-white transition duration-150 ease-in-out">Accueil</nuxt-link>
              <nuxt-link :to="{ name: 'courses' }" class="ml-8 font-medium text-black hover:bg-white transition duration-150 ease-in-out">Cours</nuxt-link>
            </div>
            <div class="absolute inset-y-0 right-0">
              <nuxt-link :to="{ name: 'auth-login' }" class="inline w-full px-3 py-2 text-center font-medium shadow rounded text-white text-xs uppercase font-bold bg-gray-200 border border-indigo-700 hover:bg-indigo-700 hover:text-gray-200 focus:outline-none focus:bg-gray-100 focus:text-indigo-700 transition duration-150 ease-in-out">Se connecter</nuxt-link>
              <nuxt-link :to="{ name: 'auth-register' }" class="inline w-full px-3 py-2 text-center font-medium shadow rounded text-white text-xs uppercase font-bold bg-indigo-1 hover:bg-indigo-700 hover:text-gray-200 focus:outline-none focus:bg-gray-100 focus:text-indigo-700 transition duration-150 ease-in-out">S'inscrire</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <transition enter-active-class="duration-150 ease-out" enter-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in" leave-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
      <div class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden" v-show="isOpen">
        <div class="rounded-lg shadow-md">
          <div class="rounded-lg bg-white shadow-xs overflow-hidden" role="menu" aria-orientation="vertical" aria-labelledby="main-menu">
            <div class="px-5 pt-4 flex items-center justify-between">
              <nuxt-link :to="{ name: 'index'}" aria-label="Home" class="text-xl text-indigo-1 font-black tracking-wide">ialearn</nuxt-link>
              <div class="-mr-2">
                <button @click.prevent="isOpen = false" type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out" aria-label="Close menu">
                  <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div class="px-2 pt-2 pb-3">
              <nuxt-link :to="{ name: 'index' }" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out" role="menuitem">Accueil</nuxt-link>
              <nuxt-link :to="{ name: 'courses' }" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out" role="menuitem">Cours</nuxt-link>
            </div>
            <div class="flex items-center justify-around">
              <nuxt-link :to="{ name: 'auth-login' }" class="block w-full px-5 py-3 text-center font-medium text-indigo-1 bg-gray-50 hover:bg-gray-100 hover:text-indigo-700 focus:outline-none focus:bg-gray-100 focus:text-indigo-700 transition duration-150 ease-in-out" role="menuitem">Se connecter</nuxt-link>
              <nuxt-link :to="{ name: 'auth-register' }" class="block w-full px-5 py-3 text-center font-medium text-indigo-1 bg-gray-50 hover:bg-gray-100 hover:text-indigo-700 focus:outline-none focus:bg-gray-100 focus:text-indigo-700 transition duration-150 ease-in-out" role="menuitem">S'inscrire</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        isOpen: false
      }
    }
  }
</script>
