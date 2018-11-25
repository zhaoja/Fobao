<template>
	<div class="mine">

		<div class="longLines">
			<ul class="line2">
				<li>
					<router-link to=" ">
						<label>头像</label>
						<img src="../../assets/images/person.png" alt="">
						<i class="icon icon-right"></i>
					</router-link>
				</li>
				<li>
					<router-link to=" ">
						<label>姓名</label>
						<span>{{userInfo.name}}</span>
						<i class="icon icon-right"></i>
					</router-link>
				</li>
				<li>
					<router-link to="/set/main">
						<label>手机号</label>
						<span>{{userInfo.phone}}</span>
						<i class="icon icon-right"></i>
					</router-link>
				</li>
			</ul>
			<ul class="line2">
				<li>
					<router-link to=" ">
						<label>身份证号</label>
						<span>{{userInfo.idCard}}</span>
						<i class="icon icon-right"></i>
					</router-link>
				</li>
				<li>
					<router-link to=" ">
						<label>养老助残卡号</label>
						<span>{{userInfo.oddCard}}</span>
						<i class="icon icon-right"></i>
					</router-link>
				</li>
			</ul>
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
			}),

		} 
	}
</script>

<style lang="scss">

</style>