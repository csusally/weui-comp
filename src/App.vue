<template>
  <div id="app">
    <!-- search-bar -->
    <h2 class="title">search-bar</h2>
    <search-bar></search-bar>

    <!-- 滑动 -->
    <h2 class="title">slider</h2>
    <Slider :imgList="imgList" sty="-webkit-animation-duration:16s;"></Slider>

    <!-- Dialog 對話框 -->
    <Dialog v-show="dialogControl" type="confirm" title="弹框标题哦" confirmTextColor='red' 
      @weui-dialog-confirm="handleDialogAction('确定')"
      @weui-dialog-cancel="handleDialogAction('取消auto')"> 
      自定义弹窗内容
    </Dialog>

    <!-- Modal 彈框 与 对话框类似 -->
    <Modal :modalData = 'modalData' :showModal='showModal'></Modal>

    <!-- toast 提示框 一定时间后消失-->
    <h2 class="title">toast 提示框</h2>
    <button @click="showToast">showtoast 2秒消失</button>
    <button @click="toastshow">showtoast</button>
    <button @click="toasthide">hidetoast </button>

    <h2 class="title">load-more</h2>
    <button>加载数据</button>
    <load-more></load-more>

    <h2>picker</h2>
    <button @click="showpicker">picker show</button>
    <button>picker hide</button>
    <picker ref="picker"></picker>


  </div>
</template>

<script>
import Slider from "./components/slider-simple/slider-simple";
import SearchBar from "./components/search-bar/search-bar";
import LoadMore from "./components/load-more/load-more";
import Picker from "./components/picker/picker";
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      message: '我是m页面',
      dialogControl: false,
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
      showModal: false
    }
  },
  mounted(){
  },
  methods: {
    handleDialogAction (action) {
      // alert(`你刚刚点击了“${action}”`)
      this.dialogControl = false
    },
    showToast(){
      this.$toast('我是弹出消息')
    },
    toastshow(){
      this.$showToast('show');
      setTimeout(() => {
        this.toasthide();
      }, 4000);
    },
    toasthide(){
      this.$hideToast()
    },
    showpicker(){
      this.$refs.picker._data.isShow = true;
    }
  },
  components: {
    Slider,
    SearchBar,
    LoadMore,
    Picker
  }
}
</script>

<style lang="scss">
  @import './style/base/reset';
</style>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  min-width:500px;
}

h1, h2 {
  font-weight: normal;
}

h2.title {
  margin-top: 50px;
  text-align: left;
  color: #42b983;
  padding: 0 20px;
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

.show{
  transform: translate(0, 0);
}

.hide{
  transform: translate(0, 100%);
}
</style>
