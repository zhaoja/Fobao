<template>
	<div class="location">
		<div class="search-header">
			<input v-model="value" placeholder="请输入关键字"/> 
			<button @click="search(value)">搜索</button>
		</div>
		<ul class="location-nav">
			<li v-for="(item,index) in btn" v-bind:class="{active:(indexs==index)}" v-on:click="createMap(index)" :key="index">{{item}}</li>
		</ul>

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
				location: state => state.location.location.mapData,
				location1: state => state.location.location.mapData1,
				location2: state => state.location.location.mapData2,
				location3: state => state.location.location.mapData3,
				location4: state => state.location.location.mapData4

			})
		},
		data() {
			return {
				btn: ['全部', '购物类', '服务类', '餐饮类', '其他'],
				indexs: 0,
				value: '',
				lnglat: [116.416202, 39.924363],
				mymap: {},
				myRouter:null,
				walkingRouter: null,
				transferRouter: null,
				ridingRouter: null,
				autoComplete: null
			}
		},
		created() {
			this.getLocation();

		},
		mounted() {
			// this.createMap(0);
			// this.search()
			let _this = this;
			var a = _this.lnglat;
			
			//地图初始化
			this.mymap = new AMap.Map('container', {
				zoom: 11, //级别
				resizeEnable: true,
				center: [this.lnglat[0], this.lnglat[1]], //中心点坐标
			});
			//定位我的位置
			let marker1 = new AMap.Marker({
				map: _this.mymap,
				icon: "http://a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-red.png",
				position: new AMap.LngLat(_this.lnglat[0], _this.lnglat[1]),
			});
			_this.mymap.add(marker1);
			
			

		},
		methods: {
 
			createMap(str) {
				
				this.mymap.clearMap();
				
				let loactionLists;
				
				this.indexs = str;
				
				if (str == 0) {
					loactionLists = this.location
				} else if (str == 1) {
					loactionLists = this.location1
				} else if (str == 2) {
					loactionLists = this.location2
				} else if (str == 3) {
					loactionLists = this.location3
				} else if (str == 4) {
					loactionLists = this.location4
				}

				let _this = this;
				
				var a = _this.lnglat;				

				//画出好多其他点
				var infoWindow = new AMap.InfoWindow({
					offset: new AMap.Pixel(0, -30)
				});
				var mapParam ={ //构造路线导航类
					map: _this.mymap,
					city: '北京市',
					panel: "panel"
				};
				
				if (loactionLists) {
					for (let i = 0, marker; i < loactionLists.length; i++) {
						var marker = new AMap.Marker({
							position: [loactionLists[i].y, loactionLists[i].x],
							map: _this.mymap
						});

						marker.content = loactionLists[i].name +
							'<span style="font-size:11px;color:#3e93fa;float: right;margin-right: 10px;">距离:318Km</span>' +
							"<br>电话:" + loactionLists[i].phone +
							'<br>地址:' + loactionLists[i].location +
							`<div><button class="wkbtn" id="id${i}">步行导航<button>` +
							`<button class="bsbtn" id="idt${i}">公交导航<button></div>`;

						marker.on('click', markerClick);
						marker.emit('click', {
							target: marker
						});
						 
						function markerClick(e) {
							infoWindow.setContent(e.target.content);
							infoWindow.open(_this.mymap, e.target.getPosition());
							 
							setTimeout(function(index) {
								var ids = document.getElementById("id" + i);
								var idts = document.getElementById("idt" + i); 
								var b = [loactionLists[index].y, loactionLists[index].x];
								
								if (ids) {
									ids.onclick = function() {
										// 清除已有的公交导航
										if (_this.transferRouter) {
											_this.transferRouter.clear();
										}
										AMap.service('AMap.Walking', function() { //回调函数
											
											if (!_this.myRouter) {
												_this.myRouter = new AMap.Walking(mapParam);
											}
											_this.myRouter.search(a, b, function(status, result) {})

										})
									}
								};
							 	  
								if (idts) {
									idts.onclick = function() {
										// 清除已有的公导航
										if (_this.myRouter) {
											_this.myRouter.clear();
										}
										if (!_this.transferRouter) {
											_this.transferRouter = new AMap.Transfer(mapParam);
										}										 
										//根据起、终点坐标查询公交换乘路线
										_this.transferRouter.search(new AMap.LngLat(a[0], a[1]), new AMap.LngLat(b[0], b[1]),
										function(status, result) {});
										
									}
								};
							}, 500, i)
						}
						_this.mymap.setFitView();
					}
				}
			},
			search(value) {
				 
				// 获取输入提示信息
			 
				let _this = this;
				var a = _this.lnglat;
				_this.mymap = new AMap.Map('container', {
					resizeEnable: true, //是否监控地图容器尺寸变化
					zoom: 11, //初始地图级别
				});
				var infoWindow = new AMap.InfoWindow({
					offset: new AMap.Pixel(0, -30)
				});
				var keywords = value;
			 
				AMap.plugin('AMap.Autocomplete', function() {
					// 实例化Autocomplete

					_this.autoComplete = new AMap.Autocomplete({
						// city: '全国'
					});
					_this.autoComplete.search(keywords, function(status, result) {
						
						console.log(status,result)
						let loactionLists = result.tips
						if (loactionLists) {
							for (let i = 0, marker; i < loactionLists.length; i++) {
								if(loactionLists[i].location){
								var marker = new AMap.Marker({
									position: [loactionLists[i].location.lng, loactionLists[i].location.lat],
									map: _this.mymap
								});

								marker.content = loactionLists[i].name +
									'<span style="font-size:11px;color:#3e93fa;float: right;margin-right: 10px;">距离:318Km</span>' +
									// "<br>电话:" + loactionLists[i].phone +
									'<br>地址:' + loactionLists[i].address + loactionLists[i].address+
									`<div><button class="wkbtn" id="id${i}" onclick='(${_this.walkrouter})()'>步行导航<button>` +
									`<button class="bsbtn" id="idt${i}" onclick='(${_this.transferrouter})()'>公交导航<button></div>`;

								marker.on('click', markerClick);
								marker.emit('click', {
									target: marker
								});
								}	
								function markerClick(e) {
									infoWindow.setContent(e.target.content);
									infoWindow.open(_this.mymap, e.target.getPosition());
									setTimeout(function(index) {
										var ids = document.getElementById("id" + i);
										var idts = document.getElementById("idt" + i);
										var idrs = document.getElementById("idr" + i);
										if (ids) {
											ids.onclick = function() {
												if (_this.transferRouter) {
													_this.transferRouter.clear();
												}
												AMap.service('AMap.Walking', function() { //回调函数
													if (!_this.walkingRouter) {
														_this.walkingRouter = new AMap.Walking({ //构造路线导航类
															map: _this.mymap,
															panel: "panel"
														});
													}
													console.log(a)
													var b = [loactionLists[index].y, loactionLists[index].x];

													_this.walkingRouter.search(a, b, function(status, result) {})
												})
											}
										};
										// 							if (idrs) {

										if (idts) {
											idts.onclick = function() {
												if (!_this.transferRouter) {
													//构造公交换乘类
													_this.transferRouter = new AMap.Transfer({
														map: _this.mymap,
														city: '北京市',
														panel: 'panel',
													});
												}
												var b = [loactionLists[index].y, loactionLists[index].x];
												//根据起、终点坐标查询公交换乘路线
												_this.transferRouter.search(new AMap.LngLat(a[0], a[1]), new AMap.LngLat(b[0], b[1]),
													function(status, result) {
														if (status === 'complete') {
															log.success('绘制公交路线完成')
														} else {
															log.error('公交路线数据查询失败' + result)
														}
													});
											}
										};
									}, 500, i)
								}
								_this.mymap.setFitView();
							}
						}
 
					})
				})
 
			},
			//条件组
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



		}
	}
