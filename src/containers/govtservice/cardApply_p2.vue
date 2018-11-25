<template>
	<div class="capply">
		
		<ul class="grayb">
			<p>请注意：线上采集针对<span>60-64</span>岁京籍及常住北京的外埠老年</p>
			 
			<li>
				<span>证件类型: </span>
				<select class="mui-btn mui-btn-block" v-model="certificate.type" @change="certificateChange(certificate.type)">
					<option name="" value="">--请选择--</option>
					<option v-for="item in certificateType" :value="item.name">{{item.name}}</option>
				</select>
			</li>
			<li>
				<span>证件号码: </span>
				<input type="text" placeholder="请填写证件号码" v-model="certificate.number" />
			</li>
			<!-- <li v-if="ifshow" class="lineRadio">
				<input type="radio" name="reg" value="京籍" v-model="certificate.reg" />京籍
				<input type="radio" name="reg" value="外埠" v-model="certificate.reg" />外埠
			</li> -->
			<li class="alert-inline">
				<label>{{alert}}</label>
			</li>
			<li class="mt10">
				<button type="primary" @click="sendCertificate(certificate)">下一步</button>
			</li>
		</ul>

	</div>
</template>

<script>
	import { mapState } from 'vuex'

	export default {
		components: {

		},
		computed: {
			...mapState({
				certificate: state => state.cardApply.certificate,
				certificateType: state => state.cardApply.certificateType
			})
		},
		data() {
			return {
				alert:'',
				ifshow:false,
				
				
			}
		},
		created() {
			 
		},
		methods: {
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
					this.alert="身份证输入不合法";
				}else{
					 
					this.alert="身份证输入不合法";
					
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
