<template>
  <div>
    <div class="relative bg-cyan-700 pb-32 overflow-hidden">
      <header class="relative py-10">
        <div class="flex items-center justify-between px-24">
          <h1 class="text-xl sm:text-3xl font-nunito font-semibold tracking-wide text-white">Ajouter un nouvel étudiant</h1>
          <div class="flex items-center">
            <svg class="flex-shrink-0 h-5 w-5 text-gray-400 transform -rotate-180 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
            </svg>
            <nuxt-link :to="{ name: 'app-university-dashboard-students' }" class="text-base font-medium text-gray-300 hover:text-gray-400">Retour à la liste</nuxt-link>
          </div>
        </div>
      </header>
    </div>
    <main class="relative -mt-32">
      <div class="mt-8 max-w-screen-xl mx-auto ">
        <section class="">
          <form action="#">
            <div class="shadow sm:rounded-md sm:overflow-hidden">
              <div class="bg-white py-6 px-4 sm:p-6">
                <div>
                  <h2 id="payment_details_heading" class="text-lg leading-6 font-medium text-gray-900">Nouvel étudiant</h2>
                  <p class="mt-1 text-sm text-gray-500">Renseigner les informations basiques pour ajouter un nouvel étudiant.</p>
                </div>

                <div class="mt-6 grid grid-cols-6 gap-6">
                  <div class="col-span-6 sm:col-span-3">
                    <label for="first_name" class="block text-sm font-medium text-gray-700">Nom</label>
                    <input type="text" name="first_name" id="first_name" autocomplete="cc-given-name" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm">
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <label for="last_name" class="block text-sm font-medium text-gray-700">Prénom</label>
                    <input required type="text" name="last_name" id="last_name" autocomplete="cc-family-name" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm">
                  </div>

                  <div class="col-span-6 sm:col-span-6">
                    <label for="email_address" class="block text-sm font-medium text-gray-700">Adresse email</label>
                    <input type="email" name="email_address" id="email_address" autocomplete="email" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm">
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <label for="expiration_date" class="block text-sm font-medium text-gray-700">N° matricule</label>
                    <input type="text" name="expiration_date" id="expiration_date" autocomplete="cc-exp" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm" placeholder="00 00 00 00">
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <label for="level" class="block text-sm font-medium text-gray-700">Niveau</label>
                    <select name="level" id="level" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm">
                      <option>Licence 1</option>
                      <option>Licence 2</option>
                      <option>Licence 3</option>
                      <option>Licence 4</option>
                      <option>Master 1</option>
                      <option>Master 2</option>
                    </select>
                  </div>

                  <div class="col-span-6 sm:col-span-6">
                    <span class="block text-sm font-medium text-gray-700">Cours</span>
                    <div class="flex space-x-4 rounded border border-gray-300 px-2 py-3 mt-2">
                      <div class="mt-1">
                        <label class="inline-flex items-center">
                          <input type="checkbox" class="form-checkbox text-cyan-600 rounded shadow h-4 w-4 focus:outline-none">
                          <span class="ml-2 text-base">Power BI</span>
                        </label>
                      </div>
                      <div class="mt-1">
                        <label class="inline-flex items-center">
                          <input type="checkbox" class="form-checkbox text-cyan-600 rounded shadow h-4 w-4">
                          <span class="ml-2 text-base">UI/UX </span>
                        </label>
                      </div>
                    </div>


                  </div>

                </div>
              </div>
              <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button type="submit" class="bg-cyan-700 border border-transparent rounded-md shadow-sm py-2 px-8 inline-flex justify-center text-sm font-medium text-white hover:bg-cyan-900 focus:outline-none">
                  Ajouter
                </button>
              </div>
            </div>
          </form>
        </section>
      </div>
    </main>
  </div>
</template>

<script>
  export default {
    layout: 'university',
    head () {
      return {
        title: 'Nouvel étudiant'
      }
    },
    data() {
      return {

      }
    },
  }
</script>
