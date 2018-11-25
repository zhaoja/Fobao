<template>
	<div class="mine">
		 
		<div class="longLines">
			<ul class="line2">
				<li>
					<router-link to=" ">
						<lable>头像</lable> 
						<img src="../../../static/images/person.png" alt="">
						<i class="icon icon-right"></i>
					</router-link>
				</li>
				<li>
					<router-link to=" ">
						<lable>姓名</lable> 
						<span>**佳</span>
						<i class="icon icon-right"></i>
					</router-link>
				</li>
				<li>
					<router-link to="/set/main">
						<lable>手机号</lable> 
						<span>1233333</span>
						<i class="icon icon-right"></i>
					</router-link>
				</li>
			</ul>
			<ul class="line2">
				<li>
					<router-link to=" ">
						<lable>身份证号</lable>
						<span>未绑定</span>
						<i class="icon icon-right"></i>
					</router-link>
				</li>
				<li>
					<router-link to=" ">
						<lable>养老助残卡号</lable>
						<span>已绑定</span>
						<i class="icon icon-right"></i>
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
 
</style>
