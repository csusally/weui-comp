// 引入组件
import SliderSimple from './slider-simple'

SliderSimple.install = Vue => Vue.component(SliderSimple.name, SliderSimple);

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(SliderSimple);
}

export default SliderSimple