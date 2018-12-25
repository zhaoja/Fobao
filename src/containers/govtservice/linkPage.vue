<template>
	<div>
		<Header :topName = "$route.query.name" />
		<div class="box">
			<meta name="viewport" content="width=device-width, initial-scale=auto, minimum-scale=0.35, maximum-scale=10, user-scalable=yes"/> 
			<iframe :src="$route.query.url" width='100%' height='100%' ></iframe> 
		</div>
		
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	import Header from '../../components/Header.vue'

	export default {
		components: {
			Header
		},
		mounted() {
 
		 
		}
	}
</script>

<style>
	iframe {
		height: 100vh;
	}
</style>