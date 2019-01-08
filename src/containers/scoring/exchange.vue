<template>
	<div class="mine set">
		<ul class="scoreList">
			<li v-for="li in systemInfoList">
				<i class="icon-m icon-m9"></i>
				<!--<router-link to="orderMesDt">
					领取
				</router-link>-->
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
			}
		}
	}
</script>