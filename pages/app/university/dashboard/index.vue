<template>
  <main class="max-w-7xl mx-auto">
    <section class="grid sm:grid-cols-2 gap-8 mt-8">
      <aside>
        <div class="flex items-center justify-between mb-1">
          <h4 class="text-lg text-gray-900 font-semibold tracking-wide">Cours</h4>
          <nuxt-link :to="{ name: '' }" class="block text-sm text-indigo-500 px-2">Voir tous</nuxt-link>
        </div>
        <div class="flex flex-col">
          <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table class="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Cours</th>
                      <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Title</th>
                      <th class="px-6 py-3 bg-gray-50"></th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200">
                    <tr>
                      <td class="px-6 py-4 whitespace-no-wrap">
                        <div class="flex items-center">
                          <div class="text-sm leading-5 font-medium text-gray-900">Intelligence artificielle</div>
                        </div>
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap">
                        <div class="text-sm leading-5 text-gray-900">Regional</div>
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                        <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

      </aside>
      <aside>
        <div class="flex items-center justify-between mb-1">
          <h4 class="text-lg text-gray-900 font-semibold tracking-wide">Etudiants</h4>
          <nuxt-link :to="{ name: '' }" class="block text-sm text-indigo-500 px-2">Voir tous</nuxt-link>
        </div>
        <div class="flex flex-col">
          <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table class="min-w-full divide-y divide-gray-200">
                  <thead>
                  <tr>
                    <th class="bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider px-6 py-3">Nom</th>
                    <th class="bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider px-6 py-3">Cours</th>
                    <th class="bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider px-6 py-3">Niveau</th>
                  </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200">
                  <tr>
                    <td class="px-6 py-4 whitespace-no-wrap">
                      <div class="flex items-center">
                        <div class="text-xs leading-none font-medium text-gray-900">Abdoul Rahim</div>
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-no-wrap">
                      <div class="text-xs leading-5 text-gray-900">Intelligence artificielle</div>
                    </td>
                    <td class="px-6 py-4 whitespace-no-wrap">
                      <div class="text-xs leading-5 text-gray-900">3</div>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </aside>
      <aside>
        <div class="flex items-center justify-between mb-1">
          <h4 class="text-lg text-gray-900 font-semibold tracking-wide">Tâches</h4>
          <nuxt-link :to="{ name: '' }" class="block text-sm text-indigo-500 px-2">Voir tous</nuxt-link>
        </div>
        <div class="bg-white h-32 w-full rounded-lg shadow-md"></div>
      </aside>
    </section>
  </main>
</template>

<script>
  export default {
    layout: 'university',
    head () {
      return {
        title: 'Tableau de bord'
      }
    }
  }
</script>
