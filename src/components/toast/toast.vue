<template>
	<div id="toast" v-show='isShow'>
	    <div class="weui-mask__transparent"></div>
	    <div class="weui-toast">
	        <i class="weui-icon__toast weui-icon-success-no-circle"></i>
	        <p class="weui-toast__content">{{msg}}</p>
	    </div>
	</div>
</template>

<script>
export default {
	name:'Toast',
	data(){
		return {
			msg: '',
			isShow: false
		}
	}
  	
}
</script>



<style lang='scss'>
	// @import '../../style/widget/weui-tips/weui-toast';
</style>

<style lang='scss'>
	@import '../../style/widget/weui-tips/weui-mask';
</style>
<style scoped>
	.weui-toast{
	  position:fixed;
	  z-index:5000;
	  width:7.6em;
	  min-height:4em;
	  top:80%;
	  left:50%;
	  margin-left:-3.8em;
	  background:rgba(17, 17, 17, 0.7);
	  text-align:center;
	  border-radius:5px;
	  color:#FFFFFF;
	}
	/* .weui-icon_toast{
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
	} */
</style>
