<template>
  <div class="bg-white overflow-hidden shadow rounded-lg">
    <div class="p-5">
      <div class="flex items-center">
        <div class="flex-shrink-0">
          <slot name="svg"></slot>
        </div>
        <div class="ml-5 w-0 flex-1">
          <dl>
            <dt class="text-sm font-medium text-gray-500 truncate">{{ title }}</dt>
            <dd>
              <div class="text-lg font-medium text-gray-900">{{ value }}</div>
            </dd>
          </dl>
        </div>
      </div>
    </div>
    <div class="bg-gray-50 px-5 py-3">
      <div class="text-sm">
        <a :href="link" class="font-medium text-cyan-700 hover:text-cyan-900">
          Voir tous
        </a>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      title: {
        type: String
      },
      value: {
        type: String
      },
      link: {
        type: String
      }
    },
  }
</script>
