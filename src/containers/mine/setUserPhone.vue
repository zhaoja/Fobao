<template>
	<div class="imgpage">
		<div class="upphone">
			<img src="../../assets/images/score/ewm.png" class="ewimg"/>
			<h1><strong>您的手机号：18611714595</strong></h1>
			<button class="btn1" @click="showAlert()">更换手机号</button>
			<p>更换手机号后，登录时手机号将变为新手机号</p>
		</div>
		<div class="alert">
			<div class="inner">
				<div>验证手机号</div>
				<div>请输入186****4595收到的验证码</div>
				<div>
					<input type="text" placeholder="请输入验证码" />
					<button>获取验证码</button>
				</div>
				<div>
					<button>取消</button>
					<button>确认</button>
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
			 	show:false
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
			showAlert(){
				
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

</style>