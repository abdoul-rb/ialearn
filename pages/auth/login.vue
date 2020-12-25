<template>
  <main >
    <div class="bg-gray-900 text-gray-400 tracking-tight">
      <div class="flex justify-center items-center py-5 lg:py-10">
        <nuxt-link :to="{ name: 'auth-login' }" class="inline-flex items-center leading-none text-gray-300">
          <svg class="h-10 lg:h-12 w-auto" fill="none" viewBox="0 0 70 64" xmlns="http://www.w3.org/2000/svg">
            <title>Tailwind CSS Design</title>
            <path clip-rule="evenodd" d="M32 16C24.8 16 20.3 19.6 18.5 26.8C21.2 23.2 24.35 21.85 27.95 22.75C30.004 23.2635 31.4721 24.7536 33.0971 26.4031C35.7443 29.0901 38.8081 32.2 45.5 32.2C52.7 32.2 57.2 28.6 59 21.4C56.3 25 53.15 26.35 49.55 25.45C47.496 24.9365 46.0279 23.4464 44.4029 21.7969C41.7557 19.1099 38.6919 16 32 16ZM18.5 32.2C11.3 32.2 6.8 35.8 5 43C7.7 39.4 10.85 38.05 14.45 38.95C16.504 39.4635 17.9721 40.9536 19.5971 42.6031C22.2443 45.2901 25.3081 48.4 32 48.4C39.2 48.4 43.7 44.8 45.5 37.6C42.8 41.2 39.65 42.55 36.05 41.65C33.996 41.1365 32.5279 39.6464 30.9029 37.9969C28.2557 35.3099 25.1919 32.2 18.5 32.2Z" fill="url(#logoGradient)" fill-rule="evenodd"></path>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="logoGradient" x1="3.5" x2="59" y1="16" y2="48">
                <stop stop-color="#7F00FF"></stop>
                <stop offset="1" stop-color="#C3DAFE"></stop>
              </linearGradient>
            </defs>
          </svg>
          <span class="inline font-display font-medium text-2xl lg:text-4xl xl:text-3xl">ialearn</span>
        </nuxt-link>
      </div>
      <div class="min-h-screen">
        <div class="max-w-6xl mx-auto flex items-center justify-center px-3">
          <div class="hidden md:block absolute inset-0">
            <LogoLogin class="ml-12" />
          </div>
          <div class="w-full lg:w-1/2 xl:w-3/5"></div>
          <!-- Form login -->
          <div class="w-full lg:w-1/2 xl:w-2/5">
            <div class="relative z-30 max-w-md mx-auto px-4 py-8 lg:px-8 lg:py-10 shadow-md bg-gray-800 rounded-lg">
              <div>
                <h1 class="text-xl lg:text-2xl font-bold text-gray-300 tracking-wider">Connexion</h1>
                <p class="tracking-wide text-sm">Connectez-vous pour accéder à vos formations.</p>
              </div>
              <form @submit.prevent="submit" class="mt-8 lg:mt-10">
                <div class="space-y-4">
                  <div class="block">
                    <div class="relative bg-gray-900 rounded border border-gray-500 px-2 transition-all ease-out duration-300 focus-within:bg-gray-800 focus-within:border-gray-400">
                      <input type="email" id="email" name="email" v-model="form.email" placeholder="Entrez votre adresse email" autocomplete="off" class="relative w-full bg-transparent outline-none text-sm px-1 py-3 z-10">
                    </div>
                    <span v-if="errors" class="text-red-500 text-xs">Please enter your email or mobile number.</span></div>
                    <div class="block">
                      <div class="relative bg-gray-900 rounded border border-gray-500 px-2 transition-all ease-out duration-300 focus-within:bg-gray-800 focus-within:border-gray-400">
                        <input type="password" id="password" name="password" v-model="form.password" placeholder="Mot de passe" autocomplete="off" class="relative w-full bg-transparent outline-none text-sm px-1 py-3 z-10">
                      </div>
                      <span v-if="errors" class="text-red-500 text-xs">Please enter your password.</span>
                    </div>
                  <div class="py-3">
                    <button type="submit" class="w-full inline-flex items-center justify-center rounded-lg overflow-hidden px-4 py-3 bg-indigo-600 text-white transition ease-out duration-300 uppercase font-semibold hover:bg-indigo-700 focus:outline-none tracking-wide">
                      Se connecter
                    </button>
                  </div>
                </div>
              </form>
              <div class="flex justify-center space-x-2">
                <button class="inline-flex items-center rounded-lg overflow-hidden p-2 bg-gray-800 transition ease-out duration-300 focus:outline-none hover:bg-gray-700" type="button">
                  <svg class="h-6 w-6 inline" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <title>Login with Apple</title>
                    <g fill="#d0d1d3">
                      <path d="M475.229 362.124V358.4c-42.822-22.342-66.095-55.855-66.095-104.262 0-39.098 17.687-73.542 49.338-95.884l1.862-.931c-21.411-26.065-49.338-51.2-93.091-51.2-30.72 0-55.855 28.858-97.745 28.858-33.513 0-47.476-27.927-83.782-27.927-75.404.931-149.876 67.025-149.876 153.6 0 45.615 14.895 116.364 49.338 176.873C109.382 482.211 140.102 512 174.545 512c24.204 0 53.993-22.342 88.436-22.342 30.72 0 58.647 19.549 86.575 19.549 66.095 0 126.604-83.782 126.604-140.567 0-1.862-.931-3.724-.931-6.516"></path>
                      <path d="M267.636 135.913c49.338-14.895 94.953-51.2 94.953-114.502 0-4.655-.931-11.171-1.862-18.618V0c-50.269 13.964-94.953 52.131-94.953 112.64 0 5.585.931 13.033 1.862 20.48v2.793z"></path>
                    </g>
                  </svg>
                </button>
                <button class="inline-flex items-center rounded-lg overflow-hidden p-2 bg-gray-800 transition ease-out duration-300 focus:outline-none hover:bg-gray-700" type="button">
                  <svg class="h-6 w-6 inline" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <title>Login with Google</title>
                    <path d="M113.47 309.408L95.648 375.94l-65.139 1.378C11.042 341.211 0 299.9 0 256c0-42.451 10.324-82.483 28.624-117.732h.014L86.63 148.9l25.404 57.644c-5.317 15.501-8.215 32.141-8.215 49.456.002 18.792 3.406 36.797 9.651 53.408z" fill="#fbbb00"></path>
                    <path d="M507.527 208.176C510.467 223.662 512 239.655 512 256c0 18.328-1.927 36.206-5.598 53.451-12.462 58.683-45.025 109.925-90.134 146.187l-.014-.014-73.044-3.727-10.338-64.535c29.932-17.554 53.324-45.025 65.646-77.911h-136.89V208.176h245.899z" fill="#518ef8"></path>
                    <path d="M416.253 455.624l.014.014C372.396 490.901 316.666 512 256 512c-97.491 0-182.252-54.491-225.491-134.681l82.961-67.91c21.619 57.698 77.278 98.771 142.53 98.771 28.047 0 54.323-7.582 76.87-20.818l83.383 68.262z" fill="#28b446"></path>
                    <path d="M419.404 58.936l-82.933 67.896C313.136 112.246 285.552 103.82 256 103.82c-66.729 0-123.429 42.957-143.965 102.724l-83.397-68.276h-.014C71.23 56.123 157.06 0 256 0c62.115 0 119.068 22.126 163.404 58.936z" fill="#f14336"></path>
                  </svg>
                </button>
                <button class="inline-flex items-center rounded-lg overflow-hidden p-2 bg-gray-800 transition ease-out duration-300 focus:outline-none hover:bg-gray-700" type="button">
                  <svg class="h-6 w-6 inline" viewBox="0 0 291.319 291.319" xmlns="http://www.w3.org/2000/svg">
                    <title>Login with Facebook</title>
                    <path d="M145.659 0c80.45 0 145.66 65.219 145.66 145.66 0 80.45-65.21 145.659-145.66 145.659S0 226.109 0 145.66C0 65.219 65.21 0 145.659 0z" fill="#3b5998"></path>
                    <path d="M163.394 100.277h18.772v-27.73h-22.067v.1c-26.738.947-32.218 15.977-32.701 31.763h-.055v13.847h-18.207v27.156h18.207v72.793h27.439v-72.793h22.477l4.342-27.156h-26.81v-8.366c0-5.335 3.55-9.614 8.603-9.614z" fill="#fff"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="fixed inset-x-0 bottom-0 z-full px-3 py-3">
        <div class="flex justify-end">
          <nuxt-link :to="{ name: 'index' }" class="inline-flex items-center px-5 py-2 rounded-lg bg-white shadow hover:bg-gray-200 transition ease-out duration-200 capitalize focus:outline-none font-semibold text-sm text-gray-900">
            ialearn
          </nuxt-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  import LogoLogin from "../../components/LogoLogin";
  export default {
    components: { LogoLogin },
    head () {
      return {
        title: 'Etudiant - Connectez-vous !'
      }
    },
    data() {
      return {
        form: {
          email: '',
          password: ''
        },
        errors: null,
      }
    },
    methods: {
      async submit() {
        try {
          await this.$auth.loginWith('local', { data: this.form })
        } catch (error) {
          console.log(error)
        }
        console.log(this.form)
      },
    }
  }
</script>
