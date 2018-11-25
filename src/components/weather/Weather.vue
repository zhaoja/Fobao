<template>
		<div class="weather">
 					今日气温{{forecast.low}}
					~{{forecast.high}}℃
					<span>{{forecast.weather}}</span>
					当前 <span>{{forecast.temp}} </span>℃
					<!-- {{forecast.text}} -->
					<!-- <span>{{forecast.temp}}℃</span> -->
		   <!-- <img src="http://l.yimg.com/a/i/us/we/52/26.gif"/> -->
		</div>
 </template>

<script>
	export default {
		data() {
			return {
				forecast:{
					temp: 0 ,
					text: '' ,
					weather:'', 
					high: 0 ,
					low: 0 , 
				},
				city:"北京"
			};
		},
		mounted() {
			var city = this.city;
			var url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22"+city+"%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
			var _this = this;
			let postData = {
// 			　　companyCode:'tur',
// 			　　userName:'123456789123456789',
// 			　　password:'123456'
			}
			//get请求
			this.$http.get(url ,
			{
// 			　　params: {
// 			　　　　...postData,
// 			　　}
			})
			.then(function (response) {
				var wea = response.data.query.results.channel
				var weatherCN = {
					'Showers':'阵雨',
					'Breezy':'微风',
					'Partly Cloudy':'部分多云',
					'Sunny':'晴',
					'Mostly Sunny':'晴有时多云',
					'Scattered Showers':'零散骤雨',
					'Rain':'雨',
					'Cloudy':'多云',
					'Snow Showers':'阵雪',
					'Mostly Cloudy':'多云',
					'Thunderstorms':'雷暴'
				}; 
				var weatherIMG = {
					'Showers':'a2',
					'Breezy':'b2',
					'Partly Cloudy':'a3',
					'Sunny':'a1',
					'Mostly Sunny':'a3',
					'Scattered Showers':'b3',
					'Rain':'b4',
					'Cloudy':'c3',
					'Snow Showers':'d3',
					'Mostly Cloudy':'a3',
					'Thunderstorms':'a4'
				};  
				var todayWea = wea.item.forecast[0]; 
				//摄氏度(℃)=（华氏度(℉)-32）÷1.8
				_this.forecast = {
					temp: Math.round((wea.item.condition.temp-32)/1.8) ,
					text: weatherCN[wea.item.condition.text] ,
					weather: weatherCN[todayWea.text] , 
					high: Math.round((todayWea.high-32)/1.8) ,
					low: Math.round((todayWea.low-32)/1.8)  
				} 
			})
			.catch(function (error) {
				console.log(error);
			}); 
 
 
		}
	}
</script>

<style>

.wea_img {height: 150px;width: 100%;
/*background-image: url(2.png);*/
margin-bottom: 13px;}
.a1 {background-position: 58px -12px}
.a2 {background-position: -132px -12px}
.a3 {background-position: -319px -12px}
.a4 {background-position: -502px -12px}
.b1 {background-position: 58px -182px}
.b2 {background-position: -132px -182px}
.b3 {background-position: -319px -182px}
.b4 {background-position: -502px -182px}
.c1 {background-position: 58px -357px}
.c2 {background-position: -132px -357px}
.c3 {background-position: -319px -357px}
.c4 {background-position: -502px -357px}
.d1 {background-position: 58px -539px}
.d2 {background-position: -132px -539px}
.d3 {background-position: -319px -539px}
.d4 {background-position: -502px -539px}
 
</style>
