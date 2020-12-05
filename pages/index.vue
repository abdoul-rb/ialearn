<template>
  <main class="font-montserrat pt-10 sm:pt-12 md:pt-4 lg:px-20">
    <!-- <login-modal /> -->
    <div class="sm:flex sm:items-center sm:justify-center md:grid md:grid-cols-5 w-full gap-1 mt-6">
      <div class="md:col-span-3 w-full px-4 sm:px-0 pb-12">
        <div class="sm:text-center lg:text-left py-8">
          <h2 class="text-3xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
            Data to enrich your <br class="xl:hidden">
            <span class="text-5xl text-indigo-600">Apprenez chaque jours</span>
          </h2>
          <p class="text-gray-900 font-medium sm:mt-5 sm:text-4xl leading-9 sm:max-w-xl sm:mx-auto md:mt-5 lg:mx-0 mt-3">
            Inspirez-vous et apprenez quelque chose de nouveau dès aujourd'hui.
          </p>
        </div>
      </div>
      <img class="col-span-2 hidden md:block object-cover shadow-md rounded-md" src="https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" alt="Artificial intelligence">
    </div>
    <!--  Stat blocks -->
    <div class="max-w-full mx-auto mt-12">
      <dl class="rounded-lg bg-gray-100 shadow sm:grid sm:grid-cols-3">
        <div class="flex flex-col border-b border-gray-300 p-6 text-center sm:border-0 sm:border-r">
          <dt id="item-1" class="order-2 mt-2 text-sm leading-6 font-medium text-indigo-700 uppercase">Unviersités</dt>
          <dd aria-describedby="item-1" class="block flex flex-col items-center justify-center order-1 text-4xl tracking-wider leading-none font-normal text-blue-750">
            <div class="flex-items-center justify-center">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="university" class="fill-current text-indigo-1 h-10 w-10 mb-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M496 128v16a8 8 0 0 1-8 8h-24v12c0 6.627-5.373 12-12 12H60c-6.627 0-12-5.373-12-12v-12H24a8 8 0 0 1-8-8v-16a8 8 0 0 1 4.941-7.392l232-88a7.996 7.996 0 0 1 6.118 0l232 88A8 8 0 0 1 496 128zm-24 304H40c-13.255 0-24 10.745-24 24v16a8 8 0 0 0 8 8h464a8 8 0 0 0 8-8v-16c0-13.255-10.745-24-24-24zM96 192v192H60c-6.627 0-12 5.373-12 12v20h416v-20c0-6.627-5.373-12-12-12h-36V192h-64v192h-64V192h-64v192h-64V192H96z"></path>
              </svg>
            </div>
            <div>73</div>
          </dd>
        </div>
        <div class="flex flex-col border-t border-b border-gray-300 p-6 text-center sm:border-0 sm:border-l sm:border-r">
          <dt class="order-2 mt-2 text-sm leading-6 font-medium text-indigo-700 uppercase">Étudiants</dt>
          <dd aria-describedby="item-1" class="block flex flex-col items-center justify-center order-1 text-4xl tracking-wider leading-none font-normal text-blue-750">
            <div class="flex-items-center justify-center">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-graduate" class="fill-current text-indigo-1 h-10 w-10 mb-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill="currentColor" d="M319.4 320.6L224 416l-95.4-95.4C57.1 323.7 0 382.2 0 454.4v9.6c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-9.6c0-72.2-57.1-130.7-128.6-133.8zM13.6 79.8l6.4 1.5v58.4c-7 4.2-12 11.5-12 20.3 0 8.4 4.6 15.4 11.1 19.7L3.5 242c-1.7 6.9 2.1 14 7.6 14h41.8c5.5 0 9.3-7.1 7.6-14l-15.6-62.3C51.4 175.4 56 168.4 56 160c0-8.8-5-16.1-12-20.3V87.1l66 15.9c-8.6 17.2-14 36.4-14 57 0 70.7 57.3 128 128 128s128-57.3 128-128c0-20.6-5.3-39.8-14-57l96.3-23.2c18.2-4.4 18.2-27.1 0-31.5l-190.4-46c-13-3.1-26.7-3.1-39.7 0L13.6 48.2c-18.1 4.4-18.1 27.2 0 31.6z"></path>
              </svg>
            </div>
            <div>792</div>
          </dd>
        </div>
        <div class="flex flex-col border-t border-gray-200 p-6 text-center sm:border-0 sm:border-l">
          <dt class="order-2 mt-2 text-sm leading-6 font-medium text-indigo-700 uppercase">Cours</dt>
          <dd aria-describedby="item-1" class="block flex flex-col items-center justify-center order-1 text-4xl tracking-wider leading-none font-normal text-blue-750">
            <div class="flex-items-center justify-center">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chalkboard-teacher" class="fill-current text-indigo-1 h-10 w-10 mb-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                <path fill="currentColor" d="M208 352c-2.39 0-4.78.35-7.06 1.09C187.98 357.3 174.35 360 160 360c-14.35 0-27.98-2.7-40.95-6.91-2.28-.74-4.66-1.09-7.05-1.09C49.94 352-.33 402.48 0 464.62.14 490.88 21.73 512 48 512h224c26.27 0 47.86-21.12 48-47.38.33-62.14-49.94-112.62-112-112.62zm-48-32c53.02 0 96-42.98 96-96s-42.98-96-96-96-96 42.98-96 96 42.98 96 96 96zM592 0H208c-26.47 0-48 22.25-48 49.59V96c23.42 0 45.1 6.78 64 17.8V64h352v288h-64v-64H384v64h-76.24c19.1 16.69 33.12 38.73 39.69 64H592c26.47 0 48-22.25 48-49.59V49.59C640 22.25 618.47 0 592 0z"></path>
              </svg>
            </div>
            <div>375</div>
          </dd>
        </div>
      </dl>
    </div>
  </main>
</template>

<script>
  import loginModal from "./auth/loginModal";
  export default {
    layout: 'app',
    components: { loginModal },
    head () {
      return {
        title: 'Accueil'
      }
    },
    data () {
      return {
        isOpen : false,
      }
    }
  }
</script>
