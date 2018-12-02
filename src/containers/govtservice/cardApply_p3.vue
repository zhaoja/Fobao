<template>
	<div class="capply">
		<ul class="grayb">
			<li>
				<span>证件号码: </span> {{certificate.number}}
			</li>
			<li>
				<span>发证机关: </span>
				<select class="">
					<option name="" value="">--请选择--</option>
					<option></option>
				</select>
			</li>

			<li class="block">
				<div style="padding-left: 20px;">身份证照片: </div>
				<div class="list-uploader" style="margin-bottom: 30px;">

					<uploader :src="'/api/test'" tips="上传证件正面照"></uploader>

					<uploader :src="'/api/test'" tips="上传证件反面照"></uploader>
				</div>
			</li>
			<!-- 北京户籍 -->
			<li class="block" v-if="bjhouse">
				<div style="padding-left: 20px;">京户籍老人户口本本人页照片: </div>
				<div class="list-uploader">
					<uploader :src="'/api/test'"></uploader>
				</div>
			</li>
			<li class="block" v-if="bjhouse">
				<div style="padding-left: 20px;">京户籍老人户口本户主页照片: </div>
				<div class="list-uploader">
					<uploader :src="'/api/test'"></uploader>
				</div>
			</li>

			<!-- 外地户籍 -->
			<li class="block" v-if="!bjhouse">
				<div style="padding-left: 20px;">居住证照片: </div>
				<div class="list-uploader">
					<uploader :src="'/api/test'"></uploader>
				</div>
			</li>
			<li class="alert-inline" v-if="!bjhouse">
				<label>{{alert}}</label>
			</li>
			<li>
				<button type="primary" @click="cardnext()">下一步</button>

			</li>

		</ul>
		<!-- <uploader :src="'/api/test'" ></uploader> -->
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	import uploader from '@/components/uploader/components/uploader.vue'
	export default {
		components: {

		},
		data() {
			return {
				alert: '',
				bjhouse: ''
				// ifshow:false,
			}
		},
		computed: {
			...mapState({
				certificate: state => state.cardApply.certificate,
			})
		},
		mounted() {
			if(this.certificate.number.substring(0, 3) * 1 == 111) {
				this.bjhouse = true;
			} else {

			}

			var options = { // 设置axios的参数
				url: '/api/seller',
				data: '',
				method: 'get',
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			}
			this.$http(options).then((res) => {
				console.log(res)
			})
			// 			var formData = new FormData() // 声明一个FormData对象
			// 			var formData = new window.FormData() // vue 中使用 window.FormData(),否则会报 'FormData isn't definded'
			// 			formData.append('userfile', document.querySelector('input[type=file]').files[0]) // 'userfile' 这个名字要和后台获取文件的名字一样;
			// 			var options = {  // 设置axios的参数
			// 					 url: '请求地址',
			// 					 data: formData,
			// 					 method: 'post',
			// 					 headers: { 
			// 					  'Content-Type': 'multipart/form-data'
			// 					 }
			// 				}
			// 			this.axios(options).then((res) => {}) // 发送请求

		},
		components: {
			uploader
		},
		methods: {
			cardnext() {
				// this.$store.dispatch('cardapplyNext',a);
				this.$router.push({
					path: '/cardapply/p4'
				});
				// alert("建设中")
			}
		}
	}
</script>

<style lang="scss">
	.block {
		display: inline-block !important;
	}
	.list-uploader {
		width: 100%;
		display: inline-block;
		.vue-uploader {
			width: 50%;
			float: left;
			height: 100px;
		}
	}
	
	// 	
	// 	.operation-box{
	// 		line-height:0px !important
	// 		
	// 	}	
	// 	.vue-uploader{
	// 		border-left: 0px!important;
	// 		border-right:0px!important;
	// 		border-bottom:0px!important;
	// 		.file-list .file-item{
	// 			width: 100% !important;
	// 			text-align: left !important;
	// 			img {
	// 				width: 200px !important;
	// 				height: 120px !important;
	// 				margin-left: 10px;
	// 			}
	// 			.file-name{
	// 				display: none !important;
	// 			}
	// 		}
	// 		.upload-func{
	// 			padding:5px !important;
	// 			button{
	// 				padding: 0px 8px !important;
	// 				height: 30px !important;
	// 				line-height: 30px !important;
	// 				font-size: 14px !important;
	// 			} 
	// 		}
	// 		.add {
	// 			width: 100% !important;
	// 			height: 120px !important;
	// 			margin-left: 10px; 
	// 			line-height: 120px !important; 
	// // 			span{
	// // 				display: none;
	// // 			}
	// 		}
	// 	}
</style>