</script>

<style lang="scss">
	.location {
		.location-nav {
			height: 40px;
			line-height: 40px;
			display: flex;
			background:#ffffff;
			li {
				flex: 1;
				text-align: center;
			}

			.active {
				color: #fe4c40;
			}
			 
		}
	}

	.search-header {
		background-color: #fe4c40;
		height: 65px;
		display: flex;
		input{
			flex: 1;
			height: 30px;
			border-radius: 15px;
			background-color: #ffffff;
			margin-top: 27px;
			margin-left: 15px;
			padding: 0 15px;
		}
		button{
			margin-top: 34px;
			width: 50px;
			height: 16px;
			font-size: 17px;
			line-height: 10px;
			color: #ffffff;
			background:#fe4c40;
		}
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

	.amap-icon img {
		width: 15px;
		height: 20px;
		margin-left: 2px;
		
	}

	.wkbtn,
	.rdbtn,
	.bsbtn {
		color: #fff;
		margin-right: 5px;
		font-size: 16px;
		padding: 3px 5px;
	}

	.wkbtn {
		background: #3891f7;
	}

	.rdbtn {
		background: #33b166;
	}

	.bsbtn {
		background: #d66969;
	}

	.btn-group {
		width: 50%;
		margin: 0 auto;
	}





	/* 	#panel {
				position: fixed;
				background-color: white;
				max-height: 90%;
				overflow-y: auto;
				top: 10px;
				right: 10px;
				width: 280px;
		}
		#panel .amap-call {
				background-color: #009cf9;
				border-top-left-radius: 4px;
				border-top-right-radius: 4px;
		}
		#panel .amap-lib-walking {
			border-bottom-left-radius: 4px;
				border-bottom-right-radius: 4px;
				overflow: hidden;
		} */
</style>
