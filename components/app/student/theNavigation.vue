<template>
  <nav class="w-2/12 bg-white shadow-2xl pt-8">
    <div class="">
      <div class="px-6 mb-10">
        <h3 class="text-3xl text-center font-bold text-cyan-700 font-courgette">ialearn</h3>
      </div>
      <div class="flex flex-col items-center py-2">
        <nuxt-link :to=" { name: 'app-student-dashboard'} " class="group w-full flex items-center text-sm font-medium text-gray-500 leading-9 px-10 py-0 outline-none my-1" :class="this.$route.name === 'app-student-dashboard' ? 'border-r-2 border-cyan-700 text-gray-800 font-semibold' : ''">
          <svg class="stroke-current w-5 h-4 text-cyan-700 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
          Tableau de bord
        </nuxt-link>
        <nuxt-link :to=" { name: 'app-student-dashboard-courses'} " class="group w-full flex items-center text-sm font-medium text-gray-500 leading-9 px-10 py-0 outline-none my-1" :class="this.$route.name === 'app-student-dashboard-courses' ? 'border-r-2 border-cyan-700 text-gray-800 font-semibold' : ''">
          <svg class="stroke-current w-5 h-4 text-cyan-700 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>
          </svg>
          Cours
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    //
  }
</script>
