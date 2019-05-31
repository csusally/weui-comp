<template>
	<div id="toast" v-show='isShow'>
	    <div class="weui-mask_transparent"></div>
	    <div class="weui-toast">
	        <i class="weui-icon_toast weui-icon-success-no-circle"></i>
	        <p class="weui-toast_content">{{msg}}</p>
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



<style lang='scss' scoped>
	@import '../../style/widget/weui-tips/weui-toast';
</style>

<style lang='scss'>
	@import '../../style/widget/weui-tips/weui-mask';
</style>
