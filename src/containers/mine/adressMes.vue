<template>
	<div class="set">
		
		<ul class="adressList">
			<div class="no-adressList">暂无收获地址</div>
			<li v-for="(li,index) in adressInfoList" v-if="li.id">
				<div class="listText">
					<div class="title">
						{{li.name}}
						<span class="text1">
						{{li.phoneNo}}
						</span>
						<span class="btn" v-if="index==0">默认</span>
					</div>
					<div class="text">
						 {{li.address}}
					</div>
				</div>
				<div class="opration"></div>
				<button @click="adMesDt(li,index)">
					<span class="right">编辑</span>
				</button>
				<button @click="deleteDt(li.id)">
					<span class="left">删除</span>
				</button>
				
			</li>
		</ul>
		
		<div class="add">
			<button @click="adMesDt()" class="submit1" > + 新建收货地址</button>
		</div>
	</div>
</template>
 
<script>
	import { mapState } from 'vuex'
	import { Http } from '@/server/index.js'
	import { MessageBox, Toast } from 'mint-ui';
	import validation from '@/utils/validation.js';
	
	export default {
		 
		data() {
			return {
			 value:""
			}
		},
		created(){
			this.$store.dispatch("getAdress");
		},
		computed: {
			...mapState({
				adressInfoList: state => state.adress.adressInfo.list,
			})
		},
		methods: {
			adMesDt(n,index){
				if (n) {
					//编辑地址
					if(index===0){
						n.isDefaults = "1";
					}else{
						n.isDefaults = "0";
					}
					this.$router.push({path: '/set/adressMesDt' ,name:'编辑地址', params:{"pas":n}})
				}else{
					//添加地址
					this.$router.push({path: '/set/adressMesDt' ,name:'编辑地址'})
				}
			},
			deleteDt(id){
				var param ={
				    "id":id
				 }
				MessageBox.confirm('确定执行此操作？').then( confirmAction => {
					if (confirmAction === 'confirm') {
						Http({url:'/api/address/delAddress' ,data:{param:param}}).then(data => {
							if (data.code === 1) {	
								 	Toast({ message: '删除成功', position: 'bottom'});
								 	//删除成功重新调用调用
								 	this.$store.dispatch("getAdress");
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
			 
		}
	}
</script>
