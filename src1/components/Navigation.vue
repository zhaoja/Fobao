<template>
	<div class="nav">
		<ul>
			<li>
				<router-link to="index" :class="{active: $route.path.match('index')}">
					<div><i class="icon icon-home"></i></div>
					首页
				</router-link>
			</li>
			<li>
				<router-link to="mine" :class="{ active: $route.path.match('mine')}">
					<div><i class="icon icon-mine"></i></div>
					我的
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		
		methods:{
			  
		}
	}
</script>
<style lang="scss">
	 
</style>

