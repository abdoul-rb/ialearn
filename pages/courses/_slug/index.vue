<template>
  <div class="mt-12">
    <div class="w-full">
      <h1 class="text-2xl sm:text-4xl md:text-5xl font-semibold text-indigo-900 md:font-medium tracking-wide leading-tight mb-4 flex items-center px-4 md:px-0">L'intelligence articifielle</h1>
      <div class="flex items-center flex-no-wrap divide-x-2 divide-gray-400 mb-4 overflow-x-hidden">
        <nuxt-link to="/" class="block w-full bg-indigo-300 shadow rounded-tl-sm rounded-bl-sm px-6 py-2"></nuxt-link>
        <nuxt-link to="/" class="block w-full bg-indigo-300 shadow px-6 py-2"></nuxt-link>
        <nuxt-link to="/" class="block w-full bg-indigo-300 shadow px-6 py-2"></nuxt-link>
        <nuxt-link to="/" class="block w-full bg-indigo-300 shadow px-6 py-2"></nuxt-link>
        <nuxt-link to="/" class="block w-full bg-indigo-300 shadow px-6 py-2"></nuxt-link>
        <nuxt-link to="/" class="block w-full bg-indigo-300 shadow rounded-tr-sm rounded-br-sm px-6 py-2"></nuxt-link>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
      <!-- Utiliser : prose lg:prose-lg -->
      <div class="md:col-span-3">
        <div class="">
          <h1 class="text-xl font-semibold tracking-wide sm:font-normal sm:text-3xl md:text-4xl text-indigo-800 font-medium leading-tight px-4 md:px-0 mb-3">Première partie</h1>
          <div class="w-full flex flex-wrap lg:flex-no-wrap items-center mb-0 md:mb-8">
            <div class="w-full px-4 sm:px-0">
              <p>
                For years parents have espoused the health benefits of eating garlic bread with cheese to their
                children, with the food earning such an iconic status in our culture that kids will often dress
                up as warm, cheesy loaf for Halloween.
              </p>
              <p class="my-4">
                But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
                springing up around the country.
              </p>
              <p>
                For years parents have espoused the health benefits of eating garlic bread with cheese to their
                children, with the food earning such an iconic status in our culture that kids will often dress
                up as warm, cheesy loaf for Halloween.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="md:pt-6">
        <div class="w-full">
          <ul class="list-none bg-indigo-100 rounded-md px-4 sm:px-0">
            <li class="mb-2">
              <nuxt-link to="/" class="rounded-md flex items-center text-md text-indigo-500 font-bold tracking-wide px-3 py-2">
                <span class="block mr-1">1</span> <span>Chapter</span>
              </nuxt-link>
            </li>
            <li class="mb-2">
              <nuxt-link to="/" class="rounded-md flex items-center text-md text-indigo-500 font-bold tracking-wide px-3 py-2">
                <span class="block mr-1">2</span> <span>Chapter</span>
              </nuxt-link>
            </li>
            <li class="mb-2">
              <nuxt-link to="/" class="rounded-md flex items-center text-md text-indigo-500 font-bold tracking-wide px-3 py-2">
                <span class="block mr-1">3</span> <span>Chapter</span>
              </nuxt-link>
            </li>
            <li class="mb-2">
              <nuxt-link to="/" class="rounded-md flex items-center text-md text-indigo-500 font-bold tracking-wide px-3 py-2">
                <span class="block mr-1">4</span> <span>Chapter</span>
              </nuxt-link>
            </li>
            <li class="mb-2">
              <nuxt-link to="/" class="rounded-md flex items-center text-md text-indigo-500 font-bold tracking-wide px-3 py-2">
                <span class="block mr-1">5</span> <span>Chapter</span>
              </nuxt-link>
            </li>
            <li class="mb-2">
              <nuxt-link to="/" class="rounded-md flex items-center text-md text-indigo-500 font-bold tracking-wide px-3 py-2">
                <span class="block mr-1">5</span> <span>Chapter</span>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    layout: 'app',
    head () {
      return {
        title: 'Courses de '
      }
    },
    data () {
      return {
        isOpen : false,
      }
    }
  }
</script>
