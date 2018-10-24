import Dialog from './components/dialog/index.js';
import Toast from './components/toast/index.js';

const components = [
  Dialog,
  Toast
]

const install = function(Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component);
  })
}

/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  Dialog,
  Toast
}
