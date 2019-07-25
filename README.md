# vue-hammerjs-image

> A Vue.js project for hammerjs-image

## 项目相关
> [hammerjs-image](https://github.com/rzl/hammerjs-image)
> 
> [hammerjs-image 在线演示DEMO](https://rzl.github.io/hammerjs-image/demo/index.html)
> 
> [vue-hammerjs-image 在线演示DEMO](https://rzl.github.io/vue-hammerjs-image-test/dist/index.html#/)
> 
> [vue-hammerjs-image-test](https://github.com/rzl/vue-hammerjs-image-test)


## build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

## install
``` bash
npm install -S vue-hammerjs-image
```

## Use 1
``` js
import VueHammerjsImage from 'vue-hammerjs-image/src/vue-hammerjs-image/vue-hammerjs-image.vue'

export default {
  components: {
    VueHammerjsImage
  }
}
```


## Use 2
``` js

import VueHammerjsImage from 'vue-hammerjs-image'

Vue.use(VueHammerjsImage) 


```
```
```

## 属性
| 属性        | 描述   | demo |
| --------   | -----:  | :----:  |
| img     | 字符串，图片路径/base64 |   src/logo.png     |
| targetWidth        |   操作区域宽度   |   100   |
| targetHeight        |    操作区域高度    |  200  |
| translate3dInfo        |    裁剪参数    |  {rotation: 0,          scale: 1, offset_x: 0, offset_y: 0}  |
| maxScale        |    最大放大数    |  2  |
| minScale        |    最小缩小数    |  0.5  |
| backgroundColor        |    操作区域的背景色，不影响裁剪后的图片    |  black  |

## translate3dInfo属性
| translate3dInfo属性        | 描述   | demo |
| --------   | -----:  | :----:  |
| rotation     | 旋转角度0~360 |   0     |
| scale     | 放大缩小 |        |
| offset_x     | 偏移x |   5     |
| offset_y     | 偏移Y |   5     |

## 方法
| 方法        | 描述   |
| --------   | -----:  |
| getHi     | 返回hammerjs-image对象 |
| setTranslate3dInfoPreview     | 设置裁剪参数translate3dInfo并预览 |
| setTranslate3dInfo     | 设置裁剪参数translate3dInfo不预览 |
| translate3d     | 根据设定的参数进行裁剪返回canvas |
| getBase64     | 返回裁剪后的base64数据 |
