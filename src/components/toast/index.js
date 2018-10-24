// 引入组件
import Toast from './toast'

Toast.install = Vue => Vue.component(Toast.name, Toast);

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Toast);
}

export default Toast