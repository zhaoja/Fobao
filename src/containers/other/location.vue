<template>
	<div>
		<div id="container"></div>
 	</div>
</template>

<script>
	export default {
		data() {
			return {
				lat: 116.397428, //纬度 
				lag: 39.90923, //经度 
				lnglat: [116.473188, 39.993253]
			}
		},
		created() {
			this.getLocation();

		},
		mounted() {
			let map = new AMap.Map('container', {
				zoom: 11, //级别
				center: [this.lat, this.lag], //中心点坐标
				viewMode: '3D', //使用3D视图
			});
			let marker1 = new AMap.Marker({
				icon: "http://a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-red.png",
				position: [this.lat, this.lag]
			});
			map.add(marker1);
	
			//路线规划窗体
		  	let infowindow1 = new AMap.AdvancedInfoWindow({
		        offset: new AMap.Pixel(0, -30)
		    });
			infowindow1.open(map, [116.473188, 39.993253])

     		    
			//鼠标点击marker弹出自定义的信息窗体
			AMap.event.addListener(marker1, 'click', function() {
				infoWindow.open(map, marker1.getPosition());
			});
			//实例化信息窗体
			var title = '方恒假日酒店<span style="font-size:11px;color:#F00;">价格:318</span>',
				content = [];
				content.push("<img src='http://tpc.googlesyndication.com/simgad/5843493769827749134'>地址：北京市朝阳区阜通东大街6号院3号楼东北8.3公里");
				content.push("电话：010-64733333");
				content.push("<a href='https://ditu.amap.com/detail/B000A8URXB?citycode=110105'>详细信息</a>");
			var infoWindow = new AMap.InfoWindow({
				isCustom: true, //使用自定义窗体
				content: createInfoWindow(title, content.join("<br/>")),
				offset: new AMap.Pixel(16, -45)
			});
			
 
		    var marker3 = new AMap.Marker({
		        position: lnglat
		    });
		    marker3.setMap(map);
		 
			//构建自定义信息窗体
			function createInfoWindow(title, content) {
				var info = document.createElement("div");
				info.className = "custom-info input-card content-window-card";

				//可以通过下面的方式修改自定义窗体的宽高
				//info.style.width = "400px";
				// 定义顶部标题
				var top = document.createElement("div");
				var titleD = document.createElement("div");
				var closeX = document.createElement("img");
				top.className = "info-top";
				titleD.innerHTML = title;
				closeX.src = "https://webapi.amap.com/images/close2.gif";
				closeX.onclick = closeInfoWindow;

				top.appendChild(titleD);
				top.appendChild(closeX);
				info.appendChild(top);

				// 定义中部内容
				var middle = document.createElement("div");
				middle.className = "info-middle";
				middle.style.backgroundColor = 'white';
				middle.innerHTML = content;
				info.appendChild(middle);
 
				// 定义底部内容
				var bottom = document.createElement("div");
				bottom.className = "info-bottom";
				bottom.style.position = 'relative';
				bottom.style.top = '0px';
				bottom.style.margin = '0 auto';
				var sharp = document.createElement("img");
				sharp.src = "https://webapi.amap.com/images/sharp.png";
				bottom.appendChild(sharp);
				info.appendChild(bottom);
				return info;
			}

			//关闭信息窗体
			function closeInfoWindow() {
				map.clearInfoWindow();
			}

   
    


			//添加组群
			let lnglats = [
				[116.39, 39.92],
				[116.41, 39.93],
				[116.43, 39.91],
				[116.46, 39.93]
			];
			let markers1 = [];

			for(let i = 0; i < lnglats.length; i++) {
				var lnglat = lnglats[i];
				// 创建点实例
				let marker = new AMap.Marker({
					position: new AMap.LngLat(lnglat[0], lnglat[1]),
					icon: 'https://webapi.amap.com/theme/v1.3/markers/n/mark_b' + (i + 1) + '.png',
					extData: {
						id: i + 1
					}
				});

				markers1.push(marker);
			}

			let overlayGroups1 = new AMap.OverlayGroup(markers1);
			map.add(overlayGroups1);
		},
		methods: {
			 
			getLocation() {
				if(navigator.geolocation) {
					navigator.geolocation.getCurrentPosition(this.showPosition, this.showError);
				} else {
					alert("浏览器不支持地理定位。");
				}
			},
			showError(error) {
				switch(error.code) {
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
			}

		}
	}
</script>

<style>
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

        .amap-info-combo .keyword-input{
            height: 25px;
            border-radius: 2px 0 0 2px;
        }
</style>