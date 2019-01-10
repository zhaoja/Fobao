<template>
	<div class="mine set">
		<Header :topName="topName" />
		<ul class="scoreList">
			<li v-for="li in systemInfoList">
				<img src="../../assets/images/score/sh.png"/><strong>商户名称</strong>
				<div class="inner">
					<div>积分余额  <span>200</span></div>
					<div class="center">彩票数量   <span>2</span></div>
					<div><button class="buny" @click="getLottery()">领取</button></div>
				</div>
				 
			</li>
		</ul>
	</div>   
</template>
<script>
	import { mapState } from 'vuex'
	import Header from '../../components/Header.vue'

	export default {
		components: {
			Header
		},
		data() {
			return {
			  topName:"积分兑换"
			}
		},
		computed: {
			...mapState({
				systemInfoList: state => state.system.systemInfo.list,
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
			},
			getLottery(){
				this.$router.push({
					path: '/scoring/getdetails'
				});
			}
		}
	}
</script>