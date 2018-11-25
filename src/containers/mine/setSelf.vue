<template>
	<div class="mine">

		<div class="longLines">
			<ul class="line2">
				<li>
					<router-link to=" ">
						<lable>头像</lable>
						<img src="../../assets/images/person.png" alt="">
						<i class="icon icon-right"></i>
					</router-link>
				</li>
				<li>
					<router-link to=" ">
						<lable>姓名</lable>
						<span>{{userInfo.name}}</span>
						<i class="icon icon-right"></i>
					</router-link>
				</li>
				<li>
					<router-link to="/set/main">
						<lable>手机号</lable>
						<span>{{userInfo.phone}}</span>
						<i class="icon icon-right"></i>
					</router-link>
				</li>
			</ul>
			<ul class="line2">
				<li>
					<router-link to=" ">
						<lable>身份证号</lable>
						<span>{{userInfo.idCard}}</span>
						<i class="icon icon-right"></i>
					</router-link>
				</li>
				<li>
					<router-link to=" ">
						<lable>养老助残卡号</lable>
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