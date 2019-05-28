<template>
<div class="container">
  <div class="weui-search-bar" id="searchBar">
    <form class="weui-search-bar__form" >
        <div class="weui-search-bar__box">
            <i class="weui-icon-search"></i>
            <input type="search" class="weui-search-bar__input" id="searchInput" placeholder="搜索" required  auto-focus v-model="inputValue" @keydown="keyDown"/>
            <a href="javascript:;" class="weui-icon-clear" id="searchClear"></a>
        </div>
        <label class="weui-search-bar__label" id="searchText" @click="inputFocus" v-show="lobelShow">
            <i class="weui-icon-search"></i>
            <span>搜索</span>
        </label>
    </form>
    <a href="javascript:;" class="weui-search-bar__cancel-btn" id="searchCancel" @click="clear">取消</a>
  </div>
  <div class="weui-cells searchbar-result" id="searchResult" v-if="inputValue">
      <div class="weui-cell weui-cell_access">
          <div class="weui-cell__bd weui-cell_primary">
              <p>实时搜索文本</p>
          </div>
      </div>
      <div class="weui-cell weui-cell_access">
          <div class="weui-cell__bd weui-cell_primary">
              <p>实时搜索文本</p>
          </div>
      </div>
      <div class="weui-cell weui-cell_access">
          <div class="weui-cell__bd weui-cell_primary">
              <p>实时搜索文本</p>
          </div>
      </div>
      <div class="weui-cell weui-cell_access">
          <div class="weui-cell__bd weui-cell_primary">
              <p>实时搜索文本</p>
          </div>
      </div>
  </div>
</div>     
</template>

<script>
export default {
  data(){
    return {
      lobelShow: true,
      inputValue: '',
    }
  },
  methods:{
    inputFocus(){
      console.log('fd')
      this.lobelShow = false;
    },
    keyDown(){
      this.relatedShow = true
    },
    clear(){
      this.inputValue = '';
    }
  }
}
</script>



<style lang="scss">
  @import '../../style/icon/weui-icon_font';
</style>

<style lang="scss">
  @import '../../style/widget/weui-searchbar/weui-searchbar';
</style>
