<template>
	<div class="nofind">
		<img src="../assets/images/404.png" alt="">
		<div>咋没有网了呢～</div>
		<div>请检查您的网络设置</div>
		<div><button @click="reload()">刷新</button></div>
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
	.nofind{
		text-align: center;
		padding-top: 190px;
		img{
			width: 138px;
			height: 132px;
		}
	}
</style>
