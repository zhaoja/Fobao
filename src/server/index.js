import request from './axios.js'
export function getTest(axiosData) {
	
  var data = {
    url: '',
    method: 'post',
    data: {
    	 "head": {
			    "channel": 1,
			    "token": "MQ=="
			  },
			  param:{}
    }
  }
 
// 合成请求对象
  Object.assign(data, axiosData)
  return request(data)
}