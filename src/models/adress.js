//import $http from '../utils/http.js';
//import HtmlUtil from '../utils/HtmlUtil.js';
//const url = "http://minsadmin.gksharedmall.com";
//系统system
export default {
	state: {
		adressInfo:{
			list:[
				{title:"王一民",time:'18010422849',text:"北京市丰台区西局后街兴隆小区1号楼2单元302",status:0},
				{title:"王一民",time:'18010422849',text:"北京市丰台区西局后街兴隆小区1号楼2单元302",status:0},
				{title:"王一民",time:'18010422849',text:"北京市丰台区西局后街兴隆小区1号楼2单元302",status:0},
			],
		},
	},
	actions: {
		UpdateAdress({ commit, state },param){
			// alert(2)
			// commit("UpdateAdressSuccess", param)
			
			
		}
	},
	mutations: {
		UpdateAdressSuccess(state, data){
		 	// console.log(data,2)
// 		 	state.adressInfo.list = data
// 		 	state.adressInfo.success = 2
//		 	state.userInfo.uid = ndata;
		}
	}
	
}