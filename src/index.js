import Dialog from './components/dialog/index.js';
import Toast from './components/toast/index.js';
import SliderSimple from './components/slider-simple/index.js';
import Modal from './components/modal/index.js';

// 返回一个 扩展实例构造器
const ToastConstructor = vue.extend(Toast);

const components = [
  Dialog,
  Toast,
  SliderSimple,
  Modal
]

const install = function(Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component);
  })
  function showToast(text, duration = 2000) {

    // 实例化一个 toast.vue
    const toastDom = new ToastConstructor({
      el: document.createElement('div'),
      data() {
        return {
          msg: text,
          isShow: true
        };
      }
    })

    // 把 实例化的 toast.vue 添加到 body 里
    document.body.appendChild(toastDom.$el)

    // 过了 duration 时间后隐藏
    setTimeout(() => { toastDom.isShow = false }, duration)
  }
  Vue.prototype.$toast = showToast;
}

/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  Dialog,
  Toast,
  SliderSimple,
  Modal
}