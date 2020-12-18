<template>
  <nav class="w-2/12 bg-white shadow-2xl pt-8">
    <div class="">
      <div class="px-6">
        <h3 class="text-3xl text-center font-bold text-indigo-500">ialearn</h3>
        <button class="w-full bg-indigo-500 hover:bg-indigo-700 text-white text-sm font-bold py-2 px-4 rounded my-8">Join a course</button>
      </div>
      <div class="flex flex-col items-center py-2">
        <nuxt-link :to=" { name: 'app-student-dashboard'} " class="group w-full flex items-center text-md font-semibold text-gray-500 tracking-wide leading-9 px-12 py-0 outline-none my-1" :class="this.$route.name === 'app-student-dashboard' ? 'border-r-2 border-indigo-600 text-gray-800' : ''">
          <svg class="stroke-current w-5 h-4 text-gray-500 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
          Dashboard
        </nuxt-link>
        <nuxt-link :to=" { name: 'app-student-dashboard-courses'} " class="group w-full flex items-center text-md font-semibold text-gray-500 tracking-wide leading-9 px-12 py-0 outline-none my-1" :class="this.$route.name === 'app-student-dashboard-courses' ? 'border-r-2 border-indigo-600 text-gray-800' : ''">
          <svg class="stroke-current w-5 h-4 text-gray-500 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>
          </svg>
          Cours
        </nuxt-link>
        <nuxt-link :to=" { name: 'app-student-dashboard'} " class="group w-full flex items-center text-md font-semibold text-gray-500 tracking-wide leading-9 px-12 py-0 outline-none my-1">
          <svg class="stroke-current w-5 h-4 text-gray-500 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
          Ressources
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
