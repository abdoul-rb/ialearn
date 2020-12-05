<template>
  <div>
    <div class="">
      <a href="#" class="modal-open flex items-center text-orange-500" @click.prevent="show">
        <span class="block text-xs underline uppercase font-semibold mr-4">Modal</span>
        <svg class="fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M11 9V5H9v4H5v2h4v4h2v-4h4V9h-4zm-1 11a10 10 0 1 1 0-20 10 10 0 0 1 0 20z"/>
        </svg>
      </a>
    </div>
    <modal name="login-modal" class="animate__animated animate__pulse ">
      <!-- https://tailwindui.com/documentation -->
      <div class="hidden sm:block absolute top-0 right-0 pt-3 pr-2">
        <button @click.prevent="hide" type="button" class="text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150" aria-label="Close">
          <svg class="h-8 w-8" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
      <div class="max-h-screen flex items-center justify-center bg-gray-50 overflow-y-auto px-4 py-4">
        <div class="max-w-xs w-full">
          <div>
            <div class="text-4xl text-indigo-1 text-center font-courgette">iaLearn</div>
            <h2 class="text-center text-xl text-gray-900 leading-9 font-semibold tracking-wide">Connectez-vous</h2>
            <p class="text-center text-sm leading-5 text-gray-600">Particulier ? Vous n'avez pas compte ?
              <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">inscrivez-vous ici</a>
            </p>
          </div>
          <form class="mt-4" action="#" method="POST">
            <input type="hidden" name="remember" value="true">
            <div class="rounded-md shadow-sm">
              <div>
                <input name="email" type="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="Adresse email" aria-label="Email address">
              </div>
              <div class="-mt-px">
                <input name="password" type="password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="Mot de passe" aria-label="Password">
              </div>
            </div>
            <div class="flex items-center justify-between mt-3">
              <div class="flex items-center">
                <input id="remember_me" type="checkbox" class="form-checkbox h-3 w-3 text-indigo-600 transition duration-150 ease-in-out">
                <label for="remember_me" class="block text-xs font-medium leading-5 text-gray-900 ml-1">Se souvenir de moi</label>
              </div>
              <div class="text-xs leading-5">
                <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                  Mot de passe oublié ?
                </a>
              </div>
            </div>
            <div class="mt-6">
              <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400 transition ease-in-out duration-150" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                  </svg>
                </span>
                Se connecter
              </button>
            </div>
          </form>
        </div>
      </div>
    </modal>
  </div>

</template>

<script>
  import 'animate.css'
  export default {
    name: 'loginComponent',
    methods: {
      show () {
        this.$modal.show('login-modal');
      },
      hide () {
        this.$modal.hide('login-modal');
      }
    },
    mount () {
      this.show()
    }
  }
</script>
#
