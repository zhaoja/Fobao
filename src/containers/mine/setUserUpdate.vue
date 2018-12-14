<template>
	<div class="setUpdate">
		<div class="updateInner">
			<input v-focus type="text" autofocus="autofocus" v-model="userInfo[$route.params.name]" />
			<div>请输入您的{{$route.params.cname}}，以帮助您获得更多服务。</div>
			<button class="lbtn longbtn2" @click="setUpdate(userInfo)">确定</button>
		</div>
	</div>
</template>

<script>
	import {
		mapState
	} from "vuex";

	export default {
		computed: {
			...mapState({
				userInfo: state => state.user.userInfo,
			})
		} ,
		mounted() {
			 
		},
		methods:{
			setUpdate(a){
				console.log(a);
				this.$router.push({
					path: '/set/user'
				})
			}
		},
		diretives: {
			focus: {
				inserted(el){
					el.focus()
				}
			}
		}
	}
</script>

<style lang="scss">

</style>
