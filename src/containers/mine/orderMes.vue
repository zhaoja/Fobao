<template>
	<div class="mine set">
		<div class="page-loadmore-wrapper sysMesList" ref="wrapper">
			<mt-loadmore  :bottom-method="loadBottom" :bottom-all-loaded="bottomAllLoaded" ref="loadmore" @bottom-status-change="handleBottomChange" :auto-fill="false">
				<ul>
					<li v-for="li in orderInfoList" v-if="li.orderNo">
						<router-link :to="{path:'orderMesDt', query:{orderNo:li.orderNo}}">
							<div class="listIcon">
								<i class="icon-m icon-m-cir-od"></i>
							</div>
							<div class="listText">
								<div class="title">
									{{li.commodityName}}
									<span class="text2">-{{li.payTotalAmount}}</span>
								</div>
								<div class="text">
									{{li.payTime}}
								</div>
							</div>
						</router-link>
					</li>
				</ul>
			</mt-loadmore>
		</div>
	</div>
</template>

<script>
	import { mapState } from 'vuex'

	export default { 
		name: 'app',
		 data() {  
			return {   
				searchKey: {     
					page: 1,
					     limit: 10,
					     tab: 'all',
					     mdrender: true   
				},
			   bottomAllLoaded: false,
			} 
		},
		created() {
			this.$store.dispatch('getOrder', {
				"pageNo": 1,
				"pageSize": this.searchKey.limit
			});
		},
		computed: {
			...mapState({
				orderInfoList: state => state.order.orderInfo.list,
			})
		},
		 methods: {  
			handleBottomChange(status) {    
				this.bottomStatus = status;   
			},
			  loadBottom() {    
				setTimeout(() => {     
					this.searchKey.page++;     
					this.getTopics();     
					this.$refs.loadmore.onBottomLoaded();    
				}, 1000);  
			},
		    getTopics() {
				var params = {
					"pageNo": this.searchKey.page,
					"pageSize": this.searchKey.limit
				}
				this.$store.dispatch('getOrder', params);    
			},
		},

	}
</script>

<style>
	.page-loadmore-wrapper {
		overflow: scroll
	}
</style>