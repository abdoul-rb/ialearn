<template>
  <div class="min-h-screen">
    <div  class="h-screen bg-gray-50 flex overflow-hidden">
      <!-- Narrow sidebar left -->
      <div class="hidden w-28 bg-indigo-700 overflow-y-auto md:block">
        <div class="w-full py-6 flex flex-col items-center">
          <div class="flex-shrink-0 flex items-center">
            <div class="text-xl font-semibold font-courgette text-gray-200">iaLearn</div>
          </div>
          <div class="flex-1 mt-6 w-full px-2 space-y-1">
            <nuxt-link :to="{ name: 'app-student-dashboard' }" class="text-indigo-100 hover:bg-indigo-800 hover:text-white group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium" :class="this.$route.name === 'app-student-dashboard' ? 'bg-indigo-800 text-white': ''">
              <svg class="text-indigo-300 group-hover:text-white h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
              </svg>
              <span class="mt-2">Home</span>
            </nuxt-link>

            <nuxt-link :to="{ name: 'app-student-dashboard-courses' }" class="text-indigo-100 hover:bg-indigo-800 hover:text-white group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium" :class="this.$route.name === 'app-student-dashboard-courses' ? 'bg-indigo-800 text-white': ''">
              <svg class="text-indigo-300 group-hover:text-white h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
              </svg>
              <span class="mt-2">Mes cours</span>
            </nuxt-link>

            <nuxt-link :to="{ name: '' }" class="text-indigo-100 hover:bg-indigo-800 hover:text-white group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium" :class="this.$route.name === 'app-student-dashboard-shared' ? 'bg-indigo-800 text-white': ''">
              <svg class="text-indigo-300 group-hover:text-white h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
              <span class="mt-2">Shared</span>
            </nuxt-link>

            <nuxt-link :to="{ name: 'app-student-dashboard-profile' }" class="text-indigo-100 hover:bg-indigo-800 hover:text-white group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium" :class="this.$route.name === 'app-student-dashboard-profile' ? 'bg-indigo-800 text-white': ''">
              <svg class="text-indigo-300 group-hover:text-white h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              <span class="mt-2">Settings</span>
            </nuxt-link>
          </div>
        </div>
      </div>

      <!-- Mobile menu -->
      <div v-show="isOpen" class="md:hidden" role="dialog" aria-modal="true" style="display: none;">
        <div class="fixed inset-0 z-40 flex">
          <div v-show="isOpen" @click.prevent="isOpen = !isOpen" class="fixed inset-0 bg-gray-600 bg-opacity-75" aria-hidden="true" style="display: none;">
          </div>

          <div v-show="isOpen" class="relative max-w-xs w-full bg-indigo-700 pt-5 pb-4 flex-1 flex flex-col" style="display: none;">
            <div class="absolute top-1 right-0 -mr-14 p-1">
              <button type="button" @click.prevent="isOpen = !isOpen" class="h-12 w-12 rounded-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white">
                <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
                <span class="sr-only">Close sidebar</span>
              </button>
            </div>

            <!-- Logo : Tailwind -->
            <div class="flex-shrink-0 px-4 flex items-center">
              <div class="text-xl text-white font-semibold font-courgette">iaLearn</div>
            </div>
            <div class="mt-5 flex-1 h-0 px-2 overflow-y-auto">
              <nav class="h-full flex flex-col">
                <div class="space-y-1">
                  <nuxt-link :to="{ name: 'app-student-dashboard' }" class="text-indigo-100 hover:bg-indigo-800 hover:text-white group py-2 px-3 rounded-md flex items-center text-sm font-medium" :class="this.$route.name === 'app-student-dashboard' ? 'bg-indigo-800 text-white': ''">
                    <svg class="text-indigo-300 group-hover:text-white mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                    </svg>
                    <span>Home</span>
                  </nuxt-link>

                  <nuxt-link :to="{ name: 'app-student-dashboard-courses' }" class="text-indigo-100 hover:bg-indigo-800 hover:text-white group py-2 px-3 rounded-md flex items-center text-sm font-medium" :class="this.$route.name === 'app-student-dashboard-courses' ? 'bg-indigo-800 text-white': ''">
                    <svg class="text-indigo-300 group-hover:text-white mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                    </svg>
                    <span>Mes cours</span>
                  </nuxt-link>

                  <nuxt-link :to="{ name: '' }" class="text-indigo-100 hover:bg-indigo-800 hover:text-white group py-2 px-3 rounded-md flex items-center text-sm font-medium" :class="this.$route.name === 'app-student-dashboard-shared' ? 'bg-indigo-800 text-white': ''">
                    <svg class="text-indigo-300 group-hover:text-white mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                    <span>Shared</span>
                  </nuxt-link>

                  <nuxt-link :to="{ name: '' }" class="text-indigo-100 hover:bg-indigo-800 hover:text-white group py-2 px-3 rounded-md flex items-center text-sm font-medium" :class="this.$route.name === 'app-student-dashboard-albums' ? 'bg-indigo-800 text-white': ''">
                    <svg class="text-indigo-300 group-hover:text-white mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                    </svg>
                    <span>Albums</span>
                  </nuxt-link>

                  <nuxt-link :to="{ name: 'app-student-dashboard-profile' }" class="text-indigo-100 hover:bg-indigo-800 hover:text-white group py-2 px-3 rounded-md flex items-center text-sm font-medium" :class="this.$route.name === 'app-student-dashboard-settings' ? 'bg-indigo-800 text-white': ''">
                    <svg class="text-indigo-300 group-hover:text-white mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <span>Settings</span>
                  </nuxt-link>
                </div>
              </nav>
            </div>
          </div>

          <div class="flex-shrink-0 w-14" aria-hidden="true">
            <!-- Dummy element to force sidebar to shrink to fit close icon -->
          </div>
        </div>
      </div>

      <!-- Content area -->
      <div class="flex-1 flex flex-col overflow-hidden">
        <header class="w-full">
          <div class="relative z-10 flex-shrink-0 h-16 bg-white border-b border-gray-200 shadow-sm flex">
            <button type="button" @click.prevent="isOpen = !isOpen" class="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden">
              <span class="sr-only">Open sidebar</span>
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"></path>
              </svg>
            </button>
            <div class="flex-1 flex justify-between px-4 sm:px-6">
              <div class="flex-1 flex">
                <form class="w-full flex md:ml-0" action="#" method="GET">
                  <label for="search_field" class="sr-only">Search all files</label>
                  <div class="relative w-full text-gray-400 focus-within:text-gray-600">
                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                      <svg class="flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                      </svg>
                    </div>
                    <input name="search_field" id="search_field" class="h-full w-full border-transparent py-2 pl-8 pr-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400" placeholder="Rechercher" type="search">
                  </div>
                </form>
              </div>
              <div class="ml-2 flex items-center space-x-4 sm:ml-6 sm:space-x-6">
                <!-- Profile dropdown -->
                <div @keydown.escape.stop="dropdownOpen = false" class="relative flex-shrink-0">
                  <div>
                    <button type="button" @click.prevent="dropdownOpen = !dropdownOpen" class="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500" id="user-menu" aria-haspopup="true">
                      <span class="sr-only">Open user menu</span>
                      <img class="h-8 w-8 rounded-full" :src="this.$auth.user.avatar" :alt="'Photo de profil de ' + this.$auth.user.lastname">
                    </button>
                  </div>

                  <transition enter-active-class="transition ease-out duration-100" enter-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                    <div v-show="dropdownOpen" class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                      <nuxt-link :to="{ name: 'app-student-dashboard-profile' }" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Profile</nuxt-link>
                      <a href="#" @click.prevent="logout" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Déconnexion</a>
                    </div>
                  </transition>
                </div>

                <button type="button" class="flex bg-indigo-600 p-1 rounded-full items-center justify-center text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <svg class="h-6 w-6"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                  </svg>
                  <span class="sr-only">Add file</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        <!-- Main content -->
        <div class="flex-1 flex items-stretch overflow-hidden">
          <main class="flex-1 overflow-y-auto">
            <!-- Primary column -->
            <section aria-labelledby="primary-heading" class="min-w-0 flex-1 flex flex-col overflow-hidden lg:order-last">
              <div class="p-6 h-full">
                <Nuxt />
              </div>
            </section>
          </main>

          <!-- Secondary column (hidden on smaller screens) -->
          <aside class="hidden w-96 bg-white border-l border-gray-200 overflow-y-auto lg:block">
            <div class="p-6 h-full">
              <div class="block border-2 border-dashed border-gray-300 rounded h-full w-full text-gray-200"></div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  </div>
  <!--
  <div class="overflow-hidden font-montserrat">
    <div class="min-h-screen flex">
      <aside class="w-3/12 bg-white px-6 pt-10">
        <div class="flex">
          <div class="relative">
            <div class="flex items-center">
              <img class="h-8 w-8 rounded-sm object-cover object-top mr-2" src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="" />
              <button @click.prevent="dropdownOpen = !dropdownOpen" class="flex items-baseline text-md font-semibold focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out" id="user-menu" aria-label="User menu" aria-haspopup="true">
                <span class="block mr-2">Jack Bauer</span>
                <svg class="stroke-current w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
            </div>
            <div class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg" v-show="dropdownOpen">
              <div class="py-1 rounded-md bg-white shadow-xs" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                <nuxt-link :to=" { name : 'app-student-profile' } " class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">Mon compte</nuxt-link>
                <a href="#" @click.prevent="logout" class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">Déconnexion</a>
              </div>
            </div>
          </div>
        </div>
        <div class="my-10">
          <h4 class="text-lg font-semibold tracking-wide">Progression</h4>
          <div class="mt-6">
            <div class="grid grid-cols-5 items-center my-6">
              <span class="col-span-1 inline-flex items-center justify-center text-center bg-indigo-100 w-8 h-8 rounded-md">
                <svg class="stroke-current w-5 h-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                </svg>
              </span>
              <div class="col-span-2">
                <div class="text-xs font-bold tracking-wide truncate my-0">UI/UX Design</div>
              </div>
              <div class="col-span-2 h-2 relative w-full rounded-full shadow-xl overflow-hidden">
                <div class="w-full h-full bg-gray-200 shadow-xl absolute"></div>
                <div class="h-full bg-indigo-500 absolute" style="width:15%"></div>
              </div>
            </div>
            <div class="grid grid-cols-5 items-center my-6">
              <span class="col-span-1 inline-flex items-center justify-center text-center bg-green-100 w-8 h-8 rounded-md">
                <svg class="stroke-current w-5 h-5 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
              </span>
              <div class="col-span-2">
                <div class="text-xs font-bold tracking-wide truncate my-0">Power BI</div>
              </div>
              <div class="col-span-2 h-2 relative w-full rounded-full shadow-xl overflow-hidden">
                <div class="w-full h-full bg-gray-200 shadow-xl absolute"></div>
                <div class="h-full bg-green-500 absolute" style="width:40%"></div>
              </div>
            </div>
            <div class="grid grid-cols-5 border items-center my-6">
              <span class="col-span-1 inline-flex items-center justify-center text-center bg-yellow-100 w-8 h-8 rounded-md">
                <svg class="stroke-current w-5 h-5 text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </span>
              <div class="col-span-2 border">
                <div class="text-xs font-bold tracking-wide truncate my-0">L'apprentissage</div>
              </div>
              <div class="col-span-2 h-2 relative w-full rounded-full shadow-xl overflow-hidden">
                <div class="w-full h-full bg-gray-200 shadow-xl absolute"></div>
                <div class="h-full bg-yellow-500 absolute" style="width:80%"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="my-12">
          <h4 class="text-lg font-semibold tracking-wide">Upcomming Task</h4>
          <div class="mt-6">
            <div class="flex items-center space-x-6 my-6">
              <span class="col-span-1 inline-flex items-center justify-center text-center bg-indigo-100 w-8 h-8 rounded-md">
                <svg class="stroke-current w-5 h-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </span>
              <div class="col-span-2">
                <div class="text-xs font-bold tracking-wide truncate my-0">UI/UX Design</div>
                <div class="text-gray-500 text-xs font-medium tracking-wide my-0">27 OCT 2021 - Comming</div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-center mt-3">
          <svg class="w-56 h-56" id="eb113788-f1f1-4c1f-be62-f1d0ea2e1eb6" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="795.39431" height="574.03802" viewBox="0 0 795.39431 574.03802">
            <defs><linearGradient id="b2a81085-935f-40be-bb27-75940df8c338" x1="-450.78971" y1="2803.04671" x2="-450.78971" y2="2729.34772" gradientTransform="translate(3217.53309 1009.65784) rotate(90)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="gray" stop-opacity="0.25"/><stop offset="0.53514" stop-color="gray" stop-opacity="0.12"/><stop offset="1" stop-color="gray" stop-opacity="0.1"/></linearGradient></defs><title>Graduation</title><ellipse cx="232.05775" cy="450.06897" rx="35.09476" ry="5.26421" transform="translate(-476.55674 294.92367) rotate(-63.61079)" fill="#e0e0e0"/><ellipse cx="670.57742" cy="667.85592" rx="35.09476" ry="3.57677" transform="translate(-428.03695 808.73554) rotate(-63.61079)" fill="#e0e0e0"/><rect x="397.95325" y="566.93514" width="21.05685" height="70.18951" transform="translate(274.52069 -285.26226) rotate(39.54732)" fill="#f55f44"/><rect x="409.32507" y="573.56618" width="23.69234" height="70.18951" transform="translate(489.54965 1134.58125) rotate(-166.7689)" opacity="0.05"/><rect x="411.92558" y="573.86778" width="21.05685" height="70.18951" transform="translate(492.0121 1135.47005) rotate(-166.7689)" fill="#f55f44"/><rect x="414.48638" y="314.08219" width="73.69899" height="489.57186" transform="translate(-452.20218 551.7936) rotate(-63.61079)" fill="url(#b2a81085-935f-40be-bb27-75940df8c338)"/><path d="M655.01556,699.105c-8.584-4.11751-444.8438-220.718-438.55625-217.5983,24.21371-36.95739,31.19689-62.87545,31.19689-62.87545l438.55625,217.5983S670.81132,663.25857,655.01556,699.105Z" transform="translate(-202.30284 -162.98099)" fill="#f5f5f5"/><rect x="421.72508" y="519.09383" width="40.35897" height="70.18951" transform="translate(90.06389 -301.64381) rotate(26.38921)" opacity="0.05"/><rect x="423.47981" y="519.09383" width="36.8495" height="70.18951" transform="translate(90.06389 -301.64381) rotate(26.38921)" fill="#f55f44"/><rect x="428.83545" y="518.70387" width="24.56633" height="70.18951" transform="translate(89.80867 -301.33512) rotate(26.38921)" opacity="0.05"/><rect x="430.59019" y="518.70387" width="21.05685" height="70.18951" transform="translate(89.80867 -301.33512) rotate(26.38921)" fill="#f55f44"/><circle cx="261.30557" cy="563.92499" r="2.92569" fill="#dbdbdb"/><g opacity="0.5"><rect x="29.39431" y="482" width="3" height="17" fill="#47e6b1"/><rect x="231.69716" y="644.98099" width="3" height="17" transform="translate(684.3753 257.30284) rotate(90)" fill="#47e6b1"/></g><g opacity="0.5"><rect x="785.39431" y="270" width="3" height="17" fill="#47e6b1"/><rect x="987.69716" y="432.98099" width="3" height="17" transform="translate(1228.3753 -710.69716) rotate(90)" fill="#47e6b1"/></g><g opacity="0.5"><rect x="47.39431" y="59" width="3" height="17" fill="#47e6b1"/><rect x="249.69716" y="221.98099" width="3" height="17" transform="translate(279.3753 -183.69716) rotate(90)" fill="#47e6b1"/></g><g opacity="0.5"><rect x="695.39431" y="33" width="3" height="17" fill="#47e6b1"/><rect x="897.69716" y="195.98099" width="3" height="17" transform="translate(901.3753 -857.69716) rotate(90)" fill="#47e6b1"/></g><path d="M214.59252,416.4373a3.67458,3.67458,0,0,1-2.04749-4.441,1.76592,1.76592,0,0,0,.0799-.40754h0a1.84257,1.84257,0,0,0-3.31045-1.22119h0a1.76637,1.76637,0,0,0-.2039.3618,3.67459,3.67459,0,0,1-4.441,2.04749,1.766,1.766,0,0,0-.40754-.07991h0a1.84258,1.84258,0,0,0-1.22119,3.31045h0a1.76606,1.76606,0,0,0,.3618.20389,3.67462,3.67462,0,0,1,2.04749,4.441,1.76594,1.76594,0,0,0-.07991.40754h0a1.84257,1.84257,0,0,0,3.31045,1.22119h0a1.7659,1.7659,0,0,0,.2039-.3618,3.67459,3.67459,0,0,1,4.441-2.04749,1.76665,1.76665,0,0,0,.40755.07991h0a1.84257,1.84257,0,0,0,1.22119-3.31045h0A1.76684,1.76684,0,0,0,214.59252,416.4373Z" transform="translate(-202.30284 -162.98099)" fill="#4d8af0" opacity="0.5"/><path d="M386.59252,219.4373a3.67458,3.67458,0,0,1-2.04749-4.441,1.76592,1.76592,0,0,0,.0799-.40754h0a1.84257,1.84257,0,0,0-3.31045-1.22119h0a1.76637,1.76637,0,0,0-.2039.3618,3.67459,3.67459,0,0,1-4.441,2.04749,1.766,1.766,0,0,0-.40754-.07991h0a1.84258,1.84258,0,0,0-1.22119,3.31045h0a1.76606,1.76606,0,0,0,.3618.20389,3.67462,3.67462,0,0,1,2.04749,4.441,1.76594,1.76594,0,0,0-.07991.40754h0a1.84257,1.84257,0,0,0,3.31045,1.22119h0a1.7659,1.7659,0,0,0,.2039-.3618,3.67459,3.67459,0,0,1,4.441-2.04749,1.76665,1.76665,0,0,0,.40755.07991h0a1.84257,1.84257,0,0,0,1.22119-3.31045h0A1.76684,1.76684,0,0,0,386.59252,219.4373Z" transform="translate(-202.30284 -162.98099)" fill="#4d8af0" opacity="0.5"/><path d="M596.59252,730.4373a3.67458,3.67458,0,0,1-2.04749-4.441,1.76592,1.76592,0,0,0,.0799-.40754h0a1.84257,1.84257,0,0,0-3.31045-1.22119h0a1.76637,1.76637,0,0,0-.2039.3618,3.67459,3.67459,0,0,1-4.441,2.04749,1.766,1.766,0,0,0-.40754-.07991h0a1.84258,1.84258,0,0,0-1.22119,3.31045h0a1.76606,1.76606,0,0,0,.3618.20389,3.67462,3.67462,0,0,1,2.04749,4.441,1.76594,1.76594,0,0,0-.07991.40754h0a1.84257,1.84257,0,0,0,3.31045,1.22119h0a1.7659,1.7659,0,0,0,.2039-.3618,3.67459,3.67459,0,0,1,4.441-2.04749,1.76665,1.76665,0,0,0,.40755.07991h0a1.84257,1.84257,0,0,0,1.22119-3.31045h0A1.76684,1.76684,0,0,0,596.59252,730.4373Z" transform="translate(-202.30284 -162.98099)" fill="#4d8af0" opacity="0.5"/><circle cx="759.39431" cy="444" r="6" fill="#f55f44" opacity="0.5"/><circle cx="627.39431" cy="482" r="6" fill="#4d8af0" opacity="0.5"/><circle cx="103.39431" cy="541" r="6" fill="#47e6b1" opacity="0.5"/><circle cx="411.39431" cy="6" r="6" fill="#f55f44" opacity="0.5"/><path d="M407.19716,520.481l-24,36s8,37,185,36,191-36,191-36l-33-48-101-69Z" transform="translate(-202.30284 -162.98099)" fill="#5b54d8"/><path d="M407.19716,520.481l-24,36s8,37,185,36,191-36,191-36l-33-48-101-69Z" transform="translate(-202.30284 -162.98099)" opacity="0.15"/><polygon points="715.394 224 400.394 363 16.394 224 368.394 64 541.184 143.67 547.374 146.53 715.394 224" fill="#5b54d8"/><polygon points="715.394 224 400.394 363 16.394 224 368.394 64 541.184 143.67 547.374 146.53 715.394 224" opacity="0.15"/><polygon points="553.894 257.32 547.894 257.68 541.184 143.67 547.374 146.53 553.894 257.32" fill="#f5f5f5"/><path d="M411.19716,386.481l-28,170s201-65,376,0l-26-180S498.19716,347.481,411.19716,386.481Z" transform="translate(-202.30284 -162.98099)" fill="#5b54d8"/><ellipse cx="553.39431" cy="272" rx="29" ry="20" fill="#f5f5f5"/>
          </svg>
        </div>
      </aside>
    </div>
  </div>
  -->
</template>

<script>
  import theNavigation from "../components/app/student/theNavigation";
  export default {
    components: { theNavigation },
    head () {
      return {
        title: 'Tableau de Bord'
      }
    },
    data () {
      return {
        isOpen: false,
        dropdownOpen: false
      }
    },
    methods: {
      logout() {
        this.$auth.logout()
      }
    }
  }
</script>
