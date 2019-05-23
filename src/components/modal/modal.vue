<template>
  <div id="maskshadow" v-show="show">
    <div class="mask" id="popDialog" style="z-index:999">
      <div class="in">
        <div class="closeModel"></div>
        <div class="title">title</div>
        <div class="content" style="font-size:28rpx;color:#999999">{{modalData.content}}</div>
        <div class="op" style="font-size:30rpx;">
          <span class="bb"  v-if='showCancel' @click="hideModal">{{cancelText}}</span>
          <span class="bb" :style="confirmStyle" @click="confirmModal">{{confirmText}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'Modalbox',
  props: {
    modalData: Object,
    showModal: Boolean
  },
  data() {
    return {
      // showModal: true,
      cancelText: this.modalData.cancelText ? this.modalData.cancelText: '取消',
      confirmText: this.modalData.confirmText ? this.modalData.confirmText: '确定',
      showCancel: typeof this.modalData.showCancel === 'boolean'&& !this.modalData.showCancel? false : true,
    }
  },
  computed: {
    show(){
      return this.showModal;
    },
    confirmStyle(){
      return `color:${this.modalData.confirmColor}`
    }
  },
  methods: {
    hideModal(){
      this.modalData.cancelFun();
    },
    confirmModal(){
      this.modalData.confirmFun();
    }
  }
};
</script>

<style >
#maskshadow {
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 10;
  top: 0;
  left: 0;
}
</style>
<style scoped>
#popDialog {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 0;
  z-index: 10;
}
#popDialog .in {
  min-width: 280px;
  max-width: 76px;
  height: auto;
  margin: 0 auto;
  padding-top: 10px;
  transform: translateY(-50%);
  background-color: #fff;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -o-border-radius: 5px;
  -ms-border-radius: 5px;
  border-radius: 5px;
}
#popDialog .title {
  font-size: 13px;
  text-align: center;
  padding: 5px;
}
#popDialog .content {
  font-size: 13px;
  text-align: center;
  padding: 10px 15px 15px;
}
#popDialog .op {
  display: flex;
  justify-content: center;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border-top: 1px solid #d4d4d4;
}
#popDialog .op span {
  /* display: flex; */
  flex: 1;
  min-width: 50%;
  color: #777;
  border-left: 1px solid #d4d4d4;
}
#popDialog .op span:first-child {
  border: none;
}
</style>
