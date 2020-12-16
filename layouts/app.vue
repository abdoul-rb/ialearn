<template>
  <div class="relative bg-white overflow-hidden font-montserrat">
    <div class="bg-gray-100 pb-8 sm:pb-12">
      <theNavigation />
      <div class="min-h-screen">
        <nuxt />
      </div>
    </div>
    <the-footer />
  </div>
</template>

<script>
  import theFooter from '../components/theFooter'
  import theNavigation from "../components/app/theNavigation";
  export default {
    components: { theFooter, theNavigation },
    data () {
      return {
        isOpen: false
      }
    }
  }
</script>
