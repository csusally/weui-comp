<template>
  <div class="container">
    <!-- <div class="page__hd">
      <h1 class="page__title">Loadmore</h1>
      <p class="page__desc">加载更多</p>
    </div> -->
    <div class="page__bd">
      <div class="weui-loadmore">
          <i class="weui-loading"></i>
          <span class="weui-loadmore__tips">正在加载</span>
      </div>
      <div class="weui-loadmore weui-loadmore_line">
          <span class="weui-loadmore__tips">暂无数据</span>
      </div>
      <div class="weui-loadmore weui-loadmore_line weui-loadmore_dot">
          <span class="weui-loadmore__tips"></span>
      </div>
    </div>
  </div>     
</template>

<script>
export default {
  data(){
    return {
      
    }
  },
  methods:{
    
  }
}
</script>

<style lang="scss">
  @import '../../style/icon/weui-icon_font';
</style>

<style lang="scss">
  @import '../../style/icon/weui-icon_font';
</style>

<style lang="scss">
  @import '../../style/widget/weui-tips/weui-loadmore';
</style>

<style lang="scss">
  @import '../../style/widget/weui-loading/weui-loading';
</style>

