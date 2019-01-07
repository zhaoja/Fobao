<template>
	<div class="formData">
		<Header :topName = "$route.query.name" />
		<div class="box">
			<iframe :src="$route.query.url" :class="`ifr${$route.query.id}`"  scrolling="no"></iframe>
			<div>
				温馨提示：

1.*为必输项。

2.直销银行受理自主申请时间为每日7：00-19：00。

3.如您的身份信息核查不通过、有效证件非身份证或“外埠常住北京”老人，则需本人前往我行任一网点办理申请；如您为北京市户籍老人，请携带户口本与有效身份

  证件办理；如您为外埠常住北京老人，请持有效身份证件及居住证前往银行网点办理。
			</div>
		</div>
		{{$route.query.content }}
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	import Header from '../../components/Header.vue'

	export default {
		components: {
			Header
		},
		data(){
			return{
				h:"1000px"
			}
		},
		mounted() {
 			 
		 
		}
	}
 
 
</script>

<style>
	.ifr0{
        height: 1275px;
	    width: 850px;
	    transform: scale(0.7);
	    transform-origin: -532px -370px 0px;
	}
	.ifr1,.ifr2{
	    height: 385px;
	    width: 850px;
	    transform: scale(0.8);
	    transform-origin: -1130px -340px 0px;
	}
	.ifr3{
        height: 440px;
	    width: 850px;
	    transform: scale(0.8);
	    transform-origin: -799px -435px 0px;
	}
	.ifr4{
        height: 440px;
	    width: 850px;
	    transform: scale(0.8);
	    transform-origin: -1140px -340px 0px;
	}


	.ifr5{
        height: 420px;
	    width: 850px;
	    transform: scale(0.8);
	    transform-origin: -1217px -370px 0px;
	}
	 
	.formData{
	    width: 100%;
	    height: 100vh;
	    overflow-x: hidden;
	    overflow-y: auto;
	}
	.box{
	    margin-top: 65px;
	    width:100%;
	    height: calc(100vh - 65px);
        overflow-x: hidden;
	    background: #fff;
	}
</style>