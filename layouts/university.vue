<template>
  <div class="min-h-screen bg-gray-50 overflow-hidden">
    <the-navigation />
    <div class="py-10">
      <div>
        <div class="px-4 xl:px-0 pb-16 ">
          <nuxt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import theNavigation from "../components/app/university/theNavigation";
  export default {
    components: {
      theNavigation
    },
    head () {
      return {
      }
    },
    methods: {
      logout() {
        this.$auth.logout()
      }
    }
  }
</script>
