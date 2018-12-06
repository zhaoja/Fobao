<template>
	<div class="news">
		<Header :topName="topName" />
		<div class="content">
			<div class="tabs">
				<span class="active">辟谣</span>
				<span>养老政策</span>
				<span>舆情</span>
				<span>老人福利</span>
			</div>
			<div id="box">
				<div class="pullDownHtml">
					<div class="pullDownshow1">
						<!-- 下拉刷新 -->
						<mt-spinner type="triple-bounce" color="#fe4c40"></mt-spinner>
					</div>
					<div class="pullDownshow2">
						<!-- 正在刷新 -->
						<mt-spinner type="triple-bounce" color="#fe4c40"></mt-spinner>
					</div>
				</div>
				<div class="pullUpHtml">
					<div class="pullUpHtmlshow1">
						<!-- 上拉加载 -->
						<mt-spinner type="triple-bounce" color="#fe4c40"></mt-spinner>
					</div>
					<div class="pullUpHtmlshow2">
						<!-- 正在加载 -->
						<mt-spinner type="triple-bounce" color="#fe4c40"></mt-spinner>
					</div>
				</div>
				<div class="box">
					<div class="tab-container">
						<div class="s-pull">
							<ul>
								<li v-for="n in list1.list" class="list" :key="n.id">
									<router-link to="rumorCenter/rumorDt">
										<div :class="'pic'+n.picUrl.length">{{n.title}}</div>
										<div v-if="n.picUrl" :class="'picList'+n.picUrl.length">
											<img :src="p" v-for="p in n.picUrl" :key="p" />
										</div>

										<div class="time"><span>{{n.date}}</span> <span>{{n.time}}</span></div>
									</router-link>
								</li>
							</ul>
						</div>
					</div>
					<div class="tab-container">
						<div class="s-pull">
							<ul>
								<li v-for="n in list2.list" class="list" :key="n.id">
									<router-link to="rumorCenter/rumorDt">
										<div :class="'pic'+n.picUrl.length">{{n.title}}</div>
										<div v-if="n.picUrl" :class="'picList'+n.picUrl.length">
											<img :src="p" v-for="p in n.picUrl" :key="p" />
										</div>

										<div class="time"><span>{{n.date}}</span> <span>{{n.time}}</span></div>
									</router-link>
								</li>
							</ul>
						</div>
					</div>
					<div class="tab-container">
						<div class="s-pull">
							<ul>
								<li v-for="n in list3.list" class="list" :key="n.id">
									<router-link to="rumorCenter/rumorDt">
										<div :class="'pic'+n.picUrl.length">{{n.title}}</div>
										<div v-if="n.picUrl" :class="'picList'+n.picUrl.length">
											<img :src="p" v-for="p in n.picUrl" :key="p" />
										</div>

										<div class="time"><span>{{n.date}}</span> <span>{{n.time}}</span></div>
									</router-link>
								</li>
							</ul>
						</div>
					</div>
					<div class="tab-container">
						<div class="s-pull">
							<ul>
								<li v-for="n in list4.list" class="list" :key="n.id">
									<router-link to="rumorCenter/rumorDt">
										<div :class="'pic'+n.picUrl.length">{{n.title}}</div>
										<div v-if="n.picUrl" :class="'picList'+n.picUrl.length">
											<img :src="p" v-for="p in n.picUrl" :key="p" />
										</div>

										<div class="time"><span>{{n.date}}</span> <span>{{n.time}}</span></div>
									</router-link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	import Header from '../../components/Header.vue'

	export default {
		computed: {
			...mapState({
				program: state => state.system.news.rumorCenter.program,
				list1: state => state.system.news.rumorCenter.programContentList1,
				list2: state => state.system.news.rumorCenter.programContentList2,
				list3: state => state.system.news.rumorCenter.programContentList3,
				list4: state => state.system.news.rumorCenter.programContentList4,
			})
		},
		components: {
			Header
		},
		data() {
			return {
				// active: 'tab-container1',
				topName: "辟谣中心",
				allLoaded: false,
			};
		},
		mounted() {

			var box = document.getElementById('box')
// 			var boxUl = box.getElementsByTagName("ul")[0]
		 
			var swiper = new TabSwiper(box, {
				speed: 300,
				threshold: 100,
				isPullDown: true,
				isPullUp: true,
				closeInertia: true,
				xThreshold: 0.1,
				defaultPage: 0,
				initCb: function() {
					console.log('初始化完成')
					var spans = document.querySelectorAll('.tabs span')
					for (var i = 0; i < spans.length; i++) {
						(function(page) {
							spans[page].onclick = function() {
								swiper.changePage(page)
							}
						})(i)
					}
				},
				onRefreshStart: function() {
					var pullDownshow1 = document.querySelector('.pullDownshow1')
					var pullDownshow2 = document.querySelector('.pullDownshow2')
					pullDownshow1.style.display = 'none'
					pullDownshow2.style.display = 'block'
					setTimeout(function() {
						swiper.pullEnd(function(page) {
							pullDownshow1.style.display = 'block'
							pullDownshow2.style.display = 'none'
							console.log('刷新结束----' + page)
							
						})
					}, 1000)
				},
				onLoadStart: function() {
					var pullUpHtmlshow1 = document.querySelector('.pullUpHtmlshow1')
					var pullUpHtmlshow2 = document.querySelector('.pullUpHtmlshow2')
					pullUpHtmlshow1.style.display = 'none'
					pullUpHtmlshow2.style.display = 'block'
					setTimeout(function() {
						swiper.pullEnd(function(page) {
							pullUpHtmlshow1.style.display = 'block'
							pullUpHtmlshow2.style.display = 'none'
							console.log('加载结束----' + page)
						})
					}, 1000)
				},
				onEnd: function(page) {
					console.log('当前所在----' + page)
					var spans = document.querySelectorAll('.tabs span')
					for (var i = 0; i < spans.length; i++) {
						if (i != page) spans[i].className = ''
						else spans[i].className = 'active'
					}
				},
				onTouchmove: function(page, e) {
					console.log('正在拖动...')
				}
			})

// 					var navBtn = document.getElementsByClassName("mint-button")[0];
// 					navBtn.classList.add("navAction")
// 					
// 					document.getElementsByClassName("mint-loadmore-content")

		},
		methods: {
			getType(a) {

			},
			loadTop() {
				if(false) {
					this.$refs.loadmore.onTopLoaded();
				}
				console.log(this.$refs.loadmore)
				return false
				
			},
			loadBottom() {},
		}
	};
