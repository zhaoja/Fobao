<template>
	<div class="home">

		<a href='doScan' style='margin:30px;'>扫描二维码</a>
		<div id="result" style="margin:10px;"></div>
	
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
					<li v-for="li in serve1_list" :key="li.icon">
						<router-link v-if="li.icon!='icon-m7'&&li.icon!='icon-m8'" :to="{path:'linkPage',name: '外部链接', query: { url: li.url, name:li.name  }}"><i class="icon-m" :class="li.icon"></i><span>{{li.name}}</span></router-link>
						<a href="tel:96198" v-if="li.icon=='icon-m7'"><i class="icon-m" :class="li.icon"></i><span>{{li.name}}</span></a>
						<router-link v-if="li.icon=='icon-m8'" to="function"><i class="icon-m" :class="li.icon"></i><span>{{li.name}}</span></router-link>
					</li>
					
				</ul>
			</div>
		</div>

		<div class="paragraph">
			<div class="title">其他业务</div>
			<div class="module">
				<ul>
					<li v-for="li in serve2_list" :key="li.icon">
						<router-link :to="{path:'linkPage',name: '外部链接', query: { url: li.url, name:li.name}}"><i class="icon-m" :class="li.icon"></i><span>{{li.name}}</span></router-link>
					</li>
				</ul>
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
				swipeList: [img1, img2, img3],
				serve1_list:[
					{name:'制卡申请',icon:'icon-m1',url:'https://fhzx.bjrcb.com/appoint/choosePension.jhtml'},
					{name:'信息查询',icon:'icon-m2',url:'https://fhzx.bjrcb.com/appoint/queryCardApplyInfo.jhtml'},
					{name:'信息修改',icon:'icon-m3',url:'https://fhzx.bjrcb.com/appoint/modifyInfo.jhtml'},
					{name:'照片上传',icon:'icon-m4',url:'https://fhzx.bjrcb.com/appoint/yanglaoImageUpload.jhtml'},
					{name:'申请撤销',icon:'icon-m5',url:'https://fhzx.bjrcb.com/appoint/applyRepeal.jhtml'},
					{name:'进度查询',icon:'icon-m6',url:'https://fhzx.bjrcb.com/appoint/cardSchedulQuery.jhtml'},
					{name:'卡片挂失',icon:'icon-m7',url:''},
					{name:'功能介绍',icon:'icon-m8',url:''},
				],
				serve2_list:[
					{name:'北京通手机卡',icon:'icon-m9',url:'http://caihong.xi-an.xin/fw/public//?openId=oGhvywUDFK-ROqPAmRuHfRbDhQsw&appid=wx8f75fe4f9587d5fd&param1=&param2=&param3=&param4=&param5=&param6='}
				]
			};
		}
	}
</script>
<style lang="scss">
	.paragraph{
		margin-top: 10px;
		padding: 15px 0;
		background: #ffffff;
		.title {
			margin-left: 15px;
			border-left: 6px solid #FF4400;
			height: 16px;
			padding-left: 10px;
			line-height: 16px;
			font-size: 16px;
			color: #333333;
		}
		ul{
			display: flex;
			flex-wrap:wrap;
			width: 100%;
			li{
				width: 25%;
				text-align: center;
				a{display: block;}
				span {
					display: inline-block;
					font-size: 14px,
				}
				.icon-m {
					margin-top: 20px;
					
				}
			}
		}
		.icon-m{
			display: inline-block;
			background-size: 220px;
			width: 45px;
			height: 45px;
		}
		.icon-m1{background-position: -5px -5px;}	    
		.icon-m2{background-position: -60px -5px;}	    
		.icon-m3{background-position: -115px -5px;}	    
		.icon-m4{background-position: -170px -5px;}	    
		.icon-m5{background-position: -5px -60px;}	    
		.icon-m6{background-position: -60px -60px;}	    
		.icon-m7{background-position: -115px -60px;}	    
		.icon-m8{background-position: -170px -60px;}	    
		.icon-m9{background-position: -5px -115px;}	    
	}

</style>
