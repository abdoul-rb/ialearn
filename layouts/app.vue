<template>
  <div class="relative bg-white overflow-hidden font-montserrat">
    <div class="pb-8 bg-indigo-100 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
      <the-nav/>
      <div class="pt-10 sm:pt-12 md:pt-24 lg:px-24 xl:mt-28 min-h-screen">
        <nuxt />
      </div>
    </div>
    <the-footer />
  </div>
</template>

<script>
  import theFooter from '../components/theFooter'
  import theNav from '../components/theNav'
  export default {
    components: {
      theFooter,
      theNav
    },
    data () {
      return {
        isOpen: false
      }
    }
  }
</script>
