<template>
  <div class=''  v-show="isShow" ref="picker">
    <div class="weui-mask" :class="isShow?'weui-animate-fade-in':'weui-animate-fade-out'"></div>
    <div class="weui-picker"  :class="isShow?'weui-animate-slide-up':'weui-animate-slide-down'">
      <div class="weui-picker__hd">
        <a href="javascript:;" data-action="cancel" class="weui-picker__action" @click="handleEvent(0)">取消</a>
        <a
          href="javascript:;"
          data-action="select"
          class="weui-picker__action"
          id="weui-picker-confirm"
					@click="handleEvent(1)"
        >确定</a>
      </div>
      <div class="weui-picker__bd">
        <div class="weui-picker__group">
          <div class="weui-picker__mask"></div>
          <div class="weui-picker__indicator"></div>
          <div
            class="weui-picker__content"
            :style='pickerStyle'
						ref="pickerWrap"
          >
  					<div v-for="item in pickerContent" :key="item.value" class="weui-picker__item weui-picker__item_disabled">{{item.label+`${item.disabled?'(disabled)':''}`}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Picker",
  data() {
    return {
			pickerContent: [{
            label: '飞机票',
						value: 0,
        }, {
            label: '火车票',
						value: 1,
        }, {
            label: '的士票',
						value: 2,
        },{
            label: '公交票',
            disabled: true,
						value: 3,
        }, {
            label: '其他',
						value: 4,
				}],
			moveDistance:0,
			translateYOrigin: 102,
			totalLength: 0,
			// pickerStyle: `transform: translate3d(0px, 68px, 0px); transition: all 0.3s ease 0s;`,
			isShow: false,
			translateTo: 68
		}	
	},
	computed:{
		pickerStyle(){
			return `transform: translate3d(0px, ${this.translateTo}px, 0px); transition: all 0.3s ease 0s;`
		}
	},
	mounted(){
		var startX = 0, startY = 0,endX = 0, endY = 0; 
		this.$nextTick().then(()=>{
			let dom = this.$refs.picker;
			let translateY = this.$refs.pickerWrap.style.transform.split(',')[1].trim().slice(0,-2);

			dom.addEventListener('touchstart',(e)=> {
				var touch1 = event.targetTouches[0];
            startX = touch1.pageX;
            startY = touch1.pageY;
				console.log('start',startY)
			},false)
			dom.addEventListener('touchmove', (e)=> {
				e.preventDefault();
				var touch2 = event.targetTouches[0];
					endX = touch2.pageX;
					endY = touch2.pageY;
					this.moveDistance = endY-startY;
					this.translateTo = this.moveDistance + this.translateYOrigin;
					console.log('move',endY-startY)
			},false)
			dom.addEventListener('touchend', (e)=> {
				this.moveDistance = endY-startY;
				this.translateTo = this.moveDistance + this.translateYOrigin;
				// console.log(this.moveDistance)
				if(this.translateTo > 120){
					this.translateTo = 102
				}

				if(this.translateTo < 102-this.totalLength){
					this.translateTo = 102-this.totalLength
				}
				this.translateYOrigin = this.translateTo;
			},false)
		
		})


	},
	methods:{
		handleEvent(param){
			this.isShow = false;
			// 滑动口总高度
			let totalLength = 34*this.pickerContent;
			this.totalLength = totalLength;
			let translateY = this.$refs.pickerWrap.style.transform.split(',')[1].trim().slice(0,-2);
			console.log((102-translateY)/34)
			if (param == 1){

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