import { Http } from '../server/index.js'
 
//用户注册和登录
export default {
	state: {
		user:{
			topName:"设置",
			logStatus:1,
			userInfo:{
	//			verifiyCode:"",	//验证码  
			// uid: localStorage.userid,  //用户id
				disabledCard: "",
				headUrl: "",
				idNo: "",
				name: "",
				phoneNo: "",
	//			accont:{
	//				"金融账户":79,
	//				"老年券":86,
	//				"失能券":40,
	//				"福彩中奖账户": 100
	//			}
				 
			}
		}
	},
	actions: {
		//获取用户基本信息
		getUser({ commit, state }){
			 
			Http({url: '/api/user/getUser', data: {}})
            .then(data => {
              	if (data.code === 1) {
			 		commit("getUserSuccess", data.data)
              	}
            }).catch(function (error) {
			    console.log(error);
		  	});
		},
		//编辑用户信息
//		updateUser({commit, state}, param ){
//			 
//			
//		}
//		newUser({ commit, state },param){
//			alert(2)
//			commit("newUserSuccess", param)
//		}
	},
	mutations: {
		getUserSuccess(state,data){
			state.user.userInfo = data;
		},
//		updateUserSuccess(state, data){
//		 	console.log(data,2)
////		 	state.userInfo = data
////		 	state.userInfo.uid = ndata;
//		}
	}
	
}