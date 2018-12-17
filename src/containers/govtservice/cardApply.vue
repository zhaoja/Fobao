<template>
	<div class="cardContainer">
		<Header :topName="topName"/>
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
				topName: state => state.cardApply.topName,
			})
		},
		
	}
</script>

<style lang="scss">
	.cardContainer{
	    min-height: 100%;
		width: 100%;
		/*overflow: auto;*/
		position: absolute;
		background: #ffffff;
		.long{
		    line-height: 24px;
	    	padding: 10px 0;
    	    width: 80px;
		}
	}
	
</style>
