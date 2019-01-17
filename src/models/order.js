/*
 * 订单
 * order
 */
import { Http } from '../server/index.js'
export default {
	state: {
		orderInfo:{
			list:[{orderNo:"",commodityName:"",payTime:"",payTotalAmount:""}],
			orderDetail:{
				addressee: "",
				addresseeAddress: "",
				addresseePhone: "",
				commodityName: "",
				commodityNum: null,
				deliveryStatus: "",
				orderNo: "",
				payChannel: "",
				payStatus: null,
				payTime: "",
				payTotalAmount: null,
			}
		}
	},
	actions: {
		//获取订单列表
		getOrder({ commit, state},params){
			var param = {
				param: params
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
		getOrderDetail({ commit, state},params){
			var param = {
				param: {
			       "orderNo": params
				}
			}
			Http({url: '/api/order/getOrderDetail', data: param})
            .then(data => {
              	if (data.code === 1) {
			 		commit("getOrderDetailSuccess", data.data)
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
		},
		getOrderDetailSuccess(state, data){
			state.orderInfo.orderDetail = data
		}
	}
	
}