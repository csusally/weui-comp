<template>
  <div class="slider" >
    <input
      type="radio"
      name="slider"
      v-for="(item,  index) in  imgList"
      :key="index"
      :id="'l0'+index"
      :value="index"
    >
    <div id="wrap">
      <ul id="slider" :style="sty">
        <li v-for="(item,  index) in  imgList" :key="index" :style="sty">
          <img class="weui-slider-list-img" :src="item">
        </li>
      </ul>
    </div>

    <div id="opts">
      <label v-for="(item,  index) in  imgList" :key="index" :for="'l0'+index">{{index+1}}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "SliderSimple",
  props: {
    imgList: {
      type: Array,
      required: true,
      default: ["1", "2", "3"]
    },
    sty: {
      type: String,
      required: false,
      default: "-webkit-animation-duration:16s;"
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

ul {
  list-style: none;
}
.slider {
  position: relative;
}

#wrap {
  position: relative;
  overflow: hidden;
  margin: 0 auto;
  max-height: 400px;
}

#slider {
  width: 300%;
  height: 100%;
  font: 100px/400px Microsoft Yahei;
  text-align: center;
  color: #fff;
  margin-left: 0;
  -webkit-animation: slide1 3s ease-out infinite;
  overflow: hidden;
  display: flex;
  flex-direction: row;
}

#slider li {
  flex: 1;
  text-align: center;
  overflow: hidden;
  max-height: 400px;
}

#slider li:nth-child(1) {
  background: #6bacef;
}

#slider li:nth-child(2) {
  background: #297cd3;
}

#slider li:nth-child(3) {
  background: #01254a;
}

/*创建三种动画策略*/
@-webkit-keyframes slide1 {
  0% {
    margin-left: 0;
  }
  23% {
    margin-left: 0;
  }
  33% {
    margin-left: -100%;
  }
  56% {
    margin-left: -100%;
  }
  66% {
    margin-left: -200%;
  }
  90% {
    margin-left: -200%;
  }
  100% {
    margin-left: 0;
  }
}

@-webkit-keyframes slide2 {
  0% {
    margin-left: -100%;
  }
  23% {
    margin-left: -100%;
  }
  33% {
    margin-left: -200%;
  }
  56% {
    margin-left: -200%;
  }
  66% {
    margin-left: 0;
  }
  90% {
    margin-left: 0;
  }
  100% {
    margin-left: -100%;
  }
}

@-webkit-keyframes slide3 {
  0% {
    margin-left: -200%;
  }
  23% {
    margin-left: -200%;
  }
  33% {
    margin-left: 0;
  }
  56% {
    margin-left: 0;
  }
  66% {
    margin-left: -100%;
  }
  90% {
    margin-left: -100%;
  }
  100% {
    margin-left: -200%;
  }
}

/*修改动画名称*/
#l00:checked ~ #wrap #slider {
  -webkit-animation-name: slide1;
}

#l01:checked ~ #wrap #slider {
  -webkit-animation-name: slide2;
}

#l02:checked ~ #wrap #slider {
  -webkit-animation-name: slide3;
}

/*短暂地取消动画名称，模拟重启动画*/
#l00:active ~ #wrap #slider {
  -webkit-animation-name: none;
  margin-left: 0;
}

#l01:active ~ #wrap #slider {
  -webkit-animation-name: none;
  margin-left: -100%;
}

#l02:active ~ #wrap #slider {
  -webkit-animation-name: none;
  margin-left: -200%;
}

#opts {
  margin: 0 auto;
  color: #fff;
  text-align: center;
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
}

#opts label {
  float: left;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  background: #01254a;
  border-radius: 50%;
  cursor: pointer;
}

#opts label:hover {
  background: #405871;
}

/* 隐藏Input按钮*/
#l00,
#l01,
#l02 {
  display: none;
  margin: 0;
}

.weui-slider-list-img {
  margin: 0;
  width: 100%;
  height: 100%;
  margin: 0;
}
</style>
