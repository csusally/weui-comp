import Dialog from './components/dialog/index.js';
import Toast from './components/toast/index.js';
import SliderSimple from './components/slider-simple/index.js';
import Modal from './components/modal/index.js';


const components = [
  Dialog,
  SliderSimple,
  Modal
]

const install = function(Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component);
  })
  Vue.use(Toast);
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