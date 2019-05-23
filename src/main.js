import Vue from 'vue'
import App from './App.vue'
import toastRegistry from "./components/toast/plugin";
Vue.use(toastRegistry);

new Vue({
  el: '#app',
  render: h => h(App)
})
