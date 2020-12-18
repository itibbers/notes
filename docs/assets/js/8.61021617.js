(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{181:function(t,v,s){t.exports=s.p+"assets/img/browser-render.a0c81747.png"},194:function(t,v,s){"use strict";s.r(v);var _=s(3),e=Object(_.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"浏览器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#浏览器"}},[t._v("#")]),t._v(" 浏览器")]),t._v(" "),_("p"),_("div",{staticClass:"table-of-contents"},[_("ul",[_("li",[_("a",{attrs:{href:"#从输入-url-到展示的过程"}},[t._v("从输入 URL 到展示的过程")])]),_("li",[_("a",{attrs:{href:"#重绘与回流"}},[t._v("重绘与回流")])]),_("li",[_("a",{attrs:{href:"#web-worker"}},[t._v("Web Worker")])]),_("li",[_("a",{attrs:{href:"#v8-垃圾回收机制"}},[t._v("V8 垃圾回收机制")])]),_("li",[_("a",{attrs:{href:"#内存泄露"}},[t._v("内存泄露")])]),_("li",[_("a",{attrs:{href:"#webview-debug"}},[t._v("webview debug")])])])]),_("p"),t._v(" "),_("h2",{attrs:{id:"从输入-url-到展示的过程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#从输入-url-到展示的过程"}},[t._v("#")]),t._v(" 从输入 URL 到展示的过程")]),t._v(" "),_("ul",[_("li",[t._v("DNS 解析")]),t._v(" "),_("li",[t._v("TCP 三次握手")]),t._v(" "),_("li",[t._v("发送请求，分析 url，设置请求报文(头，主体)")]),t._v(" "),_("li",[t._v("服务器返回请求的文件 (html)")]),t._v(" "),_("li",[t._v("浏览器渲染\n"),_("ul",[_("li",[t._v("HTML parser --\x3e DOM Tree\n"),_("ul",[_("li",[t._v("标记化算法，进行元素状态的标记")]),t._v(" "),_("li",[t._v("dom 树构建")])])]),t._v(" "),_("li",[t._v("CSS parser --\x3e Style Tree\n"),_("ul",[_("li",[t._v("解析 css 代码，生成样式树")])])]),t._v(" "),_("li",[t._v("attachment --\x3e Render Tree\n"),_("ul",[_("li",[t._v("结合 dom 树 与 style 树，生成渲染树")])])]),t._v(" "),_("li",[t._v("layout: 布局")]),t._v(" "),_("li",[t._v("GPU painting: 像素绘制页面")])])])]),t._v(" "),_("p",[_("img",{attrs:{src:s(181),alt:"browser-render"}})]),t._v(" "),_("h2",{attrs:{id:"重绘与回流"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#重绘与回流"}},[t._v("#")]),t._v(" 重绘与回流")]),t._v(" "),_("p",[t._v("当元素的样式发生变化时，浏览器需要触发更新，重新绘制元素。这个过程中，有两种类型的操作，即重绘与回流。")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("重绘(repaint)")]),t._v(": 当元素样式的改变不影响布局时，浏览器将使用重绘对元素进行更新，此时由于只需要 UI 层面的重新像素绘制，因此 "),_("strong",[t._v("损耗较少")])]),t._v(" "),_("li",[_("strong",[t._v("回流(reflow)")]),t._v(": 当元素的尺寸、结构或触发某些属性时，浏览器会重新渲染页面，称为回流。此时，浏览器需要重新经过计算，计算后还需要重新页面布局，因此是较重的操作。会触发回流的操作:\n"),_("ul",[_("li",[t._v("页面初次渲染")]),t._v(" "),_("li",[t._v("浏览器窗口大小改变")]),t._v(" "),_("li",[t._v("元素尺寸、位置、内容发生改变")]),t._v(" "),_("li",[t._v("元素字体大小变化")]),t._v(" "),_("li",[t._v("添加或者删除可见的 dom 元素")]),t._v(" "),_("li",[t._v("激活 CSS 伪类（例如：:hover）")]),t._v(" "),_("li",[t._v("查询某些属性或调用某些方法\n"),_("ul",[_("li",[t._v("clientWidth、clientHeight、clientTop、clientLeft")]),t._v(" "),_("li",[t._v("offsetWidth、offsetHeight、offsetTop、offsetLeft")]),t._v(" "),_("li",[t._v("scrollWidth、scrollHeight、scrollTop、scrollLeft")]),t._v(" "),_("li",[t._v("getComputedStyle()")]),t._v(" "),_("li",[t._v("getBoundingClientRect()")]),t._v(" "),_("li",[t._v("scrollTo()")])])])])])]),t._v(" "),_("p",[_("strong",[t._v("回流必定触发重绘，重绘不一定触发回流。重绘的开销较小，回流的代价较高。")])]),t._v(" "),_("h4",{attrs:{id:"最佳实践"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#最佳实践"}},[t._v("#")]),t._v(" 最佳实践:")]),t._v(" "),_("ul",[_("li",[t._v("css\n"),_("ul",[_("li",[t._v("避免使用"),_("code",[t._v("table")]),t._v("布局")]),t._v(" "),_("li",[t._v("将动画效果应用到"),_("code",[t._v("position")]),t._v("属性为"),_("code",[t._v("absolute")]),t._v("或"),_("code",[t._v("fixed")]),t._v("的元素上")])])]),t._v(" "),_("li",[t._v("javascript\n"),_("ul",[_("li",[t._v("避免频繁操作样式，可汇总后统一 "),_("strong",[t._v("一次修改")])]),t._v(" "),_("li",[t._v("尽量使用"),_("code",[t._v("class")]),t._v("进行样式修改")]),t._v(" "),_("li",[t._v("减少"),_("code",[t._v("dom")]),t._v("的增删次数，可使用 "),_("strong",[t._v("字符串")]),t._v(" 或者 "),_("code",[t._v("documentFragment")]),t._v(" 一次性插入")]),t._v(" "),_("li",[t._v("极限优化时，修改样式可将其"),_("code",[t._v("display: none")]),t._v("后修改")]),t._v(" "),_("li",[t._v("避免多次触发上面提到的那些会触发回流的方法，可以的话尽量用 "),_("strong",[t._v("变量存住")])]),t._v(" "),_("li",[t._v("dom.focus()触发动画执行")])])])]),t._v(" "),_("h2",{attrs:{id:"web-worker"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#web-worker"}},[t._v("#")]),t._v(" Web Worker")]),t._v(" "),_("p",[t._v("现代浏览器为"),_("code",[t._v("JavaScript")]),t._v("创造的 "),_("strong",[t._v("多线程环境")]),t._v("。可以新建并将部分任务分配到"),_("code",[t._v("worker")]),t._v("线程并行运行，两个线程可 "),_("strong",[t._v("独立运行，互不干扰")]),t._v("，可通过自带的 "),_("strong",[t._v("消息机制")]),t._v(" 相互通信。")]),t._v(" "),_("p",[_("strong",[t._v("基本用法:")])]),t._v(" "),_("div",{staticClass:"language-js extra-class"},[_("pre",{pre:!0,attrs:{class:"language-js"}},[_("code",[_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建 worker")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" worker "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Worker")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{pre:!0,attrs:{class:"token string"}},[t._v("'work.js'")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 向主进程推送消息")]),t._v("\nworker"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("postMessage")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello World'")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 监听主进程来的消息")]),t._v("\nworker"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),_("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onmessage")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Received message '")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" event"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),_("p",[_("strong",[t._v("限制:")])]),t._v(" "),_("ul",[_("li",[t._v("同源限制")]),t._v(" "),_("li",[t._v("无法使用 "),_("code",[t._v("document")]),t._v(" / "),_("code",[t._v("window")]),t._v(" / "),_("code",[t._v("alert")]),t._v(" / "),_("code",[t._v("confirm")])]),t._v(" "),_("li",[t._v("无法加载本地资源")])]),t._v(" "),_("h2",{attrs:{id:"v8-垃圾回收机制"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#v8-垃圾回收机制"}},[t._v("#")]),t._v(" V8 垃圾回收机制")]),t._v(" "),_("p",[t._v("垃圾回收: 将内存中不再使用的数据进行清理，释放出内存空间。V8 将内存分成 "),_("strong",[t._v("新生代空间")]),t._v(" 和 "),_("strong",[t._v("老生代空间")]),t._v("。")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("新生代空间：用于存活较短的对象")]),t._v(" "),_("ul",[_("li",[t._v("又分成两个空间: from 空间 与 to 空间")]),t._v(" "),_("li",[t._v("Scavenge GC 算法: 当 from 空间被占满时，启动 GC 算法\n"),_("ul",[_("li",[t._v("存活的对象从 from space 转移到 to space")]),t._v(" "),_("li",[t._v("清空 from space")]),t._v(" "),_("li",[t._v("from space 与 to space 互换")]),t._v(" "),_("li",[t._v("完成一次新生代 GC")])])])])]),t._v(" "),_("li",[_("p",[t._v("老生代空间：用于存活时间较长的对象")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("从 新生代空间 转移到 老生代空间 的条件")]),t._v(" "),_("ul",[_("li",[t._v("经历过一次以上 Scavenge GC 的对象")]),t._v(" "),_("li",[t._v("当 to space 体积超过 25%")])])]),t._v(" "),_("li",[_("p",[t._v("标记清除算法")]),t._v(" "),_("p",[t._v(": 标记存活的对象，未被标记的则被释放")]),t._v(" "),_("ul",[_("li",[t._v("增量标记: 小模块标记，在代码执行间隙执，GC 会影响性能")]),t._v(" "),_("li",[t._v("并发标记(最新技术): 不阻塞 js 执行")])])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("压缩算法")]),t._v(": 将内存中清除后导致的碎片化对象往内存堆的一端移动，解决 "),_("strong",[t._v("内存的碎片化")])])])])])]),t._v(" "),_("h2",{attrs:{id:"内存泄露"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#内存泄露"}},[t._v("#")]),t._v(" 内存泄露")]),t._v(" "),_("ul",[_("li",[t._v("意外的"),_("strong",[t._v("全局变量")]),t._v(": 无法被回收")]),t._v(" "),_("li",[_("strong",[t._v("定时器")]),t._v(": 未被正确关闭，导致所引用的外部变量无法被释放")]),t._v(" "),_("li",[_("strong",[t._v("事件监听")]),t._v(": 没有正确销毁 (低版本浏览器可能出现)")]),t._v(" "),_("li",[_("strong",[t._v("闭包")]),t._v(": 会导致父级中的变量无法被释放")]),t._v(" "),_("li",[_("strong",[t._v("dom 引用")]),t._v(": dom 元素被删除时，内存中的引用未被正确清空")])]),t._v(" "),_("p",[t._v("可用 chrome 中的 timeline 进行内存标记，可视化查看内存的变化情况，找出异常点。")]),t._v(" "),_("h2",{attrs:{id:"webview-debug"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#webview-debug"}},[t._v("#")]),t._v(" webview debug")]),t._v(" "),_("p",[t._v("推荐工具：")]),t._v(" "),_("ul",[_("li",[t._v("spy-debugger")])])])}),[],!1,null,null,null);v.default=e.exports}}]);