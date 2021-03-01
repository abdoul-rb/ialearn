<template>
  <section>
    <h3 class="text-lg leading-6 font-medium text-gray-900">Vos dernières statistiques</h3>
    <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2">
      <div class="flex flex-col bg-white overflow-hidden shadow rounded-lg">
        <div class="flex-grow px-4 py-5 sm:p-6">
          <div class="flex items-center">
            <div class="flex-shrink-0 bg-cyan-500 rounded-md p-3">
              <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <div class="ml-5 w-0 flex-1">
              <dt class="text-sm font-medium text-gray-500 truncate">
                Etudiants inscrits
              </dt>
              <dd class="flex items-baseline">
                <div class="text-2xl font-semibold text-gray-900">
                  100
                </div>
                <div class="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                  <svg class="self-center flex-shrink-0 h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span class="sr-only">
                  Increased by
                </span>
                  5.4%
                </div>
              </dd>
            </div>
          </div>
        </div>
        <div class="bg-cyan-700 px-4 py-4 sm:px-6">
          <div class="text-sm text-right">
            <nuxt-link :to="{ name: 'app-university-dashboard-students' }" href="#" class="font-medium text-white"> Voir tous<span class="sr-only"> Nombre total d'étudiants inscrits</span></nuxt-link>
          </div>
        </div>
      </div>

      <div class="flex flex-col bg-white overflow-hidden shadow rounded-lg">
        <div class="flex-grow px-4 py-5 sm:p-6">
          <div class="flex items-center">
            <div class="flex-shrink-0 bg-cyan-500 rounded-md p-3">
              <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <div class="ml-5 w-0 flex-1">
              <dt class="text-sm font-medium text-gray-500 truncate">
                Cours souscrits
              </dt>
              <dd class="flex items-baseline">
                <div class="text-2xl font-semibold text-gray-900">
                  7
                </div>
                <div class="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                  <svg class="self-center flex-shrink-0 h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span class="sr-only">
                  Increased by
                </span>
                  5.4%
                </div>
              </dd>
            </div>
          </div>
        </div>
        <div class="bg-cyan-700 px-4 py-4 sm:px-6">
          <div class="text-sm text-right">
            <nuxt-link :to="{ name: 'app-university-dashboard-courses' }" class="font-medium text-white"> Voir tous<span class="sr-only"> Nombre total de cours souscrits</span></nuxt-link>
          </div>
        </div>
      </div>
    </dl>
  </section>
</template>
<script>
  export default {
    data() {
      return {

      }
    },
  }
</script>
