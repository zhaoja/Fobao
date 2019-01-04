<template>
	<div class="mine">
		<div class="top">
			<button @click="logout()" v-if="logStatus!=0">退出登录</button>
			<div class="topSelf">
				<div><img src="../../assets/images/person.png" alt="" />{{userInfo.phone}}</div>
				<router-link to="set/user" v-if="logStatus!=0">
					<i class="icon icon-go"></i>
				</router-link>
			</div>
			<div class="topAccont">
				<div v-for="(a,c) in userInfo.accont">
					<span>{{a}} </span> <label>元</label><br />
					{{c}}
				</div>
			</div>
			
			<!--
			<router-link to="login" v-if="logStatus==0">
				登录
			</router-link>-->
		</div>
		<div class="longLines">
			<ul class="line1">
				<li> 	
					<router-link to="set/orderMes">
						<i class="icon-m icon-m-od left"></i>
						<!--<i class="icon-alert" v-if="systemInfoRead"></i>-->
						<label>订单管理</label>
						<i class="icon icon-right"></i>
					</router-link>
				</li>
				<li>
					<router-link to="set/adressMes">
						<i class="icon-m icon-m-ad left"></i>
						<!--<i class="icon-alert" v-if="systemInfoRead"></i>-->
						<label>地址管理</label>
						<i class="icon icon-right"></i>
					</router-link>
				</li>
				<li>
					<router-link to="set/scoreMes">
						<i class="icon-m icon-m-sc left"></i>
						<!--<i class="icon-alert" v-if="systemInfoRead"></i>-->
						<label>积分查询</label>
						<i class="icon icon-right"></i>
					</router-link>
				</li>
				
				<li @click="toSystemMes()" style="margin-top: 10px;">
					<router-link to="set/sysMes">
						<i class="icon-m icon-m-bell left"></i>
						<!--<i class="icon-alert" v-if="systemInfoRead"></i>-->
						<label>系统消息</label>
						<span class="span-alert" v-if="systemInfoRead">{{systemInfoRead}}</span>
						<i class="icon icon-right"></i>
					</router-link>
				</li>
				<li>
					<router-link to="set/aboutFB">
						<i class="icon-m icon-m-card left"></i>
						<label>关于福宝</label>
						<i class="icon icon-right"></i>
					</router-link>
				</li>
				<li>
					<i class="icon-m icon-m-set left"></i>
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
				systemInfoRead: state => state.system.systemInfo.unread,
			}),
		},
		data() {
			return {
//				...mapState({
//					systemInfoRead: state => state.system.systemInfo.unread,
//				}),
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