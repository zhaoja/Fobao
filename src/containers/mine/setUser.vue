<template>
	<div class="mine set">

		<div class="longLines">
			<ul class="line2">
				<li>
					<router-link to="head">
						<label>头像</label>
						<img src="../../assets/images/person.png" alt="">
						<i class="icon icon-right"></i>
					</router-link>
				</li>
				<li>
					<router-link :to="{path:'update',name:'修改个人信息' ,params:{name:'name',cname:'姓名'}}">
						<label>姓名</label>
						<span>{{userInfo.name}}</span>
						<i class="icon icon-right"></i>
					</router-link>
				</li>
				<li>
					<router-link :to="{path:'updatephone',name:'修改手机号'}">
						<label>手机号</label>
						<span>{{userInfo.phoneNo}}</span>
						<i class="icon icon-right"></i>
					</router-link>
				</li>
			</ul>
			<ul class="line2">
				<li>
					<router-link :to="{path:'update',name:'修改个人信息' ,params:{name:'idCard',cname:'身份证号'}}">
						<label>身份证号</label>
						<span>{{this.userInfo.idNo == ""?'未认证':'已认证'}}</span>
						<i class="icon icon-right"></i>
					</router-link>
				</li>
				<li>
					<router-link :to="{path:'update',name:'修改个人信息' ,params:{name:'oddCard',cname:'养老助残卡号'}}">
						<label>养老助残卡号</label>
						<span>{{this.userInfo.disabledCard == ""?'未认证':'已认证'}}</span>
						<i class="icon icon-right"></i>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import { mapState } from "vuex";

	export default {
		computed: {
			...mapState({
				userInfo: state => state.user.user.userInfo,
			}),
		},
		created(){
			this.$store.dispatch('getUser');
		},
		data() {
			return {
			 
			}
		},
		mounted() {
			 
		}
	}
</script>

<style lang="scss">

</style>