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
			<div class="alert"> {{message}} </div>

			<div class="agree" v-if="!registed">

				<div class="checkbox">
					<input type="checkbox" :checked="agree" @change="agreeChange(agree)" />
					<i class="icon icon-square"></i>
					<i class="icon icon-check" v-if="agree"></i>
					<span>已阅读并同意<a href="javascript:void(0);" @click="readme()">《福宝用户注册协议》</a></span>
				</div>
			</div>



		</form>
		<div>
			<button v-if="!registed" class="lbtn longbtn1" :class="longbtn" :disabled='registerbtn' @click="regist(userInfo)">注册</button>
			<button v-if="registed" class="lbtn longbtn3" @click="login(userInfo)">登录</button>
		</div>
		<div class="flolayer" v-if="flolayer">

			XXXX协议具体事宜
			在web自动化测试时候，经常会遇到复选框选择的问题，那么我们遇到这种情形的时候如何去选择呢。在web自动化测试时候，经常会遇到复选框选择的问题，那么我们遇到这种情形的时候如何去选择呢。在web自动化测试时候，经常会遇到复选框选择的问题，那么我们遇到这种情形的时候如何去选择呢。在web自动化测试时候，经常会遇到复选框选择的问题，那么我们遇到这种情形的时候如何去选择呢。在web自动化测试时候，经常会遇到复选框选择的问题，那么我们遇到这种情形的时候如何去选择呢。在web自动化测试时候，经常会遇到复选框选择的问题，那么我们遇到这种情形的时候如何去选择呢。在web自动化测试时候，经常会遇到复选框选择的问题，那么我们遇到这种情形的时候如何去选择呢。在web自动化测试时候，经常会遇到复选框选择的问题，那么我们遇到这种情形的时候如何去选择呢。在web自动化测试时候，经常会遇到复选框选择的问题，那么我们遇到这种情形的时候如何去选择呢。在web自动化测试时候，经常会遇到复选框选择的问题，那么我们遇到这种情形的时候如何去选择呢。在web自动化测试时候，经常会遇到复选框选择的问题，那么我们遇到这种情形的时候如何去选择呢。在web自动化测试时候，经常会遇到复选框选择的问题，那么我们遇到这种情形的时候如何去选择呢。在web自动化测试时候，经常会遇到复选框选择的问题，那么我们遇到这种情形的时候如何去选择呢。在web自动化测试时候，经常会遇到复选框选择的问题，那么我们遇到这种情形的时候如何去选择呢。在web自动化测试时候，经常会遇到复选框选择的问题，那么我们遇到这种情形的时候如何去选择呢。在web自动化测试时候，经常会遇到复选框选择的问题，那么我们遇到这种情形的时候如何去选择呢。

			<button @click="Iagree()">已阅读并同意</button>
			<button @click="close()">关闭</button>
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
				title: "注册",
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
			//输入电话号码验证
			keyupInput(param) {

				if (this.phone(param)) {
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
				if (a == false) {
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
			//注册
			regist(userInfo) {
				let _this = this;
				alert(userInfo)
				if (userInfo.phone != "" && userInfo.verifiyCode != "") {
					alert("验证中。。。")
					_this.registed = true;
					_this.title = "登录";
					/**
					 * 发送接口请求
					 */

				} else {
					if (userInfo.verifiyCode == "") {
						_this.message = "*验证码不能为空！"
					} else if (userInfo.phone == "") {
						_this.message = "*手机号不能为空"
					}
				}

				// 				$.ajax({
				// 					url: Url+'/Api/Interface/register',
				// 					type:'post',
				// 					data:userInfo,
				// 					success:function ({code, msg, data}) {
				// 						if(code==1){		            		
				// 							that.$router.push('/plogin')
				// 						}else{
				// 							mui.toast(msg);
				// //		            		that.$router.push({path:'/login'})
				// 						}
				// 					},
				// 					error:function () {}
				// 				})
			},

			//登录
			login(userInfo) {
				let _this = this;
				console.log(userInfo)
				if (userInfo.phone != "" && userInfo.verifiyCode != "") {
					alert("验证中。。。")
					/**
					 * 发送接口请求
					 */
					alert("登录成功。。。")
					_this.$router.push({
						path: '/index'
					})
				} else {
					if (userInfo.verifiyCode == "") {
						_this.message = "*验证码不能为空！"
					} else if (userInfo.phone == "") {
						_this.message = "*手机号不能为空"
					}
				}

			},

		},
		created() {

			//			this.$store.dispatch("getTitle", "");
		},
		mounted() {


		},
		watch: {

		}

	}
</script>

</script>

<style lang="scss">
	.icon-square {

		border: 1px solid #ccc;
		width: 17px;
		height: 17px;
		display: inline-block;
	}
 
	.agree {
		height: 30px;
		position: relative;
		font-size: 14px;color: #999999;
		a {
			color: #0e5c9a;
			text-decoration: underline;
			letter-spacing: -1px;
		}
		div {
			position: relative;
			display: inline-block;
			width: 100%;

			span {
				display: inline-block;
				position: absolute;
				margin-left: 5px;
				height: 30px;
				line-height: 30px;
				left: 20px;
			}

			input {
				width: 18px;
				height: 18px;
				opacity: 0;
				position: absolute;
				margin-top: 5px;
			}

			i {
				color: #cccccc;
				margin-top: 4px;
			}

			.icon-check {
				margin-left: -22px;
			}
		}

	}

	// dasdada



	$orange: #fe4c40;
	$white: #ffffff;
	$grey: #cccccc;

	.alert {
		color: red;
		font-size: 14px;
		margin: 10px 0;
	}

	.ban {
		color: #cccccc;
		border: 1px solid #cccccc;

	}

	.disban {
		color: $orange;
		border: 1px solid $orange;
	}

	.flolayer {
		background: #ffffff;
		position: absolute;
		top: 0px;
		/* padding: 20px 15px 50px; */
		height: 80%;
		overflow: auto;
		border: 1px solid #ccc;
		width: 100%;
		left: 0;
	}

	.login {
		height: 100vh;
		background: $white !important;
		padding: 94px 25px 0 !important;

		h1 {
			font-size: 36px;
		}

		p {
			font-size: 18px;
			line-height: 14px;
			margin-top: 19px;
			margin-bottom: 50px;
			color: #666666;
		}

		input[type='text'],
		input[type='number'] {
			width: 100%;
			height: 40px;
			border: 0;
			border-bottom: 1px solid #E5E5E5;
			padding: 0;
		}

		input::-webkit-input-placeholder {
			font-size: 16px;
			color: #ccc;
			line-height: 1.0rem;
		}

		input:-ms-input-placeholder {
			font-size: 16px;

			line-height: 1.0rem;

		}

		input:-moz-placeholder {
			font-size: 16px;

			line-height: 1.0rem;

		}

		input::-moz-placeholder {
			font-size: 16px;

			line-height: 1.0rem
		}


		.code {
			margin-top: 10px;
			position: relative;

			.codeButton {
				position: absolute;
				right: 0;
				top: 0;
				height: 100%;

				button {
					font-size: 14px;
					line-height: 26px;
					height: 30px;
					border-radius: 5px;
					margin-top: 0px;
					background: $white;
				}
			}

		}

		.lbtn {
			width: 100%;
			height: 40px;
			border-radius: 5px;
			margin-top: 30px;
			font-size: 15px;
		}

		.longbtn1 {
			background: #cccccc;
			color: $white;
		}

		.longbtn2 {
			background: $orange;
			color: $white;
		}

		.longbtn3 {
			background: $white;
			color: $orange;
			border: 1px solid $orange;
		}


	}
</style>
