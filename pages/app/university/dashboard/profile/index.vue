<template>
  <div class="sm:flex min-h-screen">
    <aside class="w-4/12 shadow py-10 px-24">
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
      </div>
    </aside>
    <div class="w-8/12 px-20 py-8">
      <main class="max-w-7xl mx-auto">
        <div class="text-center">
          <h3 class="text-2xl leading-6 font-semibold text-gray-900 tracking-wide font-nunito">Complete university information</h3>
          <p class="mt-2 text-base text-gray-500 font-nunito leading-5">Lorem ipsum dolor sit amet asperiores autem pariatur quos saepe sunt temporibus, ut..</p>
        </div>

        <section class="mt-6">
          <form action="#" >
            <div class="shadow sm:rounded-md sm:overflow-hidden">
              <div class="bg-white py-6 px-4 sm:p-6">
                <div class="border-b border-gray-300 pb-2">
                  <h2 id="payment_details_heading" class="text-lg leading-6 font-medium text-gray-900">University Details</h2>
                </div>

                <div class="mt-6 grid grid-cols-4 gap-6">
                  <div class="col-span-4 sm:col-span-2">
                    <label for="university_name" class="block text-sm font-medium text-gray-700">Dénomination</label>
                    <input type="text" name="university_name" id="university_name" autocomplete="cc-given-university" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm">
                  </div>

                  <div class="col-span-4 sm:col-span-2">
                    <label for="last_name" class="block text-sm font-medium text-gray-700">Prénom</label>
                    <input type="text" name="last_name" id="last_name" autocomplete="cc-family-name" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm">
                  </div>

                  <div class="col-span-4 sm:col-span-3">
                    <label for="email_address" class="block text-sm font-medium text-gray-700">Adresse email</label>
                    <input type="text" name="email_address" id="email_address" autocomplete="email" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm">
                  </div>

                  <div class="col-span-4 sm:col-span-2">
                    <label for="expiration_date" class="block text-sm font-medium text-gray-700">N° matricule</label>
                    <input type="text" name="expiration_date" id="expiration_date" autocomplete="cc-exp" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm" placeholder="MM / YY">
                  </div>

                  <div class="col-span-4 sm:col-span-2">
                    <label for="level" class="block text-sm font-medium text-gray-700">Niveau</label>
                    <input type="text" name="level" id="level" autocomplete="cc-exp" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm" placeholder="MM / YY">
                  </div>

                </div>
              </div>
              <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button type="submit" class="bg-cyan-700 border border-transparent rounded-md shadow-sm py-2 px-8 inline-flex justify-center text-sm font-medium text-white hover:bg-cyan-900 focus:outline-none">
                  Enregistrer
                </button>
              </div>
            </div>
          </form>
        </section>
      </main>
    </div>
  </div>
</template>

<script>
  export default {
    layout: 'university',
    head() {
      return {
        title: 'Koffi Anan Profile'
      }
    },
    data() {
      return {

      }
    }
  }
</script>
