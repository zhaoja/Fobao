/*
 * 地址管理
 * adress
 */
import { Http } from '../server/index.js'
//系统system
export default {
	state: {
		adressInfo:{
			list:[{
				address: "",
				id: "",
				name: "",
				phoneNo: "",
				sex: "男",
			}],
			adress:{
				address: "",
				id: "",
				name: "",
				phoneNo: "",
				sex: "男",
				isDefault: '0',
			}
		},
	},
	actions: {
		getAdress({ commit, state }){
			Http({url: '/api/address/getAddress', data: {}})
            .then(data => {
              	if (data.code === 1) {
			 		commit("getAdressSuccess", data.data)
              	}else{
              		console.log(data.desc)
              	}
            }).catch(function (error) {
			    console.log(error);
		  	});		 
		},
		//新增地址
		addAdress({ commit, state },param){
			Http({url: '/api/address/addAddress', data: param})
            .then(data => {
              	if (data.code === 1) {
              		console.log(data.data)
			 		commit("addAdressSuccess", data.data)
              	}else{
              		console.log()
              	}
            }).catch(function (error) {
			    console.log(error);
		  	});	
			// alert(2)
			// commit("UpdateAdressSuccess", param)
		},
		updateAdress({ commit, state },param){
			// alert(2)
			// commit("UpdateAdressSuccess", param)
		}
	},
	mutations: {
		getAdressSuccess(state, data){
   		 	state.adressInfo.list = data
// 		 	state.adressInfo.success = 2
//		 	state.userInfo.uid = ndata;
		},
		addAdressSuccess(state, data){
   		 	state.adressInfo.list = data
		},
	}
	
}