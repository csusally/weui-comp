<template>
<div class="container">
  <div class="weui-search-bar" id="searchBar">
    <form class="weui-search-bar__form">
        <div class="weui-search-bar__box">
            <i class="weui-icon-search"></i>
            <input type="search" class="weui-search-bar__input" id="searchInput" placeholder="搜索" required/>
            <a href="javascript:;" class="weui-icon-clear" id="searchClear"></a>
        </div>
        <label class="weui-search-bar__label" id="searchText">
            <i class="weui-icon-search"></i>
            <span>搜索</span>
        </label>
    </form>
    <a href="javascript:;" class="weui-search-bar__cancel-btn" id="searchCancel">取消</a>
  </div>
  <div class="weui-cells searchbar-result" id="searchResult">
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

<style scoped>
  @import '../../style/icon/weui-icon_font';
</style>

<style lang="scss" scoped>
  .weui-search-bar{
    position:relative;
    padding:8px;
    display:-webkit-box;
    display:-webkit-flex;
    display:flex;
    box-sizing:border-box;
    background-color:#EDEDED;
    -webkit-text-size-adjust:100%;
    -webkit-box-align:center;
    -webkit-align-items:center;
            align-items:center;
  }
  .weui-search-bar.weui-search-bar_focusing .weui-search-bar__cancel-btn{
    display:block;
  }
  .weui-search-bar.weui-search-bar_focusing .weui-search-bar__label{
    display:none;
  }
  .weui-search-bar__form{
    position:relative;
    -webkit-box-flex:1;
    -webkit-flex:auto;
            flex:auto;
    background-color:#FFFFFF;
    border-radius:4px;
  }
  .weui-search-bar__box{
    position:relative;
    padding-left:32px;
    padding-right:32px;
    height:100%;
    width:100%;
    box-sizing:border-box;
    z-index:1;
  }
  .weui-search-bar__box .weui-search-bar__input{
    padding:8px 0;
    width:100%;
    height:1.14285714em;
    border:0;
    font-size:14px;
    line-height:1.14285714em;
    box-sizing:content-box;
    background:transparent;
    caret-color:#07C160;
  }
  .weui-search-bar__box .weui-search-bar__input:focus{
    outline:none;
  }
  .weui-search-bar__box .weui-icon-search{
    position:absolute;
    top:50%;
    left:8px;
    margin-top:-14px;
    line-height:28px;
  }
  .weui-search-bar__box .weui-icon-clear{
    position:absolute;
    top:50%;
    right:0;
    margin-top:-14px;
    padding:0 8px;
    line-height:28px;
  }
  .weui-search-bar__label{
    position:absolute;
    top:0;
    right:0;
    bottom:0;
    left:0;
    z-index:2;
    font-size:0;
    border-radius:4px;
    line-height:32px;
    text-align:center;
    color:rgba(0, 0, 0, 0.5);
    background:#FFFFFF;
  }
  .weui-search-bar__label span{
    display:inline-block;
    font-size:14px;
    vertical-align:middle;
  }
  .weui-search-bar__label .weui-icon-search{
    margin-right:4px;
  }
  .weui-search-bar__cancel-btn{
    display:none;
    margin-left:8px;
    line-height:28px;
    color:#576B95;
    white-space:nowrap;
  }
  .weui-search-bar__input:not(:valid) ~ .weui-icon-clear{
    display:none;
  }
</style>

