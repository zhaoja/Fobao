<template>
	<div class="navigation">
		<ul>
			<li>
				<router-link to="index" :class="{active: $route.path.match('index')}">
					<div><i class="icon icon-home"></i></div>
					首页
				</router-link>
			</li>
			<li>
				<router-link to="rumorCenter" :class="{active: $route.path.match('rumorCenter')}">
					<div><i class="icon icon-news"></i></div>
					资讯
				</router-link>
			</li>
			<li @click="toMine()">
				<router-link to="mine" :class="{ active: $route.path.match('mine')}">
					<div>
						<i class="icon icon-mine"></i>
						<i class="icon-alert" v-if="systemInfoRead"></i>
					</div>
					我的
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	import { mapState } from 'vuex'

	export default {
		computed: {

		},

		data() {
			return {
				...mapState({
					systemInfoRead: state => state.system.systemInfo.unread,
				})
			}
		},
		methods: {
			toMine() {
				// console.log(this.systemInfoRead)
				this.systemInfoRead = 0
			}
		}
	}
</script>
<style lang="scss">

</style>