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
/*  eslint-disable no-new */
Vue.use(Vuex)
// 基础滚动
import sliderbasic from '@/components/slider/slider_basic'
// new Vue(sliderbasic) // eslint-disable-line

Vue.config.productionTip = false
 
 
 const store = new Vuex.Store({
   modules: {
     cardApply: cardApply,
     user: user,
 
   }
 })
 
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
	store
})
