<template>
	<div class="capply">
		<ul class="grayb">
			<li v-for="item in form" >
				<span>{{item.option}}:</span>  
				<input type="text" :placeholder="item.value" v-model="item.param" />
			</li>
			
			<li>
				<button type="primary" @click="cardnext()">下一步</button>
				
			</li>
		</ul>
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	  
	export default {
		
		components:{
			 
		},
		computed: {
			...mapState({
				certificate: state => state.cardApply.certificate,
			})
		},
		data() {
			return {
				 
				form :[
					// {option:'姓名',type:'input',value:'请输入姓名',param: "certificate" },
				]
			}
		},
		mounted() {
			console.log(this.certificate.name)
			this.form =[
				{option:'姓名',type:'input',value:'请输入姓名',param: this.certificate.name },
				{option:'证件类型',type:'input',value:'请输入证件类型',param: this.certificate.cardtype },
				{option:'证件号码',type:'input',value:'请输入证件号码',param: this.certificate.cardnum },
				{option:'发证机关',type:'input',value:'请输入发证机关',param: this.certificate.cardunit },
				{option:'证件有效期',type:'input',value:'请输入证件有效期',param: this.certificate.cardstilldata },
				{option:'性别',type:'input',value:'请输入性别',param: this.certificate.sex },
				{option:'出生日期',type:'input',value:'请输入出生日期',param: this.certificate.birth },
				
				{option:'户籍区',type:'input',value:'请输入户籍区',param: this.certificate.huji_area },
				{option:'户籍街道',type:'input',value:'请输入户籍街道',param: this.certificate.huji_street },
				{option:'户籍社区',type:'input',value:'请输入户籍社区',param: this.certificate.huji_community },
				
				{option:'居住区',type:'input',value:'请输入居住区',param: this.certificate.juzhu_area },
				{option:'居住街道',type:'input',value:'请输入居住街道',param: this.certificate.juzhu_street },
				{option:'居住社区',type:'input',value:'请输入居住社区',param: this.certificate.juzhu_community },
				
				{option:'户籍详细地址',type:'input',value:'请输入户籍详细地址',param: this.certificate.huji_address },
				{option:'居住详细地址',type:'input',value:'请输入居住详细地址',param: this.certificate.juzhu_address },
				
				{option:'邮编',type:'input',value:'请输入邮编',param: this.certificate.zipcode },
				{option:'联系方式（手机号）',type:'input',value:'请输入手机号',param: this.certificate.phone },
				{option:'紧急联系人',type:'input',value:'请输入紧急联系人',param: this.certificate.linkman },
				{option:'紧急联系人手机号',type:'input',value:'请输入紧急联系人手机号',param: this.certificate.linkmanphone },
				{option:'居住状况',type:'input',value:'请输入居住状况',param: this.certificate.juzhu_state },
				{option:'文化程度',type:'input',value:'请输入文化程度',param: this.certificate.degree },
				{option:'经济来源',type:'input',value:'请输入经济来源',param: this.certificate.economysorce },
				{option:'月收入',type:'input',value:'请输入月收入',param: this.certificate.income },
				{option:'医保类型',type:'input',value:'请输入医保类型',param: this.certificate.medicaltype },
				{option:'自理情况',type:'input',value:'请输入自理情况',param: this.certificate.selfcare },
				 
			]
		}
	}
</script>

<style>

</style>
