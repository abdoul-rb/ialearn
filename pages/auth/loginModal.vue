<template>
  <app-modal name="LoginModal">
    <div class="max-h-screen flex items-center justify-center bg-gray-50 overflow-y-auto px-2 py-12">
      <div class="max-w-xs w-full">
        <div>
          <div class="text-3xl font-semibold text-center tracking-wide text-cyan-700 font-courgette">iaLearn</div>
          <h2 class="text-center text-xl text-gray-900 leading-9 font-semibold tracking-wide">Connectez-vous</h2>
          <p class="text-center text-sm leading-5 text-gray-600">Particulier ? Vous n'avez pas compte ?
            <nuxt-link :to="{ name: 'auth-register' }"  class="font-semibold text-cyan-700 hover:text-indigo-800 focus:outline-none focus:underline transition ease-in-out duration-150">inscrivez-vous ici</nuxt-link>
          </p>
        </div>
        <form class="mt-4" @submit.prevent="submit">
          <input type="hidden" name="remember" value="true">
          <div class="rounded-md shadow-sm">
            <div>
              <input type="email" name="email" v-model="form.email" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="Adresse email" aria-label="Email address" autocomplete="email-address">
            </div>
            <div class="-mt-px">
              <input type="password" name="password" v-model="form.password" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="Mot de passe" aria-label="Password" autocomplete="current-password">
            </div>
          </div>
          <div class="flex items-center justify-between mt-3">
            <div class="flex items-center">
              <input id="remember_me" type="checkbox" class="form-checkbox h-3 w-3 text-indigo-600 transition duration-150 ease-in-out">
              <label for="remember_me" class="block text-xs font-medium leading-5 text-gray-900 ml-1">Se souvenir de moi</label>
            </div>
            <div class="text-xs leading-5">
              <a href="#" class="font-semibold text-cyan-700 hover:text-cyan-800 focus:outline-none focus:underline transition ease-in-out duration-150">
                Mot de passe oublié ?
              </a>
            </div>
          </div>
          <div class="mt-6">
            <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-semibold tracking-wide rounded-md text-white bg-cyan-600 hover:bg-cyan-500 focus:outline-none transition duration-150 ease-in-out">
                <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg class="h-5 w-5 text-cyan-500 group-hover:text-cyan-400 transition ease-in-out duration-150" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                  </svg>
                </span>
              Se connecter
            </button>
          </div>
        </form>
      </div>
    </div>
  </app-modal>
</template>

<script>
  import appModal from "../../components/app/Modal/appModal";
  import App from "../../layouts/app";
  export default {
    components : { App, appModal },
    data () {
      return {
        validation: {},
        form: {
          email: '',
          password: '',
        }
      }
    },
    methods: {
      async submit() {
        try {
          await this.$auth.loginWith('local', { data: this.form });
          setTimeout(() => {
            this.$modal.hide('LoginModal')
          },200);
          console.log(this.form);
        } catch (e) {
          console.error(e);
          if (e.response.status === 422) {
            this.validation = e.response.data.errors
          }
        }
      }
    },
  }
</script>
