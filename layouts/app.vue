<template>
  <div class="relative bg-white overflow-hidden font-montserrat">
    <div class="max-w-screen-xl mx-auto min-h-screen">
      <div class="max-w-screen-xl pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
        <!-- Nav -->
        <div class="pt-6 px-4 sm:px-6 lg:px-8">
          <nav class="flex items-center justify-between sm:h-10 lg:justify-start">
            <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0"> <!-- Button -->
              <div class="flex items-center justify-between w-full md:w-auto">
                <nuxt-link :to="{ name: 'index'}" aria-label="Home" class="text-2xl text-indigo-600 font-black tracking-wide">
                  iaLEARN
                </nuxt-link>
                <div class="-mr-2 flex items-center md:hidden">
                  <button @click.prevent="isOpen = !isOpen" type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out" id="main-menu" aria-label="Main menu" aria-haspopup="true">
                    <svg class="h-6 w-6" :class=" isOpen ? 'hidden' : 'block' " stroke="currentColor" fill="none" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div class="hidden w-full md:block md:ml-10 md:pr-0" :class=" isOpen ? 'block' : 'hidden' ">
              <div class="relative w-full flex">
                <div class="">
                  <nuxt-link :to="{ name: 'index' }" class="font-medium text-black hover:text-gray-900 transition duration-150 ease-in-out">Accueil</nuxt-link>
                  <nuxt-link :to="{ name: 'courses' }" class="ml-8 font-medium text-black hover:text-gray-900 transition duration-150 ease-in-out">Cours</nuxt-link>
                </div>
                <div class="absolute inset-y-0 right-0">
                  <nuxt-link :to="{ name: 'auth-login' }" class="inline w-full px-3 py-2 text-center font-medium shadow rounded text-white text-xs uppercase font-bold bg-indigo-600 hover:bg-indigo-700 hover:text-gray-200 focus:outline-none focus:bg-gray-100 focus:text-indigo-700 transition duration-150 ease-in-out">Se connecter</nuxt-link>
                  <nuxt-link :to="{ name: 'auth-register' }" class="inline w-full px-3 py-2 text-center font-medium shadow rounded text-white text-xs uppercase font-bold bg-indigo-600 hover:bg-indigo-700 hover:text-gray-200 focus:outline-none focus:bg-gray-100 focus:text-indigo-700 transition duration-150 ease-in-out">S'inscrire</nuxt-link>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <!--
          Mobile menu, show/hide based on menu open state.
          Entering: "duration-150 ease-out"
            From: "opacity-0 scale-95"
            To: "opacity-100 scale-100"
          Leaving: "duration-100 ease-in"
            From: "opacity-100 scale-100"
            To: "opacity-0 scale-95"
        -->
        <!-- Nav mobile version -->
        <div class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div class="rounded-lg shadow-md">
            <div class="rounded-lg bg-white shadow-xs overflow-hidden" role="menu" aria-orientation="vertical" aria-labelledby="main-menu">
              <div class="px-5 pt-4 flex items-center justify-between">
                <nuxt-link :to="{ name: 'index'}" aria-label="Home" class="text-xl text-indigo-600 font-black tracking-wide">
                  iaLEARN
                </nuxt-link>
                <div class="-mr-2">
                  <button @click.prevent="isOpen = !isOpen" type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out" aria-label="Close menu">
                    <svg class="h-6 w-6" :class=" isOpen ? 'block' : 'hidden' " stroke="currentColor" fill="none" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="px-2 pt-2 pb-3">
                <nuxt-link :to="{ name: 'index' }" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out" role="menuitem">Accueil</nuxt-link>
                <nuxt-link :to="{ name: 'courses' }" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out" role="menuitem">Cours</nuxt-link>
              </div>
              <div class="flex items-center justify-around">
                <nuxt-link :to="{ name: 'auth-login' }" class="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100 hover:text-indigo-700 focus:outline-none focus:bg-gray-100 focus:text-indigo-700 transition duration-150 ease-in-out" role="menuitem">Se connecter</nuxt-link>
                <nuxt-link :to="{ name: 'auth-register' }" class="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100 hover:text-indigo-700 focus:outline-none focus:bg-gray-100 focus:text-indigo-700 transition duration-150 ease-in-out" role="menuitem">S'inscrire</nuxt-link>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-10 sm:mt-12 md:mt-12 lg:px-8 xl:mt-28">
          <nuxt />
        </div>
      </div>
    </div>
    <!-- Footer -->
    <div class="bg-indigo-600">
      <div class="max-w-screen-xl mx-auto py-4 px-4 sm:px-6 md:flex md:flex-col md:items-center md:justify-between lg:px-8">
        <div class="flex justify-center items-center md:order-1">
          <nuxt-link :to="{ name: 'cgu' }" class="hidden md:block text-xs font-medium text-white hover:underline">Conditions générales d'utilisation</nuxt-link>
          <nuxt-link :to="{ name: 'cgu' }" class="md:hidden text-xs font-medium text-white hover:underline">CGU</nuxt-link>
          <nuxt-link :to="{ name: 'contact' }" class="ml-6 text-xs font-medium text-white hover:underline">Contact</nuxt-link>
          <a href="#" class="ml-6 text-xs font-medium text-white hover:underline">Téléchargez l'application</a>
        </div>
        <div class="mt-1 md:mt-8 md:mt-0 md:order-2">
          <p class="text-center text-xs font-medium leading-6 text-white">
            &copy; 2020 ialearn, Inc. Tous droits réservés.
          </p>
        </div>
      </div>
    </div>
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
