<template>
	<div class="setUpdate">
		<div class="updateInner">
			<input type="text" autofocus="autofocus" v-model="userInfo[$route.params.name]" />
			<div>请输入您的{{$route.params.cname}}，以帮助您获得更多服务。</div>
			<button class="lbtn longbtn2" @click="verification($route.params.name, userInfo)">确定</button>
		</div>
	</div>
</template>

<script>
	import { mapState } from "vuex";
	import { Http } from '@/server/index.js'
	import { MessageBox } from 'mint-ui';
	import validation from '@/utils/validation.js';
 
	export default {
		computed: {
			...mapState({
				userInfo: state => state.user.user.userInfo
			})
		} ,
		created(){
			this.$store.dispatch('getUser');
		},
		mounted() {
			 
		},
		methods:{
			//修改用户信息
			verification(name, param){
				if (name==='idNo') {
					//修改身份证号
				 	var cardID = validation.isCardID(param[name])
					if (cardID===true) {
						this.setUpdate(param)
					} else{
						MessageBox.alert(cardID);
					}
				} else if(name==='disabledCard'){
					//修改养老助残卡号
				 	var disabledCard = validation.ifOddCard(param[name])
					if (disabledCard===true) {
						this.setUpdate(param)
					} else{
						MessageBox.alert(disabledCard);
					}
				} else {
					//修改姓名
					this.setUpdate(param)
				}
			},
			setUpdate(param){
				MessageBox.confirm('确定执行此操作？').then( confirmAction => {
					if (confirmAction === 'confirm') {
						Http({url: '/api/user/editUser',data: {"param":param} })
			            .then(data => {
			              	if (data.code === 1) {	
			              		MessageBox.alert('操作成功').then( alertAction => {
								  	if (alertAction === 'confirm') {
								  		this.$router.push({ path: '/set/user' })
								  	}
								});
			              	}else{
			              		console.log(error);
			              	}
			            }).catch(function (error) {
						    console.log(error);
				  		});					
					} else{
						return false
					}
				});
			}
		},
		
	}
</script>

<style lang="scss">

</style>