// 			touchStart: function(ev) {
//      		console.log(1)
// 				ev = ev || event;
//   			ev.preventDefault();
//                      console.log(ev.targetTouches);
//                      console.log(ev.changedTouches);
// 				if (ev.touches.length == 1) { //tounches类数组，等于1时表示此时有只有一只手指在触摸屏幕
// 					this.startX = ev.touches[0].clientX; // 记录开始位置
//   				console.log(this.startX)
// 				}
// 			},
// 			touchMove: function(ev) {
// 				console.log(2)
// 				ev = ev || event;
//   				 ev.preventDefault();
// 				let btnWidth = this.$refs.remove.offsetWidth; //$refs 减少获取dom节点的消耗
// 				let btnImg = this.$refs.btnImg.offsetWidth;
// 				console.log(ev.targetTouches);
// 				console.log(ev.changedTouches);
// 				if (ev.touches.length == 1) {
// 					//滑动时距离浏览器左侧的距离
// 					this.moveX = ev.touches[0].clientX;
// 					
// 					//实时的滑动的距离-起始位置=实时移动的位置
// 					this.disX = this.moveX - this.startX;
// 					if (this.disX < 0 || this.disX == 0) {
// 						this.slideEffect = 'transform:translateX(0px)';
// 					} else if (this.disX > 0) {
// 						this.slideEffect = 'transform:translateX(' + this.disX + 'px)';
// 
// 						// 最大也只能等于删除按钮宽度 
// 						if (this.disX >= btnWidth) {
// 							this.slideEffect = 'transform:translateX(' + (btnWidth - btnImg) + 'px)';
// 						}
// 					}
// 				}
// 			},
// 			touchEnd: function(ev) {
//      				console.log(3)
// 				ev = ev || event;
// 				ev.preventDefault();
// 				let btnWidth = this.$refs.remove.offsetWidth;
// 				let btnImg = this.$refs.btnImg.offsetWidth;
//                      console.log(ev.changedTouches);
// 				if (ev.changedTouches.length == 1) {
// 					let endX = ev.changedTouches[0].clientX;
// 					this.disX = endX - this.startX;
// 					console.log(this.disX, 'this.disX')
// 					if(this.disX>50||this.disX<-50){
// 						console.log(111)
// 						 
// 					}else{
// 						 
// 					}
// 					// console.log((btnWidth / 2), 'btnWidth/2');
// 					if (this.disX < (btnWidth / 2)) {
// 						this.slideEffect = 'transform:translateX(0px)';
// 					} else {
// 						this.slideEffect = "transform:translateX(" + (btnWidth - btnImg) + "px)";
// 						//让字段显示出来，或者写你需要的逻辑
// 						this.isShow = true
// 					}
// 				}
// 			}
// 
// 		},
// 		watch: {
// 			active: function(a) {
// 				console.log(a, 999)
// 				var navBtn = document.getElementsByClassName("mint-button");
// 				for (let i = 0; i < navBtn.length; i++) {
// 					navBtn[i].classList.remove("navAction")
// 				}
// 				var navBtn = document.getElementsByClassName(a)[0];
// 				navBtn.classList.add("navAction")
// 			}
// 		}

</script>

<style lang="scss">
	.pic1 {
		width: calc(100% - 33% - 20px);
		float: left;
	}
	.picList0 {}
	.picList1 {
		float: right;
		width: 33%;

		img {
			width: 100%;
			height: 75px;
		}
	}

	.picList3 {
		float: right;
		width: 100%;
		margin: 15px 0;

		img {
			float: left;
			width: calc(33% - 3px);
			margin-left: 1px;
			margin-right: 2px;
			height: 75px;
		}
	}

	#box {
		height: calc(100% - 60px);
	}
	.box{background: #fff;}
	.pullDownHtml,
	.pullUpHtml {
		height: 50px;
		/* visibility: hidden; */
		position: absolute;
	}

	.pullDownshow1,
	.pullDownshow2,
	.pullUpHtmlshow1,
	.pullUpHtmlshow2 {
		font: 14px/50px "黑体";
		text-align: center;
	}
	.pullDownshow2,
	.pullUpHtmlshow2 {
		display: none;
	}
	li{
		display: list-item;
		text-align: -webkit-match-parent;
	}
	.tabs {
		height: 45px;
		display: flex;
		background: #f5f5f5;
	}

	.tabs span {
		flex: 1;
		text-align: center;
		line-height: 45px;
		height: 45px;
		display: inline-block;
	}

	.tabs span.active {
		color: red;
	}
</style>
