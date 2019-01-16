/*
 * 订单
 * order
 */
import { Http } from '../server/index.js'
export default {
	state: {
		orderInfo:{
			list:[
				{title:"北京通手机卡",time:"2018年12月25日 08:20",text:"-15.00"},
				{title:"北京通手机卡",time:"2018年12月25日 08:20",text:"-15.00"}
			],
		}
	},
	actions: {
		//获取订单列表
		getOrder({ commit, state},param){
			var param = {
				param: {
				    "pageNo": 1,
				    "pageSize": 100
				}
			}
			Http({url: '/api/order/getOrders', data: param})
            .then(data => {
              	if (data.code === 1) {
			 		commit("getOrderSuccess", data.data.list)
              	}
            }).catch(function (error) {
			    console.log(error);
		  	});
		},
//		newUser({ commit, state },param){
//			alert(2)
//			commit("newUserSuccess", param)
//		}
	},
	mutations: {
		 getOrderSuccess(state, data){
		 	state.orderInfo.list = data
		 }
	}
	
}