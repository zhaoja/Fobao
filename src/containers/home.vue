<template>
	<div class="home">

		<!--<a href='doScan' style='margin:10px;   
		 position: absolute;
    z-index: 10;
    right: 0;
    top: 20px;'>扫一扫</a>-->
		<div id="result" style=" "></div>
	
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
					<!--<li v-for="li in serve1_list" :key="li.icon">
						<router-link v-if="li.icon!='icon-m7'&&li.icon!='icon-m8'" :to="{path:'linkPage',name: '外部链接', 
							query: {id:li.id, url: li.url, name:li.name, content:li.content }}"><i class="icon-m" :class="li.icon"></i><span>{{li.name}}</span></router-link>
						<a href="tel:96198" v-if="li.icon=='icon-m7'"><i class="icon-m" :class="li.icon"></i><span>{{li.name}}</span></a>
						<router-link v-if="li.icon=='icon-m8'" to="function"><i class="icon-m" :class="li.icon"></i><span>{{li.name}}</span></router-link>
					</li>-->
					<li v-for="li in serve1_list" :key="li.icon">
						<router-link v-if="li.icon!='icon-m7'&&li.icon!='icon-m8'" :to="{path:'linkPage',name: '外部链接', 
							query: {id:li.id}}"><i class="icon-m" :class="li.icon"></i><span>{{li.name}}</span></router-link>
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
						<router-link to=""><i class="icon-m" :class="li.icon"></i><span>{{li.name}}</span></router-link>
						<!--<router-link :to="{path:'linkPage',name: '外部链接', query: { url: li.url, name:li.name}}"><i class="icon-m" :class="li.icon"></i><span>{{li.name}}</span></router-link>-->
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
					{id:0,name:'制卡申请',icon:'icon-m1',url:'https://fhzx.bjrcb.com/appoint/choosePension.jhtml',content:''},
					{id:1,name:'信息查询',icon:'icon-m2',url:'https://fhzx.bjrcb.com/appoint/queryCardApplyInfo.jhtml',content:''},
					{id:2,name:'信息修改',icon:'icon-m3',url:'https://fhzx.bjrcb.com/appoint/modifyInfo.jhtml',content:''},
					{id:3,name:'照片上传',icon:'icon-m4',url:'https://fhzx.bjrcb.com/appoint/yanglaoImageUpload.jhtml',content:''},
					{id:4,name:'申请撤销',icon:'icon-m5',url:'https://fhzx.bjrcb.com/appoint/applyRepeal.jhtml',content:''},
					{id:5,name:'进度查询',icon:'icon-m6',url:'https://fhzx.bjrcb.com/appoint/cardSchedulQuery.jhtml',content:''},
					{id:6,name:'卡片挂失',icon:'icon-m7',url:''},
					{id:7,name:'功能介绍',icon:'icon-m8',url:''},
				],
				serve2_list:[
					{name:'北京通手机卡',icon:'icon-m9',url:'http://caihong.xi-an.xin/fw/public//?openId=oGhvywUDFK-ROqPAmRuHfRbDhQsw&appid=wx8f75fe4f9587d5fd&param1=&param2=&param3=&param4=&param5=&param6='}
				]
			};
		}
	}
</script>
<style lang="scss">


</style>
