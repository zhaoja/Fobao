// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'

import App from './App'
import router from './router'
import axios from 'axios'
Vue.prototype.$http = axios
import '@/assets/scss/image.scss'

import 'lib-flexible'

import cardApply from './models/cardApply'
import user from './models/user'
import system from './models/system'
import location from './models/location'
/*  eslint-disable no-new */
Vue.use(Vuex)

//mint-ui 地址：http://mint-ui.github.io/docs/#/zh-cn2
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

//处理手机返回键
import Mui from 'vue-awesome-mui';
Vue.use(Mui);

//import "./../static/tab-swiper-master/js/touch.min.js"
//import "./../static/tab-swiper-master/js/tabSwiper.es5.min.js"
import 'swiper/dist/css/swiper.css'

import VueAMap from 'vue-amap';
Vue.use(VueAMap)

 VueAMap.initAMapApiLoader({
  key: '4bbbadeab79ceb71d6310dacb8b5fa16',
  plugin: ['AMap.Scale','AMap.ToolBar','AMap.Geocoder'],
  uiVersion: '1.0.11' // 版本号
});

Vue.config.productionTip = false
 
 
 const store = new Vuex.Store({
   modules: {
     cardApply: cardApply,
     user: user,
     system: system,
		 location:location
 
   }
 })
 //路由跳转后保持在最顶部
 router.beforeEach((to, from, next) => {    
    // chrome
    document.body.scrollTop = 0
    // firefox
    document.documentElement.scrollTop = 0
    // safari
    window.pageYOffset = 0
    next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
	store
})
