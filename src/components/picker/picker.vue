<template>
  <div class v-show="isShow" ref="picker">
    <div class="weui-mask" :class="isShow?'weui-animate-fade-in':'weui-animate-fade-out'"></div>
    <div class="weui-picker" :class="isShow?'weui-animate-slide-up':'weui-animate-slide-down'">
      <div class="weui-picker__hd">
        <a
          href="javascript:;"
          data-action="cancel"
          class="weui-picker__action"
          @click="handleEvent(0)"
        >取消</a>
        <a
          href="javascript:;"
          data-action="select"
          class="weui-picker__action"
          id="weui-picker-confirm"
          @click="handleEvent(1)"
        >确定</a>
      </div>
      <div class="weui-picker__bd" v-if="!isMultiCol">
        <div class="weui-picker__group">
          <div class="weui-picker__mask"></div>
          <div class="weui-picker__indicator"></div>
          <div class="weui-picker__content" :style="pickerStyle" ref="pickerWrap">
            <div
              v-for="item in pickerContent"
              :key="item.value"
              class="weui-picker__item"
              :class="item.disabled?'weui-picker__item_disabled':''"
            >{{item.label+`${item.disabled?'(disabled)':''}`}}</div>
          </div>
        </div>
      </div>
      <div class="weui-picker__bd multi" v-if="isMultiCol">
        <div
          class="weui-picker__group"
          v-for="(picker,index) in multiPicker"
          :key="index"
          data-index="index"
          ref="multi"
        >
          <div class="weui-picker__mask"></div>
          <div class="weui-picker__indicator"></div>
          <div
            class="weui-picker__content"
            :style="multiPickerStyle[index]"
            :ref="'pickerWrap'+index"
          >
            <div
              v-for="item in picker.content"
              :key="item.value"
              class="weui-picker__item"
              :class="item.disabled?'weui-picker__item_disabled':''"
            >{{item.label+`${item.disabled?'(disabled)':''}`}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Picker",
  props: {
    itemNum: {
      type: Number,
      required: false,
      default: 7
    },
    pickerItemHeight: {
      type: Number,
      required: false,
      default: 34
    },
    isMultiCol: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  data() {
    return {
      pickerContent: [
        {
          label: "飞机票",
          value: 0
        },
        {
          label: "火车票",
          value: 1
        },
        {
          label: "的士票",
          value: 2
        },
        {
          label: "公交票",
          disabled: true,
          value: 3
        },
        {
          label: "其他",
          value: 4
        },
        {
          label: "其他1",
          value: 5
        },
        {
          label: "其他2",
          value: 6
        },
        {
          label: "其他3",
          value: 7
        },
        {
          label: "其他4",
          value: 8
        },
        {
          label: "其他5",
          value: 9
        }
      ],
      moveDistance: 0,
      translateYOrigin: 102,
      totalLength: 0,
      isShow: false,
      translateTo: 102,

      multiPicker: [
        {
          content: [
            {
              label: "2010年",
              value: 2010
            },
            {
              label: "2011年",
              value: 2011
            },
            {
              label: "2012年",
              value: 2012
            },
            {
              label: "2013年",
              disabled: true,
              value: 2013
            },
            {
              label: "2014年",
              value: 2014
            },
            {
              label: "2015年",
              value: 2015
            },
            {
              label: "2016年",
              value: 2016
						},
						{
              label: "2017年",
              value: 2017
            },
            {
              label: "2018年",
              value: 2018
            },
            {
              label: "2019年",
              value: 2019
						},
						
          ],
          translateYOrigin: 0,

        },
        {
          content: [
            {
              label: "1月",
              value: 1
            },
            {
              label: "2月",
              value: 2
            },
            {
              label: "3月",
              value: 3
            },
            {
              label: "4月",
              disabled: true,
              value: 4
						},
						{
              label: "5月",
              value: 5
            },
            {
              label: "6月",
              value: 6
            },
            {
              label: "7月",
              value: 7
            },
            {
              label: "8月",
              disabled: true,
              value: 8
						},
						{
              label: "9月",
              value: 9
            },
            {
              label: "10月",
              value: 10
            },
            {
              label: "11月",
              value: 11
            },
            {
              label: "12月",
              disabled: true,
              value: 12
            },
          ],
          translateYOrigin: 102,
        }
      ],
      selectingIndex: ""
    };
  },
  computed: {
    pickerStyle() {
      return `transform: translate3d(0px, ${
        this.translateTo
      }px, 0px); transition: all 0.3s ease 0s;`;
    },
    multiTranslateTo() {
      let translateArray = [];
      this.multiPicker.forEach((item, index) => {
        translateArray[index] = item.translateYOrigin;
      });
      return translateArray;
    },
    multiPickerStyle() {
      let styleArray = [];
      this.multiPicker.forEach((item, index) => {
        styleArray[index] = `transform: translate3d(0px, ${
          this.multiTranslateTo[index]
        }px, 0px); transition: all 0.3s ease 0s;`;
      });
      return styleArray;
    }
  },
  mounted() {
    var startX = 0,
      startY = 0,
      endX = 0,
      endY = 0;
    let pickerItemHeight = this.pickerItemHeight; //单位是px
    let pickerItemNum = this.pickerContent.length; //待选的item数量
    let pickerHalfTopHeight = parseInt(this.itemNum / 2) * pickerItemHeight; //picker item容器上半部分的高度 px this.itemNum：picker容器可容的item总数
    let totalLength = pickerItemHeight * pickerItemNum;
    this.totalLength = totalLength;
    this.$nextTick().then(() => {
      // let dom = this.$refs.picker;
      // this.touchEvent(dom,{pickerItemHeight,pickerItemNum,pickerHalfTopHeight}) //移动端touch事件
      // this.mousewheelEvent(dom,{pickerItemHeight:pickerItemHeight}) //pc端滚轮事件
      // this.mouseDrapEvent(dom,{pickerItemHeight,pickerItemNum,pickerHalfTopHeight})	//pc端鼠标拖动事件
      let pickers = document.getElementsByClassName("weui-picker__group");
      pickers = Array.prototype.slice.call(pickers);
      pickers.forEach((item, index) => {
        this.touchEvent(item, {
          pickerItemHeight,
          pickerItemNum,
          pickerHalfTopHeight,
          index
        }); //移动端touch事件
        this.mousewheelEvent(item, {
          pickerItemHeight: pickerItemHeight,
          index
        }); //pc端滚轮事件
        this.mouseDrapEvent(item, {
          pickerItemHeight,
          pickerItemNum,
          pickerHalfTopHeight,
          index
        }); //pc端鼠标拖动事件
      });
    });
  },
  methods: {
    handleEvent(param) {
      this.isShow = false;
      // 滑动口总高度
      let translateY = this.$refs.pickerWrap.style.transform
        .split(",")[1]
        .trim()
        .slice(0, -2);
      let itemIndex =
        (parseInt(this.itemNum / 2) * this.pickerItemHeight - translateY) /
        this.pickerItemHeight;
      console.log(translateY);
      console.log(itemIndex);
      if (param == 1) {
        this.$emit("selectItem", this.pickerContent[itemIndex]);
      }
    },
    touchEvent(elem, options) {
      console.log(options.index);
      let pickerWrap = "pickerWrap" + options.index;
      console.log(this.$refs["pickerWrap" + options.index]);
      var startX = 0,
        startY = 0,
        endX = 0,
        endY = 0;
      let pickerItemNum = options.pickerItemNum;
      let pickerHalfTopHeight = options.pickerHalfTopHeight;
      let pickerItemHeight = options.pickerItemHeight;
      elem.addEventListener(
        "touchstart",
        e => {
          var touchStart = e.targetTouches[0];
          startX = touchStart.pageX;
          startY = touchStart.pageY;
          this.moveDistance = 0;
          this.selectingIndex = options.index;
          this.translateTo = this.moveDistance + this.translateYOrigin;
          console.log("start", e);
          console.log(this.selectingIndex);
        },
        false
      );
      elem.addEventListener(
        "touchmove",
        e => {
          e.preventDefault();
          var touchMove = e.targetTouches[0];
          endX = touchMove.pageX;
          endY = touchMove.pageY;
          this.moveDistance = (endY - startY)/5;
          this.translateTo = this.moveDistance + this.translateYOrigin;
          this.setTranslateOrigin();
          console.log("move", e);
        },
        false
      );
      elem.addEventListener(
        "touchend",
        e => {
					this.revisePosition();
					// this.changeTranslateOrigin();
          this.selectingIndex = "";
          this.moveDistance = 0;
        },
        false
      );
    },
    mousewheelEvent(elem, options) {
      let pickerItemHeight = options.pickerItemHeight;
      elem.addEventListener(
        "mousewheel",
        e => {
          e.preventDefault();
          if (e.wheelDeltaY > 0) {
            console.log("向上");
            this.translateTo = this.translateYOrigin + pickerItemHeight;
          }
          if (e.wheelDeltaY < 0) {
            console.log("向下");
            this.translateTo = this.translateYOrigin - pickerItemHeight;
          }
          if (this.translateTo > 102) {
            this.translateTo = 102;
          }
          if (this.translateTo < 102 - this.totalLength + pickerItemHeight) {
            this.translateTo = 102 - this.totalLength + pickerItemHeight;
          }
          this.translateYOrigin = this.translateTo;
        },
        false
      );
    },
    mouseDrapEvent(elem, options) {
      var startX = 0,
        startY = 0,
        endX = 0,
        endY = 0;
      let pickerItemNum = options.pickerItemNum;
      let pickerHalfTopHeight = options.pickerHalfTopHeight;
      let pickerItemHeight = options.pickerItemHeight;
      let self = this;
      elem.addEventListener("mousedown", start);

      function start(event) {
        // 鼠标左键
        console.log("drag", event);
        if (event.button == 0) {
          startX = event.pageX;
          startY = event.pageY;
          self._data.moveDistance = 0;
          self._data.selectingIndex = options.index;
          self._data.translateTo =
            self._data.moveDistance + self._data.translateYOrigin;
          console.log(self);
          document.addEventListener("mousemove", move);
          document.addEventListener("mouseup", stop);
        }
        return false; //阻止默认事件或冒泡
      }

      function move(event) {
        console.log("move", event);
        event.preventDefault();
        endX = event.pageX;
        endY = event.pageY;
        self._data.moveDistance = (endY - startY)/5;
        self._data.translateTo =
          self._data.moveDistance + self._data.translateYOrigin;
        self.setTranslateOrigin();
        return false; //阻止默认事件或冒泡
      }

      function stop(event) {
        document.removeEventListener("mousemove", move);
        document.removeEventListener("mouseup", stop);
				self.revisePosition();
				// self.changeTranslateOrigin();
        self._data.selectingIndex = "";
        self._data.moveDistance = 0;
        console.log("stop", event);
      }
    },
    revisePosition() {
      let pickerItemHeight = this.pickerItemHeight; //单位是px
      let pickerItemNum = this.pickerContent.length; //待选的item数量
			let pickerHalfTopHeight = parseInt(this.itemNum / 2) * pickerItemHeight; //picker item容器上半部分的高度 px this.itemNum：picker容器可容的item总数
			let totalLength = this.totalLength;
			let translateYOrigin = this.translateYOrigin;
			let translateTo = this.reviseTranslate({pickerItemHeight,pickerItemNum, pickerHalfTopHeight,totalLength,translateYOrigin})
			// this.translateTo = this.moveDistance + this.translateYOrigin;
			this.translateTo = translateTo;
      this.translateYOrigin = this.translateTo;
      this.changeTranslateOrigin();
		},

		reviseTranslate(params){
			console.log(params)
      let pickerItemHeight = params.pickerItemHeight; //单位是px
      let pickerItemNum = params.pickerItemNum; //待选的item数量
			let pickerHalfTopHeight = params.pickerHalfTopHeight;
			let translateYOrigin = params.translateYOrigin;
			let totalLength = params.totalLength;
			let translateTo = translateYOrigin + this.moveDistance;
			if (translateTo % pickerItemHeight != 0) {
        let flag = 1;
        if (translateTo < 0) {
          flag = -1;
        }
        if (
          (translateTo % pickerItemHeight) * flag >
          pickerItemHeight / 2
        ) {
          translateTo =
            (parseInt(translateTo / pickerItemHeight) * flag + 1) *
            pickerItemHeight *
            flag;
        } else {
          translateTo =
            parseInt(translateTo / pickerItemHeight) * pickerItemHeight;
        }
      }

      if (translateTo > pickerHalfTopHeight) {
        translateTo = pickerHalfTopHeight;
      }

      if (
        translateTo <
          pickerHalfTopHeight - totalLength + pickerItemHeight
      ) {
        translateTo =
          pickerHalfTopHeight - totalLength + pickerItemHeight;
			}
			return translateTo;
		},

		setTranslateOrigin(){
			let pickerHalfTopHeight = parseInt(this.itemNum / 2) * this.pickerItemHeight; 
			if (this.selectingIndex >= 0) {
				let index = this.selectingIndex;
				let pickerItemNum = this.multiPicker[index].content.length;
				let totalLength = pickerItemNum*this.pickerItemHeight;

				this.multiPicker[index].translateYOrigin = this.multiPicker[index].translateYOrigin + this.moveDistance;

				if(this.multiPicker[index].translateYOrigin > this.pickerItemHeight + pickerHalfTopHeight){
					this.multiPicker[index].translateYOrigin = this.pickerItemHeight + pickerHalfTopHeight;
				}
				if(this.multiPicker[index].translateYOrigin < pickerHalfTopHeight - totalLength ){
					this.multiPicker[index].translateYOrigin = pickerHalfTopHeight - totalLength;
				}
			}
		},
		
    changeTranslateOrigin() {
      if (this.selectingIndex >= 0) {
				console.log(this.selectingIndex);
				let index = this.selectingIndex;
				let pickerItemHeight = this.pickerItemHeight; //单位是px
				let pickerItemNum = this.multiPicker[index].content.length; //待选的item数量
				let pickerHalfTopHeight = parseInt(this.itemNum / 2) * pickerItemHeight; //picker item容器上半部分的高度 px this.itemNum：picker容器可容的item总数
				let totalLength =  pickerItemHeight*pickerItemNum;
				let translateYOrigin = this.multiPicker[index].translateYOrigin + this.moveDistance;

				let translateTo = this.reviseTranslate({
					pickerItemHeight,
					pickerItemNum, 
					pickerHalfTopHeight,
					totalLength,
					translateYOrigin})

				this.multiPicker[index].translateYOrigin = translateTo;

      }
    }
  }
};
</script>

<style lang='scss'>
@import "../../style/widget/weui-tips/weui-mask";
</style>

<style lang='scss' scoped>
@import "../../style/widget/weui-picker/weui-picker";
</style>

<style lang='scss'>
@import "../../style/widget/weui-animate/weui-animate";
</style>