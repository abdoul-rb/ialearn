<template>
  <main>
    <div class="">
      <h2 class="text-xl font-semibold tracking-wide">Mon profil</h2>
    </div>
    <section class="py-10">
      <div class="md:col-span-2 my-4">
        <h3 class="text-lg font-medium leading-6 text-gray-900 mb-3">Mot de passe</h3>
        <form action="#" method="POST">
          <div class="shadow overflow-hidden sm:rounded-md">
            <div class="bg-white sm:py-6 px-4 py-5 sm:px-8">
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-4">
                  <label for="current_password" class="block text-sm font-medium leading-5 text-gray-700">Mot de passe actuel</label>
                  <input type="password" name="current_password" id="current_password" class="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                </div>
                <div class="col-span-6 sm:col-span-4">
                  <label for="password" class="block text-sm font-medium leading-5 text-gray-700">Nouveau mot de passe</label>
                  <input type="password" name="password" id="password" class="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                </div>
                <div class="col-span-6 sm:col-span-4">
                  <label for="password_confirmation" class="block text-sm font-medium leading-5 text-gray-700">Confirmation de mot de passe</label>
                  <input type="password" name="password_confirmation" id="password_confirmation" class="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                </div>
              </div>
            </div>
            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button class="py-2 px-6 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-500 focus:outline-none focus:shadow-outline-blue active:bg-indigo-600 transition duration-150 ease-in-out">Modifier</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  </main>
</template>

<script>
  export default {
    layout: 'student',
    head () {
      return {
        title: 'Tableau de bord - Mon mot de passe'
      }
    }
  }
</script>
