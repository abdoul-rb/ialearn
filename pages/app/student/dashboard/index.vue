<template>
  <div class="font-nunito">
    <div>
      <h3 class="text-xl leading-6 font-semibold tracking-wide text-gray-900">Statistiques</h3>
      <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div class="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
          <dt class="mt-1 text-3xl font-semibold text-gray-900">
            3
          </dt>
          <dd class="text-base font-medium text-gray-700 truncate">
            Cours complétés
          </dd>
        </div>

        <div class="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
          <dt class="mt-1 text-3xl font-semibold text-gray-900">
            4
          </dt>
          <dd class="text-base font-medium text-gray-700 truncate">
            Cours en cours
          </dd>
        </div>

        <div class="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
          <dt class="mt-1 text-3xl font-semibold text-gray-900">
            20.6
          </dt>
          <dd class="text-base font-medium text-gray-700 truncate">
            Heures de cours suivies
          </dd>
        </div>
      </dl>
    </div>
    <div class="mt-12">
      <div class="flex items-center justify-between">
        <h3 class="text-xl leading-6 font-semibold tracking-wide text-gray-900">Mes derniers cours</h3>
        <nuxt-link :to="{ name: '' }" class="text-sm font-semibold text-indigo-600 px-2 py-1">Voir tous</nuxt-link>
      </div>
      <div class="flex flex-col mt-6">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden sm:rounded-sm">
              <table class="min-w-full">
                <thead class="bg-white">
                  <tr>
                    <th scope="col" class="px-6 py-3 text-left text-sm font-semibold text-gray-500 tracking-wider">
                      Cours
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-sm font-semibold text-gray-500 tracking-wider">
                      Debut
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-sm font-semibold text-gray-500 tracking-wider">
                      Type
                    </th>
                    <th scope="col" class="relative px-6 py-3">
                      <span class="sr-only">Favoris</span>
                    </th>
                  </tr>
                </thead>
                <tbody class="">
                  <tr v-for="x in 3">
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="flex-shrink-0 h-10 w-10">
                          <img class="h-10 w-10 rounded-lg" src="https://images.unsplash.com/photo-1475669698648-2f144fcaaeb1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fGRlc2lnbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="">
                        </div>
                        <div class="ml-4 leading-loose">
                          <div class="text-sm font-semibold text-gray-900">
                            Basic of Mobile UX
                          </div>
                          <div class="text-sm text-gray-500">
                            By iaLearn
                          </div>
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-900">Janvier 2021</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <span class="px-3 py-0.5 inline-flex text-xs leading-5 font-semibold rounded-md bg-gray-300 text-gray-900">
                        Design
                      </span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <nuxt-link :to="{ name: '' }" class="text-indigo-600 hover:text-indigo-900">Lire</nuxt-link>
                    </td>
                  </tr>
                </tbody>
              </table>
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
      }
    }
  }
</script>
