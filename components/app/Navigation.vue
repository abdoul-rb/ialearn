<template>
    <header class="bg-white " :class=" isOpen ? '' : 'shadow' ">
      	<div class="max-w-7xl mx-auto px-4 sm:px-4 lg:divide-y lg:divide-gray-200 lg:px-0">
			<div class="relative h-16 flex justify-between">
				<div class="relative z-10 px-1 flex lg:px-0">
					<div class="flex-shrink-0 flex items-center">
						<nuxt-link :to=" { name : 'index' }" class="text-3xl font-semibold tracking-wide text-green-900 font-courgette">
							iaLearn
						</nuxt-link>
					</div>
				</div>

				<nav class="hidden lg:py-3 lg:flex lg:space-x-8" aria-label="Global">
					<nuxt-link :to="{ name : 'index' }" class="text-gray-900 hover:bg-gray-50 hover:text-gray-900 rounded-md py-2 px-3 inline-flex items-center text-sm font-medium" :class="$route.name === 'index' ? 'bg-gray-100 text-gray-900': ''">
						Accueil
					</nuxt-link>
					<nuxt-link :to="{ name : 'courses' }" class="text-gray-900 hover:bg-gray-50 hover:text-gray-900 rounded-md py-2 px-3 inline-flex items-center text-sm font-medium" :class="$route.name === 'courses' ? 'bg-gray-100 text-gray-900': ''">
						Cours
					</nuxt-link>
					<nuxt-link :to="{ name : 'pro' }" class="text-gray-900 hover:bg-gray-50 hover:text-gray-900 rounded-md py-2 px-3 inline-flex items-center text-sm font-medium" :class="$route.name === 'pro' ? 'bg-gray-100 text-gray-900': ''">
						Université
					</nuxt-link>

					<nuxt-link :to="{ name : 'forum' }" class="text-gray-900 hover:bg-gray-50 hover:text-gray-900 rounded-md py-2 px-3 inline-flex items-center text-sm font-medium" :class="$route.name === 'forum' ? 'bg-gray-100 text-gray-900': ''">
						Forum
					</nuxt-link>
				</nav>

				<!-- Mobile menu button -->
				<div class="relative z-10 flex items-center lg:hidden">
					<button type="button" @click.prevent="isOpen = !isOpen" class="rounded-md p-1.5 inline-flex items-center justify-center text-gray-600 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-gray-200" aria-controls="mobile-menu" aria-expanded="false">
						<span class="sr-only">Open menu</span>
						<svg class="h-6 w-6" :class=" isOpen ? 'hidden' : 'block' " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
						<svg class="h-6 w-6" :class=" isOpen ? 'block' : 'hidden' " stroke="currentColor" fill="none" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12"/>
						</svg>
					</button>
				</div>
	
				<div class="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center gap-x-2">
					<nuxt-link :to="{ name : 'forum' }" class="text-gray-900 hover:bg-gray-50 hover:text-gray-900 rounded-md py-2 px-3 inline-flex items-center text-sm font-medium" :class="$route.name === 'forum' ? 'bg-gray-100 text-gray-900': ''">
						S'inscrire
					</nuxt-link>

					<template v-if="$auth.loggedIn">
						<!-- Profile dropdown -->
						<div class="flex-shrink-0 relative ml-4">
							<div class="">
								<button type="button" @click.prevent="dropdownOpen = !dropdownOpen" class="bg-white rounded-full flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200" id="user-menu" aria-haspopup="true">
									<span class="sr-only">Open user menu</span>
									<img class="h-8 w-8 rounded-full" :src="this.$auth.user.avatar" :alt="'Photo de profil de ' + this.$auth.user.lastname">
								</button>
							</div>

							<transition enter-active-class="transition ease-out duration-100" enter-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
								<div v-show="dropdownOpen" class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu" style="display: none;">
									<nuxt-link :to="{ name : 'app-student-dashboard' }" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Tableau de bord</nuxt-link>
									<nuxt-link :to="{ name : 'app-student-dashboard' }" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</nuxt-link>
									<a href="#" @click.prevent="logout" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Déconnexion</a>
								</div>
							</transition>
						</div>
					</template>
					<template v-else>
						<button type="button" @click.prevent="$modal.show('LoginModal')" class="text-white bg-green-900 rounded-md py-2 px-5 inline-flex items-center text-sm font-medium focus:outline-none">
							Se connecter
						</button>
					</template>
				</div>
			</div>
      	</div>
  
      	<!-- Mobile Navigation -->
      	<nav class="lg:hidden mx-4 border border-gray-200 bg-gray-50 shadow-sm rounded-lg" aria-label="Global" id="mobile-menu" v-show="isOpen" style="display: none;">
			<div class="pt-2 pb-3 px-2 space-y-1">
				<nuxt-link :to="{ name : 'index' }" class="text-gray-900 hover:bg-gray-100 hover:text-gray-900 block rounded-md py-2 px-3 text-base font-medium" :class="$route.name === 'index' ? 'bg-gray-100 text-gray-900': ''">
					Accueil
				</nuxt-link>
				<nuxt-link :to="{ name : 'courses' }" class="text-gray-900 hover:bg-gray-100 hover:text-gray-900 block rounded-md py-2 px-3 text-base font-medium" :class="$route.name === 'courses' ? 'bg-gray-100 text-gray-900': ''">
					Cours
				</nuxt-link>
				<nuxt-link :to="{ name : 'pro' }" class="text-gray-900 hover:bg-gray-100 hover:text-gray-900 block rounded-md py-2 px-3 text-base font-medium" :class="$route.name === 'pro' ? 'bg-gray-100 text-gray-900': ''">
					Université
				</nuxt-link>
				<nuxt-link :to="{ name : 'forum' }" class="text-gray-900 hover:bg-gray-100 hover:text-gray-900 block rounded-md py-2 px-3 text-base font-medium" :class="$route.name === 'forum' ? 'bg-gray-100 text-gray-900': ''">
					Forum
				</nuxt-link>
			</div>

			<div class="border-t border-gray-200 pt-4 pb-3">
				<div class="px-4 flex items-center">
					<template v-if="$auth.loggedIn">
						<div class="flex-shrink-0">
							<img class="h-10 w-10 rounded-full" :src="this.$auth.user.avatar" :alt="'Photo de profil de ' + this.$auth.user.lastname">
						</div>
						<div class="ml-3">
							<div class="text-sm font-medium text-gray-800">{{ this.$auth.user.firstname }} {{ this.$auth.user.lastname }}</div>
							<div class="text-xs font-medium text-gray-500">{{ this.$auth.user.email }}</div>
						</div>
					</template>
					<template v-else>
						<button type="button" class="flex focus:outline-none" @click.prevent="$modal.show('LoginModal')">
							<svg class="fill-current text-cyan-700 h-8 w-8 rounded-full" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
								<path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"></path>
							</svg>
						</button>
					</template>

					<button class="ml-auto flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
						<span class="sr-only">View notifications</span>
						<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
						</svg>
					</button>
				</div>

				<div class="mt-3 px-2">
					<nuxt-link :to="{ name : 'app-student-dashboard' }" class="block rounded-md py-2 px-3 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900">Tableau de bord</nuxt-link>
					<nuxt-link :to="{ name : '' }" class="block rounded-md py-2 px-3 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900">Settings</nuxt-link>
					<a href="#" @click.prevent="logout" class="block rounded-md py-2 px-3 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900">Déconnexion</a>
				</div>
			</div>
      	</nav>

     	<login-modal />
    </header>
</template>
  <script>
    import loginModal from "../../pages/auth/loginModal";
    export default {
      components: { loginModal },
      data () {
        return {
          isOpen : false,
          dropdownOpen : false
        }
      },
      methods : {
        logout () {
          this.$auth.logout()
        },
      },
    }
</script>
  