<template>
  <div class="overflow-hidden">
    <section class="mx-auto max-w-full px-4 sm:py-10 md:px-20">
		<div class="bg-gray-100 rounded-xl shadow-sm p-8">
			<div class="lg:grid lg:grid-cols-12 lg:gap-8">
				<div class="sm:text-center md:max-w-3xl md:mx-auto lg:col-span-7 lg:text-left">
					<h1 class="">
						<span class="block text-lg font-courgette font-semibold tracking-wide text-cyan-700">Apprenez et enseignez</span>
						<span class="mt-2 block text-3xl font-nunito font-extrabold md:text-5xl">
							<span class="block text-gray-800">L'université en ligne pour</span>
							<span class="block text-cyan-700">développer vos compétences.</span>
						</span>
					</h1>
					<p class="mt-3 sm:mt-6 text-base sm:text-lg lg:text-xl font-medium text-gray-900 leading-5 max-w-md">
						Inspirez-vous et apprenez quelque chose de nouveau dès aujourd'hui.
					</p>
					<div class="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
						<div class="sm:mt-2 sm:flex sm:justify-center md:justify-start">
							<button class="mt-3 w-full px-10 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto">
								Commencez maintenant
							</button>
						</div>
						
						<dl class="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3 font-nunito">
							<div class="overflow-hidden p-3 group hover:bg-gray-200 rounded-xl transition-all">
								<dd class="text-3xl font-bold tracking-tight text-green-900 italic">
									71M
								</dd>
								<dt class="mt-1 truncate text-sm font-semibold text-black tracking-wide">Universités</dt>
							</div>

							<div class="overflow-hidden p-3 group hover:bg-gray-200 rounded-xl transition-all">
								<dd class="text-3xl font-bold tracking-tight text-green-900 italic">102M</dd>
								<dt class="mt-1 truncate text-sm font-semibold text-black tracking-wide">Étudiants</dt>
							</div>

							<div class="overflow-hidden p-3 group hover:bg-gray-200 rounded-xl transition-all">
								<dd class="text-3xl font-bold tracking-tight text-green-900 italic">56M</dd>
								<dt class="mt-1 truncate text-sm font-semibold text-black tracking-wide">Formations</dt>
							</div>
						</dl>
					</div>
				</div>
				<div class="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-5 lg:flex lg:items-center">
					<!-- <img class="w-full" src="~/assets/images/vtc_image.png" alt="VTC"> -->
					<!-- <div id="lottie-animation"></div> -->
					<iframe class="w-full h-96" src="https://lottie.host/embed/54bd1786-c1f5-4bc7-b065-a27e27618e5c/Ld6RNOOsjb.json"></iframe>
				</div>
			</div>
		</div>
    </section>

	<div class="bg-white py-8">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
				<img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg" alt="Transistor" width="158" height="48">
				<img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg" alt="Reform" width="158" height="48">
				<img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg" alt="Tuple" width="158" height="48">
				<img class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg" alt="SavvyCal" width="158" height="48">
				<img class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg" alt="Statamic" width="158" height="48">
			</div>
		</div>
	</div>

	<!-- Card Blog -->
	<section class="bg-gray-50 my-8 font-nunito ">
		<div class="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-0 lg:py-14">
			<div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
				<h2 class="text-2xl font-semibold md:text-3xl md:leading-tight">Nos dernières formations</h2>
				<p class="mt-3 text-lg text-gray-600 leading-5">
					<span class="font-medium">ialearn</span> vous aide à approfondir et sauvegarder vos connaissances. Apprenez et travaillez ensemble à tout moment et en tout lieu.
				</p>
			</div>

			<!-- Grid -->
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
			<!-- End Grid -->

			<div class="mt-12 text-center">
				<a  href="#" class="py-2.5 px-8 inline-flex items-center gap-x-1 text-sm font-medium rounded-full border border-gray-200 bg-white text-blue-600 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
					Voir les autres cours
					<svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
						<path d="m9 18 6-6-6-6"/>
					</svg>
				</a>
			</div>
		</div>
	</section>
	<!-- End Card Blog -->

    <the-footer/>
  </div>
</template>
<script>
  import lottie from 'lottie-web';
  import theFooter from "../components/theFooter";
  export default {
    layout: 'app',
    components: { theFooter },
    
	head() {
        return {
            title: 'Accueil',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Plateforme de démocratisation de l\'intélligence artificielle en Afrique.'
                }
            ]
        };
    },
	mounted() {
        // const animationPath = 'https://lottiefiles.com/share/machine-learning-40r3zM45h5';
        const animationPath = 'https://app.lottiefiles.com/share/d197efdb-89f6-40cc-8db8-3f7d89767da5';

        const animationOptions = {
            container: document.getElementById('lottie-animation'),
            renderer: 'svg', // Vous pouvez choisir 'svg', 'canvas' ou 'html'
            loop: true,
            autoplay: true,
            path: animationPath,
        };

        lottie.loadAnimation(animationOptions);
        window.addEventListener('scroll', this.onScroll);
    },
	methods: {
        onScroll() {
            const statsSection = this.$refs.statsSection;
            const rect = statsSection.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
            this.animateStats = isVisible;
        },
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.onScroll);
    },
  }
</script>
