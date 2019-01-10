import { getTest } from '../server/index.js'
 
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
		getUser({ commit, state }){
			var param ={
			  "head": {
			    "channel": 1,
			    "token": "MQ=="
			  }
			}
			getTest({url: '/api/user/getUser', data: JSON.stringify(param)})
            .then(data => {
              	if (data.code === 1) {
              		console.log( data.data,3333)
			 		commit("getUserSuccess", data.data)
              	}
            }).catch(function (error) {
			    console.log(error);
		  	});
 
		}
//		newUser({ commit, state },param){
//			alert(2)
//			commit("newUserSuccess", param)
//		}
	},
	mutations: {
		getUserSuccess(state,data){
			state.user.userInfo = data;
		}
//		 newUserSuccess(state, data){
//		 	console.log(data,2)
//		 	state.userInfo = data
////		 	state.userInfo.uid = ndata;
//		 }
	}
	
}