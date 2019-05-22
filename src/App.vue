<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
    <!-- <Dialog v-show="dialogControl" type="confirm" title="框框"
      @weui-dialog-confirm="handleDialogAction('确定')"
      @weui-dialog-cancel="handleDialogAction('取消')">
      <p>自定义弹窗内容</p>
      <p>hahahaha，快点确定</p>
      <p>hahahaha，快点确定</p>
      <p>hahahaha，快点确定</p>
    </Dialog> -->
    <Modal :modalData = 'modalData' :showModal='showModal'></Modal>
    <Toast msg='8989' :isShow.sync='isShowToast'></Toast>
    <button @click="isShowToast=true">点击改变toast</button>
    <Slider :imgList="imgList" sty="width:500px;height:300px;-webkit-animation-duration:6s;"></Slider>
  </div>
</template>

<script>
import Dialog from "./components/dialog/dialog";
import Modal from "./components/modal/modal";
import Toast from "./components/toast/toast";
import Slider from "./components/slider-simple/slider-simple";
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      message: '我是m页面',
      dialogControl: true,
      isShowToast: false,
      imgList: ['http://img5.imgtn.bdimg.com/it/u=2198746125,2255961738&fm=26&gp=0.jpg',
      'http://img.zcool.cn/community/01f09e577b85450000012e7e182cf0.jpg@1280w_1l_2o_100sh.jpg',
      'http://pic19.nipic.com/20120308/4970979_102637717125_2.jpg'
      ],
      modalData:{
        confirmText:'确定',
        cancelText:'取消',
        content: 'dsfdasfasdgfdsgsgdfgdf?',
        confirmColor: 'green',
        confirmFun: ()=>{
          // this.confirm();
          this.showModal = false;
        },
        cancelFun: ()=>{
          console.log('cancel')
          this.showModal = false;
        }
      },
      showModal: true
    }
  },
  methods: {
    handleDialogAction (action) {
      alert(`你刚刚点击了“${action}”`)
      this.dialogControl = false
    }
  },
  components: {
    Dialog,
    Toast,
    Slider,
    Modal
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
