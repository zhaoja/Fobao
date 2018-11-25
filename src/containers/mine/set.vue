<template>
	<div>
		<Header :topName="topName" />
		<router-view/>
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	import Header from '../../components/Header.vue'
	
	export default {
		components:{
			Header
		},
		computed: {
			...mapState({
				topName: state => state.user.topName,
			})
		},
		
		
	}
</script>

<style lang="scss">

</style>
