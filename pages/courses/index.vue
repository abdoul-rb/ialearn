<template>
	<main class="max-w-7xl mx-auto px-4 sm:py-10 lg:px-0 font-nunito">
		<h1 class="text-3xl lg:text-4xl font-semibold tracking-tight leading-5 text-black">Nos cours</h1>
		<p class="mt-2 max-w-3xl text-base text-gray-900">
			Thoughtfully designed objects for the workspace, home, and travel.
		</p>

		<section class="border-t border-gray-200 py-8 mt-8">
			<form class="flex items-center justify-between">
				<div>
					<div class="relative flex items-center">
						<input type="text" name="search" id="search" class="block w-96 rounded-md border-0 py-2 pr-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Python, Power BI ...">
						<div class="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
							<kbd class="inline-flex items-center rounded border border-gray-200 px-1 font-sans text-xs text-gray-400">⌘K</kbd>
						</div>
					</div>
				</div>

				<div class="lg:flex lg:space-x-2">
					<div class="text-gray-900 bg-gray-100 hover:text-gray-900 rounded-md py-2 px-4 inline-flex items-center text-base font-medium">
						Tous
					</div>

					<div class="text-gray-900 bg-gray-100 hover:text-gray-900 rounded-md py-2 px-4 inline-flex items-center text-base font-medium">
						Data analyst
					</div>

					<div class="text-gray-900 bg-gray-100 hover:text-gray-900 rounded-md py-2 px-4 inline-flex items-center text-base font-medium">
						Data science
					</div>
				</div>
			</form>
		</section>

		<section class="py-8">
			<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
				<template v-for="x in 3" >
					<nuxt-link :to="{ name: '' }" :key="x" class="group flex flex-col h-full border border-gray-200 hover:shadow-sm transition-all duration-300 rounded-xl p-5">
						<div class="aspect-w-16 aspect-h-11">
							<img class="w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="Image Description">
						</div>
						<div class="my-6">
							<div class="flex items-center gap-x-3">
								<div class="flex justify-center items-center w-12 h-12 p-3 bg-blue-100 rounded-lg">
									<svg class="flex-shrink-0 w-5 h-5 text-green-900" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
										<rect width="10" height="14" x="3" y="8" rx="2"></rect><path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4"></path><path d="M8 18h.01"></path>
									</svg>
								</div>
								<h3 class="text-lg font-semibold text-black">
									Tout savoir sur Python
								</h3>
							</div>
							
							<p class="mt-5 text-sm text-gray-900">
								At Wake, our mission has always been focused on bringing openness.
							</p>
						</div>
						<div class="mt-auto flex items-center justify-between border-t border-gray-200 py-5">
							<div class="flex items-center gap-x-4">
								<div class="text-sm font-nunito font-semibold text-black tracking-wide">
									<span class="text-indigo-600 text-base">4</span> lessons
								</div>

								<div class="text-sm font-nunito font-semibold text-black tracking-wide">
									<span class="text-indigo-600 text-base">12</span> heures
								</div>
							</div>

							<button class="w-full px-4 py-1.5 border border-transparent text-sm font-medium rounded-md text-white bg-gray-800 shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-0 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto">
								Commencer
							</button>
						</div>
					</nuxt-link>
				</template>
			</div>
		</section>

		<!-- old-->
		<div class="lg:col-span-8 grid lg:grid-cols-2 gap-4 mt-1">
			<nuxt-link :to="{ name: 'courses-slug', params: { slug: course.slug } }" v-for="course in courses" :key="course.id" class="rounded shadow bg-blue-500 transform hover:-translate-y-2 transition transition-all duration-500 px-8 py-6">
				<div class="w-64 space-y-2 text-white mb-3">
				<h4 class="text-xl font-medium leading-7">{{ course.title }}</h4>
					<div class="flex items-center space-x-4">
						<div class="flex items-center space-x-1">
							<svg class="stroke-current text-indigo-700 w-4 h-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline>
							</svg>
							<h5 class="text-xs font-medium uppercase">{{ course.chapters.length }} chaptitres</h5>
						</div>
						<div class="flex items-center space-x-1">
							<svg class="stroke-current text-indigo-700 w-4 h-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>
							</svg>
							<h5 class="text-xs font-medium uppercase">3h 30min</h5>
						</div>
					</div>
				</div>
				<p class="text-sm text-gray-200 mt-2">{{ course.description | truncate(170) }}</p>
				<div class="flex items-center justify-end mt-8">
					<nuxt-link :to="{ name: 'courses-slug', params: { slug: course.slug } }" class="rounded-full bg-blue-700 text-xs text-white font-semibold uppercase tracking-wide px-8 py-3">&rarr; Découvrir</nuxt-link>
				</div>
			</nuxt-link>
		</div>
	</main>
</template>

<script>
  import Vue2Filters from 'vue2-filters'
  export default {
    mixins: [Vue2Filters.mixin],
    layout: 'app',
    head () {
      return {
        title: 'Nos cours'
      }
    },
    data() {
      return {
        courses: [],
      }
    },
    async asyncData(context) {
      try {
        let courses = await context.$axios.$get('admin/courses');
        return { courses : courses.data }
      } catch (e) {
        console.log(e)
      }
    },
  }
</script>
