<template>
  <main class="max-w-6xl mx-auto">
    <div>
      <h3 class="text-2xl md:text-3xl tracking-wider italic text-black">Welcome<span class="font-medium not-italic"> Abdoul Rahim</span></h3>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
      <div class="bg-gray-50 max-w-sm rounded-md overflow-hidden shadow-lg border border-gray-100 p-8">
        <div class="flex items-center justify-between mb-3">
          <h3 class="text-md font-medium text-indigo-700">Lancez une activité en ligne</h3>
          <!-- <span class="bg-blue-200 text-xs text-blue-500 rounded-full px-5 py-1">Etat</span> -->
        </div>
        <p class="tracking-wide text-xs">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consectetur eius excepturi fuga qui.
        </p>
        <div class="flex items-center">
          <div class="flex items-center my-3 mr-4">
            <svg class="stroke-current text-blue-400 h-4 w-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span class="block">17 heures</span>
          </div>
          <div class="flex items-center my-3">
            <svg class="stroke-current text-blue-400 h-4 w-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
            </svg>
            <span class="block">7 chapitres</span>
          </div>
        </div>
      </div>
      <div class="bg-gray-50 max-w-sm rounded-md overflow-hidden shadow-lg border border-gray-100 p-8">
        <h3 class="text-lg font-medium text-indigo-700 text-center">Heures effectuées</h3>
        <div class="flex items-center justify-center h-full">
          <h4 class="text-4xl font-medium text-gray-500 tracking-wide">07:13</h4>
        </div>
      </div>
      <div class="bg-gray-50 max-w-sm rounded-md overflow-hidden shadow-lg border border-gray-100 p-8">
        <h3 class="text-lg font-medium text-indigo-700 mb-3">Caractéristiques du cours</h3>
        <ul>
          <li class="flex items-center">
            <svg class="stroke-current text-green-600 h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <span class="text-sm font-medium">Accès illimité</span>
          </li>
          <li class="flex items-center">
            <svg class="stroke-current text-green-600 h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <span class="text-sm font-medium">Gratuit</span>
          </li>
          <li class="flex items-center">
            <svg class="stroke-current text-green-600 h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <span class="text-sm font-medium">Cours agréé</span>
          </li>
          <li class="flex items-center">
            <svg class="stroke-current text-green-600 h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <span class="text-sm font-medium">Certification reconnue</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="flex items-center justify-center my-4 md:mt-32">
      <button class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded">Continuer</button>
    </div>
    <!--
    <div class="flex flex-col my-6">
      <h1 class="text-2xl font-medium tracking-wide mb-3">Cours suivi</h1>
      <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div class="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
          <table class="min-w-full">
            <thead>
            <tr>
              <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Cours</th>
              <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Inscription</th>
              <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Progression</th>
              <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Role</th>
              <th class="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
            </tr>
            </thead>
            <tbody class="bg-white">
            <tr class="hover:bg-gray-100">
              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div class="flex items-center">
                  <nuxt-link :to="{ name : '' }" class="text-sm leading-5 font-medium text-gray-900 px-2 py-2 outline-none focus:outline-none">
                    L'intélligence articifielle
                  </nuxt-link>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <nuxt-link :to="{ name : '' }" class="text-sm leading-5 font-medium text-gray-900 px-2 py-2 outline-none focus:outline-none">24 Juil 2020</nuxt-link>
              </td>
              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <nuxt-link :to="{ name : '' }" class="text-sm leading-5 font-medium text-gray-900 px-2 py-2 outline-none focus:outline-none">
                  <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Avancé</span>
                </nuxt-link>
              </td>
              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                <nuxt-link :to="{ name : '' }" class="text-sm leading-5 font-medium text-gray-900 px-2 py-2 outline-none focus:outline-none">Bernard Lane</nuxt-link>
              </td>
              <td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                <nuxt-link :to="{ name : '' }" class="text-sm leading-5 font-medium text-indigo-600 hover:text-indigo-900 px-2 py-2 outline-none focus:outline-none">Edit</nuxt-link>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div> -->
  </main>
</template>
<script>
  export default {
    layout : 'dashboard',
    head () {
      return {
        title: 'Dashboard Home'
      }
    }
  }
</script>
