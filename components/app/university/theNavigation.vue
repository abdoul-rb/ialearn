<template>
  <nav class="bg-white shadow-sm">
    <div class="max-w-7xl mx-auto">
      <div class="flex justify-between h-20">
        <div class="flex">
          <nuxt-link :to=" { name : 'app-university-dashboard' } " class="outline-none focus:outline-none block flex-shrink-0 flex items-center transform translate-y-1 -translate-x-4">
            <svg class="w-auto hidden md:block h-10" viewBox="0 0 273 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <title>Tailwind CSS</title><path fill="#14B4C6" d="M32 16c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C35.744 29.09 38.808 32.2 45.5 32.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.514-3.522-2.004-5.147-3.653C41.756 19.11 38.692 16 32 16zM18.5 32.2C11.3 32.2 6.8 35.8 5 43c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C22.244 45.29 25.308 48.4 32 48.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.514-3.522-2.004-5.147-3.653C28.256 35.31 25.192 32.2 18.5 32.2z"></path><path fill="#000" d="M85.996 29.652h-4.712v9.12c0 2.432 1.596 2.394 4.712 2.242V44.7c-6.308.76-8.816-.988-8.816-5.928v-9.12h-3.496V25.7h3.496v-5.104l4.104-1.216v6.32h4.712v3.952zm17.962-3.952h4.104v19h-4.104v-2.736c-1.444 2.014-3.686 3.23-6.65 3.23-5.168 0-9.462-4.37-9.462-9.994 0-5.662 4.294-9.994 9.462-9.994 2.964 0 5.206 1.216 6.65 3.192V25.7zm-6.004 15.58c3.42 0 6.004-2.546 6.004-6.08 0-3.534-2.584-6.08-6.004-6.08-3.42 0-6.004 2.546-6.004 6.08 0 3.534 2.584 6.08 6.004 6.08zm16.948-18.43c-1.444 0-2.622-1.216-2.622-2.622a2.627 2.627 0 012.622-2.622 2.627 2.627 0 012.622 2.622c0 1.406-1.178 2.622-2.622 2.622zM112.85 44.7v-19h4.104v19h-4.104zm8.854 0V16.96h4.104V44.7h-4.104zm30.742-19h4.332l-5.966 19h-4.028l-3.952-12.806-3.99 12.806h-4.028l-5.966-19h4.332l3.686 13.11 3.99-13.11h3.914l3.952 13.11 3.724-13.11zm9.424-2.85c-1.444 0-2.622-1.216-2.622-2.622a2.627 2.627 0 012.622-2.622 2.627 2.627 0 012.622 2.622c0 1.406-1.178 2.622-2.622 2.622zm-2.052 21.85v-19h4.104v19h-4.104zm18.848-19.494c4.256 0 7.296 2.888 7.296 7.828V44.7h-4.104V33.452c0-2.888-1.672-4.408-4.256-4.408-2.698 0-4.826 1.596-4.826 5.472V44.7h-4.104v-19h4.104v2.432c1.254-1.976 3.306-2.926 5.89-2.926zm26.752-7.106h4.104v26.6h-4.104v-2.736c-1.444 2.014-3.686 3.23-6.65 3.23-5.168 0-9.462-4.37-9.462-9.994 0-5.662 4.294-9.994 9.462-9.994 2.964 0 5.206 1.216 6.65 3.192V18.1zm-6.004 23.18c3.42 0 6.004-2.546 6.004-6.08 0-3.534-2.584-6.08-6.004-6.08-3.42 0-6.004 2.546-6.004 6.08 0 3.534 2.584 6.08 6.004 6.08zm23.864 3.914c-5.738 0-10.032-4.37-10.032-9.994 0-5.662 4.294-9.994 10.032-9.994 3.724 0 6.954 1.938 8.474 4.902l-3.534 2.052c-.836-1.786-2.698-2.926-4.978-2.926-3.344 0-5.89 2.546-5.89 5.966 0 3.42 2.546 5.966 5.89 5.966 2.28 0 4.142-1.178 5.054-2.926l3.534 2.014c-1.596 3.002-4.826 4.94-8.55 4.94zm15.314-14.25c0 3.458 10.222 1.368 10.222 8.398 0 3.8-3.306 5.852-7.41 5.852-3.8 0-6.536-1.71-7.752-4.446l3.534-2.052c.608 1.71 2.128 2.736 4.218 2.736 1.824 0 3.23-.608 3.23-2.128 0-3.382-10.222-1.482-10.222-8.284 0-3.572 3.078-5.814 6.954-5.814 3.116 0 5.7 1.444 7.03 3.952l-3.458 1.938c-.684-1.482-2.014-2.166-3.572-2.166-1.482 0-2.774.646-2.774 2.014zm17.518 0c0 3.458 10.222 1.368 10.222 8.398 0 3.8-3.306 5.852-7.41 5.852-3.8 0-6.536-1.71-7.752-4.446l3.534-2.052c.608 1.71 2.128 2.736 4.218 2.736 1.824 0 3.23-.608 3.23-2.128 0-3.382-10.222-1.482-10.222-8.284 0-3.572 3.078-5.814 6.954-5.814 3.116 0 5.7 1.444 7.03 3.952l-3.458 1.938c-.684-1.482-2.014-2.166-3.572-2.166-1.482 0-2.774.646-2.774 2.014z"></path>
            </svg>
            <svg class="w-10 h-10 block md:hidden" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <title>Tailwind CSS</title><path fill="#14B4C6" d="M32 16.3c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C35.744 29.39 38.808 32.5 45.5 32.5c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.514-3.522-2.004-5.147-3.653C41.756 19.41 38.692 16.3 32 16.3zM18.5 32.5c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C22.244 45.59 25.308 48.7 32 48.7c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.514-3.522-2.004-5.147-3.653C28.256 35.61 25.192 32.5 18.5 32.5z"></path>
            </svg>
          </nuxt-link>
        </div>
        <div class="hidden sm:ml-6 sm:flex">
          <nuxt-link :to=" { name : 'app-university-dashboard' } " class="inline-flex items-center border-b-2 border-transparent text-sm font-normal leading-5 text-gray-500 hover:text-indigo-800 hover:border-indigo-800 focus:outline-none focus:text-gray-700 transition duration-150 ease-in-out px-1 pt-1" :class="{ 'border-indigo-700 text-indigo-700' : this.$route.name === 'app-university-dashboard' }">Dashboard</nuxt-link>
          <nuxt-link :to=" { name : 'app-university-dashboard-students' } " class="inline-flex items-center border-b-2 border-transparent text-sm font-normal leading-5 text-gray-500 hover:text-indigo-800 hover:border-indigo-800 focus:outline-none focus:text-gray-700 transition duration-150 ease-in-out px-1 pt-1 ml-12" :class="{ 'border-indigo-700 text-indigo-700' : this.$route.name === 'app-university-dashboard-students' }">Nos étudiants</nuxt-link>
          <nuxt-link :to=" { name : 'app-university-dashboard-courses' } " class="inline-flex items-center border-b-2 border-transparent text-sm font-normal leading-5 text-gray-500 hover:text-indigo-800 hover:border-indigo-800 focus:outline-none focus:text-gray-700 transition duration-150 ease-in-out px-1 pt-1 ml-12" :class="{ 'border-indigo-700 text-indigo-700' : this.$route.name === 'app-university-dashboard-courses' }">Nos cours</nuxt-link>
        </div>
        <div class="hidden sm:ml-6 sm:flex sm:items-center">
          <div class="ml-3 relative">
            <button @click.prevent="dropdownOpen = !dropdownOpen" class="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-transparent transition duration-150 ease-in-out space-x-3" id="user-menu" aria-label="User menu" aria-haspopup="true">
              <img class="h-8 w-8 rounded-full object-cover object-top" src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="" />
              <div class="text-left leading-4">
                <div class="text-sm text-gray-700">Abdoul Rahim</div>
                <div class="text-xs text-gray-500">Recteur</div>
              </div>
              <svg class="block stroke-current text-black w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            <div class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg" v-show="dropdownOpen">
              <div class="py-1 rounded-md bg-white shadow-xs" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                <!-- <nuxt-link :to=" { name : 'app-freelancer-resume-slug', params : { slug : 'ahmed' } } " class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">Your Profile</nuxt-link> -->
                <nuxt-link :to=" { name : 'app-freelancer-resume-slug', params : { slug : 'ahmed' } } " class="block text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out px-4 py-2">Mon profil</nuxt-link>
                <nuxt-link :to=" { name : '' } " class="block text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out px-4 py-2">Paramètres</nuxt-link>
                <a href="#" @click.prevent="logout" :to=" { name : '' } " class="block text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out px-4 py-2">Déconnexion</a>
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
        <nuxt-link :to=" { name : 'app-university-dashboard' } " class="block pl-3 pr-4 py-2 border-l-4 border-indigo-500 text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out">Dashboard</nuxt-link>
        <nuxt-link :to=" { name : 'app-university-dashboard-students' } " class="mt-1 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out">Nos étudiants</nuxt-link>
        <!-- <nuxt-link :to=" { name : 'app-freelancer-resume-slug', params : { slug : 'ahmed' } } " class="mt-1 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out">Nos cours</nuxt-link> -->
        <nuxt-link :to=" { name : 'app-university-dashboard-courses' } " class="mt-1 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out">Nos cours</nuxt-link>
      </div>
      <div class="pt-4 pb-3 border-t border-gray-200">
        <div class="flex items-center px-4">
          <div class="flex-shrink-0">
            <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
          </div>
          <div class="ml-3">
            <div class="text-base font-medium leading-6 text-gray-800">Abdoul Rahim</div>
            <div class="text-sm font-medium leading-5 text-gray-500">Recteur</div>
          </div>
        </div>
        <div class="mt-3">
          <!-- <nuxt-link :to=" { name : 'app-freelancer-resume-slug', params : { slug : 'ahmed' } } " class="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:text-gray-800 focus:bg-gray-100 transition duration-150 ease-in-out">Your Profile</nuxt-link> -->
          <nuxt-link :to=" { name : 'app-freelancer-resume-slug' } " class="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:text-gray-800 focus:bg-gray-100 transition duration-150 ease-in-out">Mon profil</nuxt-link>
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
