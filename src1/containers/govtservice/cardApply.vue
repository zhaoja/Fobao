<template>
	<div class="cardContainer">
		<Header/>
		<router-view/>
	</div>
</template>

<script>
	import Header from '../../components/Header.vue'
	
	export default {
		components:{
			Header
		}
	}
</script>

<style lang="scss">
	.cardContainer{
	    height: 100%;
		width: 100%;
		overflow: auto;
		position: absolute;
		background: #ffffff;
	}
</style>
