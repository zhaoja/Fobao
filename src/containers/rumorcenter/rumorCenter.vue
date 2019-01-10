<template>
	<div class="news">
		<Header :topName="topName" />
		<MescrollSwiperNav 
			:newsprogram="program" 
			:newslist1="list1" 
			:newslist2="list2" 
			:newslist3="list3" 
			:newslist4="list4" 
			/>
	</div>
</template>

<script type="text/javascript">
	import { mapState } from 'vuex'
	import MescrollSwiperNav from '../../components/mescroll-master/vue-demo/src/pages/home2'
 	import Header from '../../components/Header.vue'
 	
	export default {
			components: {
				Header,MescrollSwiperNav
			},
			computed: {
				...mapState({
					program: state => state.system.news.rumorCenter.program,
					list1: state => state.system.news.rumorCenter.programContentList1,
					list2: state => state.system.news.rumorCenter.programContentList2,
					list3: state => state.system.news.rumorCenter.programContentList3,
					list4: state => state.system.news.rumorCenter.programContentList4,
				})
			},
			data(){
				return{
					topName: "资讯",
				}
			}
	}
</script>
			
<style>
</style>