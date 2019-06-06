<template>
  <div>
    <div class="weui-cells" >
        <div class="weui-cell">
            <div class="weui-cell__bd">
                <input class="weui-input" type="text" placeholder="请输入文本"/>
            </div>
        </div>
    </div>
    <div class="weui-cells weui-cells_form">
        <div class="weui-cell">
            <div class="weui-cell__bd">
                <textarea class="weui-textarea" placeholder="请输入文本" rows="3"></textarea>
                <div class="weui-textarea-counter"><span>0</span>/200</div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'TextInput',
    data(){
      return {
        
      }
    }
      
  }
</script>


<style lang='scss' scoped>
	@import '../../../style/widget/weui-cell/weui-check';
</style>
<style lang='scss' scoped>
	@import '../../../style/widget/weui-cell/weui-switch';
</style>