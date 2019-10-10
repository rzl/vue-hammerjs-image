<template>
  <div id="app">
    <img src="./assets/logo.png">
    <template v-for="(item, index) in d">
      <div>
        缩放：<input type="range" 
          @mousemove="(e) => { m_changeScale(e, item) }" 
          @change="(e) => { m_changeScale(e, item) }" 
          name="points" 
          min="0.5" 
          max="2" 
          step="0.1" 
          value="1">
        旋转：<input type="range" 
          @mousemove="(e) => { m_changeRotation(e, item) }" 
          @change="(e) => { m_changeRotation(e, item) }" 
          name="points" 
          min="0" 
          max="360" 
          step="1" 
          value="0">
        <button @click="m_click(item)">裁剪</button>
        <input type="file" accept="image/*" @change="(e) => {m_change(e, item)}">
      </div>
      <div style="display: inline-block">
        <VueHammerjsImage 
          :img="item.img" 
          :targetWidth="item.targetWidth" 
          :targetHeight="item.targetHeight"
          :ref="'VueHammerjsImage' + item.id" 
          :translate3dInfo="item.translate3dInfo"
          >
        </VueHammerjsImage>
      </div>
      <img :src="item.showSrc" :style="{ width: item.targetWidth + 'px', height: item.targetHeight + 'px' }">
    </template>
  </div>
</template>

<script>
import VueHammerjsImage from './vue-hammerjs-image/index.js'
export default {
  components: {
    VueHammerjsImage
  },
  name: 'app',
  data () {
    return {
      d: [{
        id: 0,
        img: './dist/logo.png',
        targetWidth: 100,
        targetHeight: 100,
        translate3dInfo: {
          rotation: 0,
          scale: 1,
          offset_x: 0,
          offset_y: 0
        },
        showSrc: ''
      }, {
        id: 1,
        img: './dist/logo.png',
        targetWidth: 200,
        targetHeight: 200,
        translate3dInfo: {
          rotation: 0,
          scale: 1,
          offset_x: 0,
          offset_y: 0
        },
        showSrc: ''
      }]
    }
  },
  methods: {
    m_changeScale(e, item) {
      item.translate3dInfo.scale = e.target.value
    },
    m_changeRotation(e,item) {
      this.$refs['VueHammerjsImage' + item.id][0].setTranslate3dInfoPreview({ rotation: e.target.value })
    },
    m_click(item) {
      item.showSrc = this.$refs['VueHammerjsImage' + item.id][0].getBase64()
    },
    m_change(e, item) {
      console.log(e)
      var file = e.target.files[0]
      var fileReader = new FileReader()
      fileReader.onload = function (){
          item.img = fileReader.result
      }
      fileReader.readAsDataURL(file)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
