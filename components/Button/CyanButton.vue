<template>
  <button :type="type" class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
    <slot></slot>
  </button>
</template>
<script>
  export default {
    props: {
      type: {
        type: String,
        default: 'button'
      }
    }
  }
</script>
