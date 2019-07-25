import VueHammerjsImage from './vue-hammerjs-image.vue';
VueHammerjsImage.install = Vue => Vue.component(VueHammerjsImage.name, VueHammerjsImage);//.name就是开始说的vue文件暴露出来的name名，ldcPagination整个组件
export default VueHammerjsImage