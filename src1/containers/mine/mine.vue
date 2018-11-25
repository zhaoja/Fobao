<template>
	<div class="mine">
		<div class="top">
			<router-link to="set/self">
				<img src="../../../static/images/person.png" alt="">
			</router-link>	
			<div>1282828282</div>
		</div>
		<div class="longLines">
			<ul class="line1">
				<li>
					<router-link to="cardapply/p1">
						<i class="icon icon-bell left"></i>
						<lable>系统消息</lable>
						<i class="icon icon-right"></i>
					</router-link>
				</li>
				<li>
					<router-link to="cardapply/p1">
						<i class="icon icon-card left"></i>
						<lable>卡功能介绍</lable>
						<i class="icon icon-right"></i>
					</router-link>
				</li>
				<li>
					<router-link to="set/main">
						<i class="icon icon-set left"></i>
						<lable>版本号</lable>
						<i class="num">3.0.2</i>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {

	}
</script>

<style lang="scss">
.num{color: #999999;    float: right;
    right: 20px;}
</style>
