<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-xl w-full">
      <div>
        <nuxt-link :to="{ name: 'index'}" aria-label="Home" class="block text-center text-2xl text-indigo-600 font-black tracking-wider">iaLEARN</nuxt-link>
        <h2 class="mt-1 text-center text-3xl leading-9 font-extrabold text-gray-900">Inscrivez-vous</h2>
        <p class="mt-2 text-center text-sm leading-5 text-gray-600">
          <a href="#" class="font-medium text-gray-900 hover:text-gray-900 focus:outline-none focus:underline transition ease-in-out duration-150">Vous êtes un particulier ?</a>
        </p>
      </div>
      <form class="mt-8" action="#" method="POST">
        <input type="hidden" name="remember" value="true">
        <div class="mb-3">
          <label for="first_name" class="block text-sm font-medium leading-5 text-gray-700 tracking-wide">Nom</label>
          <div class="rounded-md shadow-sm">
            <input id="first_name" type="text" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none  focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"/>
          </div>
        </div>
        <div class="mb-3">
          <label for="last_name" class="block text-sm font-medium leading-5 text-gray-700 tracking-wide">Prénom</label>
          <div class="rounded-md shadow-sm">
            <input id="last_name" type="text" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none  focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"/>
          </div>
        </div>
        <div class="mb-3">
          <label for="email" class="block text-sm font-medium leading-5 text-gray-700 tracking-wide">Adresse email</label>
          <div class="rounded-md shadow-sm">
            <input id="email" type="email" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none  focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"/>
          </div>
        </div>
        <div class="mb-3">
          <label for="password" class="block text-sm font-medium leading-5 text-gray-700 tracking-wide">Mot de passe</label>
          <div class="rounded-md shadow-sm">
            <input id="password" type="password" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none  focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"/>
          </div>
        </div>
        <div class="mb-3">
          <label for="password-confirm" class="block text-sm font-medium leading-5 text-gray-700 tracking-wide">Confirmation de mot de passe</label>
          <div class="rounded-md shadow-sm">
            <input id="password-confirm" type="password" name="password_confirmation" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none  focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"/>
          </div>
        </div>
        <div class="mt-6">
          <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-blue-900 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">S'inscrire</button>
        </div>
        <div class="mt-4 text-center text-sm text-gray-700">
          <p> Vous avez déjà un compte ? <nuxt-link :to=" { name : 'auth-login' } " class="text-blue-500 font-normal underline">Connectez-vous !</nuxt-link> </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    //
  }
</script>
