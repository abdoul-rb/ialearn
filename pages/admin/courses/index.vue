<template>
  <div>
    <div class="mt-8"> <!-- body border border-yellow-400 -->
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-lg leading-6 font-medium text-gray-900">Tous les cours disponibles</h2>
        <div class="grid lg:grid-cols-2 gap-6 mt-6">
          <nuxt-link :to="{ name: 'admin-courses-slug-edit', params: { slug: course.slug } }" v-for="course in courses" :key="course.id" class="rounded shadow bg-blue-500 transform hover:-translate-y-2 transition transition-all duration-500 px-8 py-6">
            <div class="w-64 space-y-2 text-white mb-3">
              <h4 class="text-xl font-medium leading-7">{{ course.title }}</h4>
              <div class="flex items-center space-x-4">
                <div class="flex items-center space-x-1">
                  <svg class="stroke-current text-indigo-700 w-4 h-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline>
                  </svg>
                  <h5 class="text-xs font-medium uppercase">12 lessons</h5>
                </div>
                <div class="flex items-center space-x-1">
                  <svg class="stroke-current text-indigo-700 w-4 h-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <h5 class="text-xs font-medium uppercase">3h 30min</h5>
                </div>
              </div>
            </div>
            <p class="text-sm text-gray-200 mt-2">{{ course.description }}</p>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    layout: 'admin',
    head () {
      return {
        title: 'Liste des cours'
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
        return { courses: courses.data }
      } catch (e) {
        console.log(e)
      }
    },
  }
</script>
