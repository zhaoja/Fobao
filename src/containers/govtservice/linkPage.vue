<template>
	<div class="formData">
		<Header :topName = "serve1_list[$route.query.id].name" />
		<div class="box">
			<mt-spinner type="fading-circle" color="#fe4c40" :size="40" class="load"></mt-spinner>
			<iframe :src="serve1_list[$route.query.id].url" :class="`ifr${$route.query.id}`" scrolling="no"></iframe>
			<div class="note">
				<div v-if="serve1_list[$route.query.id].content">
					<img src="../../assets/images/mine/icon1.png"/>温馨提示
				</div>
				<hr v-if="serve1_list[$route.query.id].content" />
				<p v-html="serve1_list[$route.query.id].content"></p>
			</div>
		</div>		
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
			serve1_list:[
					{id:0,name:'制卡申请',icon:'icon-m1',url:'https://fhzx.bjrcb.com/appoint/choosePension.jhtml',
					content:'<p>1. <span style="color: red;">*</span>为必输项。</p><p> 2. 直销银行受理自主申请时间为每日7：00-19：00</p><p>3. 如您的身份信息核查不通过、有效证件非身份证或“外埠常住北京”老人，则需本人前往我行任一网点办理申请；如您为北京市户籍老人，请携带户口本与有效身份证件办理；如您为外埠常住北京老人，请持有效身份证件及居住证前往银行网点办理。</p>'},
					{id:1,name:'信息查询',icon:'icon-m2',url:'https://fhzx.bjrcb.com/appoint/queryCardApplyInfo.jhtml',
					content:''},
					{id:2,name:'信息修改',icon:'icon-m3',url:'https://fhzx.bjrcb.com/appoint/modifyInfo.jhtml',
					content:'<p>1. <span style="color: red;">*</span>为必输项。</p><p> 2. 证件号码、姓名、证件种类、不可以更改。</p><p>3. 您可以在申请提交后3天以内（含）修改信息，3天以后不可更改。</p>'},
					{id:3,name:'照片上传',icon:'icon-m4',url:'https://fhzx.bjrcb.com/appoint/yanglaoImageUpload.jhtml',
					content:'<p>1. 直销银行受理自主申请时间为每日7：00-19：00。</p><p>2. 如首次申请养老助残卡时您的证件种类非身份证或核查不通过，请您本人携带户口本及有效身份证件前往我行任一网点办理申请手续，而后通过此功能完成制卡照片上传；如您为外埠常驻北京老人，请持有效身份证件及《北京市居住证》前往我行任一网点办理申请手续，而后通过此功能完成制卡照片上传。</p><p>3. 如您已拿到正式卡片，但由于照片错误需重新上传照片，请在银行网点办理申请换卡手续后，次日起五日内完成换卡照片上传，以免银行再次用原有照片制新卡。</p>'},
					{id:4,name:'申请撤销',icon:'icon-m5',url:'https://fhzx.bjrcb.com/appoint/applyRepeal.jhtml',content:''},
					{id:5,name:'进度查询',icon:'icon-m6',url:'https://fhzx.bjrcb.com/appoint/cardSchedulQuery.jhtml',
					content:'<p>1.  目前，此功能仅支持通过银行申请的养老助残卡的制卡进度，如果您通过民政局下属社区、街道申请的养老助残卡，请通过96156、银行网点、街道、社区详询。</p>'},
					{id:6,name:'卡片挂失',icon:'icon-m7',url:''},
					{id:7,name:'功能介绍',icon:'icon-m8',url:''},
				],

//				ifr0:1028,1146
//				ifr1:984,242
//				ifr2:1028,242
//				ifr3:9843,310
//				ifr4:1028,290
//				ifr5:1028,290
			}
		},
		mounted() {
			//外壳宽高
// 		  	let wd = document.body.clientWidth;
// 		    let ht = document.body.clientHeight;
// 		    console.log(wd,ht)
//		    let x = document.getElementsByClassName('formData')[0].clientWidth / wd;
//		    console.log(x)
//		    ifm.style.width = wd +'px';
//		    ifm.style.height = ht +'px';
//		    ifm.style.transform = `scale(${x})`;
//		    ifm.style.transformOrigin='0 0';
		}
	}
 
 
</script>
 <style lang="scss">
	.formData{
		width: 100%;
		height: 100vh; 
		background: #fff;
		position: absolute;
		left: 0;
		top: 0;
		overflow: hidden;
		.note{
			padding:15px;
			div{
				width: 110px;
				height: 30px;
				line-height: 30px;
				border-radius: 2px;
				color: #eb6100;
				background: rgba(235, 97, 0, 0.15);
				img{
					width: 22px;
					height: 20px;
					float: left;
					margin-top: 5px;
					margin-left: 9px;
					margin-right: 5px;
				}
			}
			hr{
				height: 3px;
				border-top: 1px dashed  #eb6100;
			}
			p{
				color: #666666;
				font-size: 15px;
				margin-top: 5px;
				letter-spacing:0;
			}
		}
	}
	.box{
		width: 375px;
		height: 100vh;
		overflow-x: hidden;
		overflow-y: auto;
		position: absolute;
		left: 0;
		top: 0;
	}
	.load{
		top: 120px;
		left: calc(50% - 20px);
		position: absolute;
	}
	iframe{
		margin-top: -30px;
    width: 1024px;
		height: 1340px;
		transform: scale(0.48 ,1);
    transform-origin: -223px 0px 0px;
	}
 	.ifr0{
 		margin-top: -90px;
 		height: 1260px;
 	} 
	.ifr1,.ifr2{
    height: 356px;
	}
	.ifr3{
			height: 424px;
			transform-origin: -106px 0px 0px;
		}
	.ifr4,.ifr5{
			height: 404px;
	 }
	//	 +114
	 //				ifr0:1028,1146
	 //				ifr1:984,242
	 //				ifr2:1028,242
	 //				ifr3:9843,310
	 //				ifr4:1028,290
	 //				ifr5:1028,290

</style>