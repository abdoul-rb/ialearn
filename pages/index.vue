<template>
  <div class="overflow-hidden">
    <section class="max-w-7xl mx-auto px-4 sm:py-24 md:px-0">
      <div class="lg:grid lg:grid-cols-12 lg:gap-8">
        <div class="sm:text-center md:max-w-3xl md:mx-auto lg:col-span-7 lg:text-left">
          <h1 class="">
            <span class="block text-lg font-courgette font-semibold tracking-wide text-cyan-700">Apprenez et enseignez</span>
            <span class="mt-2 block text-3xl font-nunito font-extrabold md:text-5xl">
                <span class="block text-gray-800">L'université en ligne pour</span>
                <span class="block text-cyan-700">développer vos compétences.</span>
              </span>
          </h1>
          <p class="mt-3 sm:mt-6 text-base sm:text-lg xl:text-2xl font-medium text-gray-900 leading-3">
            Inspirez-vous et apprenez quelque chose de nouveau dès aujourd'hui.
          </p>
          <div class="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
            <div class="sm:mt-2 sm:flex sm:justify-center md:justify-start">
              <button class="mt-3 w-full px-10 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto">
                Commencez maintenant
              </button>
            </div>
            <p class="mt-3 text-sm font-medium text-gray-800">
              Retrouvez toutes les informations sur nos
              <nuxt-link :to="{ name: '' }" class="text-blue-800 underline">services</nuxt-link>.
            </p>
          </div>
        </div>
        <div class="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-5 lg:flex lg:items-center">
          <img class="w-full" src="~/assets/images/vtc_image.png" alt="VTC">
        </div>
      </div>
    </section>

    <!-- Block stats -->
    <section class="bg-gray-50 sm:py-16">
      <div class="max-w-7xl mx-auto px-4  md:px-0">
        <div>
          <p class="text-base font-semibold tracking-tight text-cyan-700 uppercase">Get started</p>
          <h2 class="text-3xl text-gray-800 font-nunito font-extrabold md:text-4xl">
            Commencez avec iaLearn
          </h2>
          <p class="mt-2 text-base sm:text-base xl:text-lg font-medium text-gray-600 leading-3">
            Votre apprentissage est simplifié grâce à nos cours fun et bien fait.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam corporis deleniti eius esse facere illo non pariatur sapiente sequi?
          </p>
        </div>
        <dl class="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8 max-w-4xl my-6 py-2">
          <div>
            <dt class="flex items-center space-x-2 py-5 px-2 rounded-lg border">
              <div class="flex items-center justify-center h-12 w-12 rounded-full bg-blue-400 text-white shadow-lg">
                <!-- Heroicon name: outline/globe-alt -->
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
              </div>
              <p class="text-lg leading-6 font-medium text-gray-900">Apprentissage rapide</p>
            </dt>
          </div>

          <div>
            <dt class="flex items-center space-x-2 py-5 px-2 rounded-lg border">
              <div class="flex items-center justify-center h-12 w-12 rounded-full bg-red-400 text-white shadow-lg">
                <!-- Heroicon name: outline/globe-alt -->
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline>
                </svg>
              </div>
              <p class="text-lg leading-6 font-medium text-gray-900">Moins cher</p>
            </dt>
          </div>

          <div>
            <dt class="flex items-center space-x-2 py-5 px-2 rounded-lg border">
              <div class="flex items-center justify-center h-12 w-12 rounded-full bg-yellow-400 text-white shadow-lg">
                <!-- Heroicon name: outline/globe-alt -->
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <p class="text-lg leading-6 font-medium text-gray-900">A portée de main</p>
            </dt>
          </div>
        </dl>
      </div>
    </section>

    <section class="sm:py-20">
      <div class="max-w-7xl mx-auto px-4 md:px-0 sm:mb-12">
        <h2 class="text-3xl text-gray-800 text-center font-nunito font-extrabold md:text-5xl">
          Featured
        </h2>
        <p class="mt-4 max-w-prose mx-auto text-xl text-gray-500 text-center">
          Notre plateforme de cours vous permet de bénéficier des derniers tendances en termes d'algorithme et de technologies.
        </p>

        <div class="mt-16">
          <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div class="pt-6">
              <div class="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div class="-mt-6">
                  <div class="flex justify-center z-20">
                      <span class="inline-flex items-center justify-center px-5 py-4 bg-cyan-400 rounded-md shadow-lg">
                        <!-- Heroicon name: outline/cloud-upload -->
                        <svg class="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                      </span>
                  </div>
                  <div class="text-center">
                    <h3 class="mt-6 text-4xl font-medium text-black tracking-tight">76</h3>
                    <h4 class="mt-1 text-xl font-nunito uppercase font-semibold text-gray-800 tracking-wide">Universités</h4>
                    <p class="mt-3 text-base text-gray-500">
                      Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi vitae lobortis.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="pt-6">
              <div class="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div class="-mt-6">
                  <div class="flex justify-center z-20">
                      <span class="inline-flex items-center justify-center px-5 py-4 bg-cyan-400 rounded-md shadow-lg">
                        <!-- Heroicon name: outline/cloud-upload -->
                        <svg class="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                      </span>
                  </div>
                  <div class="text-center">
                    <h3 class="mt-6 text-4xl font-medium text-black tracking-tight">783</h3>
                    <h4 class="mt-1 text-xl font-nunito uppercase font-semibold text-gray-800 tracking-wide">Etudiants</h4>
                    <p class="mt-3 text-base text-gray-500">
                      Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi vitae lobortis.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="pt-6">
              <div class="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div class="-mt-6">
                  <div class="flex justify-center z-20">
                      <span class="inline-flex items-center justify-center px-5 py-4 bg-cyan-400 rounded-md shadow-lg">
                        <!-- Heroicon name: outline/cloud-upload -->
                        <svg class="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                      </span>
                  </div>
                  <div class="text-center">
                    <h3 class="mt-6 text-4xl font-medium text-black tracking-tight">32</h3>
                    <h4 class="mt-1 text-xl font-nunito uppercase font-semibold text-gray-800 tracking-wide">Cours</h4>
                    <p class="mt-3 text-base text-gray-500">
                      Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi vitae lobortis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="relative bg-gray-900">
      <div class="relative h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
        <img class="w-full h-full object-cover" src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&amp;ixqx=LRDGaNTXAY&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1920&amp;q=60&amp;sat=-100" alt="">
        <div aria-hidden="true" class="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-600" style="mix-blend-mode: multiply;"></div>
      </div>
      <div class="relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32">
        <div class="md:ml-auto md:w-1/2 md:pl-10">
          <p class="text-base font-semibold uppercase tracking-wider text-gray-300">Award winning support</p>
          <h2 class=" text-white font-nunito text-3xl font-extrabold tracking-tight sm:text-4xl">
            We’re here to help
          </h2>
          <p class="mt-3 text-lg text-gray-300">
            <span class="font-nunito font-medium">ialearn</span> vous aide à approfondir et sauvegarder vos connaissances. Apprenez et travaillez ensemble à tout moment et en tout lieu.
          </p>
          <div class="mt-8">
            <div class="inline-flex rounded-md shadow">
              <nuxt-link :to="{ name: '' }" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50">
                Visit the help center
                <svg class="-mr-1 ml-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                </svg>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <the-footer/>
  </div>
</template>
<script>
  import theFooter from "../components/theFooter";
  export default {
    layout: 'app',
    components: { theFooter },
    head () {
      return {
        title: 'Accueil'
      }
    },
  }
</script>
