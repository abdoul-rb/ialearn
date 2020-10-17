<template>
  <div class="overflow-hidden font-montserrat">
    <div class="min-h-screen flex">
      <the-navigation />
      <section class="w-7/12 px-4 lg:px-10 bg-gray-100 py-10">
        <div class="flex items-center justify-between mb-8">
          <div class="relative text-gray-600">
            <input class="border-2 border-gray-300 bg-white h-10 px-5 pr-24 rounded-lg text-sm focus:outline-none" type="search" name="search" placeholder="Search">
            <button type="submit" class="absolute right-0 top-0 mt-4 mr-4">
              <svg class="fill-current text-gray-600 h-4 w-4" xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve">
                <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
              </svg>
            </button>
          </div>
          <div>
            <svg class="stroke-current text-gray-400 w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
          </div>
        </div>
        <nuxt />
      </section>
      <aside class="w-3/12 bg-white px-6 pt-10">
        <div class="flex">
          <div class="relative">
            <div class="flex items-center">
              <img class="h-8 w-8 rounded-sm object-cover object-top mr-2" src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="" />
              <button @click.prevent="dropdownOpen = !dropdownOpen" class="flex items-baseline text-md font-semibold focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out" id="user-menu" aria-label="User menu" aria-haspopup="true">
                <span class="block mr-2">Jack Bauer</span>
                <svg class="stroke-current w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
            </div>
            <div class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg" v-show="dropdownOpen">
              <div class="py-1 rounded-md bg-white shadow-xs" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                <nuxt-link :to=" { name : '' } " class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">Mon compte</nuxt-link>
                <a href="#" @click.prevent="logout" class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">Déconnexion</a>
              </div>
            </div>
          </div>
        </div>
        <div class="my-10">
          <h4 class="text-lg font-semibold tracking-wide">Progression</h4>
          <div class="mt-6">
            <div class="grid grid-cols-5 items-center my-6">
              <span class="col-span-1 inline-flex items-center justify-center text-center bg-indigo-100 w-8 h-8 rounded-md">
                <svg class="stroke-current w-5 h-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                </svg>
              </span>
              <div class="col-span-2">
                <div class="text-xs font-bold tracking-wide truncate my-0">UI/UX Design</div>
                <div class="text-gray-500 text-xs font-medium tracking-wide my-0">Avancée</div>
              </div>
              <div class="col-span-2 h-2 relative w-full rounded-full shadow-xl overflow-hidden">
                <div class="w-full h-full bg-gray-200 shadow-xl absolute"></div>
                <div class="h-full bg-indigo-500 absolute" style="width:15%"></div>
              </div>
            </div>
            <div class="grid grid-cols-5 items-center my-6">
              <span class="col-span-1 inline-flex items-center justify-center text-center bg-green-100 w-8 h-8 rounded-md">
                <svg class="stroke-current w-5 h-5 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
              </span>
              <div class="col-span-2">
                <div class="text-xs font-bold tracking-wide truncate my-0">Power BI</div>
                <div class="text-gray-500 text-xs font-normal tracking-normal my-0">Intermediaire</div>
              </div>
              <div class="col-span-2 h-2 relative w-full rounded-full shadow-xl overflow-hidden">
                <div class="w-full h-full bg-gray-200 shadow-xl absolute"></div>
                <div class="h-full bg-green-500 absolute" style="width:40%"></div>
              </div>
            </div>
            <div class="grid grid-cols-5 items-center my-6">
              <span class="col-span-1 inline-flex items-center justify-center text-center bg-yellow-100 w-8 h-8 rounded-md">
                <svg class="stroke-current w-5 h-5 text-yellow-600"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </span>
              <div class="col-span-2">
                <div class="text-xs font-bold tracking-wide truncate my-0">L'apprentissage</div>
                <div class="text-gray-500 text-xs font-normal tracking-normal my-0">Facile</div>
              </div>
              <div class="col-span-2 h-2 relative w-full rounded-full shadow-xl overflow-hidden">
                <div class="w-full h-full bg-gray-200 shadow-xl absolute"></div>
                <div class="h-full bg-yellow-500 absolute" style="width:80%"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="my-12">
          <h4 class="text-lg font-semibold tracking-wide">Upcomming Task</h4>
          <div class="mt-6">
            <div class="flex items-center space-x-6 my-6">
              <span class="col-span-1 inline-flex items-center justify-center text-center bg-indigo-100 w-8 h-8 rounded-md">
                <svg class="stroke-current w-5 h-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </span>
              <div class="col-span-2">
                <div class="text-xs font-bold tracking-wide truncate my-0">UI/UX Design</div>
                <div class="text-gray-500 text-xs font-medium tracking-wide my-0">27 OCT 2021 - Comming</div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-center mt-3">
          <svg class="w-56 h-56" id="eb113788-f1f1-4c1f-be62-f1d0ea2e1eb6" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="795.39431" height="574.03802" viewBox="0 0 795.39431 574.03802">
            <defs><linearGradient id="b2a81085-935f-40be-bb27-75940df8c338" x1="-450.78971" y1="2803.04671" x2="-450.78971" y2="2729.34772" gradientTransform="translate(3217.53309 1009.65784) rotate(90)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="gray" stop-opacity="0.25"/><stop offset="0.53514" stop-color="gray" stop-opacity="0.12"/><stop offset="1" stop-color="gray" stop-opacity="0.1"/></linearGradient></defs><title>Graduation</title><ellipse cx="232.05775" cy="450.06897" rx="35.09476" ry="5.26421" transform="translate(-476.55674 294.92367) rotate(-63.61079)" fill="#e0e0e0"/><ellipse cx="670.57742" cy="667.85592" rx="35.09476" ry="3.57677" transform="translate(-428.03695 808.73554) rotate(-63.61079)" fill="#e0e0e0"/><rect x="397.95325" y="566.93514" width="21.05685" height="70.18951" transform="translate(274.52069 -285.26226) rotate(39.54732)" fill="#f55f44"/><rect x="409.32507" y="573.56618" width="23.69234" height="70.18951" transform="translate(489.54965 1134.58125) rotate(-166.7689)" opacity="0.05"/><rect x="411.92558" y="573.86778" width="21.05685" height="70.18951" transform="translate(492.0121 1135.47005) rotate(-166.7689)" fill="#f55f44"/><rect x="414.48638" y="314.08219" width="73.69899" height="489.57186" transform="translate(-452.20218 551.7936) rotate(-63.61079)" fill="url(#b2a81085-935f-40be-bb27-75940df8c338)"/><path d="M655.01556,699.105c-8.584-4.11751-444.8438-220.718-438.55625-217.5983,24.21371-36.95739,31.19689-62.87545,31.19689-62.87545l438.55625,217.5983S670.81132,663.25857,655.01556,699.105Z" transform="translate(-202.30284 -162.98099)" fill="#f5f5f5"/><rect x="421.72508" y="519.09383" width="40.35897" height="70.18951" transform="translate(90.06389 -301.64381) rotate(26.38921)" opacity="0.05"/><rect x="423.47981" y="519.09383" width="36.8495" height="70.18951" transform="translate(90.06389 -301.64381) rotate(26.38921)" fill="#f55f44"/><rect x="428.83545" y="518.70387" width="24.56633" height="70.18951" transform="translate(89.80867 -301.33512) rotate(26.38921)" opacity="0.05"/><rect x="430.59019" y="518.70387" width="21.05685" height="70.18951" transform="translate(89.80867 -301.33512) rotate(26.38921)" fill="#f55f44"/><circle cx="261.30557" cy="563.92499" r="2.92569" fill="#dbdbdb"/><g opacity="0.5"><rect x="29.39431" y="482" width="3" height="17" fill="#47e6b1"/><rect x="231.69716" y="644.98099" width="3" height="17" transform="translate(684.3753 257.30284) rotate(90)" fill="#47e6b1"/></g><g opacity="0.5"><rect x="785.39431" y="270" width="3" height="17" fill="#47e6b1"/><rect x="987.69716" y="432.98099" width="3" height="17" transform="translate(1228.3753 -710.69716) rotate(90)" fill="#47e6b1"/></g><g opacity="0.5"><rect x="47.39431" y="59" width="3" height="17" fill="#47e6b1"/><rect x="249.69716" y="221.98099" width="3" height="17" transform="translate(279.3753 -183.69716) rotate(90)" fill="#47e6b1"/></g><g opacity="0.5"><rect x="695.39431" y="33" width="3" height="17" fill="#47e6b1"/><rect x="897.69716" y="195.98099" width="3" height="17" transform="translate(901.3753 -857.69716) rotate(90)" fill="#47e6b1"/></g><path d="M214.59252,416.4373a3.67458,3.67458,0,0,1-2.04749-4.441,1.76592,1.76592,0,0,0,.0799-.40754h0a1.84257,1.84257,0,0,0-3.31045-1.22119h0a1.76637,1.76637,0,0,0-.2039.3618,3.67459,3.67459,0,0,1-4.441,2.04749,1.766,1.766,0,0,0-.40754-.07991h0a1.84258,1.84258,0,0,0-1.22119,3.31045h0a1.76606,1.76606,0,0,0,.3618.20389,3.67462,3.67462,0,0,1,2.04749,4.441,1.76594,1.76594,0,0,0-.07991.40754h0a1.84257,1.84257,0,0,0,3.31045,1.22119h0a1.7659,1.7659,0,0,0,.2039-.3618,3.67459,3.67459,0,0,1,4.441-2.04749,1.76665,1.76665,0,0,0,.40755.07991h0a1.84257,1.84257,0,0,0,1.22119-3.31045h0A1.76684,1.76684,0,0,0,214.59252,416.4373Z" transform="translate(-202.30284 -162.98099)" fill="#4d8af0" opacity="0.5"/><path d="M386.59252,219.4373a3.67458,3.67458,0,0,1-2.04749-4.441,1.76592,1.76592,0,0,0,.0799-.40754h0a1.84257,1.84257,0,0,0-3.31045-1.22119h0a1.76637,1.76637,0,0,0-.2039.3618,3.67459,3.67459,0,0,1-4.441,2.04749,1.766,1.766,0,0,0-.40754-.07991h0a1.84258,1.84258,0,0,0-1.22119,3.31045h0a1.76606,1.76606,0,0,0,.3618.20389,3.67462,3.67462,0,0,1,2.04749,4.441,1.76594,1.76594,0,0,0-.07991.40754h0a1.84257,1.84257,0,0,0,3.31045,1.22119h0a1.7659,1.7659,0,0,0,.2039-.3618,3.67459,3.67459,0,0,1,4.441-2.04749,1.76665,1.76665,0,0,0,.40755.07991h0a1.84257,1.84257,0,0,0,1.22119-3.31045h0A1.76684,1.76684,0,0,0,386.59252,219.4373Z" transform="translate(-202.30284 -162.98099)" fill="#4d8af0" opacity="0.5"/><path d="M596.59252,730.4373a3.67458,3.67458,0,0,1-2.04749-4.441,1.76592,1.76592,0,0,0,.0799-.40754h0a1.84257,1.84257,0,0,0-3.31045-1.22119h0a1.76637,1.76637,0,0,0-.2039.3618,3.67459,3.67459,0,0,1-4.441,2.04749,1.766,1.766,0,0,0-.40754-.07991h0a1.84258,1.84258,0,0,0-1.22119,3.31045h0a1.76606,1.76606,0,0,0,.3618.20389,3.67462,3.67462,0,0,1,2.04749,4.441,1.76594,1.76594,0,0,0-.07991.40754h0a1.84257,1.84257,0,0,0,3.31045,1.22119h0a1.7659,1.7659,0,0,0,.2039-.3618,3.67459,3.67459,0,0,1,4.441-2.04749,1.76665,1.76665,0,0,0,.40755.07991h0a1.84257,1.84257,0,0,0,1.22119-3.31045h0A1.76684,1.76684,0,0,0,596.59252,730.4373Z" transform="translate(-202.30284 -162.98099)" fill="#4d8af0" opacity="0.5"/><circle cx="759.39431" cy="444" r="6" fill="#f55f44" opacity="0.5"/><circle cx="627.39431" cy="482" r="6" fill="#4d8af0" opacity="0.5"/><circle cx="103.39431" cy="541" r="6" fill="#47e6b1" opacity="0.5"/><circle cx="411.39431" cy="6" r="6" fill="#f55f44" opacity="0.5"/><path d="M407.19716,520.481l-24,36s8,37,185,36,191-36,191-36l-33-48-101-69Z" transform="translate(-202.30284 -162.98099)" fill="#5b54d8"/><path d="M407.19716,520.481l-24,36s8,37,185,36,191-36,191-36l-33-48-101-69Z" transform="translate(-202.30284 -162.98099)" opacity="0.15"/><polygon points="715.394 224 400.394 363 16.394 224 368.394 64 541.184 143.67 547.374 146.53 715.394 224" fill="#5b54d8"/><polygon points="715.394 224 400.394 363 16.394 224 368.394 64 541.184 143.67 547.374 146.53 715.394 224" opacity="0.15"/><polygon points="553.894 257.32 547.894 257.68 541.184 143.67 547.374 146.53 553.894 257.32" fill="#f5f5f5"/><path d="M411.19716,386.481l-28,170s201-65,376,0l-26-180S498.19716,347.481,411.19716,386.481Z" transform="translate(-202.30284 -162.98099)" fill="#5b54d8"/><ellipse cx="553.39431" cy="272" rx="29" ry="20" fill="#f5f5f5"/>
          </svg>
        </div>
      </aside>
    </div>
  </div>
</template>

<script>
  import theNavigation from "../components/app/student/theNavigation";
  import dashboardCoursesNavigation from "../components/app/student/dashboardCoursesNavigation";
  export default {
    components: {
      theNavigation,
      dashboardCoursesNavigation
    },
    head () {
      return {
        title: 'Tableau de Bord - Etudiant'
      }
    },
    data () {
      return {
        dropdownOpen: false
      }
    },
    methods: {
      logout() {
        this.$auth.logout()
      }
    }
  }
</script>
