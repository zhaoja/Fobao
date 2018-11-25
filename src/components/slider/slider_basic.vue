<template>
	<div style="width:100%;height:100%;margin:0;padding: 0;">
		<slider ref="slider" :options="options" @slide='slide' @tap='onTap' @init='onInit'>
			<slideritem v-for="(item,index) in someList" :key="index" :style="item.style">{{item.html}}</slideritem>
		</slider>
	</div>
	</div>
</template>
<script>
	import slider from './slider_components/slider'
	import slideritem from './slider_components/slider_item'
	import img1 from '@/../static/images/broadcast/301.jpg'
	import img2 from '@/../static/images/broadcast/311.jpg'
	import img3 from '@/../static/images/broadcast/321.jpg'
	export default {
		data() {
			return {
				someList: [],
				options: {
					pagination: true,
					// thresholdDistance: 100, // 滑动距离阈值判定
					thresholdTime: 300, // 滑动时间阈值判定
					grabCursor: true, // 抓标样式
					speed: 300, // 滑动速度
					// timingFunction: 'ease', // 滑动方式
					loop: false, // 无限循环
					autoplay: 5000 // 自动播放:时间[ms]
				}
			}
		},
		mounted() {
			let that = this
			// setTimeout(function () {

			that.someList = [{
					html: '',
					style: {
						'background': 'url('+img3+')',
						'background-size': '100% 100%'
					}
				},
				{
					html: '',
					style: {
						'background': 'url('+img2+')',
						'background-size': '100% 100%'
					}
				},
				
				{
					html: '',
					style: {
						'background': 'url('+img1+')',
						'background-size': '100% 100%'
					}
				} 
			]
			// }, 2000)

		},
		components: {
			slider,
			slideritem
		},
		methods: {
			turnTo(num) {
				// 传递事件 vue 2.0 传递事件修改了，好的写法应该直接写在空vue类中
				this.$refs.slider.$emit('slideTo', num)
			},
			slideNext() {
				this.$refs.slider.$emit('slideNext')
				// slider.$emit('slideNext')
			},
			slidePre() {
				this.$refs.slider.$emit('slidePre')
				// slider.$emit('slidePre')
			},
			autoplayStart() {
				this.$refs.slider.$emit('autoplayStart')
				// slider.$emit('slidePre')
			},
			autoplayStop() {
				this.$refs.slider.$emit('autoplayStop')
				// slider.$emit('slidePre')
			},
			loadingShow() {
				this.$refs.slider.$emit('loadingShow')
				// slider.$emit('slidePre')
			},
			loadingHide() {
				this.$refs.slider.$emit('loadingHide')
				// slider.$emit('slidePre')
			},
			appendslider() {
				this.someList.push({
					html: 'slidernew',
					style: {
						background: '#333',
						color: '#fff'
					}
				})
			},
			// 监听事件发生了变化,需要指向一个子组件实例
			slide(data) {
				// console.log(data)
			},
			onTap(data) {
				// console.log(data)
			},
			onInit(data) {
				// console.log(data)
			}
		}
	}
</script>
<style>
	.sliderButton {
		text-align: center;
	}

	.sliderButton button {
		display: inline-block;
		background: #fff;
		border-radius: 3px;
		/*width: 100px;*/
		height: 30px;
		border: 1px solid #333;
		line-height: 30px;
		margin-left: 10px;
		padding: 0 15px;
		margin-top: 10px;
	}
</style>
