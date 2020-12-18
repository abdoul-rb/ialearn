<template>
  <div>
    <div class="mt-8"> <!-- body border border-yellow-400 -->
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-lg leading-6 font-medium text-gray-900">Tous les cours disponibles</h2>
        <div class="grid lg:grid-cols-2 gap-6 mt-6">
          {{ course }}
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
        title: 'Modifier une formation'
      }
    },
    data() {
      return {
        course: null,
      }
    },
    async asyncData({ params, app }) {
      try {
        let course = await app.$axios.$get(`admin/courses/${params.slug}`)
        return { course: course.data }
      } catch (e) {
        console.log(e)
      }
    },
  }
</script>
