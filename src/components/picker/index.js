import PickerComponent from "./picker";
let Picker = {};

Toast.install = function (Vue) {
  // 返回一个 扩展实例构造器
  const PickerConstructor = Vue.extend(PickerComponent);

  const PickerDom = new PickerComponent({
    el: document.createElement("div")
  });
  // 把 实例化的 toast.vue 添加到 body 里
  document.body.appendChild(PickerDom.$el);
  // Vue.prototype.$toast = (text,duration=2000)=>{
  //   toastDom.msg = text;
  //   toastDom.isShow = true;
  //   // 过了 duration 时间后隐藏
  //   setTimeout(() => { toastDom.isShow = false }, duration)
  // }
  // Vue.prototype.$showToast = (text, duration = 0) => {
  //   toastDom.msg = text;
  //   toastDom.isShow = true;
  //   if (duration > 0) {
  //     setTimeout(() => {
  //       toastDom.isShow = false;
  //     }, duration);
  //   }
  // };
  // Vue.prototype.$hideToast = () => {
  //   toastDom.isShow = false;
  // }
  
}

export default Toast