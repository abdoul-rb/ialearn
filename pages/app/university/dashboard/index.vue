<template>
  <div class="sm:flex min-h-screen">
    <div class="w-9/12 px-20 py-10">
      <main class="max-w-7xl mx-auto">
        <Stats />
        <section class="space-y-10 mt-12">
          <aside>
            <div class="flex items-center justify-between mb-2">
              <h3 class="text-lg leading-6 font-medium text-gray-900">Cours</h3>
              <nuxt-link :to="{ name: 'app-university-dashboard-courses' }" class="block text-sm text-fuchsia-90 font-medium px-2">Voir tous</nuxt-link>
            </div>
            <div class="bg-white shadow overflow-hidden sm:rounded-md">
              <ul class="divide-y divide-gray-200">
                <li v-for="x in 3" :key="x">
                  <a href="#" class="block hover:bg-gray-50">
                    <div class="px-4 py-4 sm:px-6">
                      <div class="flex items-center justify-between">
                        <p class="text-base font-semibold tracking-wide text-blue-900 truncate">Power BI</p>
                        <div class="ml-2 flex-shrink-0 flex">
                          <p class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">Master 1</p>
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
          </aside>
          <aside>
            <div class="flex items-center justify-between mb-2">
              <h3 class="text-lg leading-6 font-medium text-gray-900">Etudiants ajoutés récemment</h3>
              <nuxt-link :to="{ name: 'app-university-dashboard-students' }" class="block text-sm text-blue-800 font-medium px-2">Voir occurences</nuxt-link>
            </div>
            <div class="flex flex-col">
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
                        <tr v-for="x in 4" :key="x">
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
                            <nuxt-link :to="{ name: 'app-university-dashboard-students-uuid', params: { uuid: 'aminata' } }" href="#" class="text-blue-800 font-medium">Voir</nuxt-link>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </section>
      </main>
    </div>
    <aside class="w-3/12 shadow py-10 px-12">
      <div>
        <div class="space-y-12 mb-6">
          <div class="space-y-4">
            <div class="aspect-w-3 aspect-h-2">
              <img class="object-cover shadow-lg rounded-lg " src="~/assets/images/iaLearn_pres.png" alt="iaLearn_pres">
            </div>
          </div>
        </div>
        <div class="max-w-3xl mx-auto text-center">
          <h4 class="block text-2xl font-semibold tracking-wide text-cyan-700 font-courgette">ialearn</h4>
          <p class="mt-2 text-lg text-gray-500 font-nunito leading-5">Première plateforme de cours sur l'intélligence artificielle en Guinée.</p>
        </div>
        <dl class="mt-6 grid grid-cols-1 gap-5">
          <div class="bg-white overflow-hidden shadow rounded-lg">
            <div class="px-4 py-5 sm:p-6">
              <dt class="text-sm font-medium text-gray-500 truncate">Total étudiants</dt>
              <dd class="mt-1 text-3xl font-semibold text-gray-900 font-nunito">71,897</dd>
            </div>
          </div>
        </dl>

        <dl class="mt-6 grid grid-cols-1 gap-5">
          <div class="bg-white overflow-hidden shadow rounded-lg">
            <div class="px-4 py-5 sm:p-6">
              <dt class="text-sm font-medium text-gray-500 truncate">Nombre de cours</dt>
              <dd class="mt-1 text-3xl font-semibold text-gray-900 font-nunito">17</dd>
            </div>
          </div>
        </dl>

        <dl class="mt-6 grid grid-cols-1 gap-5">
          <div class="bg-white overflow-hidden shadow rounded-lg">
            <div class="px-4 py-5 sm:p-6">
              <dt class="text-sm font-medium text-gray-500 truncate">Universités adhérants</dt>
              <dd class="mt-1 text-3xl font-semibold text-gray-900 font-nunito">32</dd>
            </div>
          </div>
        </dl>
      </div>
    </aside>
  </div>
</template>

<script>
  import Stats from "../../../../components/app/university/Stats";
  export default {
    layout: 'university',
    components: { Stats },
    head () {
      return {
        title: 'Tableau de bord'
      }
    }
  }
</script>
