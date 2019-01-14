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
				<li>
					<label>收货地址</label>
					北京市- XX区
					<i class="icon icon-right"></i>
					<!--<input type="text" :value="userInfo.name" placeholder="	请输入收货地址"/>-->
				</li>
				<li>
					<label> </label>
					<input type="text"   placeholder="请输入门牌号"/>	
					<mt-picker  ref="picker" :slots="slots" @change="onValuesChange"></mt-picker>
			
					<!--<input type="text" :value="userInfo.name" placeholder="	请输入收货地址"/>-->
				</li>
				<li>
					<label>是否设为默认地址</label> 
		 			<mt-switch v-model="value" @change="changeSwitch(value)">{{value}}</mt-switch>
					<!--此处执行了四遍不知为啥-->
				</li>
			</ul>
		</div>

	</div>
 		
 </template>
 
<script>
	import { mapState } from 'vuex'
 	import { Switch } from 'mint-ui';

 	export default {
		components: {
			 
		},
		data() {
			return {
			 value:false,
			 slots: [
		        {
		          flex: 1,
		          values: [
  '东城区','西城区','朝阳区','崇文区','海淀区','宣武区','石景山区','门头沟区','丰台区','房山区','大兴区','通州区','顺义区','平谷区','昌平区','怀柔区和延庆县','密云县'
		          ],
		          className: 'slot1',
		          textAlign: 'center'
		        } 
		      ]
			}
		},
		computed: {
			...mapState({
//				adressInfoList: state => state.adress.adressInfo.list,
				userInfo: state => state.user.user.userInfo,
			})
		},
		mounted() {
			 

		},
		 
		methods: {
			changeSwitch(a){
				console.log(1)
				this.value = !a
			},
		 	onValuesChange(picker, values) {
		 		console.log(picker, values)
//		      if (values[0] > values[1]) {
//		        picker.setSlotValue(1, values[0]);
//		      }
		    },
	     	openPicker() {
		        this.$refs.picker.open();
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
	.set .add {
		text-align: center;
		position: absolute;
		bottom: 50px;
		width: 100%;
	}
	.set button{	
        width: 275px;
        height: 40px;
        border-radius: 20px;
        background: transparent;
        border: 1px solid #fe4c40;
        color: #fe4c40;
    } 
</style>