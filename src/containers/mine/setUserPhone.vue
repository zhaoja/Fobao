<template>
	<div class="imgpage">
		<div class="upphone">
			<img src="../../assets/images/mine/phone.png" class="ewimg"/>
			<h1><strong>您的手机号：{{userInfo.phoneNo}}</strong></h1>
			<button class="btn1" @click="showMessageBox()">更换手机号</button>
			<p>更换手机号后，登录时手机号将变为新手机号</p>
		</div>
		<div class="MessageBox" :class="show" v-if="show==='showbox'">
			<div class="inner">
				<div>验证手机号</div>
				<div>请输入{{userInfo.phoneNo}}收到的验证码</div>
				<div>
					<input type="text" v-model="VerificationCode" placeholder="请输入验证码" />
					<input type="button" value="获取验证码" @click="getVCode()">
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
	import { mapState } from "vuex";
	import { Http } from '@/server/index.js'
	import { MessageBox , Toast } from 'mint-ui';
	import validation  from '@/utils/validation.js';
 
	export default {
		computed: {
			...mapState({
				userInfo: state => state.user.user.userInfo
			})
		} ,
		  
		data() {
			return {
			 	show:"hidebox",
			 	VerificationCode:''
			}
		},
 		created(){
			this.$store.dispatch('getUser');
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
			getVCode(){
//				this.userInfo.phoneNo
				validation.getVerificationCode("15645054811");				
			},
			//验证码校验
			sendVerificationCode(a){
//				console.log(this.VerificationCode)
				Http({url: '/api/user/validatePhone',data:{
					 "param": {
//					    "deviceId": "string",
					    "phoneNo": this.userInfo.phoneNo,
					    "sendcode": this.VerificationCode
					 }
				}})
	            .then(data => {
	              	if (data.code === 1) {	
						Toast({ message: '验证成功', position: 'bottom'});
	              		this.$router.push({ path: '/set/updatephone2' })

	              	}else{
	              		Toast({ message: data.desc , position: 'bottom'});
	              	}
	            }).catch(function (error) {
				    console.log(error,1);
		  		});	
//				this.$router.push("updatephone2")
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
.mint-toast span{
	color: #fff !important;
}
</style>