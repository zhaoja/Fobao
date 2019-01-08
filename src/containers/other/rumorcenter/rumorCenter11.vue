<template>
	<div class="news">
		<Header :topName="topName" />
		<div class="content">
			<div class="down"> 下拉加载
				<mt-spinner type="triple-bounce" color="#fe4c40"></mt-spinner>
			</div>
			<div class="up"> 上拉加载
				<mt-spinner type="triple-bounce" color="#fe4c40"></mt-spinner>
			</div>
			<!-- swiper -->
			<swiper :options="swiperOptionh">
				<swiper-slide>
					<swiper :options="swiperOption">
						<swiper-slide class="text">
							<div class="swiperOptionInner">
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
						</swiper-slide>
						<div class="swiper-scrollbar" slot="scrollbar"></div>
					</swiper>
				</swiper-slide>
				<swiper-slide>
					<swiper :options="swiperOption">
						<swiper-slide class="text">
							<div class="swiperOptionInner">
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
						</swiper-slide>
						<div class="swiper-scrollbar" slot="scrollbar"></div>
					</swiper>
				</swiper-slide>
				<swiper-slide>
					<swiper :options="swiperOption">
						<swiper-slide class="text">
							<div class="swiperOptionInner">
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
						</swiper-slide>
						<div class="swiper-scrollbar" slot="scrollbar"></div>
					</swiper>
				</swiper-slide>
				<swiper-slide>
					<swiper :options="swiperOption">
						<swiper-slide class="text">
							<div class="swiperOptionInner">
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
						</swiper-slide>
						<div class="swiper-scrollbar" slot="scrollbar"></div>
					</swiper>
				</swiper-slide>
				<div class="swiper-pagination swiper-pagination-h" slot="pagination"></div>
			</swiper>
		</div>

	</div>
</template>

<script>
	import { mapState } from 'vuex'
	import Header from '../../components/Header.vue'
	import { swiper, swiperSlide } from 'vue-awesome-swiper'

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
			Header,
			swiper,
			swiperSlide
		},
		data() {
			return {
				topName: "资讯",
				ifGetlist: false, //允许调用数据
				swiperOptionh: {
					spaceBetween: 0,
					autoplay: false,
					direction: 'horizontal',
					resistanceRatio: 0,
//					watchSlidesProgress : true,
					pagination: {
						el: '.swiper-pagination-h',
						clickable: true,
						renderBullet: function(index, className) {
							let nav = {
								0: '辟谣',
								1: '养老政策',
								2: '舆情',
								3: '老人福利'
							}
							return '<span class="' + className + '">' + nav[index] + '</span>';
						},
					}
				},
				swiperOption: {
					direction: 'vertical',
					slidesPerView: 'auto',
					spaceBetween: 0,
					resistanceRatio: 0.65,
					freeMode: true,
					freeModeMomentum:false,
					
					scrollbar: {
						el: '.swiper-scrollbar'
					},
					mousewheel: true,
 				 
					on: {
						 
						progress: (progress) => {
							this.progress = 0.5
							console.log(progress,111)
							let _this = this;
							if(_this.ifGetlist == false) {
								if(progress<-0.15){
//									console.log("下拉");
									_this.ifGetlist = true
//									
									setTimeout(function(){
//	 							 		//请求成功了，就变成初始状态
	 							 		_this.ifGetlist = false
//	 							 		alert(_this.ifGetlist)
									},3000)
								} else if (progress>1.15) {
//									console.log("上拉");
									_this.ifGetlist = true
									setTimeout(function(){
//	 							 		//请求成功了，就变成初始状态
	 							 		_this.ifGetlist = false
//	 							 		alert(_this.ifGetlist)
									},3000)
								} else{
//									console.log("中间")
								}
							} 
						}
					}
				}
			}
		},

	}

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
	.swiper-wrapper{
	   transition-timing-function:  ease;
	}
	.ani{
	   animation-timing-function: ease;
	   -webkit-animation-timing-function: ease;
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
	
	.up,
	.down {
		position: absolute;
		width: 100%;
		font-size: 13px;
		color: #ccc;
		text-align: center;
	}
	
	.up {
		top: 500px;
	}
	
	.down {
		top: 50px;
	}
	
	.news {
		/*max-width: 375px;*/
		.content {
			margin-top: 65px;
			position: relative;
			height: calc( 100% - 95px);
		}
		.swiper-container {
			height: 100%;
			.swiper-wrapper {
				height: calc(100% - 20px);
			}
		}
		.swiper-scrollbar {
			display: none;
		}
		.swiper-slide .text {
			padding: 45px 0 0px 0;
			height: auto;
			-webkit-box-sizing: border-box;
			box-sizing: border-box;
		}
		/*小圓點*/
		.swiper-pagination-h {
			background: #F5F5F5;
			top: 0px;
			left: 0;
			width: 100%;
			display: flex;
			height: 45px;
			.swiper-pagination-bullet {
				flex: 1;
				padding: 0;
				margin: 0 !important;
				background: #f5f5f5;
				border-radius: 0;
				text-align: center;
				line-height: 45px;
				height: 45px;
				display: inline-block;
				opacity: 1;
				outline: none;
			}
			.swiper-pagination-bullet-active {
				color: red !important;
				-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
			}
		}
		.swiperOptionInner {
			width: 100%;
			background: #fff;
			ul {
				background: #f5f5f5;
				width: calc(100% - 30px);
				margin: 0px 15px;
				.list {
					background: #ffffff;
					margin-bottom: 1px;
					overflow: hidden;
					display: block;
					padding: 15px 0;
					.time {
						clear: both;
						line-height: 10px;
						margin-top: 14px;
						span {
							font-size: 12px;
							color: #999999;
						}
					}
				}
			}
		}
	}
</style>