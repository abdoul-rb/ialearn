<template>
  <nav class="bg-white shadow-sm">
    <div class="max-w-7xl mx-auto">
      <div class="flex justify-between h-20">
        <div class="flex">
          <nuxt-link :to=" { name : 'app-university-dashboard' } " class="outline-none focus:outline-none block flex-shrink-0 flex items-center">
            <span aria-label="Home" class="block text-3xl font-semibold tracking-wide text-cyan-700 font-courgette">ialearn</span>
          </nuxt-link>
        </div>
        <div class="hidden sm:ml-6 sm:flex">
          <nuxt-link :to=" { name : 'app-university-dashboard' } " class="inline-flex items-center border-b-2 border-transparent text-sm font-medium leading-5 tracking-wide text-gray-500 hover:border-cyan-700 focus:outline-none transition duration-150 ease-in-out px-1 pt-1" :class="{ 'border-cyan-700 text-cyan-500' : this.$route.name === 'app-university-dashboard' }">Tableau de bord</nuxt-link>
          <nuxt-link :to=" { name : 'app-university-dashboard-students' } " class="inline-flex items-center border-b-2 border-transparent text-sm font-medium leading-5 tracking-wide text-gray-500 hover:border-cyan-700 focus:outline-none transition duration-150 ease-in-out px-1 pt-1 ml-12" :class="{ 'border-cyan-700 text-cyan-500' : this.$route.name === 'app-university-dashboard-students' || this.$route.name === 'app-university-dashboard-students-create' || this.$route.name === 'app-university-dashboard-students-uuid' }">Nos étudiants</nuxt-link>
          <nuxt-link :to=" { name : 'app-university-dashboard-courses' } " class="inline-flex items-center border-b-2 border-transparent text-sm font-medium leading-5 tracking-wide text-gray-500 hover:border-cyan-700 focus:outline-none transition duration-150 ease-in-out px-1 pt-1 ml-12" :class="{ 'border-cyan-700 text-cyan-500' : this.$route.name === 'app-university-dashboard-courses' }">Nos cours</nuxt-link>
        </div>
        <div class="hidden sm:ml-6 sm:flex sm:items-center">
          <div class="ml-3 relative">
            <button @click.prevent="dropdownOpen = !dropdownOpen" class="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-transparent transition duration-150 ease-in-out space-x-3" id="user-menu" aria-label="User menu" aria-haspopup="true">
              <img class="h-8 w-8 rounded-full object-cover object-top" :src="this.$auth.user.avatar" :alt="'Photo de profil de ' + this.$auth.user.lastname" />
              <div class="text-left leading-4">
                <div class="text-sm text-gray-700">{{ this.$auth.user.firstname }} {{ this.$auth.user.lastname }}</div>
                <div class="text-xs text-gray-500">Recteur</div>
              </div>
              <svg class="block stroke-current text-black w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            <div class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg border z-50" v-show="dropdownOpen">
              <div class="py-1 rounded-md bg-white shadow-xs" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                <nuxt-link :to=" { name : 'app-university-dashboard-profile' } " class="block text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out px-4 py-2">Mon profil</nuxt-link>
                <a href="#" @click.prevent="logout" class="block text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out px-4 py-2">Déconnexion</a>
              </div>
            </div>
          </div>
        </div>
        <div class="-mr-2 flex items-center sm:hidden">
          <button @click.prevent="menuOpen = !menuOpen" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out" aria-label="Main menu" aria-expanded="false">
            <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24" :class=" menuOpen ? 'hidden' : 'block' ">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
            <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24" :class=" menuOpen ? 'block' : 'hidden' ">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div :class=" menuOpen ? 'block' : 'hidden' ">
      <div class="pt-2 pb-3">
        <nuxt-link :to=" { name : 'app-university-dashboard' } " class="block pl-3 pr-4 py-2 border-l-4 border-indigo-500 text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out">Tableau de bord</nuxt-link>
        <nuxt-link :to=" { name : 'app-university-dashboard-students' } " class="mt-1 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out">Nos étudiants</nuxt-link>
        <nuxt-link :to=" { name : 'app-university-dashboard-courses' } " class="mt-1 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out">Nos cours</nuxt-link>
      </div>
      <div class="pt-4 pb-3 border-t border-gray-200">
        <div class="flex items-center px-4">
          <div class="flex-shrink-0">
            <img class="h-10 w-10 rounded-full" :src="this.$auth.user.avatar" :alt="'Photo de profil de ' + this.$auth.user.lastname" />
          </div>
          <div class="ml-3">
            <div class="text-base font-medium leading-6 text-gray-800">{{ this.$auth.user.firstname }} {{ this.$auth.user.lastname }}</div>
            <div class="text-sm font-medium leading-5 text-gray-500">Recteur</div>
          </div>
        </div>
        <div class="mt-3">
          <nuxt-link :to=" { name : '' } " class="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:text-gray-800 focus:bg-gray-100 transition duration-150 ease-in-out">Mon profil</nuxt-link>
          <a href="#" class="mt-1 block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:text-gray-800 focus:bg-gray-100 transition duration-150 ease-in-out">Paramètres</a>
          <a href="#" @click.prevent="logout" class="mt-1 block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:text-gray-800 focus:bg-gray-100 transition duration-150 ease-in-out">Déconnexion</a>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
  export default {
    data () {
      return {
        menuOpen : false,
        dropdownOpen : false
      }
    },
    methods : {
      logout () {
        this.$auth.logout()
      },
    }
  }
</script>
