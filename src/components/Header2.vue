<template>
	<div class="header header2">
		<div @click="$router.back(-1)">
		<i class="icon icon-back"></i>
		</div>
		{{topName}}
	</div>
</template>

<script>
	export default {
		props:['topName'],
		data() {
			return {
				
			};
		}
	}
</script>

<style>

</style>
 