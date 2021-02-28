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
            Inscrire un nouvel étudiant
          </nuxt-link>
          <!-- Mobile breakpoint -->
          <!-- <button type="button" class="-mx-2 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-500" aria-expanded="false">
            <span class="sr-only">Open menu</span>
            <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button> -->
        </div>
        <div class="hidden lg:flex lg:items-center xl:col-span-4">
          <nuxt-link :to="{ name: '' }" class="inline-flex items-center px-6 py-3 border border-transparent text-sm font-medium tracking-wide rounded-md shadow-sm text-white bg-cyan-700 hover:bg-cyan-800 focus:outline-none">
            Search
          </nuxt-link>
        </div>
      </div>
    </header>

    <div class="max-w-screen-xl mx-auto py-6 px-4 sm:px-6 lg:px-2">
      <h3 class="text-2xl leading-6 font-medium text-gray-900 tracking-wide">Nos étudiants inscrits</h3>

      <section class="max-w-4xl mt-6">
        <div class="flex flex-col mb-3">
          <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table class="min-w-full divide-y divide-gray-200">
                  <thead class="bg-gray-50">
                  <tr>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Profile</th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Niveau</th>
                    <th scope="col" class="relative px-6 py-3">
                      <span class="sr-only">Voir</span>
                    </th>
                  </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200">
                  <tr v-for="x in 12" :key="x">
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="flex-shrink-0 h-10 w-10">
                          <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60" alt="">
                        </div>
                        <div class="ml-4">
                          <div class="text-sm font-medium text-gray-900">Aminata Keita</div>
                          <div class="text-sm text-gray-500">aminata.keita@mail.com</div>
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-900">Regional Paradigm</div>
                      <div class="text-sm text-gray-500">Optimization</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Master 2</span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <nuxt-link :to="{ name: 'app-university-dashboard-students-uuid', params : { uuid : 'aminata' }  }" class="text-blue-800 font-medium">Voir</nuxt-link>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
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
            <a href="#" class="text-gray-500 hover:text-gray-700 pt-4 px-4 inline-flex items-center text-sm font-medium">10</a>
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
        title: 'Nos étudiants'
      }
    }
  }
</script>
