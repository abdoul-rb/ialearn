<template>
  <!-- <div class="min-h-screen overflow-hidden">
     <nav class="bg-white shadow">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0">
        <div class="flex justify-between h-16">
          <div class="flex">
            <nuxt-link  :to=" { name : 'index' } " class="outline-none focus:outline-none block flex-shrink-0 flex items-center transform translate-y-1 -translate-x-4">
              <div class="text-xl font-semibold uppercase italic tracking-wide text-indigo-700">IaLearn</div>
            </nuxt-link>
            <div class="hidden sm:ml-6 sm:flex">
              <nuxt-link :to=" { name : 'dashboard' } " class="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-semibold leading-5 text-gray-900 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 transition duration-150 ease-in-out">Tableau de bord</nuxt-link>
              <nuxt-link :to=" { name : 'dashboard' } " class="ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-semibold leading-5 text-gray-900 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 transition duration-150 ease-in-out">Cours</nuxt-link>
            </div>
          </div>
          <div class="hidden sm:ml-6 sm:flex sm:items-center">
            <div class="ml-3 relative">
              <div>
                <button @click.prevent="dropdownOpen = !dropdownOpen" class="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-transparent transition duration-150 ease-in-out" aria-label="User menu" aria-haspopup="true">
                  <div class="flex items-center">
                    <div class="text-sm font-medium italic tracking-wider text-gray-800">Abdoul Rahim</div>
                    <svg class="stroke-current text-gray-700 w-4 h-4 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </button>
              </div>
              <div class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg" v-show="dropdownOpen">
                <div class="py-1 rounded-md bg-white shadow-xs" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                  <a href="#" :to=" { name : '' } " class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">Mon profil</a>
                  <a href="#" :to=" { name : '' } " class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">Déconnexion</a>
                </div>
              </div>
            </div>
          </div>
          <div class="-mr-2 flex items-center sm:hidden">
            <button @click.prevent="isOpen = !isOpen" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out" aria-label="Main menu" aria-expanded="false">
              <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24" :class=" isOpen ? 'hidden' : 'block' ">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
              <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24" :class=" isOpen ? 'block' : 'hidden' ">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div :class=" isOpen ? 'block' : 'hidden' ">
        <div class="pt-2 pb-3">
          <nuxt-link :to=" { name : 'index' } " class="block pl-3 pr-4 py-2 border-l-4 border-indigo-500 text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out">Tableau de bord</nuxt-link>
          <nuxt-link :to=" { name : 'dashboard' } " class="mt-1 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out">Cours</nuxt-link>
        </div>
        <div class="pt-4 pb-3 border-t border-gray-200">
          <div class="flex items-center px-4">
            <div class="flex-shrink-0">
              <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1580130379624-3a069adbffc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="user profile" />
            </div>
            <div class="ml-3">
              <div class="text-base font-medium leading-6 text-gray-800">Aminata Keita</div>
              <div class="text-sm font-medium leading-5 text-gray-500">aminata.keita@learn.com</div>
            </div>
          </div>
          <div class="mt-3">

            <a href="#" class="mt-1 block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:text-gray-800 focus:bg-gray-100 transition duration-150 ease-in-out">Mon profil</a>
            <a href="#" class="mt-1 block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:text-gray-800 focus:bg-gray-100 transition duration-150 ease-in-out">Déconnexion</a>
          </div>
        </div>
      </div>
    </nav>
  </div>-->
  <div class="relative bg-white overflow-hidden font-montserrat">
    <div class="max-w-screen-xl mx-auto min-h-screen">
      <div class="max-w-screen-xl pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
        <div class="pt-6 px-4 sm:px-6 lg:px-8">
          <nav class="flex items-center justify-between sm:h-10 lg:justify-start">
            <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0"> <!-- Button -->
              <div class="flex items-center justify-between w-full md:w-auto">
                <nuxt-link :to="{ name: 'index'}" aria-label="Home" class="text-2xl text-indigo-600 font-black tracking-wide">
                  iaLEARN
                </nuxt-link>
                <div class="-mr-2 flex items-center md:hidden">
                  <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out" id="main-menu" aria-label="Main menu" aria-haspopup="true">
                    <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div class="hidden w-full md:block md:ml-10 md:pr-0">
              <div class="relative w-full flex">
                <div class="">
                  <nuxt-link :to="{ name: 'index' }" class="font-medium text-black hover:text-gray-900 transition duration-150 ease-in-out">Accueil</nuxt-link>
                  <nuxt-link :to="{ name: '' }" class="ml-8 font-medium text-black hover:text-gray-900 transition duration-150 ease-in-out">Cours</nuxt-link>
                </div>
                <div class="absolute inset-y-0 right-0">
                  <nuxt-link :to="{ name: '' }" class="inline w-full px-3 py-2 text-center font-medium shadow rounded text-white text-xs uppercase font-bold bg-indigo-600 hover:bg-indigo-700 hover:text-gray-200 focus:outline-none focus:bg-gray-100 focus:text-indigo-700 transition duration-150 ease-in-out">Se connecter</nuxt-link>
                  <nuxt-link :to="{ name: '' }" class="inline w-full px-3 py-2 text-center font-medium shadow rounded text-white text-xs uppercase font-bold bg-indigo-600 hover:bg-indigo-700 hover:text-gray-200 focus:outline-none focus:bg-gray-100 focus:text-indigo-700 transition duration-150 ease-in-out">S'inscrire</nuxt-link>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <!--
          Mobile menu, show/hide based on menu open state.
          Entering: "duration-150 ease-out"
            From: "opacity-0 scale-95"
            To: "opacity-100 scale-100"
          Leaving: "duration-100 ease-in"
            From: "opacity-100 scale-100"
            To: "opacity-0 scale-95"
        -->
        <div class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div class="rounded-lg shadow-md">
            <div class="rounded-lg bg-white shadow-xs overflow-hidden" role="menu" aria-orientation="vertical" aria-labelledby="main-menu">
              <div class="px-5 pt-4 flex items-center justify-between">
                <div>
                  <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg" alt="">
                </div>
                <div class="-mr-2">
                  <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out" aria-label="Close menu">
                    <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="px-2 pt-2 pb-3">
                <nuxt-link :to="{ name: '' }" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out" role="menuitem">Accueil</nuxt-link>
                <nuxt-link :to="{ name: '' }" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out" role="menuitem">Cours</nuxt-link>
              </div>
              <div class="flex items-center justify-around">
                <nuxt-link :to="{ name: '' }" class="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100 hover:text-indigo-700 focus:outline-none focus:bg-gray-100 focus:text-indigo-700 transition duration-150 ease-in-out" role="menuitem">Se connecter</nuxt-link>
                <nuxt-link :to="{ name: '' }" class="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100 hover:text-indigo-700 focus:outline-none focus:bg-gray-100 focus:text-indigo-700 transition duration-150 ease-in-out" role="menuitem">S'inscrire</nuxt-link>
              </div>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-5 gap-1 mt-10 sm:mt-12 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <main class="col-span-3 px-4 sm:px-0 pb-12">
            <div class="sm:text-center lg:text-left py-8">
              <h2 class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                Data to enrich your
                <br class="xl:hidden">
                <span class="text-indigo-600">online business</span>
              </h2>
              <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
              </p>
            </div>
          </main>
            <img class="col-span-2 object-cover shadow-md rounded-md" src="https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" alt="Artificial intelligence">

        </div>
        <div class="max-w-full mx-auto mt-12 px-8">
          <dl class="rounded-lg bg-gray-50 shadow-lg sm:grid sm:grid-cols-3">
            <div class="flex flex-col border-b border-gray-200 p-6 text-center sm:border-0 sm:border-r">
              <dt id="item-1" class="order-2 mt-2 text-lg leading-6 font-medium text-indigo-600">Unviersités</dt>
              <dd aria-describedby="item-1" class="order-1 text-6xl tracking-wider leading-none font-normal text-blue-750">73</dd>
            </div>
            <div class="flex flex-col border-t border-b border-gray-200 p-6 text-center sm:border-0 sm:border-l sm:border-r">
              <dt class="order-2 mt-2 text-lg leading-6 font-medium text-indigo-600">Étudiants</dt>
              <dd class="order-1 text-6xl tracking-wider leading-none font-normal text-blue-750">792</dd>
            </div>
            <div class="flex flex-col border-t border-gray-200 p-6 text-center sm:border-0 sm:border-l">
              <dt class="order-2 mt-2 text-lg leading-6 font-medium text-indigo-600">Particuliers</dt>
              <dd class="order-1 text-6xl tracking-wider leading-none font-normal text-blue-750">375</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
    <div class="bg-indigo-600">
      <div class="max-w-screen-xl mx-auto py-4 px-4 sm:px-6 md:flex md:flex-col md:items-center md:justify-between lg:px-8">
        <div class="flex justify-center md:order-1">
          <nuxt-link :to="{ name: '' }" class="text-xs font-medium text-white hover:underline">Conditions générales d'utilisation</nuxt-link>
          <nuxt-link :to="{ name: '' }" class="ml-6 text-xs font-medium text-white hover:underline">Contact</nuxt-link>
          <nuxt-link :to="{ name: '' }" class="ml-6 text-xs font-medium text-white hover:underline">Téléchargez l'application</nuxt-link>
        </div>
        <div class="mt-8 md:mt-0 md:order-2">
          <p class="text-center text-xs font-medium leading-6 text-white">
            &copy; 2020 ialearn, Inc. Tous droits réservés.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'Homepage'
    }
  },
  data () {
    return {
      isOpen : false,
      dropdownOpen : false
    }
  }
}
</script>
