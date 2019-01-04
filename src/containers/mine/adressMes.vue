<template>
	<div class="mine set">
		<ul class="adressList">
			<li v-for="(li,index) in adressInfoList">
				<div class="listText">
					<div class="title">
						{{li.title}}
						<span class="text1">{{li.time}}</span>
						<span class="btn" v-if="index==0">默认</span>
					</div>
					<div class="text">
						 {{li.text}}
					</div>
				</div>
				<router-link to="orderMesDt">
					<span>编辑</span>
				</router-link>
			</li>
		</ul>
		
		<div class="add">
			<button> + 新建收货地址</button>
		</div>
	</div>
</template>
 
<script>
	import { mapState } from 'vuex'
	export default {
		components: {

		},
		data() {
			return {
			 
			}
		},
		computed: {
			...mapState({
				adressInfoList: state => state.adress.adressInfo.list,
			})
		},
		mounted() {
			 

		},
		 
		methods: {
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