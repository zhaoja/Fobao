<template>
	<div class="imgpage">
		<div class="upphone">
			<img src="../../assets/images/mine/phone.png" class="ewimg"/>
			<h1><strong>您的手机号：18611714595</strong></h1>
			<button class="btn1" @click="showMessageBox()">更换手机号</button>
			<p>更换手机号后，登录时手机号将变为新手机号</p>
		</div>
		<div class="MessageBox" :class="show" v-if="show==='showbox'">
			<div class="inner">
				<div>验证手机号</div>
				<div>请输入186****4595收到的验证码</div>
				<div>
					<input type="text" placeholder="请输入验证码" />
					<input type="button" value="获取验证码" @click="getVerificationCode()">
				</div>
				<div>
					<button @click="closeMessageBox()">取消</button>
					<button @click="sendVerificationCode()">确认</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapState } from 'vuex'

	export default {
		components: {

		},
		data() {
			return {
			 	show:"hidebox",
			}
		},
		computed: {
			...mapState({
//				systemInfoList: state => state.system.systemInfo.list,
			})
		},
		mounted() { 
			

		},
		 
		methods: {
			//显示弹窗
			showMessageBox(){
				this.show = "showbox";
			},
			closeMessageBox(){
				this.show = "hidebox";
			},
			//获取验证码
			getVerificationCode(){
				
			},
			//发送验证码
			sendVerificationCode(){
				console.log(111)
				this.$router.push("updatephone2")
			},
			cardnext() {
				// this.$store.dispatch('cardapplyNext',a);
//				this.$router.push({
//					path: '/cardapply/p4'
//				});
				// alert("建设中")
			}
		}
	}
</script>

<style>


.showbox .inner{
    animation:action_scale 0.3s ;
}
.hidebox .inner{
    animation:action_scaleOut 3.3s ;
}
</style>