<template>
	<div class="mine set">
		<ul class="sysMesList">
			<li v-for="li in orderInfoList">
				<router-link to="orderMesDt">
				<div class="listIcon">
					<i class="icon-m icon-m-cir-od"></i>
				</div>
				<div class="listText">
					<div class="title">
						{{li.title}}
						<span class="text2">{{li.text}}</span>
					</div>
					<div class="text">
						 {{li.time}}
					</div>
				</div>
				</router-link>
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
				orderInfoList: state => state.order.orderInfo.list,
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

</style>