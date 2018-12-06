<template>
	<div>
		<Header topName="北京通手机卡" />
		<iframe src="http://caihong.xi-an.xin/fw/public//?openId=oGhvywUDFK-ROqPAmRuHfRbDhQsw&appid=wx8f75fe4f9587d5fd&param1=&param2=&param3=&param4=&param5=&param6=" width="" height=""></iframe>
	</div>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	import Header from '../../components/Header.vue'

	export default {
		components: {
			Header
		}
	}
</script>

<style>
	iframe{
		width: 100%;
		min-height: calc(100% - 65px);
		position: absolute;
		top:65px;
	}
</style>