//import $http from '../utils/http.js';
//import HtmlUtil from '../utils/HtmlUtil.js';
//const url = "http://minsadmin.gksharedmall.com";
//系统system
export default {
	state: {
		systemInfo:{
			list:[
				{title:"系统消息",time:'今天',text:"您于2018年11月5日申请办理的养老助残卡业务... ",status:0},
				{title:"系统消息",time:'2018/11/09',text:"您于2018年11月5日申请办理的养老助残卡业务... ",status:1}
			],
			unread:1
		},
		news:{
			rumorCenter:{
				program:[
					{id:1,cname:'辟谣'} ,
					{id:2,cname:'养老政策'} ,
					{id:3,cname:'舆情'} ,
					{id:4,cname:'老人福利'} 
				],
				programContentList1:{
					type:1,
					list:[
						{id:0,title:"中间断交了几年社保，前期交的社保以后怎么算？这个您需多注意",picUrl:['./static/images/tupian/722x.png'],date:'昨天 ',time:'14:40'},
						{id:1,title:"吃红枣、阿胶能补血吗？营养师：错，别再被这3个养生谣言欺骗了",picUrl:[], date:'星期二',time:'14:40'},
						{id:2,title:"手机经常开关机到底好不好？真相来了",
							picUrl:['./static/images/tupian/422x.png','./static/images/tupian/522x.png','./static/images/tupian/622x.png'],
							date:'星期一',time:'14:40'},
						{id:10,title:"中间断交了几年社保，前期交的社保以后怎么算？这个您需多注意",picUrl:['./static/images/tupian/722x.png'],date:'昨天 ',time:'14:40'},
						{id:11,title:"吃红枣、阿胶能补血吗？营养师：错，别再被这3个养生谣言欺骗了",picUrl:[], date:'星期二',time:'14:40'},
						{id:12,title:"手机经常开关机到底好不好？真相来了",
							picUrl:['./static/images/tupian/422x.png','./static/images/tupian/522x.png','./static/images/tupian/622x.png'],
							date:'星期一',time:'14:40'}
					]
				},
				programContentList2:{
					type:2,
					list:[
						{id:0,title:"中间断交了几年社保中间断交了几年社保",picUrl:['./static/images/tupian/422x.png'],date:'昨天 ',time:'14:40'},
						{id:1,title:"吃红枣、阿胶能补血吗？营养师：错，别再被这3个养生谣言欺骗了",picUrl:[],date:'星期二',time:'14:40'},
						{id:2,title:"手机经常开关机到底好不好？真相来了",picUrl:[],date:'星期一',time:'14:40'},
						{id:10,title:"中间断交了几年社保中间断交了几年社保",picUrl:['./static/images/tupian/422x.png'],date:'昨天 ',time:'14:40'},
						{id:11,title:"吃红枣、阿胶能补血吗？营养师：错，别再被这3个养生谣言欺骗了",picUrl:[],date:'星期二',time:'14:40'},
						{id:12,title:"手机经常开关机到底好不好？真相来了",picUrl:[],date:'星期一',time:'14:40'},
						
					]
				},
				programContentList3:{
					type:3,
					list:[
						{id:0,title:"中间断交了几年社保",picUrl:[],date:'昨天 ',time:'14:40'},
						{id:1,title:"吃红枣、阿胶能补血吗？营养师：错，别再被这3个养生谣言欺骗了",picUrl:['./static/images/tupian/422x.png'],date:'星期二',time:'14:40'},
						{id:2,title:"手机经常开关机到底好不好？真相来了",picUrl:['./static/images/tupian/422x.png'],date:'星期一',time:'14:40'},
						{id:10,title:"中间断交了几年社保",picUrl:[],date:'昨天 ',time:'14:40'},
						{id:11,title:"吃红枣、阿胶能补血吗？营养师：错，别再被这3个养生谣言欺骗了",picUrl:['./static/images/tupian/422x.png'],date:'星期二',time:'14:40'},
						{id:12,title:"手机经常开关机到底好不好？真相来了",picUrl:['./static/images/tupian/422x.png'],date:'星期一',time:'14:40'},
					]
				},
				programContentList4:{
					type:4,
					list:[
						{id:0,title:"中间断交了几年社保",picUrl:[],date:'昨天 ',time:'14:40'},
						{id:1,title:"吃红枣、阿胶能补血吗？营养师：错，别再被这3个养生谣言欺骗了",picUrl:['./static/images/tupian/422x.png'],date:'星期二',time:'14:40'},
						{id:2,title:"手机经常开关机到底好不好？真相来了",picUrl:[],date:'星期一',time:'14:40'},
						{id:10,title:"中间断交了几年社保",picUrl:[],date:'昨天 ',time:'14:40'},
						{id:21,title:"吃红枣、阿胶能补血吗？营养师：错，别再被这3个养生谣言欺骗了",picUrl:['./static/images/tupian/422x.png'],date:'星期二',time:'14:40'},
						{id:12,title:"手机经常开关机到底好不好？真相来了",picUrl:['./static/images/tupian/422x.png'],date:'星期一',time:'14:40'},
					]
				},
				details:{
					id:1,
					title:"中间断交了几年社保，前期交的社保以后怎么算？这个您需多注意",
					pic:"./static/images/tupian/422x.png",
					editor:'小小金融信贷',
					date:"9月25日",
					article:'<p>中间断交了几年社保购买社保是需要有工作单位的，很多人辞职后就失去了工作单位，自然社保也会断交了。在社保断交的时候，大部分人都会不知道怎么做，但有一点是可以肯定，那就是社保不能够断交太久了</p><p>中间断交了几年社保购买社保是需要有工作单位的，很多人辞职后就失去了工作单位，自然社保也会断交了。在社保断交的时候，大部分人都会不知道怎么做，但有一点是可以肯定，那就是社保不能够断交太久了</p>'
				}
			}
			
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