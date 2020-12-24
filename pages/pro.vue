<template>
  <div>
    <NavbarUniv />
    <main>
      <div class="relative pt-12 pb-32 flex content-center items-center justify-center" style="min-height: 90vh;">
        <!-- Image Hero -->
        <div class="absolute top-0 w-full h-full bg-center bg-cover" style='background-image: url("https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1267&amp;q=80");'>
          <span class="w-full h-full absolute opacity-75 bg-black"></span>
        </div>
        <div class="relative">
          <div class="flex items-center flex-wrap max-w-3xl mx-auto px-6">
            <div class="text-white text-center">
              <h1 class="text-4xl tracking-tight font-semibold sm:text-5xl md:text-6xl">
                Transformation journey step future Professionals.
              </h1>
              <p class="max-w-md mx-auto text-base sm:text-lg md:mt-5 md:text-xl md:max-w-3xl mt-3">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
              </p>
            </div>
          </div>
        </div>
        <div class="w-full absolute top-auto bottom-0 left-0 right-0 pointer-events-none overflow-hidden" style="height: 70px; transform: translateZ(0px);">
          <svg class="absolute bottom-0 overflow-hidden fill-current text-gray-200" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
            <polygon points="2560 0 2560 100 0 100"></polygon>
          </svg>
        </div>
      </div>
      <section class="pb-20 bg-gray-200 -mt-24 border border-red-400">
        <div class="container mx-auto px-4">
          <div class="flex items-center justify-center mt-32">
            <div class="w-full md:w-5/12 px-4 mx-auto text-center py-24">
              <h3 class="text-3xl font-semibold leading-normal mb-2">Working with us is a pleasure</h3>
              <p class="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                Don't let your uses guess by attaching tooltips and popoves to any element. Just make sure you enable them first via JavaScript.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="relative py-20">
        <div class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20" style="height: 80px; transform: translateZ(0px);">
          <svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
            <polygon class="text-white fill-current" points="2560 0 2560 100 0 100"></polygon>
          </svg>
        </div>

      </section>
      <section class="pt-20 pb-48">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap justify-center text-center mb-24">
            <div class="w-full lg:w-6/12 px-4">
              <h2 class="text-4xl font-semibold">Here are our heroes</h2>
              <p class="text-lg leading-relaxed m-4 text-gray-600">
                According to the National Oceanic and Atmospheric Administration, Ted, Scambos, NSIDClead scentist, puts the potentially record maximum.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="pb-20 relative block bg-gray-900">
        <div class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20" style="height: 80px; transform: translateZ(0px);">
          <svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
            <polygon class="text-gray-900 fill-current" points="2560 0 2560 100 0 100"></polygon>
          </svg>
        </div>
        <div class="container mx-auto px-4 lg:pt-24 lg:pb-64">
          <div class="flex flex-wrap text-center justify-center">
            <div class="w-full lg:w-6/12 px-4">
              <h2 class="text-4xl font-semibold text-white">Build something</h2>
              <p class="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                Put the potentially record low maximum sea ice extent tihs year down to low ice. According to the National Oceanic and Atmospheric Administration, Ted, Scambos.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="relative block py-24 lg:pt-0 bg-gray-900">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap justify-center lg:-mt-64 -mt-48">
            <div class="w-full lg:w-6/12 px-4">
              <div class=" relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
                <div class="flex-auto p-5 lg:p-10">
                  <h4 class="text-2xl font-semibold">Want to work with us?</h4>
                  <p class="leading-relaxed mt-1 mb-4 text-gray-600">
                    Complete this form and we will get back to you in 24 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
<script>
  import NavbarUniv from "../components/app/NavbarUniv";
  export default {
    components: { NavbarUniv },
    head() {
      return {
        title: 'iaLearn pour les Universités'
      }
    }
  }
</script>
