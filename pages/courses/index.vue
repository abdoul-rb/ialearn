<template>
  <main class="grid lg:grid-cols-12 gap-8 px-4 md:px-20 mt-12">
    <div class="lg:col-span-2">
      <h1 class="text-3xl md:text-xl text-gray-900 font-medium hover:bg-gray-100 hover:rounded-md leading-5 px-2 py-1">Nos cours</h1>
    </div>
    <div class="lg:col-span-8 grid lg:grid-cols-2 gap-4 mt-1">
      <nuxt-link :to="{ name: 'courses-slug', params: { slug: course.slug } }" v-for="course in courses" :key="course.id" class="rounded shadow bg-blue-500 transform hover:-translate-y-2 transition transition-all duration-500 px-8 py-6">
        <div class="w-64 space-y-2 text-white mb-3">
          <h4 class="text-xl font-medium leading-7">{{ course.title }}</h4>
          <div class="flex items-center space-x-4">
            <div class="flex items-center space-x-1">
              <svg class="stroke-current text-indigo-700 w-4 h-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline>
              </svg>
              <h5 class="text-xs font-medium uppercase">{{ course.chapters.length }} chaptitres</h5>
            </div>
            <div class="flex items-center space-x-1">
              <svg class="stroke-current text-indigo-700 w-4 h-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <h5 class="text-xs font-medium uppercase">3h 30min</h5>
            </div>
          </div>
        </div>
        <p class="text-sm text-gray-200 mt-2">{{ course.description | truncate(170) }}</p>
        <div class="flex items-center justify-end mt-8">
          <nuxt-link :to="{ name: 'courses-slug', params: { slug: course.slug } }" class="rounded-full bg-blue-700 text-xs text-white font-semibold uppercase tracking-wide px-8 py-3">&rarr; Découvrir</nuxt-link>
        </div>
      </nuxt-link>
    </div>
    <div class="lg:col-span-1"></div>
  </main>
</template>

<script>
  import Vue2Filters from 'vue2-filters'
  export default {
    mixins: [Vue2Filters.mixin],
    layout: 'app',
    head () {
      return {
        title: 'Toutes nos formations'
      }
    },
    data() {
      return {
        courses: [],
      }
    },
    async asyncData(context) {
      try {
        let courses = await context.$axios.$get('admin/courses')
        return { courses : courses.data }
      } catch (e) {
        console.log(e)
      }
    },
  }
</script>
