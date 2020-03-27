(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{336:function(s,t,e){"use strict";e.r(t);var a=e(0),r=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",{attrs:{align:"left"}},[s._v("基于Vue-cli的cesium封装(Cesium encapsulation based on Vue cli)")]),s._v(" "),e("p",[e("a",{attrs:{href:"https://www.npmjs.com/package/vue-cli-plugin-cesium",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/npm/v/vue-cli-plugin-cesium?style=plastic",alt:"npm"}}),e("OutboundLink")],1),s._v(" "),e("a",{attrs:{href:"https://www.npmjs.com/package/vue-cli-plugin-cesium",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/npm/dm/vue-cli-plugin-cesium?style=plastic",alt:"npm"}}),e("OutboundLink")],1),s._v(" "),e("a",{attrs:{href:"https://www.npmjs.com/package/vue-cli-plugin-cesium",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/npm/l/vue-cli-plugin-cesium?style=plastic",alt:"license"}}),e("OutboundLink")],1),s._v(" "),e("a",{attrs:{href:"https://github.com/isboyjc/vue-cli-plugin-cesium",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/github/stars/isboyjc/vue-cli-plugin-cesium?style=social",alt:"Github star"}}),e("OutboundLink")],1),s._v(" "),e("a",{attrs:{href:"https://github.com/isboyjc/vue-cli-plugin-cesium",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/github/forks/isboyjc/vue-cli-plugin-cesium?style=social",alt:"Github fork"}}),e("OutboundLink")],1)]),s._v(" "),e("h2",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),e("p",[s._v("通常情况下，我们要在 vue 中使用 Cesium，首先要安装 Cesium，然后要在 vue-cli 的 webpack 配置很多东西，对一些有经验的人来说只不过麻烦些，但是对 Cesium 的初学者来说会很痛苦，因为没有使用过，也不知到要怎么配置，只能搜索网上的教程，一步一步踩坑")]),s._v(" "),e("p",[s._v("作为前端，我在学习 Cesium，踩坑无数，当然也经历过这些")]),s._v(" "),e("p",[s._v("其实不管是有经验或是初学者，每次写项目重复配置这些东西都很麻烦")]),s._v(" "),e("p",[s._v("vue-cli-plugin-cesium 就是为了解决这个问题")]),s._v(" "),e("h2",{attrs:{id:"介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[s._v("#")]),s._v(" 介绍")]),s._v(" "),e("p",[s._v("vue-cli-plugin-cesium 是一个针对 Cesium 的 vue-cli 扩展插件，使用它将会让我们在 vue-cli 中零配置使用 Cesium")]),s._v(" "),e("p",[s._v("它会在我们已经创建好的 vue-cli 中做基于 Cesium 的扩展，如下")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("自动安装 cesium 并追加至"),e("code",[s._v("package.json")]),s._v("依赖项(可自选版本)")])]),s._v(" "),e("li",[e("p",[s._v("自动扩展 vue-cli 中 cesium 相关的 webpack 配置")]),s._v(" "),e("ul",[e("li",[s._v("添加一个"),e("code",[s._v("cesium")]),s._v("别名，以便我们在项目中轻松的引入它")]),s._v(" "),e("li",[s._v("使 Cesium 对象实例可在每个 Vue 模块中使用而无须 import 引入")]),s._v(" "),e("li",[s._v("使 webpack 可正常打包 Cesium")]),s._v(" "),e("li",[s._v("允许 webpack 友好地在 Cesium 中使用 require，解决 require 引入警告")]),s._v(" "),e("li",[s._v("开发环境生成 sourcemap，生产环境取消 sourcemap")]),s._v(" "),e("li",[s._v("生产环境抽取公共模块执行压缩")]),s._v(" "),e("li",[s._v("生产环境 loader 切换到优化模式")])])]),s._v(" "),e("li",[e("p",[s._v("自动在全局 main.js 中引入"),e("code",[s._v("Widgets.css")]),s._v("，可选")])]),s._v(" "),e("li",[e("p",[s._v("自动在"),e("code",[s._v("components/")]),s._v("文件夹下生成示例文件，可选")])])]),s._v(" "),e("h2",{attrs:{id:"安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),e("p",[s._v("vue-cli-plugin-cesium 是基于 vue-cli 的扩展插件，所以在使用前要先安装 vue-cli，并使用 vue-cli 创建一个 vue 项目")]),s._v(" "),e("p",[s._v("如果您不了解 vue-cli 的使用，请移步官网 "),e("a",{attrs:{href:"https://cli.vuejs.org/zh/guide/",target:"_blank",rel:"noopener noreferrer"}},[s._v("vue-cli-官网"),e("OutboundLink")],1)]),s._v(" "),e("p",[s._v("当前插件只支持"),e("code",[s._v("vue-cli3.0+")]),s._v("版本哦")]),s._v(" "),e("p",[s._v("创建好一个 vue 项目后就可以按照以下步骤使用该插件了")]),s._v(" "),e("h3",{attrs:{id:"使用方式一"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用方式一"}},[s._v("#")]),s._v(" 使用方式一")]),s._v(" "),e("p",[s._v("首先是安装 vue-cli-plugin-cesium 插件，推荐使用 yarn 安装，因为它更简洁")]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// npm")]),s._v("\nnpm install "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("save"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("dev vue"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("cli"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("plugin"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("cesium\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// yarn")]),s._v("\nyarn add vue"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("cli"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("plugin"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("cesium\n")])])]),e("p",[s._v("安装完成后我们要使用 "),e("code",[s._v("vue invoke")]),s._v(" 来初始化这个插件")]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("vue invoke vue"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("cli"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("plugin"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("cesium\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 非全局安装的vue-cli可以")]),s._v("\nnpx vue invoke vue"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("cli"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("plugin"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("cesium\n")])])]),e("h3",{attrs:{id:"使用方式二"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用方式二"}},[s._v("#")]),s._v(" 使用方式二")]),s._v(" "),e("p",[s._v("如果您觉得使用方式一两步有些麻烦，您可以使用"),e("code",[s._v("vue add")]),s._v("的方式安装使用，即可一步到位")]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("vue add vue"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("cli"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("plugin"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("cesium\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 非全局安装的vue-cli可以")]),s._v("\nnpx vue add vue"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("cli"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("plugin"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("cesium\n")])])]),e("h3",{attrs:{id:"安装过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装过程"}},[s._v("#")]),s._v(" 安装过程")]),s._v(" "),e("p",[s._v("在"),e("code",[s._v("vue invoke")]),s._v("或"),e("code",[s._v("vue add")]),s._v("的过程中会有三个询问")]),s._v(" "),e("h4",{attrs:{id:"询问一"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#询问一"}},[s._v("#")]),s._v(" 询问一")]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("Please choose a version "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("of")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'cesium'")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("list")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("请在列表中选择 cesium 的版本"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),e("p",[s._v("在此选择想使用的 "),e("code",[s._v("Cesium")]),s._v(" 版本")]),s._v(" "),e("h4",{attrs:{id:"询问二"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#询问二"}},[s._v("#")]),s._v(" 询问二")]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("Whether to "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" styles globally"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" This operation will automatically "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" widgets"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("css "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" main"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("js")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("是否全局引入样式"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("该操作将自动在main"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js引入widgets"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("css"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("？\n")])])]),e("p",[s._v("此项默认为 yes，该操作将自动在 main.js 引入 widgets.css，即全局引入 cesium 的 css 样式")]),s._v(" "),e("p",[s._v("如果此项设置为 no，那么将来开发时我们要手动引入"),e("code",[s._v("widgets.css")]),s._v("样式文件，引入命令如下")]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cesium/Widgets/widgets.css"')]),s._v("\n")])])]),e("h5",{attrs:{id:"询问三"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#询问三"}},[s._v("#")]),s._v(" 询问三")]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("Whether to add sample components to the project components "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("directory")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("是否添加示例组件到项目components目录"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v("\n")])])]),e("p",[s._v("此选项默认为 yes，该操作会自动在"),e("code",[s._v("src/components")]),s._v("文件夹下生成"),e("code",[s._v("CesiumExample")]),s._v("文件夹，此文件夹中包含一些 Cesium 的使用示例供参考")]),s._v(" "),e("p",[s._v("如果此项设置为 no，则不生成示例文件")]),s._v(" "),e("p",[s._v("生成的示例中每个文件为一个模块，可直接模块引入至项目中查看")]),s._v(" "),e("h2",{attrs:{id:"gui-中安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gui-中安装"}},[s._v("#")]),s._v(" GUI 中安装")]),s._v(" "),e("p",[s._v("如果我们使用"),e("code",[s._v("vue ui")]),s._v("创建项目，也可以直接在项目创建后的插件选项里搜索 vue-cli-plugin-cesium 并安装")]),s._v(" "),e("p",[s._v("如下所示：")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://raw.githubusercontent.com/isboyjc/PictureBed/master/vue-cli-plugin-cesium/gui005.png",alt:"gui001"}})]),s._v(" "),e("p",[s._v("选中插件点击安装")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://raw.githubusercontent.com/isboyjc/PictureBed/master/vue-cli-plugin-cesium/gui002.png",alt:"gui002"}})]),s._v(" "),e("h2",{attrs:{id:"使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[s._v("#")]),s._v(" 使用")]),s._v(" "),e("p",[s._v("开发时如下，直接在模块中使用 Cesium 对象即可")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://raw.githubusercontent.com/isboyjc/PictureBed/master/vue-cli-plugin-cesium/code01.png",alt:"code01"}})]),s._v(" "),e("p",[s._v("查看示例组件，模块引入即可，如下")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://raw.githubusercontent.com/isboyjc/PictureBed/master/vue-cli-plugin-cesium/code02.png",alt:"code02"}})]),s._v(" "),e("h2",{attrs:{id:"结束"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#结束"}},[s._v("#")]),s._v(" 结束")]),s._v(" "),e("p",[s._v("安装完成后，就可以在 vue 项目中任意模块中使用 Cesium 了")]),s._v(" "),e("p",[s._v("你可以在每个 Vue 模块中直接使用 Cesium 对象实例而无须 import 引入")]),s._v(" "),e("p",[s._v("如果你想引入 cesium 包下的文件，我们为 cesium 包的目录设置了别名，就叫"),e("code",[s._v("cesium")])]),s._v(" "),e("p",[s._v("所以在引入"),e("code",[s._v("Widgets.css")]),s._v("时引入路径为"),e("code",[s._v("cesium/Widgets/widgets.css")])]),s._v(" "),e("p",[s._v("如果对您有所帮助，那么这将是我的荣幸")]),s._v(" "),e("p",[s._v("后期我会慢慢的完善此插件，并不停迭代，也欢迎大家提出建议，也欢迎 PR")]),s._v(" "),e("p",[s._v("如果您觉得还行，点个 star 再走哟")]),s._v(" "),e("p",[s._v("加下小助手【圈子】微信，验证消息写【github】|【cesium】都可以直接通过，和他聊聊天，或者加技术交流群我们一块玩耍都可以的")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://raw.githubusercontent.com/isboyjc/PictureBed/master/other/quanzi.jpeg",alt:"圈子"}})]),s._v(" "),e("p",[s._v("如果你加小助手微信遇到了问题，也可以通过以下方式联系我或加群")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://raw.githubusercontent.com/isboyjc/PictureBed/master/other/20200111-143924.png",alt:"other"}})])])}),[],!1,null,null,null);t.default=r.exports}}]);