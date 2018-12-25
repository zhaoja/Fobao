<template>
	<div>
		<div class="search-header">
			<!-- <mt-search v-model="value"
			  cancel-text="搜索"
			  placeholder="搜索"></mt-search> -->
		</div>
		<div id="container"></div>
		<div id="panel"></div>
	</div>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	export default {


		computed: {
			...mapState({
				location: state => state.location.location.mapData

			})
		},
		data() {
			return {
				value: '',
				lat: 116.397428, //纬度 
				lag: 39.90923, //经度 
				lnglat: [116.473188, 39.993253],
				map:{},
				walkingRouter:null
			}
		},
		created() {
			this.getLocation();
		},
		mounted() {

			this.createMap();
			 
// 			//关闭信息窗体
// 			function closeInfoWindow() {
// 				map.clearInfoWindow();
// 			}

		},
		methods: {
			
			createMap(){
				let _this = this;
				//当前位置的坐标点
				this.map = new AMap.Map('container', {
					zoom: 11, //级别
					resizeEnable:true,
					// center: [this.lat, this.lag], //中心点坐标
				});
				//定位我的位置
				let marker1 = new AMap.Marker({
					map: _this.map,
					icon: "http://a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-red.png",
					position: new AMap.LngLat(_this.lat, _this.lag),
					 
				});
				_this.map.add(marker1);
				
				
				//画出好多其他点
				let loactionLists = this.location;
				var infoWindow = new AMap.InfoWindow({
					offset: new AMap.Pixel(0, -30)
				});
				for (let i = 0, marker; i < loactionLists.length; i++) {
					var marker = new AMap.Marker({
						position: [loactionLists[i].y, loactionLists[i].x],
						map: _this.map
					});

					marker.content = loactionLists[i].name +
						'<span style="font-size:11px;color:#3e93fa;float: right;margin-right: 10px;">距离:318Km</span>' +
						"<br>电话:" + loactionLists[i].phone +
						'<br>地址:' + loactionLists[i].location +
						`<button id="id${i}" onclick='(${_this.walkrouter})()'>路线<button>`;

					marker.on('click', markerClick);
					marker.emit('click', {
						target: marker
					});
					var a = _this.lnglat;
					
					// console.log(b)
					function markerClick(e) {
						infoWindow.setContent(e.target.content);
						infoWindow.open(_this.map, e.target.getPosition());
						setTimeout(function(index){
							var ids = document.getElementById("id"+i);
							if(ids){
								ids.onclick = function() {
									var mappp = _this.map.getAllOverlays('polyline');
									// _this.map.remove([mappp]);
// 									if(_this.walkingRoute){
// 										_this.walkingRoute.clearMap();
// 										// _this.map.setFitView()
// 										// _this.walkingRoute.clear()
// 									}
									
										// _this.map.setFitView();

									AMap.service('AMap.Walking', function() { //回调函数
										if(!_this.walkingRouter) {
											_this.walkingRouter = new AMap.Walking({ //构造路线导航类
													map: _this.map
											});
										}
										var b = [loactionLists[index].y, loactionLists[index].x];
										// console.log()
									//	_this.walkingRoute.clearMap;
										_this.walkingRouter.search(a,b, function(status, result) {})
									})
								}
							}
							
						},500,i)
					}
					_this.map.setFitView();
				}
				
			},
	 
			
			getLocation() {
				if (navigator.geolocation) {
					navigator.geolocation.getCurrentPosition(this.showPosition, this.showError);
				} else {
					alert("浏览器不支持地理定位。");
				}
			},
			showError(error) {
				switch (error.code) {
					case error.PERMISSION_DENIED:
						alert("定位失败,用户拒绝请求地理定位");
						break;
					case error.POSITION_UNAVAILABLE:
						alert("定位失败,位置信息是不可用");
						break;
					case error.TIMEOUT:
						alert("定位失败,请求获取用户位置超时");
						break;
					case error.UNKNOWN_ERROR:
						alert("定位失败,定位系统失效");
						break;
				}
			},
			showPosition(position) {
				this.lat = position.coords.latitude; //纬度 
				this.lag = position.coords.longitude; //经度 
				alert('纬度:' + lat + ',经度:' + lag);
			},
			aa() {
				return console.log(111)
			}
		}
	}
</script>

<style>
	.search-header {
		background-color: #fe4c40;
		height: 65px;
	}

	#container {
		width: 100%;
		height: 580px;
	}

	.content-window-card {
		position: relative;
		box-shadow: none;
		bottom: 0;
		left: 0;
		width: auto;
		padding: 0;
	}

	.content-window-card p {
		height: 2rem;
	}

	.custom-info {
		border: solid 1px silver;
	}

	div.info-top {
		position: relative;
		background: none repeat scroll 0 0 #F9F9F9;
		border-bottom: 1px solid #CCC;
		border-radius: 5px 5px 0 0;
	}

	div.info-top div {
		display: inline-block;
		color: #333333;
		font-size: 14px;
		font-weight: bold;
		line-height: 31px;
		padding: 0 10px;
	}

	div.info-top img {
		position: absolute;
		top: 10px;
		right: 10px;
		transition-duration: 0.25s;
	}

	div.info-top img:hover {
		box-shadow: 0px 0px 5px #000;
	}

	div.info-middle {
		font-size: 12px;
		padding: 10px 6px;
		line-height: 20px;
	}

	div.info-bottom {
		height: 0px;
		width: 100%;
		clear: both;
		text-align: center;
	}

	div.info-bottom img {
		position: relative;
		z-index: 104;
	}

	span {
		margin-left: 5px;
		font-size: 11px;
	}

	.info-middle img {
		float: left;
		margin-right: 6px;
	}

	.custom-input-card {
		width: 22rem;
	}

	.custom-input-card .btn {
		margin-right: 1rem;
	}

	.custom-input-card .btn:last-child {
		margin-right: 0;
	}

	.info-title {
		color: white;
		font-size: 14px;
		background-color: #25A5F7;
		line-height: 26px;
		padding: 0px 0 0 6px;
		font-weight: lighter;
		letter-spacing: 1px
	}

	.info-content {
		font: 12px Helvetica, 'Hiragino Sans GB', 'Microsoft Yahei', '微软雅黑', Arial;
		padding: 4px;
		color: #666666;
		line-height: 23px;
	}

	.info-content img {
		float: left;
		margin: 3px;
	}

	.amap-info-combo .keyword-input {
		height: 25px;
		border-radius: 2px 0 0 2px;
	}
</style>
