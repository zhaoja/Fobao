<template>
	<div class="mine set">
		<ul class="sysMesList">
			<li v-for="li in systemInfoList">
				<router-link to="orderMesDt">
				<div class="listIcon">
					<i class="icon" :class="li.status==0?'icon-bgbell-red':'icon-bgbell'"></i>
				</div>
				<div class="listText">
					<div class="title">
						{{li.title}}
						<span class="text1">{{li.time}}</span>
					</div>
					<div class="text">
						 {{li.text}}
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


<style>

</style>