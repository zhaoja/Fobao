<template>
	<div class="mine set">
		 <div class="longLines">
			<ul class="line2">
				<li>
					<label>收货人姓名</label><input type="text" :value="userInfo.name" placeholder="	请输入收货人姓名"/>
				</li>
				<li>
					<label>收货人性别</label><input type="text" :value="userInfo.name" placeholder="	请输入收货人性别"/>
				</li>
				<li>
					<label>收货人手机号</label><input type="text" :value="userInfo.name" placeholder="请输入收货人手机号"/>
				</li>
				<li @click="popup()">
					<label>收货地址</label>
					<span>北京市 - {{area}}</span>
					<i class="icon icon-right"></i>
				</li>
				<li>
					<label> </label>
					<input type="text" placeholder="请输入详细住址"/>	
				</li>
				<li>
					<label>是否设为默认地址</label> 
		 			<mt-switch v-model="ifDefault" @change="changeSwitch()">{{ifDefaultCname}}</mt-switch>
				</li>
			</ul>
			
		</div>
		<mt-popup v-model="popupVisible" position="bottom">
					<mt-picker ref="picker" :slots="slots" @change="onValuesChange"></mt-picker>
		</mt-popup>
		
		<button class="submit" type="primary" @click="updateAdress()">提交</button>
	 
	</div>
 		
</template>
 
<script>
	import { mapState } from "vuex";
	import { Http } from '@/server/index.js'
	import { MessageBox, Toast } from 'mint-ui';
	import validation from '@/utils/validation.js';	
 
 	export default {
		components: {
			 
		},
		data() {
			return {
			 ifDefault:false,
			 ifDefaultCname:"否",
			 area:'',
			 popupVisible:false,
			 slots: [
					{
						flex: 1,
						values: [ '东城区','西城区','朝阳区','崇文区','海淀区','宣武区','石景山区','门头沟区','丰台区','房山区','大兴区','通州区','顺义区','平谷区','昌平区','怀柔区和延庆县','密云县'],
						className: 'slot1',
						textAlign: 'center'
					} 
				]
			}
		},
		computed: {
			...mapState({
				adressInfoList: state => state.adress.adressInfo.list,
				sendSuccess: state => state.adress.adressInfo.success,
				userInfo: state => state.user.user.userInfo,
				
			})
		},
		mounted() {
				
		},
		 
		methods: {
			popup(){
				this.popupVisible = !this.popupVisible;
			},
			changeSwitch(){
 				this.ifDefaultCname = this.ifDefault == true ? "是":"否";
			},
		 	onValuesChange(picker, values) {
				this.area = values[0]
		 		//console.log(picker, values)
			},
			openPicker() {
				this.$refs.picker.open();
			},
			updateAdress(){
				var param = ''
				MessageBox.confirm('确定执行此操作？').then( confirmAction => {
					if (confirmAction === 'confirm') {
						Http({url: '/api/user/adddd',data:{
							"param": {
		//					"deviceId": "string",
		// 						"phoneNo": this.userInfo.phoneNo,
		// 						"sendcode": this.VerificationCode
							}
						}}).then(data => {
							if (data.code === 1) {	
								 Toast({ message: '提交成功', position: 'bottom'});
									this.$router.push({ path: '/set/adressMes' })
								}else{
									Toast({ message: data.desc , position: 'bottom'});
								}
							}).catch(function (error) {
							console.log(error,1);
						});	
					} else{
						return false
					}
				});
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

<style scoped="scoped">
	
		.submit {
				background: #FE4C40;
				color: #ffffff;
				border-radius: 4px;
				width: 100%;
				/* margin: 15px; */
				height: 50px;
				line-height: 50px;
		}
		.mint-popup{
			width: 100%;
		}
		.mint-switch{
			position: absolute;
			right: 15px;
		}
</style>