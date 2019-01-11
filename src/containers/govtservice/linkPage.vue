<template>
	<div class="formData">
		<Header :topName = "serve1_list[$route.query.id].name" />
		<div class="box">
			<mt-spinner type="fading-circle" color="#fe4c40" :size="40" class="load"></mt-spinner>
			<iframe :src="serve1_list[$route.query.id].url" :class="`ifr${$route.query.id}`" scrolling="no"></iframe>
			<div class="note">
				<div>
					<img src="../../assets/images/mine/icon1.png"/>温馨提示
				</div>
				<hr />
				<p>1、*为必输项</p>
				<p>2、直销银行受理自主申请时间为每日7:00-19:00</p>
				<p>3、如您的身份信息核查不通过、有效证件非身份证或“外埠常住北京”老人，则需本人前往我行任一网点办理申请；如您为北京市户籍老人，请携带户口本与有效身份证件办理；如您为外埠常驻老人，请持有效身份证件及居住证前往银行网点办理。</p>
			
				<p>4、证件号码、姓名、证件种类、不可以更改。</p>
				<p>5、您可以在申请提交后3天以内（含）修改信息，3天以后不可更改。</p>
			</div>
		</div>
		{{$route.query.content }}
		 <!--query: {id:li.id, url: li.url, name:li.name, content:li.content }}"-->
		
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
					{id:0,name:'制卡申请',icon:'icon-m1',url:'https://fhzx.bjrcb.com/appoint/choosePension.jhtml',content:''},
					{id:1,name:'信息查询',icon:'icon-m2',url:'https://fhzx.bjrcb.com/appoint/queryCardApplyInfo.jhtml',content:''},
					{id:2,name:'信息修改',icon:'icon-m3',url:'https://fhzx.bjrcb.com/appoint/modifyInfo.jhtml',content:''},
					{id:3,name:'照片上传',icon:'icon-m4',url:'https://fhzx.bjrcb.com/appoint/yanglaoImageUpload.jhtml',content:''},
					{id:4,name:'申请撤销',icon:'icon-m5',url:'https://fhzx.bjrcb.com/appoint/applyRepeal.jhtml',content:''},
					{id:5,name:'进度查询',icon:'icon-m6',url:'https://fhzx.bjrcb.com/appoint/cardSchedulQuery.jhtml',content:''},
					{id:6,name:'卡片挂失',icon:'icon-m7',url:''},
					{id:7,name:'功能介绍',icon:'icon-m8',url:''},
				],
//				ifr0:1028,
//				ifr1:984,
//				ifr2:1028,
//				ifr3:984,
//				ifr4:1028,
//				ifr5:1028,
			}
		},
		mounted() {
			//外壳宽高
		  	let wd = document.body.clientWidth;
		    let ht = document.body.clientHeight;
		    console.log(wd,ht)
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
	    		img{
	    			width: 22px;
	    			height: 20px;
	    			float: left;
	    			margin-top: 5px;
	    			margin-left: 9px;
    			    margin-right: 5px;
	    		}
	    		width: 110px;
				height: 30px;
				line-height: 30px;
				border-radius: 2px;
				color: #eb6100;
				background: rgba(235, 97, 0, 0.15);

	    	}
	    	hr{
	    		height: 3px;
	    		border-top: 1px dashed  #eb6100;
	    	}
	    	p{
	    		color: #666666;
	    		font-size: 15px;
	    		margin-top: 5px;
	    	}
	    }
	}
	.box{
		width: 375px;
        height: 667px;
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
 		height: 1240px;
 	} 
	.ifr1,.ifr2{
        height: 380px;
	}
	.ifr3{
        height: 450px;
     	transform-origin: -106px 0px 0px;
     	}
	.ifr4,.ifr5{
        height: 450px;
     }
	 

</style>