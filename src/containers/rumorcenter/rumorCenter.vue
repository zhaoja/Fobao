<template>
	<div class="news">
		<Header :topName="topName" />
		<div class="content">

			<div class="nav">
				<div class="navInner">
					<mt-button size="small" :class="'tab-container'+pro.id" @click="getType('tab-container'+pro.id)"
					 @click.native.prevent="active = 'tab-container'+pro.id" v-for="pro in program" :key="pro.name">{{pro.cname}}</mt-button>
				</div>
			</div>

			<div class="page-tab-container" @touchstart='touchStart' @touchmove='touchMove' @touchend='touchEnd'>
				<mt-tab-container class="page-tabbar-tab-container" v-model="active"  swipeable>
					<mt-tab-container-item :id="'tab-container'+list1.type">

						<mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :auto-fill="false"
						 ref="loadmore">

							<div v-for="n in list1.list" class="list" :key="n.id">
								<router-link to="rumorCenter/rumorDt">
									<div :class="'pic'+n.picUrl.length">{{n.title}}</div>
									<div v-if="n.picUrl" :class="'picList'+n.picUrl.length">
										<img :src="p" v-for="p in n.picUrl" :key="p" />
									</div>

									<div class="time"><span>{{n.date}}</span> <span>{{n.time}}</span></div>
								</router-link>
							</div>
						</mt-loadmore>
					</mt-tab-container-item>
					<mt-tab-container-item :id="'tab-container'+list2.type">

						<mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">

							<div v-for="n in list2.list" class="list" :key="n.id">
								<router-link to="rumorCenter/rumorDt">
									<div :class="'pic'+n.picUrl.length">{{n.title}}</div>
									<div v-if="n.picUrl" :class="'picList'+n.picUrl.length">
										<img :src="p" v-for="p in n.picUrl" />
									</div>
									<div class="time"><span>{{n.date}}</span> <span>{{n.time}}</span></div>
								</router-link>
							</div>
						</mt-loadmore>
					</mt-tab-container-item>
					<mt-tab-container-item :id="'tab-container'+list3.type">

						<mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">

							<div v-for="n in list3.list" class="list" :key="n.id">
								<router-link to="rumorCenter/rumorDt">
									<div :class="'pic'+n.picUrl.length">{{n.title}}</div>
									<div v-if="n.picUrl" :class="'picList'+n.picUrl.length">
										<img :src="p" v-for="p in n.picUrl" />
									</div>
									<div class="time"><span>{{n.date}}</span> <span>{{n.time}}</span></div>
								</router-link>
							</div>
						</mt-loadmore>
					</mt-tab-container-item>
					<mt-tab-container-item :id="'tab-container'+list4.type">

						<mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">

							<div v-for="n in list4.list" class="list" :key="n.id">
								<router-link to="rumorCenter/rumorDt">
									<div :class="'pic'+n.picUrl.length">{{n.title}}</div>
									<div v-if="n.picUrl" :class="'picList'+n.picUrl.length">
										<img :src="p" v-for="p in n.picUrl" />
									</div>
									<div class="time"><span>{{n.date}}</span> <span>{{n.time}}</span></div>
								</router-link>
							</div>
						</mt-loadmore>

					</mt-tab-container-item>

				</mt-tab-container>

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
				active: 'tab-container1',
				topName: "辟谣中心",
				allLoaded: false,
 
				isShow: false,
				startX: 0, //开始触摸的位置
				moveX: 0, //滑动时的位置
				endX: 0, //结束触摸的位置
				disX: 0, //移动距离
				slideEffect: '', //滑动时的效果,使用v-bind:style="deleteSlider"


			};
		},
		mounted() {

			var navBtn = document.getElementsByClassName("mint-button")[0];
			navBtn.classList.add("navAction")

		},
		methods: {
			getType(a) {

			},
			loadTop() {

				this.$refs.loadmore.onTopLoaded();
				console.log(this.$refs.loadmore)
			},
			loadBottom() {},
			touchStart: function(ev) {
				//console.log(1)
				ev = ev || event;
				ev.preventDefault();
				//                      console.log(ev.targetTouches);
				//                      console.log(ev.changedTouches);
				if (ev.touches.length == 1) { //tounches类数组，等于1时表示此时有只有一只手指在触摸屏幕
					this.startX = ev.touches[0].clientX; // 记录开始位置
				//	console.log(this.startX)
				}
			},
			touchMove: function(ev) {
				//console.log(2)
				ev = ev || event;
				ev.preventDefault();
// 				let btnWidth = this.$refs.remove.offsetWidth; //$refs 减少获取dom节点的消耗
// 				let btnImg = this.$refs.btnImg.offsetWidth;
// 				console.log(ev.targetTouches);
// 				console.log(ev.changedTouches);
				if (ev.touches.length == 1) {
					//滑动时距离浏览器左侧的距离
					this.moveX = ev.touches[0].clientX;
					
					//实时的滑动的距离-起始位置=实时移动的位置
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
				}
			},
			touchEnd: function(ev) {
				//console.log(3)
				ev = ev || event;
				ev.preventDefault();
// 				let btnWidth = this.$refs.remove.offsetWidth;
// 				let btnImg = this.$refs.btnImg.offsetWidth;
				//                      console.log(ev.changedTouches);
				if (ev.changedTouches.length == 1) {
					let endX = ev.changedTouches[0].clientX;
					this.disX = endX - this.startX;
					console.log(this.disX, 'this.disX')
					if(this.disX>50||this.disX<-50){
						console.log(111)
						 
					}else{
						 
					}
					// console.log((btnWidth / 2), 'btnWidth/2');
// 					if (this.disX < (btnWidth / 2)) {
// 						this.slideEffect = 'transform:translateX(0px)';
// 					} else {
// 						this.slideEffect = "transform:translateX(" + (btnWidth - btnImg) + "px)";
// 						//让字段显示出来，或者写你需要的逻辑
// 						this.isShow = true
					// }
				}
			}

		},
		watch: {
			active: function(a) {
				console.log(a, 999)
				var navBtn = document.getElementsByClassName("mint-button");
				for (let i = 0; i < navBtn.length; i++) {
					navBtn[i].classList.remove("navAction")
				}
				var navBtn = document.getElementsByClassName(a)[0];
				navBtn.classList.add("navAction")
			}
		}
	};
</script>

<style lang="scss">
	.page-loadmore-wrapper {
		overflow: scroll
	}

	.mint-loadmore-top {
		// margin-top: 0px !important;

	}

	.navAction .mint-button-text {
		color: red;
	}

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
</style>
