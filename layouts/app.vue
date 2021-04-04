<template>
  <div class="relative bg-white overflow-hidden font-montserrat">
    <_Nav />
    <div class="min-h-screen">
      <nuxt />
    </div>
    <the-footer />
  </div>
</template>

<script>
  import theFooter from '../components/theFooter'
  import _Nav from "../components/app/_Nav";
  import theNavigation from "../components/app/theNavigation";
  export default {
    components: { theFooter, theNavigation, _Nav },
    data () {
      return {
        isOpen: false
      }
    }
  }
</script>
