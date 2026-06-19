<template>
    <div class="relative bg-white overflow-hidden font-montserrat">
        <Navigation />

        <main class="min-h-screen">
            <nuxt />
        </main>

		<the-footer/>
   </div>
</template>

<script>
	import theFooter from '../components/theFooter'
	import Navigation from "../components/app/Navigation";
	export default {
		components: { theFooter, Navigation },
		data () {
			return {
				isOpen: false
			}
		}
	}
</script>
