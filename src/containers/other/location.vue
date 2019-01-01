<template>
	<div class="location">
		<div class="search-header">
			<input v-model="value" placeholder="请输入关键字" />
			<button @click="search(value)">搜索</button>
		</div>
		<ul class="location-nav">
			<li v-for="(item,index) in btn" :class="{active:(indexs==index)}" @click="searchMap(index)" :key="index">{{item}}</li>
		</ul>

		<div id="container"></div>

		<button @click="clearPoint();">清除所有</button>
		<button @click="minePosition();">我的位置</button>
		<div id="panel">
			<div class="nearby" v-for="(lo,ind) in location5" :key="ind" v-if="location5" @click="searchMap1(ind)" :class="{active2:(indexs2==ind)}">
				<img class="pos-img" src="https://webapi.amap.com/theme/v1.3/markers/b/mark_bs.png" alt="">
				<div class="nearname">{{lo.name}} <span>10km</span></div>
				<div class="nearposi">地址：{{lo.location}}</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	import newpoint from '@/assets/images/11.png'

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
				indexs2: null,
				value: '稻香村',
				lnglat: [116.416202, 39.924363],
				mymap: {},
				walkingRouter: null,
				transferRouter: null,
				autoComplete: null,
				geocoder: null,
				freeMarker: null,
				location5: {},

			}
		},
		created() {
			this.getLocation();
			// this.mapClick()
			// this.myPosition(this.lnglat[0], this.lnglat[1])
			
		},
		mounted() {

			let _this = this;
			//地图初始化
			this.mymap = new AMap.Map('container', {
				zoom: 11, //级别
				resizeEnable: true,
				center: [this.lnglat[0], this.lnglat[1]], //中心点坐标
			});
			//比例尺和工具条
			var scale = new AMap.Scale({
					visible: true
			}),
			toolBar = new AMap.ToolBar({
					visible: true
			});
			_this.mymap.addControl(scale);
			_this.mymap.addControl(toolBar);
			
			//调用点击事件
			this.mymap.on('click', this.showInfoClick);


			//默认全部点
			this.searchMap(0);
			this.clickPoint(); //点击地图生成点
		 
		},
		methods: {

			//分类搜索
			searchMap(str) {

				this.clearPanel();
				this.clearPoint();
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
				} else if (str == 5) {
					loactionLists = this.location2
				}
				this.createMap(loactionLists);
			},

			//搜搜下边弹出一条
			searchMap1(str) {

				let loactionLists;

				this.indexs2 = str;

				loactionLists = this.location2

				this.createMap(loactionLists);
			},

			//搜索2
			search(value) {
				this.clearPanel();
				//发送请求
				document.getElementById("panel").style.top = "500px"
				this.location5 = this.location3;
				this.createMap(this.location3);
				this.indexs = null;
			},


			//地理定位
			getLocation() {

				if (navigator.geolocation) {

					navigator.geolocation.getCurrentPosition(this.showPosition, this.showError);
				} else {
					alert("浏览器不支持地理定位。");
				}
			},
			//错误处理
			showError(error) {

				switch (error.code) {
// 					case error.PERMISSION_DENIED:
// 						alert("定位失败,用户拒绝请求地理定位");
// 						break;
// 					case error.POSITION_UNAVAILABLE:
// 						alert("定位失败,位置信息是不可用");
// 						break;
// 					case error.TIMEOUT:
// 						alert("定位失败,请求获取用户位置超时");
// 						break;
// 					case error.UNKNOWN_ERROR:
// 						alert("定位失败,定位系统失效");
// 						break;
				}
			},

			//获取个人定位
			showPosition(position) {
				this.lag = position.coords.longitude; //经度 
				this.lat = position.coords.latitude; //纬度 
				this.myPosition(this.lag, this.lat)
			},

			//绘制我的位置
			myPosition(a, b) {
				console.log(a,b)
				let _this = this;
				//定位我的位置
				let markerMe = new AMap.Marker({
					map: _this.mymap,
					//设置节点属性
					icon: "http://a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-red.png",
					position: new AMap.LngLat(a, b),
				});
				// console.log(markerMe)
				_this.mymap.add(markerMe);

			},

			//绘制路线
			navigation(a, b, index) {

				let _this = this;

				let mapParam = { //构造路线导航类
					map: _this.mymap,
					city: '北京市',
					panel: "panel",
				};

				setTimeout(function(index) {
					var ids = document.getElementById("id" + index);
					var idts = document.getElementById("idt" + index);
					if (ids) {
						ids.onclick = function() {
							_this.clearPanel();
							// 清除已有的公交导航
							if (_this.transferRouter) {
								_this.transferRouter.clear();
							}
							AMap.service('AMap.Walking', function() { //回调函数

								if (!_this.walkingRouter) {
									_this.walkingRouter = new AMap.Walking(mapParam);
								}
								_this.walkingRouter.search(a, b, function(status, result) {
									if (status == 'complete') {
										console.log("路线绘制完成")
									} else {
										if (result == 'OVER_DIRECTION_RANGE') {
											alert("起点终点距离过长，请选择其他出行方式")
										}
									}
								})

							})
						}
					};

					if (idts) {
						idts.onclick = function() {
							_this.clearPanel();
							// 清除已有的公导航
							console.log("进入公交导航")
							if (_this.walkingRouter) {
								_this.walkingRouter.clear();
							}
							if (!_this.transferRouter) {
								_this.transferRouter = new AMap.Transfer(mapParam);
							}
							//根据起、终点坐标查询公交换乘路线

							_this.transferRouter.search(new AMap.LngLat(a[0], a[1]), new AMap.LngLat(b.lng, b.lat),
								function(status, result) {
									if (status === 'complete') {
										log.success('绘制公交路线完成')
									} else {
										log.error('公交路线数据查询失败' + result)
									}
								});
						}
					};
				}, 500, index)
			},

			//地图点击事件
			clickPoint() {
				let _this = this;
				
				_this.mymap.on('click', function(e) {
					_this.clearPoint();
					_this.regeoCode(e.lnglat);
				})
			},

			//绘制点击生成的点
			regeoCode(lnglat) {

				let _this = this;
				
				if (!_this.geocoder) {
					_this.geocoder = new AMap.Geocoder({
						city: "010", //城市设为北京，默认：“全国”
						radius: 1000, //范围，默认：500
					});
				};

				if (!_this.freeMarker) {

					_this.freeMarker = new AMap.Marker({
						icon: newpoint,

					});
					_this.mymap.add(_this.freeMarker);
				}
				_this.freeMarker.setPosition(lnglat);

				_this.geocoder.getAddress(lnglat, function(status, result) {
					if (status === 'complete' && result.regeocode) {
						var address = result.regeocode.formattedAddress;
						//请求数据 要传给后台一个type
						_this.createMap(_this.location1)
					} else {
						alert(JSON.stringify(result))
					}
				});
			},
			
			//使我的位置变成中心
			minePosition(){
				this.mymap.setCenter([this.lag, this.lat]); //设置地图中心点
			},
			
			//清除下边的panel
			clearPanel() {
				this.location5 = {};
				if (this.walkingRouter) {
					this.walkingRouter.clear();
				}
				if (this.transferRouter) {
					this.transferRouter.clear();
				}
			},
			//清除所有点
			clearPoint() {
				this.mymap.clearMap();
				this.freeMarker = null
			},

			//默认检索
			createMap(loactionLists) {

				let _this = this;
				
				let startMarker = _this.lnglat;
				let infoWindow = new AMap.InfoWindow({
					offset: new AMap.Pixel(0, -30)
				});

				AMapUI.loadUI(['overlay/SimpleInfoWindow'], function(SimpleInfoWindow) {

					if (loactionLists) {
						for (let i = 0, marker; i < loactionLists.length; i++) {
							var marker = new AMap.Marker({
								position: [loactionLists[i].y, loactionLists[i].x],
								map: _this.mymap,
							});

							marker.content = loactionLists[i].name +
								'<span style="font-size:11px;color:#3e93fa;float: right;margin-right: 10px;">距离:318Km</span>' +
								"<br>电话:" + loactionLists[i].phone +
								'<br>地址:' + loactionLists[i].location +
								`<div style="margin-top: 5px;"><button class="wkbtn" id="id${i}">步行导航<button>` +
								`<button class="bsbtn" id="idt${i}">公交导航<button></div>`;

							marker.on('click', markerClick);
							//默认打开
							// 							marker.emit('click', {
							// 								target: marker
							// 							});
							
							_this.getLocation(); //重绘我的位置

							function markerClick(e) {
								infoWindow.setContent(e.target.content);
								infoWindow.open(_this.mymap, e.target.getPosition());
								_this.navigation(startMarker, e.target.getPosition(), i)
							}
							_this.mymap.setFitView();
						}
					}
				})
			},
			
			//比例尺
