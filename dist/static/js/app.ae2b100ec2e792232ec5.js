webpackJsonp([1],[,,,,,,,,,,,function(t,e,n){"use strict";var o=n(5),r=n(53),i=n(49),a=n.n(i);o.a.use(r.a),e.a=new r.a({routes:[{path:"/",name:"demo",component:a.a}]})},function(t,e,n){var o=n(4)(n(13),n(50),null,null,null);t.exports=o.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(17),r=n.n(o);e.default={name:"quickMenu",props:{menuCount:{type:Number,required:!0,default:4},iconClass:{type:Array,required:!0},menuUrlList:{type:Array,required:!0},backgroundColor:{type:String,default:"#009dc7"},color:{type:String,default:"#fff"},isOpenNewTab:{type:Boolean,default:!1},position:{type:String,default:"top-left"}},computed:{openNewTab:function(){return this.isOpenNewTab?"_blank":"_self"},quickMenuStyle:function(){var t={top:"30px"},e={bottom:"30px"},n={left:"30px"},o={right:"30px"},i=this.isTop?t:e;return r()(i,this.isLeft?n:o),r()(i,{transform:this.isLeft?"rotate(-180deg)":"rotate(180deg)"}),i},menuStyle:function(){var t={},e={backgroundColor:this.backgroundColor,color:this.color};return r()(t,e),t},subMenuStyle:function(){var t={fontSize:this.menuSize/2+"px"},e={backgroundColor:this.backgroundColor,color:this.color};return r()(t,e),t},iconStyle:function(){return{marginTop:this.menuSize/4-2+"px"}},isTop:function(){return!!~this.position.toLowerCase().indexOf("top")},isLeft:function(){return!!~this.position.toLowerCase().indexOf("left")}},data:function(){return{menuSize:60,subMenu4:[[["0","-160"],["-80","-138.6"],["-138.6","-80"],["-160","0"]],[["0","-160"],["80","-138.6"],["138.6","-80"],["160","0"]],[["0","160"],["138.6","80"],["80","138.6"],["160","0"]],[["-160","0"],["-138.6","80"],["-80","138.6"],["0","160"]]],subMenu3:[[["-160","0"],["-113","-113"],["0","-160"]],[["0","-160"],["113","-113"],["160","0"]],[["0","160"],["113","113"],["160","0"]],[["-160","0"],["-113","113"],["0","160"]]],subMenu2:[[["-160","0"],["0","-160"]],[["0","-160"],["160","0"]],[["0","160"],["160","0"]],[["-160","0"],["0","160"]]]}},methods:{getSubMenu:function(t){var e=4===this.menuCount?this.subMenu4:3===this.menuCount?this.subMenu3:this.subMenu2;return e=this.isTop&&this.isLeft?e[2]:this.isTop&&!this.isLeft?e[1]:!this.isTop&&this.isLeft?e[3]:e[0],{top:e[t][0]+"px",left:e[t][1]+"px"}},toggleMenu:function(t){var e=this.$refs.quickMenu,n=this.$refs.icon;~e.className.indexOf(" active")?(e.className=e.className.replace(" active",""),n.forEach(function(t,e){t.className=t.className.replace(" menu-animate","")})):(e.className+=" active",n.forEach(function(t,e){t.className+=" menu-animate"}))},mouseEnterSubMenu:function(t){"A"===t.target.tagName?(t.target.style.backgroundColor=this.lightenColor(this.backgroundColor,20),t.target.firstElementChild.style.backgroundColor=this.lightenColor(this.backgroundColor,20)):"I"===t.target.tagName&&(t.target.parentElement.style.backgroundColor=this.lightenColor(this.backgroundColor,20),t.target.style.backgroundColor=this.lightenColor(this.backgroundColor,20))},mouseOutSubMenu:function(t){"A"===t.target.tagName?(t.target.style.backgroundColor=this.backgroundColor,t.target.firstElementChild.style.backgroundColor=this.backgroundColor):"I"===t.target.tagName&&(t.target.parentElement.style.backgroundColor=this.backgroundColor,t.target.style.backgroundColor=this.backgroundColor)},lightenColor:function(t,e){var n=!1;"#"===t[0]&&(t=t.slice(1),n=!0);var o=parseInt(t,16),r=(o>>16)+e;r>255?r=255:r<0&&(r=0);var i=(o>>8&255)+e;i>255?i=255:i<0&&(i=0);var a=(255&o)+e;return a>255?a=255:a<0&&(a=0),(n?"#":"")+(a|i<<8|r<<16).toString(16)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(45),r=(n.n(o),n(48)),i=n.n(r);e.default={name:"demo",data:function(){return{count:4,icons:["fa fa-github","fa fa-comment","fa fa-code","fa fa-envelope"],list:["http://www.wheelsfactory.cn/","http://www.wheelsfactory.cn/","http://www.wheelsfactory.cn/","http://www.wheelsfactory.cn/"],backgroundColor:"#17c4c5",color:"#ffffff",position:"top-left",isOpenNewTab:!1}},computed:{getCount:function(){return Number(this.count)},getIsOpenNewTab:function(){return Boolean(this.isOpenNewTab)}},components:{quickMenu:i.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(5),r=n(12),i=n.n(r),a=n(11);o.a.config.productionTip=!1,new o.a({el:"#app",router:a.a,template:"<App/>",components:{App:i.a}})},,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e,n){function o(t){n(47)}var r=n(4)(n(14),n(52),o,null,null);t.exports=r.exports},function(t,e,n){function o(t){n(46)}var r=n(4)(n(15),n(51),o,null,null);t.exports=r.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._v(" "),n("section",{staticClass:"main-content"},[n("h1",{attrs:{id:"color-sticker"}},[t._v("Description")]),t._v(" "),n("p",[t._v("This is web navigation component base on vue2.0+. It can be used in both PC and mobile.")]),t._v(" "),n("h1",[t._v("Demo")]),t._v(" "),n("table",[n("tr",[n("td",[t._v("Count")]),t._v(" "),n("td",[n("select",{directives:[{name:"model",rawName:"v-model",value:t.count,expression:"count"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.count=e.target.multiple?n:n[0]}}},[n("option",[t._v("2")]),t._v(" "),n("option",[t._v("3")]),t._v(" "),n("option",[t._v("4")])])])]),t._v(" "),n("tr",[n("td",[t._v("Postion")]),t._v(" "),n("td",[n("select",{directives:[{name:"model",rawName:"v-model",value:t.position,expression:"position"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.position=e.target.multiple?n:n[0]}}},[n("option",[t._v("top-left")]),t._v(" "),n("option",[t._v("top-right")]),t._v(" "),n("option",[t._v("bottom-left")]),t._v(" "),n("option",[t._v("bottom-right")])])])]),t._v(" "),n("tr",[n("td",[t._v("Background Color")]),t._v(" "),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.backgroundColor,expression:"backgroundColor"}],attrs:{type:"color"},domProps:{value:t.backgroundColor},on:{input:function(e){e.target.composing||(t.backgroundColor=e.target.value)}}})])]),t._v(" "),n("tr",[n("td",[t._v("Color")]),t._v(" "),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.color,expression:"color"}],attrs:{type:"color"},domProps:{value:t.color},on:{input:function(e){e.target.composing||(t.color=e.target.value)}}})])]),t._v(" "),n("tr",[n("td",[t._v("Will open a new Tab")]),t._v(" "),n("td",[n("select",{directives:[{name:"model",rawName:"v-model",value:t.isOpenNewTab,expression:"isOpenNewTab"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.isOpenNewTab=e.target.multiple?n:n[0]}}},[n("option",[t._v("true")]),t._v(" "),n("option",[t._v("false")])])])])]),t._v(" "),n("h1",[t._v("Install")]),t._v(" "),t._m(1),t._v(" "),n("h1",[t._v("Usage")]),t._v(" "),n("h3",[t._v("ES6")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),n("h1",[t._v("Props")]),t._v(" "),t._m(4)]),t._v(" "),n("quick-menu",{attrs:{"menu-count":t.getCount,"icon-class":t.icons,"menu-url-list":t.list,"background-color":t.backgroundColor,color:t.color,position:t.position,"is-open-new-tab":t.getIsOpenNewTab}})],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"page-header"},[n("h1",{staticClass:"project-name"},[t._v("vue-quick-menu")]),t._v(" "),n("h2",{staticClass:"project-tagline"}),t._v(" "),n("a",{staticClass:"btn",attrs:{href:"https://github.com/AshleyLv/color-sticker"}},[t._v("View on GitHub")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[n("code",[t._v("\n$ npm install vue-quick-menu --save\n     ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[n("code",[t._v("\nimport quickMenu from 'vue-quick-menu/dist/quickMenu'\n\nexport default {\n  ...\n  components: {\n    quickMenu\n  },\n  ...\n}\n    ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[n("code",[t._v("\n <quick-menu :menu-count=count :icon-class=icons :menu-url-list=list></quick-menu>    \n    ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{staticClass:"props"},[n("thead",[n("tr",[n("th",[t._v("Name")]),t._v(" "),n("th",[t._v("Required")]),t._v(" "),n("th",[t._v("Default")]),t._v(" "),n("th",[t._v("Type")]),t._v(" "),n("th",[t._v("Description")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("menuCount")]),t._v(" "),n("td",[t._v("true")]),t._v(" "),n("td",[t._v("4")]),t._v(" "),n("td",[t._v("Number")]),t._v(" "),n("td",[t._v("The number of menu item")])]),t._v(" "),n("tr",[n("td",[t._v("menuUrlList")]),t._v(" "),n("td",[t._v("true")]),t._v(" "),n("td",[t._v("-")]),t._v(" "),n("td",[t._v("Array")]),t._v(" "),n("td",[t._v("An array of link of each menu item")])]),t._v(" "),n("tr",[n("td",[t._v("iconClass")]),t._v(" "),n("td",[t._v("true")]),t._v(" "),n("td",[t._v("-")]),t._v(" "),n("td",[t._v("Array")]),t._v(" "),n("td",[t._v("An array of icon class of each menu item")])]),t._v(" "),n("tr",[n("td",[t._v("position")]),t._v(" "),n("td",[t._v("false")]),t._v(" "),n("td",[t._v("top-left")]),t._v(" "),n("td",[t._v("top-left,top-right,bottom-left,bottom-right")]),t._v(" "),n("td",[t._v("The position of quick menu")])]),t._v(" "),n("tr",[n("td",[t._v("backgroundColor")]),t._v(" "),n("td",[t._v("false")]),t._v(" "),n("td",[t._v("#009dc7")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("The background color of quick menu")])]),t._v(" "),n("tr",[n("td",[t._v("color")]),t._v(" "),n("td",[t._v("false")]),t._v(" "),n("td",[t._v("#ffffff")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("The color of quick menu icon")])]),t._v(" "),n("tr",[n("td",[t._v("isOpenNewTab")]),t._v(" "),n("td",[t._v("false")]),t._v(" "),n("td",[t._v("false")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("If the menu will open a new tab after click")])])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"quickMenu",staticClass:"quick-menu",style:t.quickMenuStyle},[t._l(t.menuCount,function(e){return n("div",{staticClass:"sub-menu",style:t.getSubMenu(e-1)},[n("a",{style:t.subMenuStyle,attrs:{href:t.menuUrlList[e-1],target:t.openNewTab},on:{mouseover:function(e){e.stopPropagation(),t.mouseEnterSubMenu(e)},mouseout:function(e){e.stopPropagation(),t.mouseOutSubMenu(e)}}},[n("i",{ref:"icon",refInFor:!0,class:t.iconClass[e-1],style:t.iconStyle})])])}),t._v(" "),n("div",{staticClass:"menu",style:t.menuStyle},[n("div",{staticClass:"core-menu",on:{click:t.toggleMenu}},[n("div",{staticClass:"bar"})])])],2)},staticRenderFns:[]}}],[16]);
//# sourceMappingURL=app.ae2b100ec2e792232ec5.js.map