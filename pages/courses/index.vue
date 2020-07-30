<template>
  <div>
    <h2 class="text-3xl tracking-tight leading-10 font-extrabold tracking-wide text-gray-900 sm:text-4xl sm:leading-none md:text-5xl px-4 md:px-0 md:mb-12">Cours</h2>
    <div v-for="course in courses" :key="course.id" class="w-full border border-gray-100 shadow-md bg-white rounded-md px-4 py-6 mb-3">
      <h2 class="text-indigo-600 font-medium tracking-wide text-xl mb-2">
        <nuxt-link :to="{ name : 'courses-slug', params : { slug : course.slug }}">{{ course.title }}</nuxt-link>
      </h2>
      <nuxt-link :to="{ name : 'courses-slug', params : { slug : course.slug }}">
        <p>{{ course.content }}</p>
      </nuxt-link>
    </div>
  </div>
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
            slug: 'learn-artificial-inteligence',
            title: 'Learn artificial inteligence',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus amet aspernatur dolore explicabo ipsa ipsum magnam minima minus nisi non nulla omnis, optio placeat praesentium quae quod unde ut?\n.     Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus amet aspernatur dolore explicabo ipsa ipsum magnam minima minus nisi non nulla omnis, optio placeat praesentium quae quod unde ut?\n'
          },
          {
            id: 2,
            slug: 'apprendre-intelligence-artificielle',
            title: 'Apprendre l\'intelligence artificielle',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus amet aspernatur dolore explicabo ipsa ipsum magnam minima minus nisi non nulla omnis, optio placeat praesentium quae quod unde ut?\n.     Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus amet aspernatur dolore explicabo ipsa ipsum magnam minima minus nisi non nulla omnis, optio placeat praesentium quae quod unde ut?\n'
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
