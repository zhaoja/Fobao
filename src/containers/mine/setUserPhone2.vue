<template>
	<div class="capply">
		<p>输入新号码后，下次可使用新手机号登录。</p>
		<p>当前手机号为：{{userInfo.phoneNo}}</p>
		<ul class="grayb">
			<li>
				<span>手机号: </span>
				<input type="text" placeholder="请输入新手机号" v-model="newPhone" />
			</li>
			<li>
				<span>验证码: </span>
				<input type="text" placeholder="请输入验证码" v-model="VerificationCode" />
				<input :class="disabledClass" :disabled="disabled" type="button" :value="codeText" @click="getVerificationCode()">
			</li>
			<!--<li class="alert-inline">
				<label>{{alert}}</label>
			</li>-->
			<li class="mt10">
				<button type="primary" @click="sendVerificationCode()">下一步</button>
			</li>
		</ul>

	</div>
</template>

<script>
	import { mapState } from "vuex";
	import { Http } from '@/server/index.js'
	import { MessageBox , Toast } from 'mint-ui';
	import validation from '@/utils/validation.js';
 
	export default {
		computed: {
			...mapState({
				userInfo: state => state.user.user.userInfo
			})
		} ,
		  
		data() {
			return {
			 	show:"hidebox",
			 	
//			 	alert:'',
//				ifshow:false,
				
				codeText:'获取验证码',
			 	disabled:false,
			 	disabledClass:'',
			 	
			 	newPhone:'',
			 	VerificationCode:'',
			}
		},
 		created(){
			this.$store.dispatch('getUser');
		},
		 
		methods: {
			//获取验证码
			getVerificationCode(){
				//判断手机号this.newPhone
				var ifPhone = validation.ifPhone(this.newPhone);
				if(ifPhone===true){
					this.getVCode()
				}else{
					MessageBox.alert(ifPhone);
				}
			},
			getVCode(){
				var _this = this;
				var countdown = 10;
				var timer = setInterval(function(){
					if (countdown == 0) {
						_this.codeText = "获取验证码";
						_this.disabled = false;
						_this.disabledClass = "";
						countdown = 10;
						clearInterval(timer); 
						return;
					} else {
						_this.disabled = true;
						_this.disabledClass = "disabled";
						_this.codeText = "重新发送(" + countdown + ")";
						countdown--;
					}
				}, 1000);
				validation.getVerificationCode(_this.newPhone);	
			},
			sendVerificationCode(){
				var param = {
				    "phoneNo": this.newPhone,
				    "sendcode": this.VerificationCode
				  }
				MessageBox.confirm('确定执行此操作？').then( confirmAction => {
					if (confirmAction === 'confirm') {
						Http({url: '/api/user/editPhone',data: {"param":param} })
			            .then(data => {
			              	if (data.code === 1) {	
			              		MessageBox.alert('操作成功').then( alertAction => {
								  	if (alertAction === 'confirm') {
								  		Toast({ message: "修改成功" , position: 'bottom'});
								  		this.$router.push({ path: '/set/user' })
								  	}
								});
			              	}else{
		              			MessageBox.alert(data.desc)
			              	}
			            }).catch(function (error) {
						    console.log(error);
				  		});					
					} else{
						return false
					}
				});
 					 
 			}
 
		}
	}
</script>

<style lang="scss" scoped="scoped">
	 
	.mint-toast-text{
		color: #ffffff !important;
	}
	 .disabled{
		background: #f5f5f5 !important;
	}
</style>
