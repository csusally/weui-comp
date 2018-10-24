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
    <Dialog v-show="dialogControl" type="confirm" title="框框"
      @weui-dialog-confirm="handleDialogAction('确定')"
      @weui-dialog-cancel="handleDialogAction('取消')">
      <p>自定义弹窗内容</p>
      <p>hahahaha，快点确定</p>
      <p>hahahaha，快点确定</p>
      <p>hahahaha，快点确定</p>
    </Dialog>
    <Toast msg='8989' :isShow.sync='isShowToast'></Toast>
    <button @click="isShowToast=true">点击改变toast</button>
  </div>
</template>

<script>
import Dialog from "./components/dialog/dialog";
import Toast from "./components/toast/toast";
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      message: '我是m页面',
      dialogControl: true,
      isShowToast: false
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
    Toast
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
