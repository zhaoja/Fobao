<template>
	<div class="capply">
		<p>输入新号码后，下次可使用新手机号登录。</p>
		<p>当前手机号为：{{userInfo.phoneNo}}</p>
		<ul class="grayb">
			 
			<li>
				<span>手机号: </span>
				<input type="text" placeholder="请输入新手机号" v-model="userInfo.number" />
			</li>
			<li>
				<span>验证码: </span>
				<input type="text" placeholder="请输入验证码" v-model="VerificationCode" />
				<input type="button" value="获取验证码" @click="getVerificationCode()"></input>
			</li>
 
			<li class="alert-inline">
				<label>{{alert}}</label>
			</li>
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
	import '@/utils/validation.js';
 
	export default {
		computed: {
			...mapState({
				userInfo: state => state.user.user.userInfo
			})
		} ,
		  
		data() {
			return {
			 	show:"hidebox",
			 	VerificationCode:'',
			 	alert:'',
				ifshow:false,
			}
		},
 		created(){
			this.$store.dispatch('getUser');
		},
		 
		methods: {
			 
			sendVerificationCode (){
				validation.getVerificationCode("15645054811");				

			},
			certificateChange(a){
				 
				if(a=='内地居民身份证'){
					//判断前三位是不是111，是的话就是北京居民，否则是外地的
					this.ifshow = true
				}else{
					this.ifshow = false
				}
			},
			sendCertificate(a) {
				this.isCardNo(a.number)
				if(this.isCardNo(a.number)==false){
					this.alert="输入不合法";
				}else{
					 
					this.alert="输入不合法";
					
					this.$store.dispatch('cardapplyNext',a);
					this.$router.push({path:'/cardapply/p3'});

				}
				
			},
			isCardNo(card) {
				// 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X 
				var reg = /(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
				if (reg.test(card) === false) {
					console.log("身份证输入不合法")
					return false;
				}
			}


		}
	}
</script>

<style lang="scss">
	.vfcode{
		background: transparent;
		color: #ccc;
	}
	 .alert-inline{
		 // display: inline-block;
		background: #fff !important;
		height: auto !important;
		line-height: 20px !important;
		label{
			color: #ff4a38;
		}
	 }
	 .lineRadio{
		 display:block
	 }
	 .lineRadio input{
		 flex: none !important;
		 width: 20px;
		 margin-left: 22px;
	 }
</style>
