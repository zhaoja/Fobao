/*
 * 咨询页面
 * news
 */
import { Http } from '../server/index.js'

export default {
	state: {
		news:{
			rumorCenter:{
				program:[{
						name: '辟谣',
//						mescroll: null,
//						isListInit: false
					},
					{
						name: '养老政策',
//						mescroll: null,
//						isListInit: false
					},
					{
						name: '舆情',
//						mescroll: null,
//						isListInit: false
					},
					{
						name: '老人福利',
//						mescroll: null,
//						isListInit: false
					}
				],
				programContentList1:{
					type:1,
					list:[
						{id:0,title:"辟谣中间断交了几年社保，前期交的社保以后怎么算？这个您需多注意",picUrl:['./static/images/tupian/722x.png'],date:'昨天 ',time:'14:40'},
						{id:1,title:"吃红枣、阿胶能补血吗？营养师：错，别再被这3个养生谣言欺骗了",picUrl:[], date:'星期二',time:'14:40'},
						{id:2,title:"手机经常开关机到底好不好？真相来了",
							picUrl:['./static/images/tupian/422x.png','./static/images/tupian/522x.png','./static/images/tupian/622x.png'],
							date:'星期一',time:'14:40'},
						{id:10,title:"中间断交了几年社保，前期交的社保以后怎么算？这个您需多注意",picUrl:['./static/images/tupian/722x.png'],date:'昨天 ',time:'14:40'},
						{id:11,title:"吃红枣、阿胶能补血吗？营养师：错，别再被这3个养生谣言欺骗了",picUrl:[], date:'星期二',time:'14:40'},
						{id:12,title:"手机经常开关机到底好不好？真相来了",
							picUrl:['./static/images/tupian/422x.png','./static/images/tupian/522x.png','./static/images/tupian/622x.png'],
							date:'星期一',time:'14:40'},
						{id:13,title:"手机经常开关机到底好不好？真相来了",
							picUrl:['./static/images/tupian/422x.png','./static/images/tupian/522x.png','./static/images/tupian/622x.png'],
							date:'星期一',time:'14:40'},
						{id:14,title:"手机经常开关机到底好不好？真相来了",
							picUrl:['./static/images/tupian/422x.png','./static/images/tupian/522x.png','./static/images/tupian/622x.png'],
							date:'星期一',time:'14:40'},
						{id:15,title:"手机经常开关机到底好不好？真相来了",
							picUrl:['./static/images/tupian/422x.png','./static/images/tupian/522x.png','./static/images/tupian/622x.png'],
							date:'星期一',time:'14:40'},
						{id:16,title:"手机经常开关机到底好不好？真相来了",
							picUrl:['./static/images/tupian/422x.png','./static/images/tupian/522x.png','./static/images/tupian/622x.png'],
							date:'星期一',time:'14:40'},
					]
				},
				programContentList2:{
					type:2,
					list:[
						{id:0,title:"养老政策中间断交了几年社保中间断交了几年社保",picUrl:['./static/images/tupian/422x.png'],date:'昨天 ',time:'14:40'},
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
						{id:0,title:"舆情中间断交了几年社保",picUrl:[],date:'昨天 ',time:'14:40'},
						{id:1,title:"吃红枣、阿胶能补血吗？营养师：错，别再被这3个养生谣言欺骗了",picUrl:['./static/images/tupian/422x.png'],date:'星期二',time:'14:40'},
						{id:2,title:"手机经常开关机到底好不好？真相来了",picUrl:['./static/images/tupian/422x.png'],date:'星期一',time:'14:40'},
						{id:10,title:"中间断交了几年社保",picUrl:[],date:'昨天 ',time:'14:40'},
						{id:11,title:"吃红枣、阿胶能补血吗？营养师：错，别再被这3个养生谣言欺骗了",picUrl:['./static/images/tupian/422x.png'],date:'星期二',time:'14:40'},
						{id:12,title:"手机经常开关机到底好不好？真相来了",picUrl:['./static/images/tupian/422x.png'],date:'星期一',time:'14:40'},
					]
				},
				programContentList4:{
					type:4,
					list:[]
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
		getNewsTitle({ commit, state }){
//			var "param" = {
//			    "column": "string",
//			    "columnId": 0,
//			    "pageno": 0,
//			    "pagesize": 0,
//			    "publishend": "",
//			    "publishstart": "2019-01-15T01:22:00.499Z"
//			}'
			Http({url: '/web/information/getcolumn', data: {}})
            .then(data => {
              	if (data.code === 1) {
			 		commit("getNewsTitleSuccess", data.data)
              	}else{
              		console.log()
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
		 getNewsTitleSuccess(state, data){
		 	console.log(data,2)
		 	state.news.rumorCenter.program = data
//		 	state.userInfo.uid = ndata;
		 }
	}
	
}