<template>
  <main class="">
    <!-- <div class="w-full">
      <h1 class="text-2xl sm:text-4xl md:text-5xl font-semibold text-indigo-900 md:font-medium tracking-wide leading-tight mb-4 flex items-center px-4 md:px-0">L'intelligence articifielle</h1>
      <div class="flex items-center flex-no-wrap divide-x-2 divide-gray-400 mb-4 overflow-x-hidden">
        <nuxt-link to="/" class="block w-full bg-indigo-300 shadow rounded-tl-sm rounded-bl-sm px-6 py-2"></nuxt-link>
        <nuxt-link to="/" class="block w-full bg-indigo-300 shadow px-6 py-2"></nuxt-link>
        <nuxt-link to="/" class="block w-full bg-indigo-300 shadow px-6 py-2"></nuxt-link>
        <nuxt-link to="/" class="block w-full bg-indigo-300 shadow px-6 py-2"></nuxt-link>
        <nuxt-link to="/" class="block w-full bg-indigo-300 shadow px-6 py-2"></nuxt-link>
        <nuxt-link to="/" class="block w-full bg-indigo-300 shadow rounded-tr-sm rounded-br-sm px-6 py-2"></nuxt-link>
      </div>
    </div> -->
    <ul class="flex text-gray-500 text-sm lg:text-base mb-6">
      <li class="inline-flex items-center">
        <nuxt-link :to="{ name: 'index' }">Accueil</nuxt-link>
        <svg class="h-5 w-auto text-gray-400" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
        </svg>
      </li>
      <li class="inline-flex items-center">
        <nuxt-link :to="{ name: 'courses' }">Cours</nuxt-link>
        <svg class="h-5 w-auto text-gray-400" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
        </svg>
      </li>
      <li class="inline-flex items-center">
        <nuxt-link :to="{ name: '' }" class="text-indigo-400">Apprendre l'intélligence articielle</nuxt-link>
      </li>
    </ul>
    <section class="grid grid-cols-1 lg:grid-cols-3 gap-16">
      <article class="">
        <ul class="list-none mt-24 space-y-2">
          <li class="">
            <nuxt-link :to="{ name: '' }" class="flex items-center justify-between bg-blue-500 text-sm text-white font-medium tracking-wide rounded-lg px-6 py-3">
              <div class="flex items-center space-x-2">
                <span class="inline-flex items-center justify-center bg-blue-700 w-6 h-6 rounded-full">1</span>
                <span class="block">First chapter</span>
              </div>
              <template>
                <div v-if="alreadyWatch">
                  <svg class="stroke-current text-white w-4 h-auto mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon>
                  </svg>
                </div>
                <div v-else>
                  <svg class="stroke-current text-white w-4 h-auto mr-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
                  </svg>
                </div>
              </template>
            </nuxt-link>
          </li>
          <li class="">
            <nuxt-link :to="{ name: '' }" class="flex items-center justify-between bg-blue-500 text-sm text-white font-medium tracking-wide rounded-lg px-6 py-3">
              <div class="flex items-center space-x-2">
                <span class="inline-flex items-center justify-center bg-blue-700 w-6 h-6 rounded-full">2</span>
                <span class="block">Second chapter</span>
              </div>
              <template>
                <div v-if="!alreadyWatch">
                  <svg class="stroke-current text-white w-4 h-auto mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon>
                  </svg>
                </div>
                <div v-else>
                  <svg class="stroke-current text-white w-4 h-auto mr-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
                  </svg>
                </div>
              </template>
            </nuxt-link>
          </li>
          <li class="">
            <nuxt-link :to="{ name: '' }" class="flex items-center justify-between bg-blue-500 text-sm text-white font-medium tracking-wide rounded-lg px-6 py-3">
              <div class="flex items-center space-x-2">
                <span class="inline-flex items-center justify-center bg-blue-700 w-6 h-6 rounded-full">3</span>
                <span class="block">Third chapter</span>
              </div>
              <template>
                <div v-if="!alreadyWatch">
                  <svg class="stroke-current text-white w-4 h-auto mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon>
                  </svg>
                </div>
                <div v-else>
                  <svg class="stroke-current text-white w-4 h-auto mr-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
                  </svg>
                </div>
              </template>
            </nuxt-link>
          </li>
        </ul>
      </article>
      <aside class="lg:col-span-2 pb-12">
        <div class="">
          <h1 class="text-3xl text-gray-900 font-medium leading-tight mb-5 flex items-center">
            Using the Nuxt fetch method for effortless API sorting and filtering
          </h1>
          <div class="w-full text-lg">
            <h1 class="text-2xl text-gray-700 font-medium leading-tight my-3">
              Premier chapitre
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, consectetur, itaque! Beatae cupiditate dolores id maiores maxime minima, qui quibusdam repellendus sequi soluta unde, voluptas voluptate, voluptates? Excepturi odio, repellendus?
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, consectetur, itaque! Beatae cupiditate dolores id maiores maxime minima, qui quibusdam repellendus sequi soluta unde, voluptas voluptate, voluptates? Excepturi odio, repellendus?
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, consectetur, itaque! Beatae cupiditate dolores id maiores maxime minima, qui quibusdam repellendus sequi soluta unde, voluptas voluptate, voluptates? Excepturi odio, repellendus?
            </p>
            <img src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="" class="w-full rounded object-cover my-6">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, consectetur, itaque! Beatae cupiditate dolores id maiores maxime minima, qui quibusdam repellendus sequi soluta unde, voluptas voluptate, voluptates? Excepturi odio, repellendus?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, consectetur, itaque! Beatae cupiditate dolores id maiores maxime minima, qui quibusdam repellendus sequi soluta unde, voluptas voluptate, voluptates? Excepturi odio, repellendus?
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, consectetur, itaque! Beatae cupiditate dolores id maiores maxime minima, qui quibusdam repellendus sequi soluta unde, voluptas voluptate, voluptates? Excepturi odio, repellendus?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, consectetur, itaque! Beatae cupiditate dolores id maiores maxime minima, qui quibusdam repellendus sequi soluta unde, voluptas voluptate, voluptates? Excepturi odio, repellendus?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, consectetur, itaque! Beatae cupiditate dolores id maiores maxime minima, qui quibusdam repellendus sequi soluta unde, voluptas voluptate, voluptates? Excepturi odio, repellendus?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, consectetur, itaque! Beatae cupiditate dolores id maiores maxime minima, qui quibusdam repellendus sequi soluta unde, voluptas voluptate, voluptates? Excepturi odio, repellendus?
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, consectetur, itaque! Beatae cupiditate dolores id maiores maxime minima, qui quibusdam repellendus sequi soluta unde, voluptas voluptate, voluptates? Excepturi odio, repellendus?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, consectetur, itaque! Beatae cupiditate dolores id maiores maxime minima, qui quibusdam repellendus sequi soluta unde, voluptas voluptate, voluptates? Excepturi odio, repellendus?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, consectetur, itaque! Beatae cupiditate dolores id maiores maxime minima, qui quibusdam repellendus sequi soluta unde, voluptas voluptate, voluptates? Excepturi odio, repellendus?
            </p>
          </div>
        </div>
      </aside>
    </section>
  </main>
</template>

<script>
  export default {
    layout: 'app',
    head () {
      return {
        title: 'Courses de '
      }
    },
    data () {
      return {
        isOpen : false,
        alreadyWatch : true
      }
    }
  }
</script>
