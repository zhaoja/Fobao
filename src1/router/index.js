import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// 项目组件
import RegistAndLogin from '@/containers/registAndLogin'

import Home from '@/containers/home'
import Mine from '@/containers/mine/mine'
import Set from '@/containers/mine/set'
import SetMain from '@/containers/mine/setMain'
import SetSelf from '@/containers/mine/setSelf'

import Layout from '@/containers/Layout'
import CardApply from '@/containers/govtservice/cardApply'
import CardApply1 from '@/containers/govtservice/cardApply_p1'
import CardApply2 from '@/containers/govtservice/cardApply_p2'
import CardApply3 from '@/containers/govtservice/cardApply_p3'
import CardApply4 from '@/containers/govtservice/cardApply_p4'

 
Vue.use(Router)

export default new Router({
  routes: [
		{
			path: '/',
			name: '目录',
			component: Layout,
			children:[
				{path:"",name:"首页",component:Home},
				{path:"/index",name:"首页",component:Home},
				{path:"/mine",name:"我的",component:Mine}
			]
		},
		{
			path: '/login',
			name: '登录',
			component: RegistAndLogin
		},
		{
			path: '/regist',
			name: '注册',
			component: RegistAndLogin
		},
		{
			path:"/set",
			name:"设置",
			component:Set,
			children:[
				{path:"/set/self",name:"个人设置",component:SetSelf},
				{path:"/set/main",name:"系统设置",component:SetMain},
			]
		},
		{
			path:"/cardapply",
			name:"制卡申请",
			component:CardApply,
			children:[
				{path:"/cardapply/p1",name:"制卡申请1",component:CardApply1},
				{path:"/cardapply/p2",name:"制卡申请2",component:CardApply2},
				{path:"/cardapply/p3",name:"制卡申请3",component:CardApply3},
				{path:"/cardapply/p4",name:"制卡申请4",component:CardApply4},
			]
		}
		
  ]
})
