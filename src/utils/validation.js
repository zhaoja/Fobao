import { Http } from '@/server/index.js'
import { MessageBox , Toast } from 'mint-ui';

var validation = {
	
	// 身份证号正则
	isCardID: (sId) => {
		var aCity={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江 ",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北 ",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏 ",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外 "};
		var iSum = 0;
		var info = "";
		if(!/^\d{17}(\d|x)$/i.test(sId)) return "你输入的身份证长度或格式错误";
		sId = sId.replace(/x$/i, "a");
		if(aCity[parseInt(sId.substr(0, 2))] == null) return "你的身份证地区非法";
		var sBirthday = sId.substr(6, 4) + "-" + Number(sId.substr(10, 2)) + "-" + Number(sId.substr(12, 2));
		var d = new Date(sBirthday.replace(/-/g, "/"));
		if(sBirthday != (d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate())) return "身份证上的出生日期非法";
		for(var i = 17; i >= 0; i--) iSum += (Math.pow(2, i) % 11) * parseInt(sId.charAt(17 - i), 11);
		if(iSum % 11 != 1) return "你输入的身份证号非法";
		//aCity[parseInt(sId.substr(0,2))]+","+sBirthday+","+(sId.substr(16,1)%2?"男":"女");//此次还可以判断出输入的身份证号的人性别
		return true;
	},
	//养老卡号正则
	ifOddCard:(num)=>{
		var reg = /^[0-9]*$/;
		if (!reg.test(num)) {
			return "请输入数字";
		}else{
			return true;
		}
	},
	//手机号正则
	ifPhone: (phone)=>{
		if(!(/^1[345678]\d{9}$/.test(phone))){ 
	        return "手机号码有误，请重填"; 
	    } else{
			return true;
		}
	},
	//发送手机验证码通用方法
	getVerificationCode: (phoneNo)=> {
		Http({url: '/api/getSendcode',data:{
			"param": { 
				"phoneNo": phoneNo
		  	}
		}})
        .then(data => {
          	if (data.code === 1) {	
				Toast({ message: '验证码已发送到您的手机', position: 'bottom'});
          	}else{
          		Toast({ message: data.desc , position: 'bottom'});
          	}
        }).catch(function (error) {
		    console.log(error);
		});	
	},
	
}
 
 
 
export default validation