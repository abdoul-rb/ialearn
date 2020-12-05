<template>
  <main class="grid lg:grid-cols-12 gap-8 lg:px-20">
    <div class="lg:col-span-2">
      <h1 class="text-lg text-indigo-800 font-medium px-2 py-1 hover:bg-gray-100 hover:rounded">Tous nos cours</h1>
    </div>
    <div class="lg:col-span-7 grid lg:grid-cols-2 gap-4 mt-3">
      <nuxt-link :to="{ name: '' }" class="rounded shadow bg-blue-500 transform hover:-translate-y-2 transtion transition-all duration-500 px-8 py-6" v-for="course in courses" :key="course.id">
        <div class="w-64 space-y-2 text-white">
          <h4 class="text-xl font-medium leading-7">{{ course.title }}</h4>
          <h5 class="text-xs font-medium uppercase">7 heures</h5>
        </div>
        <p class="text-sm text-gray-200 mt-2">{{ course.content }}</p>
        <div class="flex items-center justify-end mt-8">
          <nuxt-link :to="{ name: '' }" class="rounded-full bg-blue-700 text-xs text-white font-semibold uppercase tracking-wide px-8 py-3">&rarr; Découvrir</nuxt-link>
        </div>
      </nuxt-link>
      <!-- <div v-for="course in courses" :key="course.id" class="w-full border border-gray-100 shadow-md bg-white rounded-md px-4 py-6 mb-3">
        <h2 class="text-indigo-600 font-medium tracking-wide text-xl mb-2">
          <nuxt-link :to="{ name : 'courses-slug', params : { slug : course.slug }}">{{ course.title }}</nuxt-link>
        </h2>
      </div> -->
    </div>
    <div class="lg:col-span-3"></div>
  </main>
</template>

<script>
  export default {
    layout: 'app',
    head () {
      return {
        title: 'Cours'
      }
    },
    data () {
      return {
        courses : [
          {
            id: 1,
            title: 'Formez-vous à python',
            slug: 'formez-vous-a-python',
            content: 'Un seul objectif: dévenir un développeur web professionnel, diplômé et recruté.'
          },
          {
            id: 2,
            title: 'Apprendre l\'intelligence artificielle',
            slug: 'apprendre-intelligence-artificielle',
            content: 'Un seul objectif: dévenir un développeur web professionnel, diplômé et recruté.'
          }
        ]
      }
    },
    computed: {
      course () {
        return this.courses.find(course => course.slug === this.slug)
      }
    }
  }
</script>
