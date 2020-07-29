<template>
  <div class="bg-indigo-600">
    <div class="max-w-screen-xl mx-auto py-4 px-4 sm:px-6 md:flex md:flex-col md:items-center md:justify-between lg:px-8">
      <div class="flex justify-center items-center md:order-1">
        <nuxt-link :to="{ name: 'cgu' }" class="hidden md:block text-xs font-medium text-white hover:underline">Conditions générales d'utilisation</nuxt-link>
        <nuxt-link :to="{ name: 'cgu' }" class="md:hidden text-xs font-medium text-white hover:underline">CGU</nuxt-link>
        <nuxt-link :to="{ name: 'contact' }" class="ml-6 text-xs font-medium text-white hover:underline">Contact</nuxt-link>
        <a href="#" class="ml-6 text-xs font-medium text-white hover:underline">Téléchargez l'application</a>
      </div>
      <div class="mt-1 md:mt-8 md:mt-0 md:order-2">
        <p class="text-center text-xs font-medium leading-6 text-white">
          &copy; 2020 ialearn. Tous droits réservés.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>
