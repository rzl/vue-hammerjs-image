<template>
  <div>
    <div :style="{width: targetWidth + 'px', height: targetHeight + 'px', backgroundColor: backgroundColor, overflow:'hidden' }">
    </div>
  </div>
</template>
<script>
import HammerjsImage from 'hammerjs-image'
export default {
  name: 'VueHammerjsImage',
  props: {
    img: {
      type: String,
      default: ''
    },
    maxScale: {
      type: Number,
      default: 2,
    },
    minScale: {
      type: Number,
      default: 0.5
    },
    targetWidth: {
      type: Number,
      default: 100
    },
    targetHeight: {
      type: Number,
      default: 100
    },
    backgroundColor: {
      type: String,
      default: 'white'
    },
    translate3dInfo: {
      type: Object,
      default: function() {
        return {
          rotation: 0,
          scale: 1,
          offset_x: 0,
          offset_y: 0
        }
      }
    }
  },
  data() {
    return {
      __hi: 0
    }
  },
  watch: {
    'translate3dInfo.rotation': function(n, o) {
      this.__hi.setTranslate3dInfo({ rotation: n }).preview()
    },
    'translate3dInfo.scale': function(n, o) {
      console.log(n)
      this.__hi.setTranslate3dInfo({ scale: n }).preview()
    },
    'translate3dInfo.offset_x': function(n, o) {
      this.__hi.setTranslate3dInfo({ offset_x: n }).preview()
    },
    'translate3dInfo.offset_y': function(n, o) {
      this.__hi.setTranslate3dInfo({ offset_y: n }).preview()
    },
    'img': function(n, o) {
      this.__hi.changeImg(n)
    }
  },
  mounted() {
    this.__hi = new HammerjsImage({
        el: this.$el.firstElementChild,
        img: this.img,
        maxScale: this.maxScale,
        minScale: this.minScale
    })
  },
  methods: {
    getHi() {
      return this.__hi
    },
    setTranslate3dInfoPreview(opt) {
      return this.__hi.setTranslate3dInfo(opt).preview()
    },
    setTranslate3dInfo(opt) {
      return this.__hi.setTranslate3dInfo(opt)
    },
    translate3d() {
      return this.__hi.translate3d()
    },
    getBase64() {
      return this.__hi.getBase64()
    }
  }
}
</script>
