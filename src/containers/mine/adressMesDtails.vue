<template>
	<div class="mine set">
		 <div class="longLines">
			<ul class="line2 mt-line">
				<li>
					<label>收货人姓名</label><input type="text" v-model="adress.name" placeholder="请输入收货人姓名"/>
				</li>
				<li class="radio">
					<mt-radio title="收货人性别" v-model="adress.sex" :options="['男', '女']"> </mt-radio>
				</li>
				<li>
					<label>收货人手机号</label><input type="text" v-model="adress.phoneNo" placeholder="请输入收货人手机号"/>
				</li>
				<li @click="popup()">
					<label>收货地址</label>
					<span>北京市  - {{area}}</span>
					<i class="icon icon-right"></i>
				</li>
				<li>
					<label> </label>
					<input type="text" v-model="detail" placeholder="请输入详细住址"/>	
				</li>
				<li>
					<mt-radio title="是否设为默认" v-model="isDefaults" :options="options"> </mt-radio>
				</li>
			</ul>
		</div>
		<mt-popup v-model="popupVisible" position="bottom">
			<mt-picker ref="picker" :slots="slots" @change="onValuesChange"></mt-picker>
		</mt-popup>
		<button class="submit2" @click="updateAdress(adress)">提交</button>
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
				area:'',
				popupVisible:false,
				options:[
				  {
				    label: '否',
				    value: '0'
				  },{
				    label: '是',
				    value: '1',
				  }
				],
				slots: [{
					flex: 1,
					values: [ '东城区','西城区','朝阳区','崇文区','海淀区','宣武区','石景山区','门头沟区','丰台区','房山区','大兴区','通州区','顺义区','平谷区','昌平区','怀柔区和延庆县','密云县'],
					className: 'slot1',
					textAlign: 'center'
				}],
				detail:'',
				isDefaults:'0'
			}
		},
		computed: {
			...mapState({
				adress: state => state.adress.adressInfo.adress,
			})
		},
		created(){
			this.adOrEd()
		},
		methods: {
			adOrEd(){
				if(this.$route.params.pas){
					//编辑
 					var ads = this.$route.params.pas;
					var adrssArry = this.$route.params.pas.address.split("-");
					this.area = adrssArry[1]
					this.detail = adrssArry[2]
					this.isDefaults = ads.isDefaults
					this.adress.name = ads.name
					this.adress.phoneNo = ads.phoneNo
					this.adress.sex = ads.sex
					this.adress.id = ads.id
					
				}else{
					//添加
   					this.area=""
					this.detail=""
					this.isDefaults = '0'
					this.adress.name = ""
					this.adress.phoneNo = ""
					this.adress.sex = "男"
					this.adress.id = ""
				}
			},
			popup(){
				this.popupVisible = !this.popupVisible;
			},
			changeSwitch(){
 				this.ifDefaultCname = this.ifDefault == true ? "是":"否";
			},
		 	onValuesChange(picker, values) {
				this.area = values[0]
			},
			openPicker() {
				this.$refs.picker.open();
			},
			updateAdress(p){
				
   				//判断是否为空
   				if(!p.name){
   					MessageBox.confirm('请输入您的姓名')
   				} else if(validation.ifPhone(p.phoneNo)!=true){
   					MessageBox.confirm('手机号格式不正确')
   				} else if (!this.area) {
   					MessageBox.confirm('请选择您所在的区')
   				} else if(!this.detail){
   					MessageBox.confirm('请输入您的详细住址')
   				} else{
   					//请求的参数值
	   				var param = {
	   					"id": p.id,
					    "address": `北京市-${this.area}-${this.detail}`,
					    "isDefault": this.isDefaults*1,
					    "name":  p.name,
					    "phoneNo":  p.phoneNo,
					    "sex":  p.sex
				  	}
	   				//
	   				var Url = p.id == ''?'/api/address/addAddress':'/api/address/editAddress';
					MessageBox.confirm('确定执行此操作？').then( confirmAction => {
						if (confirmAction === 'confirm') {
							Http({url: Url ,data:{param:param}}).then(data => {
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
   				}
   				
			},
			
		}
	}
</script>

<style lang="scss">
	
	.mint-popup{
		width: 100%;
	}
	.mt-line {
		.mint-switch{
			position: absolute;
			right: 15px;
		}
		.radio{
			display: flex;
		}
		.mint-radiolist{
			display: flex;
			width: 100%;
		}
		.mint-radiolist-title {
	    	font-size: 16px;
	    	line-height: 34px;
	    }
	 	.mint-cell-title{
 		    height: 50px;
			line-height: 20px;
			width: 60px;
	 	}
 	}
</style>