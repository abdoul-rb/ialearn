<template>
  <div class="min-h-screen overflow-hidden">
    <the-navbar/>
    <div class="py-10">
      <main>
        <div class="px-4 xl:px-0 pb-16">
          <nuxt />
        </div>
      </main>
    </div>
  </div>
</template>

<script>
  import theNavbar from "../components/theNavbar";
  export default {
    components: {
      theNavbar
    },
    data () {
      return {
        isOpen : false,
        dropdownOpen : false
      }
    }
  }
</script>
