import { Http } from '@/server/index.js'
import { MessageBox , Toast } from 'mint-ui';

var validation = {
	
	// 身份证号正则
	isCardID: (sId) => {
		var iSum = 0;
		var info = "";
		if(!/^\d{17}(\d|x)$/i.test(sId)) return "你输入的身份证长度或格式错误";
		sId = sId.replace(/x$/i, "a");
		if(aCity[parseInt(sId.substr(0, 2))] == null) return "你的身份证地区非法";
		sBirthday = sId.substr(6, 4) + "-" + Number(sId.substr(10, 2)) + "-" + Number(sId.substr(12, 2));
		var d = new Date(sBirthday.replace(/-/g, "/"));
		if(sBirthday != (d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate())) return "身份证上的出生日期非法";
		for(var i = 17; i >= 0; i--) iSum += (Math.pow(2, i) % 11) * parseInt(sId.charAt(17 - i), 11);
		if(iSum % 11 != 1) return "你输入的身份证号非法";
		//aCity[parseInt(sId.substr(0,2))]+","+sBirthday+","+(sId.substr(16,1)%2?"男":"女");//此次还可以判断出输入的身份证号的人性别
		return true;
	},
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
	phoneAndVerificationCode: (phoneNo,VerificationCode)=> {
		Http({url: '/api/getSendcode',data:{
			"param": { 
//				"deviceId": "string",
			    "phoneNo": phoneNo,
			    "sendcode": VerificationCode
		  	}
		}})
        .then(data => {
          	if (data.code === 1) {	
				Toast({ message: '修改成功', position: 'bottom'});
          	}else{
          		Toast({ message: data.desc , position: 'bottom'});
          	}
        }).catch(function (error) {
		    console.log(error);
		});	
	}
}
 
 
 
export default validation