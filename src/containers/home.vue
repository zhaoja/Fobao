<template>
	<div class="home">

		<div class="broadcast">
			<mt-swipe :auto="4000">
				<mt-swipe-item v-for="(sl,index) in swipeList" :key="index">
					<img :src="sl" />
				</mt-swipe-item>
			</mt-swipe>
		</div>
		<div class="message">
			<i class="icon icon-horm"></i>
			<div>
				<Weather />
				<!--<div>
					农历十月初十 宜<span>嫁娶</span> 忌<span>搬迁</span>
				</div>-->
			</div>

		</div>
		<div class="paragraph">
			<div class="title">养老助残卡业务</div>
			<div class="module">
				<ul>
					<li class="line1">
						<ul>
							<li class="big">
								<router-link to="cardapply/p1">
									<div class="module-name">
										<span>制卡申请</span>
										<span>Card Application</span>
									</div>
									<i class="icon icon-card1"></i>
								</router-link>
							</li>
							<li class="big">
								<router-link to="function">
									<div class="module-name">
										<span>功能介绍</span>
										<span>Function introduction</span>
									</div>
									<i class="icon icon-card2"></i>
								</router-link>
							</li>

						</ul>
					</li>
					<li class="line1">
						<ul>
							<li class="small">
								<router-link to="">
									<div class="module-name">
										<span>制卡查询</span>
										<span>Card Query</span>
									</div>
									<i class="icon icon-card3"></i>
								</router-link>
							</li>
							<li class="small">
								<router-link to="">
									<div class="module-name">
										<span>账户查询</span>
										<span>Account Query</span>
									</div>
									<i class="icon icon-card4"></i>
								</router-link>
							</li>
							<li class="small">
								<a href="tel:96198">
									<div class="module-name">
										<span>卡片挂失</span>
										<span>Card Checks</span>
									</div>
									<i class="icon icon-card5"></i>
								 </a> 
							</li>

						</ul>
					</li>
				</ul>

			</div>
		</div>

		<div class="paragraph mt15">
			<div class="title">其他业务</div>
			<div class="body module1">
				<router-link to="phoneCard">
				<!--<a href="http://caihong.xi-an.xin/fw/public//?openId=oGhvywUDFK-ROqPAmRuHfRbDhQsw&appid=wx8f75fe4f9587d5fd&param1=&param2=&param3=&param4=&param5=&param6=">-->
					<div style="margin-bottom: 3px;"><i class="icon icon-move"></i></div>
					北京通手机卡
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	//	function iosScrollBug() {}
	import Weather from '../components/weather/Weather.vue'

	import img1 from '@/../static/images/broadcast/301.jpg'
	import img2 from '@/../static/images/broadcast/311.jpg'
	import img3 from '@/../static/images/broadcast/321.jpg'

	export default {

		components: {
			Weather
		},
		data() {
			return {
				swipeList: [img1, img2, img3]
			};
		}
	}
</script>
<style lang="scss">

</style>
