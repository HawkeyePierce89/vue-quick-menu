# vue-quick-menu [![NPM version](https://img.shields.io/npm/v/vue-quick-menu.svg)](https://www.npmjs.com/package/vue-quick-menu)

> This is web navigation component base on vue2.0+. It can be used in both PC and mobile. It's fork and based on
[original plugin](https://ashleylv.github.io/vue-quick-menu/index.html)

From fork maker:
> I forked this plugin because I don't like overweight libraries like Fort Awesome which used in original library. For this reason I changed it and I simplified the use this library. 

Attention:
> Please, don't use this plugin with dynamic import components

## Installation

``` bash
 npm install @hawkeyepierce89/vue-quick-menu --save
```

## Usage
``` xml
<quick-menu>
    <your-icon-component-one />
    <your-icon-component-two />
    <!-- 4 children components is maximum -->
</quick-menu>
```

``` javascript
import Vue from 'vue';
import quickMenu from '@hawkeyepierce89/vue-quick-menu';
import '@hawkeyepierce89/vue-quick-menu/dist/style.css';

export default {
  ...
  components: {
    quickMenu,
  },
  ...
}
```
## Props

Property|Type|Default|Description
---|---|---|---
position|top-left,top-right,bottom-left or bottom-right|top-left|The position of quick menu
backgroundColor|String|#009dc7|The background color of quick menu
