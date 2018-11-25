export default {
	state: {
		certificate: {
			name:'佳',
			cardtype:'',
			cardnum:'',
			cardunit:'',
			cardstilldata:'',
			sex:'',
			birth:'',
			huji_area:'',
			huji_street:'',
			huji_community:'', 
			juzhu_area:'',
			juzhu_street:'',
			juzhu_community:'',
			huji_address:'',
			juzhu_address:'',
			zipcode:'',
			phone:'',
			linkman:'',
			linkmanphone:'',
			juzhu_state:'',
			degree:'',
			economysorce:'',
			income:'',
			medicaltype:'',
			selfcare:''
		},
		certificateType:[
			{name:'内地居民身份证',value:''},
			{name:'户口本',value:''},
			{name:'内地居民身份证（军人）',value:''},
			{name:'护照',value:''},
			{name:'港澳台身份证/通行证',value:''}
		]
	},
	actions: {
		cardapplyNext({commit,state}, items) {
			// console.log(items.reg, items.number)
 			
			commit("cardapplyNextSuc",items)
		},
		 
	},
	mutations: {
		cardapplyNextSuc(state,data){
			console.log(data,33)
			state.certificate = data;
		}
	}
}