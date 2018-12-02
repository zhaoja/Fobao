<template>
	<div class="setUpdate">
		<div class="updateInner">
			<input type="text" v-model="userInfo.name" v-if="$route.params.name=='name'"/>
			<input type="text" v-model="userInfo.phone" v-if="$route.params.name=='phone'"/>
			<input type="text" v-model="userInfo.idCard" v-if="$route.params.name=='idCard'"/>
			<input type="text" v-model="userInfo.oddCard" v-if="$route.params.name=='oddCard'"/>
			<div>请输入您的{{$route.params.cname}}，以帮助您获得更多实惠。</div>
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
					path: '/set/self'
				})
			}
		}
	}
</script>

<style lang="scss">

</style>
