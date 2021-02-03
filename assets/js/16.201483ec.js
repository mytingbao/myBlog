(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{441:function(s,e,t){"use strict";t.r(e);var a=t(14),n=Object(a.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"在-vue-中使用-electron"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在-vue-中使用-electron"}},[s._v("#")]),s._v(" 在 Vue 中使用 Electron")]),s._v(" "),t("h3",{attrs:{id:"electron-builder-配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#electron-builder-配置"}},[s._v("#")]),s._v(" electron-builder 配置")]),s._v(" "),t("p",[s._v("在项目根目录下打开终端：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("vue "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" electron-builder\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("blockquote",[t("p",[s._v("安装成功后，项目结构如下:")])]),s._v(" "),t("blockquote",[t("p",[s._v("main.js 为 vue 主文件")])]),s._v(" "),t("blockquote",[t("p",[s._v("background.js 为 electron 的主进程文件")])]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("p",[s._v("当我们在渲染进程中使用 "),t("code",[s._v("electron")]),s._v(" 相关 api。需在 "),t("code",[s._v("vue.config.js")]),s._v(" 新增以下内容:")])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("module"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  pluginOptions"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    electronBuilder"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      nodeIntegration"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h4",{attrs:{id:"打包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#打包"}},[s._v("#")]),s._v(" 打包")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run electron:build\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("你可能会发现下载插件的时候非常慢，你可以通过以下方式提速：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("electron_mirror")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("https://npm.taobao.org/mirrors/electron/\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" electron-builder-binaries_mirror"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("https://npm.taobao.org/mirrors/electron-builder-binaries/\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h4",{attrs:{id:"打包成功后"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#打包成功后"}},[s._v("#")]),s._v(" 打包成功后")]),s._v(" "),t("p",[s._v("进入项目文件夹 "),t("code",[s._v("dist_electron")]),s._v(" 中，electron_robot_client Setup 0.1.0.exe 为项目安装程序")]),s._v(" "),t("h3",{attrs:{id:"直接使用-electron-vue"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#直接使用-electron-vue"}},[s._v("#")]),s._v(" 直接使用 electron-vue")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://electron.org.cn/vue/index.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方文档"),t("OutboundLink")],1)]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装 vue-cli 和 脚手架样板代码")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -g vue-cli\nvue init simulatedgreg/electron-vue my-project\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装依赖并运行你的程序")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" my-project\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或者 npm install")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" run dev "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或者 npm run dev")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h4",{attrs:{id:"当simulatedgreg-electron-vue-下载出错时，可以采取以下方法："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#当simulatedgreg-electron-vue-下载出错时，可以采取以下方法："}},[s._v("#")]),s._v(" 当"),t("code",[s._v("simulatedgreg/electron-vue")]),s._v(" 下载出错时，可以采取以下方法：")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("p",[s._v("将"),t("code",[s._v("simulatedgreg/electron-vue")]),s._v("下载到本地")])]),s._v(" "),t("ol",[t("li",[s._v("将 Electron-vue 项目先下载下来 国内码云地址：")])]),s._v(" "),t("p",[t("a",{attrs:{href:"https://gitee.com/mirrors/electron-vue",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://gitee.com/mirrors/electron-vue"),t("OutboundLink")],1)]),s._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[t("p",[s._v("复制项目的根路径")])]),s._v(" "),t("li",[t("p",[s._v("使用本地"),t("code",[s._v("simulatedgreg/electron-vue")]),s._v("创建")])])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("vue init D:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("electron-vue my-project\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])}),[],!1,null,null,null);e.default=n.exports}}]);