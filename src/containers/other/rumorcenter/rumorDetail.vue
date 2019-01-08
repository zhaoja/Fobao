<template>
	<div class="news">
		<Header :topName="topName" />
		<div class="details">
			<h2>{{details.title}}</h2>
			<div>
				 
				<img class="editorImg" :src="details.pic" alt="">
				 
				<div>
					<div class="editor">{{details.editor}}</div>
					<div class="time">{{details.date}}</div>
				</div>
			</div>
			<div class="article" v-html="details.article">
				
			</div>
			
		</div>
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	import Header from '../../components/Header.vue'

	export default {
		computed: {
			...mapState({
				details: state => state.system.news.rumorCenter.details,
			})
		},
		components: {
			Header
		},
		data() {
			return {
				topName:'详情' 
 			};
		},
		munted(){
			 
 		},
		methods:{
			  
		}
	};
</script>

<style lang="scss" >

	.list1 {
		.title {
			float: left;
		    width: calc(65% - 15px);
		}
	}
	.picList0 {}
	.picList1 {
		float: right;
		width: 33%;
		img {
			width: 100%;
		}
	}
	.picList3 {
		float: right;
		width: 100%;
		margin: 15px 0;
		img {
			float: left;
			width: calc(33% - 3px);
			margin-left: 1px;
			margin-right: 2px;
		}
	}
 	/*.item {
		display: inline-block;
	}
	
	.nav {
		padding: 10px;
	}
	
	.link {
		color: inherit;
		padding: 20px;
		display: block;
	}*/
</style>