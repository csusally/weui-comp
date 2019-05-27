import Vue from 'vue'
import App from './App.vue'
// import toastRegistry from "./components/globaltoast/index";
import toastRegistry from "./index";
Vue.use(toastRegistry);

new Vue({
  el: '#app',
  render: h => h(App)
})
