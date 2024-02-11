<template>
    <div class="relative bg-white overflow-hidden font-montserrat">
        <Navigation />

        <div class="min-h-screen">
            <nuxt />
        </div>
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