// 			toolBar() {
// 				_this.mymap.plugin(["AMap.ToolBar"], function() {
// 					_this.mymap.addControl(new AMap.ToolBar());
// 				});
// 				if(location.href.indexOf('&guide=1')!==-1){
// 					_this.mymap.setStatus({scrollWheel:false})
// 				}
// 			},
			
			//周边检索
			searchNearBy() {

				let _this = this;

				var search, center = [116.39946, 39.910829];

			},
			//绘制拖动点
			makePicker() {

				let _this = this;

				AMapUI.loadUI(['misc/PositionPicker'], function(PositionPicker) {

					var positionPicker = new PositionPicker({
						mode: 'dragMarker',
						map: _this.mymap,
						iconStyle: { //自定义外观
							url: 'http://webapi.amap.com/ui/1.0/assets/position-picker2.png',
							ancher: [24, 40],
							size: [48, 48]
						}

					});

					positionPicker.marker.on('click', mClick);

					positionPicker.emit('click', {
						target: positionPicker
					});

					function mClick(e) {
						infoWindow.setContent(e.target.content);
						infoWindow.open(_this.mymap, e.target.getPosition());
					}

					positionPicker.on('success', function(positionResult) {
						console.log(positionResult)
						positionPicker.marker.content = positionResult.address;
					});
					positionPicker.on('fail', function(positionResult) {

					});
					//	console.log(_this.mymap.getBounds().getSouthWest())
					positionPicker.start();
					alert(9)
					positionPicker.marker.clear();

				});
			},

		}
	}
</script>

<style lang="scss">
	.amap-copyright,
	.amap-call,
	.amap-logo {
		display: none !important;
	}

	#panel {
		position: absolute;
		background: #ffffff;
		width: 100%;

		// padding-top: 10px;
		.active2 {
			background-color: #f5f5f5;
		}

		.nearby {
			padding: 5px 10px;
			width: 100%;
			border-bottom: 1px solid #f5f5f5;

			.pos-img {
				float: left;
				height: 30px;
				width: 20px;
				margin-right: 10px;
				margin-top: 6px;
			}

			.nearname {
				font-size: 18px;

				span {
					float: right;
				}
			}

			.nearposi {
				font-size: 12px;
				color: #555;
			}
		}
	}
</style>
