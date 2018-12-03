<template>
	<div>
		<MyVueCropper ></MyVueCropper>
      </div> 
</template>

<script>
//import vueCropper from 'vue-cropper'
import MyVueCropper from '../../components/cropper/App'
export default {
     components: {
		MyVueCropper,
	},
   
}
 
</script>

<style type="text/css">
    body,html{
        height: 100%;
    }
    .box{
        position: relative;
        height: 100%;
    }
    .wrapper{
        position: fixed;
        width: 100%;
        top: 0;
        height: calc(100% - 50px);
    }
    .vue-cropper{
        background: black;
        background-image: none!important;
    }
    .btn{
        height: 50px;
        background: #565656;
        width: 100%;
        padding: 0 15px;
    }
    .btn a{
        color: white;
        font-size: .16rem;
        display: inline-block;
        line-height: 50px;
    }
    .btn a:nth-of-type(1){
        float: left;
    }
    .btn a:nth-of-type(2){
        float: right;
    }
</style>