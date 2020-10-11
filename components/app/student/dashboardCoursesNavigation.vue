<template>
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0">
    <div class="flex justify-between h-8">
      <div class="flex">
        <div class="flex space-x-2">
          <nuxt-link :to="{ name: '' }"  class="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-600 hover:text-gray-800 hover:border-indigo-500 focus:outline-none focus:text-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out">En cours</nuxt-link>
          <nuxt-link :to="{ name: '' }" class="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-600 hover:text-gray-800 hover:border-indigo-500 focus:outline-none focus:text-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out">Favoris</nuxt-link>
          <nuxt-link :to="{ name: '' }" class="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-600 hover:text-gray-800 hover:border-indigo-500 focus:outline-none focus:text-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out">Terminé</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>
