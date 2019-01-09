<template>
	<div class="imgpage">
		<div class="nofind">
			<img src="../assets/images/404.png" alt="" class="img-no">
			<div class="note1">咋没有网了呢～</div>
			<div class="note2">请检查您的网络设置</div>
			<div><button @click="reload()">刷新</button></div>		
		</div>
		
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			reload(){
				window.location.reload()
			}
		}
	}
</script>

<style lang="scss">

</style>
