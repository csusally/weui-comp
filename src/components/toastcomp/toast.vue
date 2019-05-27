<template>
	<div id="toast" v-show='show'>
	    <div class="weui-mask__transparent"></div>
	    <div class="weui-toast">
	        <i class="weui-icon__toast"></i>
	        <p class="weui-toast__content">{{text}}</p>
	    </div>
	</div>
</template>

<script>
export default {
	name:'Toast',
	props: { 
		/**
		 * toast框的内容
		 */
		msg: {
			type: String,
			required: false,
			default: '加载中'
		},
		/*
			* 控制toast 显示隐藏
			*/
		isShow: {
			type: Boolean,
			required: false,
			default: false
		}
	},
	data(){
		return {
			text: this.msg,
			show: this.isShow
		}
	},
	// watch: {
	// 	// 如果 `question` 发生改变，这个函数就会运行
	// 	isShow: function (current, old) {
	// 		var self = this;
	// 			console.log('show')
	// 		if(current){
	// 				setTimeout(function(){
	// 					self.$emit('update:isShow', false);
	// 				},1000)
	// 			}
	// 	}
	// }, 
	methods:{
		showToast(){
			self.$emit('update:isShow', true);
		},
		hideToast(){
			self.$emit('update:isShow', false);
		}
	}
  	
}
</script>

<style>
	/* @import url('../../assets/weui.min.css'); */
</style>

<style scoped>
	.weui-toast{
	  position:fixed;
	  z-index:5000;
	  width:14em;
	  min-height:4em;
	  bottom:20%;
	  left:50%;
	  margin-left:-7em;
	  background:rgba(17, 17, 17, 0.7);
	  text-align:center;
	  border-radius:5px;
	  color:#FFFFFF;
	}
	.weui-icon_toast{
	  margin:22px 0 0;
	  display:block;
	}
	.weui-icon__toast.weui-icon-success-no-circle:before{
	  color:#FFFFFF;
	  font-size:55px;
	}
	.weui-icon__toast.weui-loading{
	  margin:30px 0 0;
	  width:38px;
	  height:38px;
	  vertical-align:baseline;
	}
	.weui-toast__content{
		box-sizing: border-box;
	  	padding:5px;
	  	width: 100%;
	  	height: 100%;
	}
	.weui-mask__transparent{
	  position:fixed;
	  z-index:1000;
	  top:0;
	  right:0;
	  left:0;
	  bottom:0;
	}
</style>