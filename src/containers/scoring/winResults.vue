<template>
	<div class="imgpage">
		<div class="win" v-if="win">
			<div class="img-win1">
				<img src="../../assets/images/score/zj1.png">
			</div>
			<div class="img-win2">
				<img src="../../assets/images/score/zj2.png">
				<div class="">
					获得 <span>1000</span> 元
				</div>
			</div>
			<div class="img-win3">
				<div>
					<img src="../../assets/images/score/zj.png">
				</div> 
				奖金将在48小时之内转入您的北京通卡金融账户，请您确保金融账户已激活。
			</div> 
		</div>
		
		<div class="fail" v-if="!win">
			<img src="../../assets/images/score/wzj.png" class="img-fali">
			<div>很遗憾未中奖，祝您下次好运！</div> 
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				win:true
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
