<template>
	<div class="js_dialog">
		<div class="weui-mask"></div>
		<div class="weui-dialog">
			<div class="weui-dialog__hd">
				<div class="weui-dialog__title">{{title}}</div>
			</div>
			<div class="weui-dialog__bd"><slot></slot></div>
			<div class="weui-dialog__ft">
				<a v-if="type === 'confirm'" href="javascript:;" class="weui-dialog__btn weui-dialog__btn_default" @click="dispathEventAndClose(0)">{{cancelButton}}</a>
				<a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary" @click="dispathEventAndClose(1)" :style="confirmStyle">{{confirmButton}}</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name:'Dialog',
	props: { 
		/**
		 * 对话框类型
		 * alert: 提示框，只包含确定按钮（默认）
		 * confirm: 询问框，包含确定和取消按钮
		 */
		type: {
			type: String,
			required: false,
			default: 'alert'
		},

		/**
		 * 对话框标题
		 */
		title: {
			type: String,
			required: false
		},

		/**
		 * 确定按钮名称
		 */
		confirmButton: {
			type: String,
			required: false,
			default: '确定'
		},

		/**
		 * 取消按钮名称
		 */
		cancelButton: {
			type: String,
			required: false,
			default: '取消'
		},

		confirmTextColor: {
			type: String,
			required: false,
		}

	},
	computed:{
		confirmStyle(){
			return `color:${this.confirmTextColor}`
		}
	},

	methods: {
		dispathEventAndClose(event) {
			if(event===1){
				this.$emit('weui-dialog-confirm');
				return true;
			}
			this.$emit('weui-dialog-cancel')
		}
	}
}
</script>

<style lang='scss' scoped>
	.weui-mask{
	  position:fixed;
	  z-index:1000;
	  top:0;
	  right:0;
	  left:0;
	  bottom:0;
		background:rgba(0, 0, 0, 0.6);
		&__transparent{
			position:fixed;
			z-index:1000;
			top:0;
			right:0;
			left:0;
			bottom:0;
		}
	}
  .weui-dialog{
		position:fixed;
		z-index:5000;
		width:80%;
		max-width:300px;
		top:50%;
		left:50%;
		-webkit-transform:translate(-50%, -50%);
						transform:translate(-50%, -50%);
		background-color:#FFFFFF;
		text-align:center;
		border-radius:3px;
		overflow:hidden;
		&__hd{
			padding:1.3em 1.6em 0.5em;
		}
	}
	.weui-dialog__title{
	  font-weight:400;
	  font-size:18px;
	}
	.weui-dialog__bd{
	  padding:0 1.6em 0.8em;
	  min-height:40px;
	  font-size:15px;
	  line-height:1.3;
	  word-wrap:break-word;
	  word-break:break-all;
	  color:#999999;
	}
	.weui-dialog__bd:first-child{
	  padding:2.7em 20px 1.7em;
	  color:#353535;
	}
	.weui-dialog__ft{
	  position:relative;
	  line-height:48px;
	  font-size:18px;
	  display:-webkit-box;
	  display:-webkit-flex;
	  display:flex;
	}
	.weui-dialog__ft:after{
	  content:" ";
	  position:absolute;
	  left:0;
	  top:0;
	  right:0;
	  height:1px;
	  border-top:1px solid #D5D5D6;
	  color:#D5D5D6;
	  -webkit-transform-origin:0 0;
	          transform-origin:0 0;
	  -webkit-transform:scaleY(0.5);
	          transform:scaleY(0.5);
	}
	.weui-dialog__btn{
	  display:block;
	  -webkit-box-flex:1;
	  -webkit-flex:1;
	          flex:1;
	  color:#3CC51F;
	  text-decoration:none;
	  -webkit-tap-highlight-color:rgba(0, 0, 0, 0);
	  position:relative;
		min-width: 50%;
		overflow: hidden;
		text-overflow: ellipsis;
		padding: 0 5px;
		box-sizing: border-box;
	}
	.weui-dialog__btn:active{
	  background-color:#EEEEEE;
	}
	.weui-dialog__btn:after{
	  content:" ";
	  position:absolute;
	  left:0;
	  top:0;
	  width:1px;
	  bottom:0;
	  border-left:1px solid #D5D5D6;
	  color:#D5D5D6;
	  -webkit-transform-origin:0 0;
	          transform-origin:0 0;
	  -webkit-transform:scaleX(0.5);
	          transform:scaleX(0.5);
	}
	.weui-dialog__btn:first-child:after{
	  display:none;
	}
	.weui-dialog__btn_default{
	  color:#353535;
	}
	.weui-dialog__btn_primary{
	  color:#0BB20C;
	 }
	@media screen and (min-width: 1024px){
		.weui-dialog{
				width:35%;
		}
	}
</style>

<style lang='scss'  scoped>

</style>

