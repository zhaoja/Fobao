<template>
	<div class="mine">
		<div class="top">
			<button @click="logout()" v-if="logStatus!=0">退出登录</button>
			<img src="../../assets/images/person.png" alt="" />
			<div>{{userInfo.phone}}</div>
			<router-link to="set/user" v-if="logStatus!=0">
				<i class="icon icon-pen"></i>编辑资料
			</router-link>

			<router-link to="login" v-if="logStatus==0">
				登录
			</router-link>
		</div>
		<div class="longLines" style="margin-top: 10px;">
			<ul class="line1">
				<li @click="toSystemMes()">
					<router-link to="set/sysMes">
						<i class="icon icon-bell left"></i>
						<i class="icon-alert" v-if="systemInfoRead"></i>
						<label>系统消息</label>
						<i class="icon icon-right"></i>
					</router-link>
				</li>
				<li>
					<router-link to="set/aboutFB">
						<i class="icon icon-card left"></i>
						<label>关于福宝</label>
						<i class="icon icon-right"></i>
					</router-link>
				</li>
				<li>
					<i class="icon icon-set left"></i>
					<label>版本号</label>
					<i class="num">3.0.2</i>
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
				logStatus: state => state.user.logStatus,
			}),
		},
		data() {
			return {
				...mapState({
					systemInfoRead: state => state.system.systemInfo.unread,
				}),
				logStatusMes: "",
			}
		},
		methods: {
			logout() {
				this.$router.push({
					path: '/login'
				})
			},
			toSystemMes() {
				this.systemInfoRead = 0
			}
		},
		mounted() {
			if(this.logStatus == 0) {
				this.logStatusMes = "登录"
			} else {
				this.logStatusMes = "退出登录"
			}
		}
	}
</script>

<style lang="scss">
	.num {
		color: #999999;
		float: right;
		right: 20px;
	}
</style>