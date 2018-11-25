<template>
	<div class="login">
		<form>
			<h1>{{title}}</h1>
			<p>您好，欢迎使用福宝！</p>
			<div>
				<input type="number" @keyup="keyupInput(userInfo.phone)" placeholder="请输入手机号" v-model.trim="userInfo.phone">
			</div>
			<div class="code">
				<div class="codeButton">
					<button type="button" :disabled="verifiybtn" :class="active" @click="verifiyCode(userInfo.phone)">{{verifiytext}}</button>
				</div>
				<div>
					<input type="text" placeholder="请输入收到的验证码" v-model.trim="userInfo.verifiyCode">
				</div>
			</div>
			<div class="alert" v-if="message"> {{message}} </div>

			<div class="agree" v-if="!registed">

				<div class="checkbox">
					<input type="checkbox" :checked="agree" @change="agreeChange(agree)" />
					<i class="icon icon-square"></i>
					<i class="icon icon-check" v-if="agree"></i>
					<span>已阅读并同意 <a href="javascript:void(0);" @click="readme()">《福宝用户注册协议》</a></span>
				</div>
			</div>
			<div>
				<button v-if="!registed" class="lbtn longbtn1" :class="longbtn" :disabled='registerbtn' @click="login(userInfo)">登录</button>
			</div>
		</form>

		<div class="flolayer" v-if="flolayer">
			<div class="inner">
				<i class="close icon icon-close" @click="close()"></i>
				<h3>《福宝用户使用协议》</h3>
				<div class="text">
					<p>1、用户承诺其具有完全民事行为能力的民事主体，且具有达成交易履行其义务的权利。</p>
					<p>2、用户有义务在注册是提供自己真实的资料，并保证手机号码、姓名、所在地区等内容的有效性即安全性。</p>
					<p>3、用户有义务在注册是提供自己真实的资料，并保证手机号码、姓名、所在地区等内容的有效性，并保证手机号码、姓名、所在地区等内容的有效性即安全性。</p>
				</div>
				<button class="Iagree" @click="Iagree()">同意并继续</button>
				
			</div>
 		
		</div>

	</div>
</template>

<script>
	import {
		mapState
	} from "vuex";

	export default {
		data() {
			return {
				verifiybtn: true, //验证码按钮状态disabled
				active: "ban",
				title: "登录",
				registerbtn: true, //验证码按钮状态disabled 
				verifiytext: "获取验证码",
				message: "", //提示信息
				agree: false,
				udesk_container: null,
				longbtn: "longbtn1",
				flolayer: false,
				registed: false
			}
		},
		computed: {
			...mapState({
				userInfo: state => state.user.userInfo,
			}),

		},
		methods: {
			hideConnect() {
				document.querySelector('body').classList.add('hideConnect')
			},
			showConnect() {
				document.querySelector('body').classList.remove('hideConnect')
			},
			
			//输入电话号码验证
			keyupInput(param) {

				if(this.phone(param)) {
					this.active = "disban"
					this.message = ""
					this.verifiybtn = false
				} else {
					this.active = "ban"
					// this.userInfo.phone = param.slice(0,11);
					this.message = "*请注意填写正确手机号格式"
					this.verifiybtn = true
				}
			},
			//同意按钮与注册联动1
			agreeChange(a) {
				var _this = this;
				if(a == false) {
					// 					_this.agree = true;
					// 					_this.registerbtn = false;

					// if(this.phone(this.userInfo.phone)&&this.userInfo.verifiyCode.length==4){
					_this.agree = true;
					_this.longbtn = "longbtn2";;
					_this.registerbtn = false
					// 					}else{
					// 						_this.agree = false;
					// 						_this.longbtn = "longbtn1"
					// 					}

				} else {
					_this.agree = false;
					//_this.registerbtn = true;
					_this.longbtn = "longbtn1";

				}
			},
			//同意按钮与注册联动2
			Iagree() {
				this.agree = true;
				this.longbtn = "longbtn2";
				this.flolayer = false;
				//this.registerbtn = false;
				//this.agreeChange(this.agree)
			},
			close() {

				this.flolayer = false;
			},

			//电话号码验证
			phone(data) {
				return !!(/^1[3|4|5|6|7|8][0-9]\d{8}$/.test(data))
			},
			readme() {
				this.flolayer = true;
			},
			//获取验证码
			verifiyCode(a) {

				alert('向手机号：' + a + '，发送的验证码为：6254')
				var _this = this;
				var time = 60;
				// 				$.ajax({
				// 		            url: Url+'/Api/Interface/getCode',
				// 		            type:'post',
				// 		            data:{"phone":this.userInfo.phone},
				// 		            success:function ({code, msg, data}) {
				// 		            	if(code==1){
				//     						var timr = setInterval(function() {
				// 								that.verifiytext = (time--)+"s后重新获取";
				// 								that.verifiybtn = true;
				// 								if (time==0) {
				// 									clearInterval(timr);
				// 									that.verifiybtn = false;
				// 									that.verifiytext = "获取验证码";
				// 								}
				// 							}, 1000);
				// 		            	}else{
				// 		            		mui.toast("验证码发送失败")
				// 		            	}
				// 		            },
				// 		            error:function () {
				// 		            }
				// 		        })
			}, 
			//登录
			login(userInfo) {
				let _this = this;
				console.log(userInfo)
				if(userInfo.phone != "" && userInfo.verifiyCode != "") {
					alert("验证中。。。")
					/**
					 * 发送接口请求
					 */
					alert("登录成功。。。")
					_this.$router.push({
						path: '/index'
					})
				} else {
					if(userInfo.verifiyCode == "") {
						_this.message = "*验证码不能为空！"
					} else if(userInfo.phone == "") {
						_this.message = "*手机号不能为空"
					}
				}

			},

		},
		created() {

			//			this.$store.dispatch("getTitle", "");
		},
		mounted() {
			this.hideConnect()
		},
		beforeDestroy() {
			this.showConnect()
		},
		watch: {

		}

	}
</script>

</script>

<style lang="scss" scoped>
	
</style>