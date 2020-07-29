<template>
  <div class="relative bg-white overflow-hidden font-montserrat">
    <div class="max-w-screen-xl mx-auto min-h-screen">
      <div class="max-w-screen-xl pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
        <the-nav/>
        <div class="mt-10 sm:mt-12 md:mt-12 lg:px-8 xl:mt-28">
          <nuxt />
        </div>
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
