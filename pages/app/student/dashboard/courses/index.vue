<template>
  <div class="font-nunito">
    <div>
      <h3 class="text-xl leading-6 font-semibold tracking-wide text-gray-900">Mes cours</h3>
      <div class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div v-for="x in 5" class="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:px-6 sm:py-4 transform hover:-translate-x-2 transition transition-all duration-500">
          <div class="flex items-baseline justify-between">
            <h4 class="text-lg font-semibold leading-9 text-gray-700 w-2/3">Product Analytics</h4>
            <nuxt-link :to="{ name: '' }" class="inline-flex p-2 border rounded-md flex items-center justify-center" title="Continuez le cours">
              <svg class="stroke-current text-gray-500 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </nuxt-link>
          </div>
          <div class="flex items-center space-x-4">
            <span class="inline-flex items-center text-sm font-medium">
              <svg class="-mt-0.5 mr-1 h-4 w-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>
              </svg>
              4 Chapitres
            </span>
            <span class="inline-flex items-center text-sm font-medium">
              <svg class="-mt-0.5 mr-1 h-4 w-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              3h 55
            </span>
          </div>
          <div class="mt-20">
            <div class="flex items-center justify-between">
              <span class="inline-flex items-center text-sm font-medium">
                <svg class="-mt-0.5 mr-1 h-3 w-3 text-cyan-600" fill="currentColor" viewBox="0 0 8 8">
                  <circle cx="4" cy="4" r="3" />
                </svg>
                En cours
              </span>
              <div class="text-sm font-semibold">64%</div>
            </div>
            <div class="relative mt-2">
              <div class="overflow-hidden h-1.5 mb-4 text-xs flex rounded bg-cyan-100">
                <div style="width:30%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-cyan-600"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    layout: 'student',
    middleware: 'auth',
    head () {
      return {
        title: 'Mes cours'
      }
    }
  }
</script>
