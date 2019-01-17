<template>
	<div class="set">
		<div class="order">
			<div class="head">
				<img src="../../assets/images/phonecard.png" width="46px"/>
				<h1 style="margin-top: 5px;">{{orderDetail.commodityName}}</h1>
				<h1><strong>-{{orderDetail.payTotalAmount}}</strong></h1>
			</div>
			<div class="body">
				 <ul>
				 	<li><label>当前状态</label><span>{{statusDic[orderDetail.payStatus]}}</span></li>
				 	<li><label>商品名称</label><span>{{orderDetail.commodityName}}</span></li>
				 	<li><label>支付时间</label><span>{{orderDetail.payTime}}</span></li>
				 	<li><label>支付方式</label><span>{{orderDetail.payChannel}}</span></li>
				 	<li><label>交易单号</label><span>{{orderDetail.orderNo}}</span></li>
				 </ul>
				 <hr />
				  <ul>
				 	<li><label>收件人</label><span>{{orderDetail.addressee}}</span></li>
				 	<li><label>收件地址</label><span>{{orderDetail.addresseeAddress}}</span></li>
				 	<li><label>联系方式</label><span>{{orderDetail.addresseePhone}}</span></li>
				 	<li><label>订单状态</label><span>{{orderDetail.deliveryStatus}}</span></li>
				 </ul>
			</div>
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
			 	statusDic : {
					0: '未支付',
					1: '已支付',
					2: '支付中',
				}
			}
		},
		computed: {
			...mapState({
				orderDetail: state => state.order.orderInfo.orderDetail,
			})
		},
		mounted() {
			 
		},
		created(){
			this.$store.dispatch('getOrderDetail',this.$route.query.orderNo);
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

</style>