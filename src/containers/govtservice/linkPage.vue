<template>
	<div class="formData">
		<Header :topName = "$route.query.name" />
		<div class="box">
			<mt-spinner type="fading-circle" color="#fe4c40" :size="40" class="load"></mt-spinner>
			<iframe :src="$route.query.url" :class="`ifr${$route.query.id}`" scrolling="no"></iframe>
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
				ifr0:1028,
				ifr1:984,
				ifr2:1028,
				ifr3:984,
				ifr4:1028,
				ifr5:1028,
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

<style>
	.formData{
	    width: 100%;
	    height: 100vh; 
        background: #fff;
	    position: absolute;
	    left: 0;
	    top: 0;
	    overflow: hidden;
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
		transform: scale(0.48 ,0.9);
     	transform-origin: -223px 0px 0px;
	}
 	.ifr0{
 		margin-top: -90px;
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