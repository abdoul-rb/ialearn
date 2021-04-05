<template>
  <div class="relative bg-white overflow-hidden font-montserrat">
    <Navbar />
    <div class="min-h-screen">
      <nuxt />
    </div>
  </div>
</template>

<script>
  import theFooter from '../components/theFooter'
  import Navbar from "../components/app/Navbar";
  import theNavigation from "../components/app/theNavigation";
  export default {
    components: { Navbar, theFooter, theNavigation },
    data () {
      return {
        isOpen: false
      }
    }
  }
</script>
