<template>
  <main class="px-12 md:px-24 lg:px-20">
     <!-- Left Navigation courses -->
    <ul class="flex text-gray-500 text-sm lg:text-base md:my-3">
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
        <nuxt-link :to="{ name: '' }" class="text-blue-90">{{ course.title || 'Titre' }}</nuxt-link>
      </li>
    </ul>
    <section class="grid grid-cols-1 lg:grid-cols-3 gap-16">
      <article class="">
        <ul class="list-none mt-10 md:mt-16 space-y-2">
          <li class="" v-for="(chapter, index) in course.chapters" :key="chapter.id">
            <button @click.prevent="switchChapters(index)" class="w-full flex items-center justify-between bg-blue-90 text-sm text-white font-medium tracking-wide rounded-lg focus:outline-none px-6 py-3">
              <div class="flex items-center text-left space-x-2">
                <span class="inline-flex items-center justify-center bg-fuchsia-90 w-6 h-6 rounded-full">{{ index + 1 }}</span>
                <span class="inline-flex">{{ chapter.title | truncate(26) }}</span>
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
            </button>
          </li>
        </ul>
      </article>
      <aside class="lg:col-span-2 pb-12">
        <div class="">
          <h1 class="text-2xl md:text-3xl text-gray-900 font-medium leading-tight flex items-center mb-5">{{ course.title }}</h1>
          <div class="w-full text-lg">
            <h1 class="text-2xl text-gray-700 font-medium leading-tight my-3">{{ course.chapters[this.currentKey].title }}</h1>
            <p class="prose prose-indigo prose-sm sm:prose lg:prose-lg">{{ course.chapters[this.currentKey].content }}</p>
            <img src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="" class="w-full rounded object-cover my-6">
          </div>
        </div>
      </aside>
    </section>
  </main>
</template>

<script>
  import Vue2Filters from 'vue2-filters'
  export default {
    mixins: [Vue2Filters.mixin],
    middleware: ['auth'],
    layout: 'app',
    head () {
      return {
        title: this.course.title,
      }
    },
    data () {
      return {
        isOpen : false,
        alreadyWatch : true,
        currentKey: 0,
        course: null,
      }
    },
    methods: {
      switchChapters(index) {
        this.currentKey = index
      }
    },
    mounted() {
      console.log(this.course)
    },
    async asyncData({ params, app }) {
      try {
        let course = await app.$axios.$get(`admin/courses/${params.slug}`)
        return { course : course.data }
      } catch (e) {
        console.log(e)
      }
    }
  }
</script>
