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
      <div class="weui-picker__bd" v-if="!isMultiCol">
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
			<div class="weui-picker__bd multi"  v-if="isMultiCol">
				<div class="weui-picker__group" v-for="(picker,index) in multiPicker" :key="index">
          <div class="weui-picker__mask"></div>
          <div class="weui-picker__indicator"></div>
          <div
            class="weui-picker__content"
            :style='picker.style'
						ref="pickerWrap"
          >
  					<div v-for="item in picker.content" :key="item.value" class="weui-picker__item weui-picker__item_disabled">{{item.label+`${item.disabled?'(disabled)':''}`}}</div>
          </div>
        </div>
			</div>
    </div>
  </div>
</template>

<script>
export default {
	name: "Picker",
	props:{
		itemNum:{
			type: Number,
			required:false,
			default: 7
		},
		pickerItemHeight:{
			type: Number,
			required:false,
			default: 34
		},
		isMultiCol:{
			type: Boolean,
			required: false,
			default: true
		}
	},
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
				},{
            label: '其他1',
						value: 5,
				},{
            label: '其他2',
						value: 6,
				},{
            label: '其他3',
						value: 7,
				},{
            label: '其他4',
						value: 8,
				},{
            label: '其他5',
						value: 9,
				}],
			moveDistance:0,
			translateYOrigin: 102,
			totalLength: 0,
			isShow: false,
			translateTo: 102,

			multiPicker:[
				{
					content:[
						{
								label: '飞机票',
								value: 0,
						}, {
								label: '火车票',
								value: 1,
						}, {
								label: '的士票',
								value: 2,
						}, {
								label: '公交票',
								disabled: true,
								value: 3,
						}, {
								label: '其他',
								value: 4,
						}, {
								label: '其他1',
								value: 5,
						}, {
								label: '其他2',
								value: 6,
						}],
					// moveDistance:0,
					translateYOrigin: 102,
					// totalLength: 0,
					translateTo: 68,
					style: ''
				},
			]
		}	
	},
	computed:{
		pickerStyle(){
			return `transform: translate3d(0px, ${this.translateTo}px, 0px); transition: all 0.3s ease 0s;`
		},
		multiPicker(){
			this.multiPicker.forEach((item,index)=>{
				item.style = `transform: translate3d(0px, ${item.translateTo}px, 0px); transition: all 0.3s ease 0s;`
			})
			return this.multiPicker.concat([]);
		}
	},
	mounted(){
		var startX = 0, startY = 0,endX = 0, endY = 0; 
		let pickerItemHeight = this.pickerItemHeight; //单位是px
		let pickerItemNum = this.pickerContent.length; //待选的item数量
		let pickerHalfTopHeight = parseInt(this.itemNum/2)*pickerItemHeight;  //picker item容器上半部分的高度 px this.itemNum：picker容器可容的item总数
		let totalLength = pickerItemHeight*pickerItemNum;
		this.totalLength = totalLength;
		this.$nextTick().then(()=>{
			let dom = this.$refs.picker;
			this.touchEvent(dom,{pickerItemHeight,pickerItemNum,pickerHalfTopHeight}) //移动端touch事件
			this.mousewheelEvent(dom,{pickerItemHeight:pickerItemHeight}) //pc端滚轮事件
			this.mouseDrapEvent(dom,{pickerItemHeight,pickerItemNum,pickerHalfTopHeight})	//pc端鼠标拖动事件
		})


	},
	methods:{
		handleEvent(param){
			this.isShow = false;
			// 滑动口总高度
			let translateY = this.$refs.pickerWrap.style.transform.split(',')[1].trim().slice(0,-2);
			let itemIndex =((parseInt(this.itemNum/2))*this.pickerItemHeight-translateY)/this.pickerItemHeight;
			console.log(translateY)
			console.log(itemIndex)
			if (param == 1){
				this.$emit('selectItem',this.pickerContent[itemIndex]);
			}
		},
		touchEvent(elem,options){
			var startX = 0, startY = 0,endX = 0, endY = 0;
			let pickerItemNum = options.pickerItemNum;
			let pickerHalfTopHeight =  options.pickerHalfTopHeight;
			let pickerItemHeight = options.pickerItemHeight;
			elem.addEventListener('touchstart',(e)=> {
				var touchStart = e.targetTouches[0];
				startX = touchStart.pageX;
				startY = touchStart.pageY;
				this.moveDistance = 0;
				this.translateTo = this.moveDistance + this.translateYOrigin;
				console.log('start',startY)
			},false)
			elem.addEventListener('touchmove', (e)=> {
				e.preventDefault();
				var touchMove = e.targetTouches[0];
				endX = touchMove.pageX;
				endY = touchMove.pageY;
				this.moveDistance = endY-startY;
				this.translateTo = this.moveDistance + this.translateYOrigin;
				console.log('move',endY-startY)
			},false)
			elem.addEventListener('touchend', (e)=> {
				this.revisePosition();
			},false)
		},
		mousewheelEvent(elem,options){
			let pickerItemHeight = options.pickerItemHeight;
			elem.addEventListener('mousewheel',(e)=>{
				e.preventDefault();
				if(e.wheelDeltaY>0){
					console.log('向上')
					this.translateTo =  this.translateYOrigin+pickerItemHeight;
				}
				if(e.wheelDeltaY<0){
					console.log('向下')
					this.translateTo =  this.translateYOrigin-pickerItemHeight;
				}
				if(this.translateTo > 102){
					this.translateTo = 102;
				}
				if(this.translateTo < 102-this.totalLength + pickerItemHeight){
					this.translateTo = 102-this.totalLength + pickerItemHeight;
				}
				this.translateYOrigin = this.translateTo;
			},false)
		},
		mouseDrapEvent(elem,options) {
			var startX = 0, startY = 0,endX = 0, endY = 0;
			let pickerItemNum = options.pickerItemNum;
			let pickerHalfTopHeight =  options.pickerHalfTopHeight;
			let pickerItemHeight = options.pickerItemHeight;
			let self = this;
			elem.addEventListener('mousedown',	start);

			function start(event) {
					// 鼠标左键
					console.log('drag',event)
				if (event.button == 0) {
						startX = event.pageX;
						startY = event.pageY;
						self._data.moveDistance = 0;
						self._data.translateTo = self._data.moveDistance + self._data.translateYOrigin;
						console.log(self)
						document.addEventListener('mousemove', move);
						document.addEventListener('mouseup', stop);
				}
				return false;//阻止默认事件或冒泡
			}

			function move(event) {
				console.log('move',event)
				event.preventDefault();
				endX = event.pageX;
				endY = event.pageY;
				self._data.moveDistance = endY-startY;
				self._data.translateTo = self._data.moveDistance + self._data.translateYOrigin;
				return false;//阻止默认事件或冒泡
			}

			function stop(event) {
				document.removeEventListener('mousemove', move);
				document.removeEventListener('mouseup', stop);
				console.log('stop',event)
				self.revisePosition();
			}


		},
		revisePosition() {
			let pickerItemHeight = this.pickerItemHeight; //单位是px
			let pickerItemNum = this.pickerContent.length; //待选的item数量
			let pickerHalfTopHeight = parseInt(this.itemNum/2)*pickerItemHeight;  //picker item容器上半部分的高度 px this.itemNum：picker容器可容的item总数
			this.translateTo = this.moveDistance + this.translateYOrigin;
			if(this.translateTo%pickerItemHeight !=0){
				let flag = 1;
				if(this.translateTo<0){
					flag=-1;
				}
				if(this.translateTo%pickerItemHeight*flag >  pickerItemHeight/2){
					this.translateTo = (parseInt(this.translateTo/pickerItemHeight)*flag+1)*pickerItemHeight*flag;
				}else{
					this.translateTo = parseInt(this.translateTo/pickerItemHeight)*pickerItemHeight;
				}
			}

			if(this.translateTo > pickerHalfTopHeight){
				this.translateTo = pickerHalfTopHeight
			}

			if(this.translateTo < pickerHalfTopHeight-this.totalLength +pickerItemHeight){
				this.translateTo = pickerHalfTopHeight-this.totalLength +pickerItemHeight;
			}
			this.translateYOrigin = this.translateTo;
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