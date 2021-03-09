<template>
  <div class="sm:flex min-h-screen">
    <aside class="w-4/12 shadow py-10 px-24">
      <div>
        <div class="space-y-12 mb-6">
          <div class="flex items-center justify-center">
            <div class="flex-shrink-0 inline-block rounded-md overflow-hidden h-48 w-56" aria-hidden="true">
              <img class="rounded-md h-full w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8_O4NVbuRPGs0mhDDsWit-p_imZT03A4YLg&usqp=CAU" alt="">
            </div>
          </div>
        </div>
        <div class="">
          <h4 class="block text-2xl font-semibold tracking-wide text-cyan-700 font-courgette text-center">Kofi Annan</h4>
          <p class="mt-2 text-lg text-gray-500 font-nunito leading-5">« L'éducation est un droit humain avec un immense pouvoir de transformation. Les fondements de la liberté, de la démocratie et du développement humain durable reposent sur ses fondements. »</p>
        </div>
      </div>
    </aside>
    <main class="w-8/12 px-16 py-8">
      <div class="max-w-7xl mx-auto">
        <h3 class="text-2xl leading-6 font-semibold text-gray-900 tracking-wide font-nunito text-center">Informations su</h3>

        <section class="mt-6">
          <form action="#" >
            <div class="shadow sm:rounded-md sm:overflow-hidden">
              <div class="bg-white py-6 px-4 sm:p-6">
                <div class="border-b border-gray-300 pb-2">
                  <h2 id="payment_details_heading" class="text-lg leading-6 font-medium text-gray-900">Information sur l'université</h2>
                </div>

                <div class="mt-6 grid grid-cols-4 gap-6">
                  <div class="col-span-4 sm:col-span-2">
                    <label for="university_name" class="block text-sm font-medium text-gray-700">Dénomination</label>
                    <input type="text" name="university_name" id="university_name" autocomplete="cc-given-university" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm" value="Koffi Annan">
                  </div>

                  <div class="col-span-4 sm:col-span-3">
                    <label for="email_address" class="block text-sm font-medium text-gray-700">Adresse email</label>
                    <input type="email" name="email_address" id="email_address" autocomplete="email" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm">
                  </div>

                  <div class="col-span-4 sm:col-span-2">
                    <label for="name" class="block text-sm font-medium text-gray-700">Personne à contacter</label>
                    <input type="text" name="name" id="name" autocomplete="email" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm">
                  </div>

                  <div class="col-span-4 sm:col-span-2">
                    <label for="contact" class="block text-sm font-medium text-gray-700">Téléphone</label>
                    <input type="text" name="contact" id="contact" autocomplete="email" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm">
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

          <form action="#" class="my-12">
            <div class="shadow sm:rounded-md sm:overflow-hidden">
              <div class="bg-white py-6 px-4 sm:p-6">
                <div class="border-b border-gray-300 pb-2">
                  <h2 class="text-lg leading-6 font-medium text-gray-900">Mot de passe</h2>
                </div>

                <div class="mt-6 grid grid-cols-4 gap-6">
                  <div class="col-span-4 sm:col-span-3">
                    <label for="current_password" class="block text-sm font-medium text-gray-700">Mot de passe actuel</label>
                    <input type="password" name="current_password" id="current_password" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm">
                  </div>

                  <div class="col-span-4 sm:col-span-2">
                    <label for="password" class="block text-sm font-medium text-gray-700">Nouveau mot de passe</label>
                    <input type="password" name="password" id="password" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm">
                  </div>

                  <div class="col-span-4 sm:col-span-2">
                    <label for="password_confirrmation" class="block text-sm font-medium text-gray-700">Nouveau mot de passe</label>
                    <input type="password" name="password_confirrmation" id="password_confirrmation" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm">
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
      </div>
    </main>
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
