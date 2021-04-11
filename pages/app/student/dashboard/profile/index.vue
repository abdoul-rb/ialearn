<template>
  <main>
    <div class="">
      <h2 class="text-xl font-semibold tracking-wide">Mon profil</h2>
    </div>
    <section class="py-10">
      <div class="md:col-span-2 my-4">
        <h3 class="text-lg font-medium leading-6 text-gray-900 mb-3">Informations personnelles</h3>
        <form action="#" method="POST">
          <div class="shadow overflow-hidden sm:rounded-md">
            <div class="bg-white sm:py-6 px-4 py-5 sm:px-8">
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-3">
                  <label for="first_name" class="block text-sm font-medium leading-5 text-gray-700">Nom</label>
                  <input id="first_name" class="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" value="Bauer">
                </div>
                <div class="col-span-6 sm:col-span-3">
                  <label for="last_name" class="block text-sm font-medium leading-5 text-gray-700">Prénom</label>
                  <input id="last_name" class="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" value="Jack">
                </div>
                <div class="col-span-6 sm:col-span-4">
                  <label for="email_address" class="block text-sm font-medium leading-5 text-gray-700">Adresse email</label>
                  <input id="email_address" class="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" value="jack.bauer@24h.com">
                </div>
                <div class="col-span-6 sm:col-span-3">
                  <label for="phone_number" class="block text-sm font-medium leading-5 text-gray-700">Téléphone</label>
                  <input id="phone_number" class="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" value="+1 376-102-555">
                </div>
              </div>
            </div>
            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button class="py-2 px-6 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-500 focus:outline-none focus:shadow-outline-blue active:bg-indigo-600 transition duration-150 ease-in-out">Enregistrer</button>
            </div>
          </div>
        </form>
      </div>
      <div class="hidden sm:block">
        <div class="py-5">
          <div class="border-t border-gray-200"></div>
        </div>
      </div>
      <div class="sm:flex sm:flex-row-reverse">
          <span class="flex w-full rounded-md shadow-sm sm:w-auto">
            <button type="button" class="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-red-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red transition ease-in-out duration-150 sm:text-sm sm:leading-5">Supprimer mon compte</button>
          </span>
      </div>
    </section>
  </main>
</template>

<script>
  export default {
    layout: 'student',
    head () {
      return {
        title: 'Mon profil'
      }
    }
  }
</script>
