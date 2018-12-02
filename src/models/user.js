//import $http from '../utils/http.js';
//import HtmlUtil from '../utils/HtmlUtil.js';
//const url = "http://minsadmin.gksharedmall.com";
const url = 'http://aaa.com'
 
//用户注册和登录
export default {
	state: {
		topName:"设置",
		logStatus:1,
		userInfo:{
			phone:"143xxxx0990",	//电话
			verifiyCode:"",	//验证码 
			name:'李宝库',
			idCard:'110786666786765667',
			oddCard:'786678999877665'
			// uid: localStorage.userid,  //用户id
			 
		}
	},
	actions: {
//		newUser({ commit, state },param){
//			alert(2)
//			commit("newUserSuccess", param)
//		}
	},
	mutations: {
//		 newUserSuccess(state, data){
//		 	console.log(data,2)
//		 	state.userInfo = data
////		 	state.userInfo.uid = ndata;
//		 }
	}
	
}