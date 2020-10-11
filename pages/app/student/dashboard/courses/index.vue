<template>
  <main>
    <header class="flex items-center">
      <h2 class="text-xl font-semibold tracking-wide">All courses</h2>
      <dashboard-courses-navigation />
    </header>
    <div class="py-12">
      <div class="grid grid-cols-4 gap-6">
        <div class="col-span-4 rounded-md shadow bg-indigo-600 transform hover:-translate-x-2 transtion transition-all duration-500 px-8 py-6">
          <div class="flex items-baseline justify-between text-white">
            <h4 class="text-2xl font-medium">UI/UX Design</h4>
            <h5 class="text-md font-medium opacity-75">3h45min</h5>
          </div>
          <h5 class="text-md text-white font-medium opacity-75">7 chapitres</h5>
          <div class="flex items-center justify-between mt-24">
            <button class="bg-gray-100 opacity-50 w-10 h-10 rounded flex items-center justify-center" title="Continuez le cours">
              <svg class="stroke-current text-gray-800 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </button>
          </div>
        </div>
        <div class="col-span-2 rounded-md shadow bg-green-500 px-8 py-6">
          <div class="flex items-baseline justify-between text-white">
            <h4 class="text-2xl font-medium">Power BI</h4>
            <h5 class="text-md font-medium opacity-75">7h</h5>
          </div>
          <h5 class="text-md text-white font-medium opacity-75">12 chapitres</h5>
          <div class="flex items-center justify-between mt-24">
            <button class="bg-gray-100 opacity-50 w-10 h-10 rounded flex items-center justify-center" title="Continuez le cours">
              <svg class="stroke-current text-gray-800 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </button>
          </div>
        </div>
        <div class="col-span-2 rounded-md shadow bg-yellow-600 px-8 py-6">
          <div class="flex items-baseline justify-between text-white">
            <h4 class="text-2xl font-medium">L'apprentissage</h4>
            <h5 class="text-md font-medium opacity-75">2h</h5>
          </div>
          <h5 class="text-md text-white font-medium opacity-75">3 chapitres</h5>
          <div class="flex items-center justify-between mt-24">
            <button class="bg-gray-100 opacity-50 w-10 h-10 rounded flex items-center justify-center" title="Continuez le cours">
              <svg class="stroke-current text-gray-800 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  export default {
    layout: 'student_dashboard',
    head () {
      return {
        title: 'Tableau de bord - Mes cours'
      }
    }
  }
</script>
