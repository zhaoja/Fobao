<template>
	<div class="mine set">
		<ul class="scoreList">
			<li v-for="li in systemInfoList">
				<img src="../../assets/images/score/sh.png"/><strong>商户名称</strong>
				<hr />
				<ul>
				 	<li><label>彩票号码</label><span>G0457-13125-0050802</span></li>
				 	<li><label>领取时间</label><span>2018-12-2  08:20:15</span></li>
				</ul>	
			</li>
		</ul>
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