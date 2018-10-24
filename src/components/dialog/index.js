// 引入组件
import Dialog from './dialog'

Dialog.install = Vue => Vue.component(Dialog.name, Dialog);

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Dialog);
}

export default Dialog