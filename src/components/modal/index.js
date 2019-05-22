// 引入组件
import Modal from "./modal";

Modal.install = Vue => Vue.component(Modal.name, Modal);

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Modal);
}

export default Modal