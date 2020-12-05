<template>
  <div class="relative bg-white overflow-hidden font-montserrat">
    <div class="pb-8 bg-gray-100 sm:pb-12">
      <navbar />
      <div class="min-h-screen">
        <nuxt />
      </div>
    </div>
    <the-footer />
  </div>
</template>

<script>
  import theFooter from '../components/theFooter'
  import navbar from "../components/navbar";
  export default {
    components: { theFooter, navbar },
    data () {
      return {
        isOpen: false
      }
    }
  }
</script>
