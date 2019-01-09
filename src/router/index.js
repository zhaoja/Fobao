import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// 项目组件
import Login from '@/containers/login'
import Layout from '@/containers/Layout'
import Status404 from '@/components/Status404'

import Home from '@/containers/home'

import Exchange from '@/containers/scoring/exchange'
import Getdetails from '@/containers/scoring/getdetails'
import WinResults from '@/containers/scoring/winResults'
import ScoreMes from '@/containers/scoring/scoreMes'


import Mine from '@/containers/mine/mine'

import RumorCenter from '@/containers/rumorcenter/rumorCenter'
import RumorDetail from '@/containers/rumorcenter/rumorDetail'

import Set from '@/containers/mine/set'
import AboutFB from '@/containers/mine/aboutFb'

import SysMes from '@/containers/mine/sysMes'
import SysMesDtails from '@/containers/mine/sysMesDtails'
import OrderMes from '@/containers/mine/orderMes'
import OrderMesDtails from '@/containers/mine/orderMesDtails'
import AdressMes from '@/containers/mine/adressMes'
import AdressMesDtails from '@/containers/mine/adressMesDtails'

  
import SetUser from '@/containers/mine/setUser'
import SetUserUpdate from '@/containers/mine/setUserUpdate'
import SetUserHead from '@/containers/mine/setUserHead'
 
// 
import CardApply from '@/containers/govtservice/cardApply'
import CardApply1 from '@/containers/govtservice/cardApply_p1'
import CardApply2 from '@/containers/govtservice/cardApply_p2'
import CardApply3 from '@/containers/govtservice/cardApply_p3'
import CardApply4 from '@/containers/govtservice/cardApply_p4'
import Function from '@/containers/govtservice/function'
import LinkPage from '@/containers/govtservice/linkPage'
// 

import yidong from '@/containers/yidong/moveApp'

//移动定位
import Location from '@/containers/other/location'

Vue.use(Router)

const router = new Router({
	mode: 'history',
  	routes: [
		{path:"*",name:"404",component:Status404},
		{
			path: '/',
//			name: '目录',
			component: Layout,
			children:[
				{path:"",redirect:'/index'},
				{path:"/index",name:"首页",component:Home},
				{path:"/information",name:"资讯",component:RumorCenter },
				{path:"/mine",name:"我的",component:Mine }, 
				{path:"/location",name:"高德地图",component:Location}
			]
		},
		{
			path: '/login',
			name: '登录',
			component: Login
		},
		{
			path:"/scoring",
//			name:"设置",
			component:Set,
			children:[
				{path:"/scoring/exchange",name:"积分兑换",component:Exchange},
				{path:"/scoring/getdetails",name:"领取详情",component:Getdetails},
				
				{path:"/scoring/winresults",name:"中将结果",component:WinResults},
				
			]
		},
		{
			path:"/set",
			name:"设置",
			component:Set,
			children:[
				{path:"/set/user",name:"编辑资料",component:SetUser},
				{path:"/set/update",name:"修改个人信息",component:SetUserUpdate},	
				
				{path:"/set/orderMes",name:"订单管理",component:OrderMes},
				{path:"/set/orderMesDt",name:"订单管理详情",component:OrderMesDtails},

				{path:"/set/adressMes",name:"地址管理",component:AdressMes},
				{path:"/set/adressMesDt",name:"地址管理",component:AdressMesDtails},
				
				{path:"/set/scoreMes",name:"积分兑换记录",component:ScoreMes},
				
				{path:"/set/sysMes",name:"系统消息",component:SysMes},
				{path:"/set/sysMesDt",name:"系统消息详情",component:SysMesDtails},
				{path:"/set/aboutFB",name:"关于福宝",component:AboutFB}
			]    
		}, 
		{path:"/set/head",name:"修改头像",component:SetUserHead},

		{      
			path:"/cardapply",
			// name:"制卡申请",
			component:CardApply,
			children:[
				{path:"/cardapply/p1",name:"制卡申请1",component:CardApply1},
				{path:"/cardapply/p2",name:"制卡申请2",component:CardApply2},
				{path:"/cardapply/p3",name:"制卡申请3",component:CardApply3},
				{path:"/cardapply/p4",name:"制卡申请4",component:CardApply4},
			]
		},
		{      
			path:"/function",
			name:"功能介绍",
			component:Function,
		},
		{      
			path:"/linkPage",
			name:"外部链接",
			component:LinkPage,
			meta: {
				title:"教师详情",
				content: "width=device-width, initial-scale=auto, minimum-scale=0, maximum-scale=10, user-scalable=yes"
			}
		},
		{
			path:"/rumorCenter/rumorDt",
			name:"辟谣详情",
			component:RumorDetail 
		}, 
		{
			path:"/yidong",
			name:"移动H5+",
			component:yidong 
		}
	],
	
	scrollBehavior (to, from, savedPosition) {
			return { x: 0, y: 0 }
	}
})

export default router

