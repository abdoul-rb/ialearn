<template>
  <main class="">
    <header class="bg-gray-100 shadow-sm lg:static lg:overflow-y-visible px-24">
      <div class="relative flex justify-between xl:grid xl:grid-cols-12 lg:gap-8 py-3">
        <div class="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
          <div class="flex items-center px-6 py-4 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0">
            <div class="w-full">
              <label for="search" class="sr-only">Rechercher</label>
              <div class="relative">
                <div class="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                  <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                  </svg>
                </div>
                <input id="search" name="search" class="block w-full bg-white border border-gray-300 rounded-md py-3 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 sm:text-sm" placeholder="Rechercher un étudiant ..." type="search">
              </div>
            </div>
          </div>
        </div>
        <div class="flex items-center md:absolute md:right-0 md:inset-y-0">
          <!-- Mobile menu button  lg:hidden -->
          <nuxt-link :to="{ name: 'app-university-dashboard-students-create' }" class="ml-6 inline-flex items-center px-6 py-3 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-900 hover:bg-blue-800 focus:outline-none">
            Voir les autres cours disponibles
          </nuxt-link>
        </div>
        <div class="hidden lg:flex lg:items-center xl:col-span-4">
          <nuxt-link :to="{ name: '' }" class="inline-flex items-center px-6 py-3 border border-transparent text-sm font-medium tracking-wide rounded-md shadow-sm text-white bg-cyan-700 hover:bg-cyan-800 focus:outline-none">
            Search
          </nuxt-link>
        </div>
      </div>
    </header>

    <div class="max-w-screen-xl mx-auto py-6 px-4 sm:px-6 lg:px-2">
      <h3 class="text-2xl leading-6 font-medium text-gray-900 tracking-wide">Les cours disponibles</h3>

      <section class="max-w-4xl mt-6">
        <div class="bg-white shadow overflow-hidden sm:rounded-md">
          <ul class="divide-y divide-gray-200">
            <li v-for="x in 5" :key="x">
              <a href="#" class="block hover:bg-gray-50">
                <div class="px-4 py-4 sm:px-6">
                  <div class="flex items-center justify-between">
                    <p class="text-base font-semibold tracking-wide text-blue-900 truncate">Power BI</p>
                    <div class="ml-2 flex-shrink-0 flex">
                      <p class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                        Master 1
                      </p>
                    </div>
                  </div>
                  <div class="mt-2 sm:flex sm:justify-between">
                    <div class="sm:flex">
                      <p class="flex items-center text-sm text-gray-500">
                        <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                        </svg>
                        Suivis par 55 étudiants
                      </p>
                      <p class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                        <!-- Heroicon name: solid/location-marker -->
                        <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                        </svg>
                        En ligne
                      </p>
                    </div>
                    <div class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                      <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                      </svg>
                      <p>
                        Dernière mise à jour :
                        <time datetime="2020-01-07">25 02, 2021</time>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>

        <nav class="px-4 flex items-center justify-between sm:px-0">
          <div class="-mt-px w-0 flex-1 flex">
            <a href="#" class="border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
              <!-- Heroicon name: solid/arrow-narrow-left -->
              <svg class="mr-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd" />
              </svg>
              Précédent
            </a>
          </div>
          <div class="hidden md:-mt-px md:flex">
            <a href="#" class="text-gray-500 hover:text-gray-700 pt-4 px-4 inline-flex items-center text-sm font-medium">1</a>
            <!-- Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" -->
            <a href="#" class="text-indigo-600 pt-4 px-4 inline-flex items-center text-sm font-medium" aria-current="page">2</a>
            <span class="text-gray-500 pt-4 px-4 inline-flex items-center text-sm font-medium">
              ...
            </span>
            <a href="#" class="text-gray-500 hover:text-gray-700 pt-4 px-4 inline-flex items-center text-sm font-medium">9</a>
            <a href="#" class="text-gray-500 hover:text-gray-700 pt-4 px-4 inline-flex items-center text-sm font-medium">>10</a>
          </div>
          <div class="-mt-px w-0 flex-1 flex justify-end">
            <a href="#" class="pt-4 pl-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700">
              Suivant
              <!-- Heroicon name: solid/arrow-narrow-right -->
              <svg class="ml-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </a>
          </div>
        </nav>
      </section>
    </div>
  </main>
</template>

<script>
  export default {
    layout: 'university',
    head () {
      return {
        title: 'Nos cours'
      }
    }
  }
</script>
