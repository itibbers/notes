(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{184:function(t,a,e){t.exports=e.p+"assets/img/https.6bfb6f85.jpeg"},200:function(t,a,e){"use strict";e.r(a);var v=e(3),s=Object(v.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"网络"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#网络"}},[t._v("#")]),t._v(" 网络")]),t._v(" "),v("p"),v("div",{staticClass:"table-of-contents"},[v("ul",[v("li",[v("a",{attrs:{href:"#http"}},[t._v("HTTP")]),v("ul",[v("li",[v("a",{attrs:{href:"#状态码"}},[t._v("状态码")])])])]),v("li",[v("a",{attrs:{href:"#https"}},[t._v("HTTPS")])]),v("li",[v("a",{attrs:{href:"#xss-和-csrf-区别"}},[t._v("XSS 和 CSRF 区别")])]),v("li",[v("a",{attrs:{href:"#缓存"}},[t._v("缓存")]),v("ul",[v("li",[v("a",{attrs:{href:"#强缓存"}},[t._v("强缓存")])]),v("li",[v("a",{attrs:{href:"#协商缓存"}},[t._v("协商缓存")])]),v("li",[v("a",{attrs:{href:"#选择合适的缓存策略"}},[t._v("选择合适的缓存策略")])]),v("li",[v("a",{attrs:{href:"#使用-http-2-0"}},[t._v("使用 HTTP / 2.0")])])])])])]),v("p"),t._v(" "),v("h2",{attrs:{id:"http"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http"}},[t._v("#")]),t._v(" HTTP")]),t._v(" "),v("blockquote",[v("p",[v("a",{attrs:{href:"https://juejin.im/post/5d032b77e51d45777a126183",target:"_blank",rel:"noopener noreferrer"}},[t._v("面试官（9）：可能是全网最全的 http 面试答案"),v("OutboundLink")],1)])]),t._v(" "),v("h3",{attrs:{id:"状态码"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#状态码"}},[t._v("#")]),t._v(" 状态码")]),t._v(" "),v("p",[v("strong",[t._v("1xx 表示客户端应该继续发送请求")])]),t._v(" "),v("p",[v("strong",[t._v("2xx 表示成功的请求")])]),t._v(" "),v("ul",[v("li",[t._v("200 OK 表示 OK，正常返回信息")]),t._v(" "),v("li",[t._v("201 Created 表示请求成功且服务器创建了新的资源")]),t._v(" "),v("li",[t._v("202 Accepted 表示服务器已经接受了请求，但还未处理")]),t._v(" "),v("li",[t._v("206 Partial Content 表示服务器已经处理了部分 GET 请求")])]),t._v(" "),v("p",[v("strong",[t._v("3xx 表示重定向")])]),t._v(" "),v("ul",[v("li",[t._v("301 Moved Permanently 表示永久重定向，请求的网页已经永久移动到新位置")]),t._v(" "),v("li",[t._v("302 Found 表示临时重定向")]),t._v(" "),v("li",[t._v("304 Not Modified 表示自从上一次请求以来，页面的内容没有改变过，常见协商缓存")])]),t._v(" "),v("p",[v("strong",[t._v("4xx 表示客户端错误")])]),t._v(" "),v("ul",[v("li",[t._v("400 Bad Request 表示服务器无法理解请求的格式，语义或请求参数有误")]),t._v(" "),v("li",[t._v("401 Unauthorized 表示当前请求需要用户验证")]),t._v(" "),v("li",[t._v("403 Fobidden 表示禁止访问")]),t._v(" "),v("li",[t._v("404 Not Found 表示请求的资源不存在，一般是路径写错了")])]),t._v(" "),v("p",[v("strong",[t._v("5xx 表示服务器错误")])]),t._v(" "),v("ul",[v("li",[t._v("500 Internal Server Error 表示最常见的服务器错误")]),t._v(" "),v("li",[t._v("502 Bad Gateway 表示网关错误")]),t._v(" "),v("li",[t._v("503 Service Unavailable 表示服务器暂时无法处理请求")])]),t._v(" "),v("h2",{attrs:{id:"https"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#https"}},[t._v("#")]),t._v(" HTTPS")]),t._v(" "),v("p",[t._v("对称加密算法：加密和解密算法是公开的，密钥是保密的，加密和解密使用同一个密钥。")]),t._v(" "),v("p",[t._v("非对称加密 RSA 算法：一对儿钥匙，一个是保密的，称为私钥，另一个是公开的，称为公钥。用私钥加密的数据，只有对应的公钥才能解密，用公钥加密的数据， 只有对应的私钥才能解密。")]),t._v(" "),v("p",[t._v("非对称加密+对称加密：由于 RSA 算法加解密较慢，可以使用非对称加密传输对称加密密钥，再使用对称加密通信。")]),t._v(" "),v("p",[t._v("中间人攻击：劫取并伪装 RSA 公钥，导致用户使用了中间人的公钥加密。问题出现在公钥的分发。")]),t._v(" "),v("p",[t._v("数字签名和数字证书：有公信力的认证中心（CA）使用 Hash 算法对消息处理生成消息摘要，再用它的私钥对消息摘要加密，形成签名。消息+数字签名=数字证书。用户拿到证书后，使用相同的 Hash 算法生成消息摘要，再用 CA 的公钥解密数字签名，两份消息摘要进行对比，就知道有没有被篡改了。如果没有篡改，即得到服务器公钥。")]),t._v(" "),v("p",[t._v("HTTPS 流程：接上，拿到服务器公钥后，浏览器生成随机的对称密钥，使用服务器公钥加密，服务器用自己的私钥解密，得到对称密钥，双方都知道了安全的对称密钥，可以用来加密通信了。")]),t._v(" "),v("p",[v("img",{attrs:{src:e(184),alt:"https"}})]),t._v(" "),v("h2",{attrs:{id:"xss-和-csrf-区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#xss-和-csrf-区别"}},[t._v("#")]),t._v(" XSS 和 CSRF 区别")]),t._v(" "),v("ol",[v("li",[t._v("跨站脚本攻击（Cross Site Scripting)，为了不和层叠样式表 CSS 混淆，故将跨站脚本攻击缩写为 XSS。恶意攻击者往 Web 页面里插入恶意 Script 代码，当用户浏览该页之时，嵌入其中 Web 里面的 Script 代码会被执行，从而达到恶意攻击用户的目的。")]),t._v(" "),v("li",[t._v("跨站请求伪造（Cross-site request forgery），是伪造请求，冒充用户在站内的正常操作。我们知道，绝大多数网站是通过 cookie 等方式辨识用户身份，再予以授权的。所以要伪造用户的正常操作，最好的方法是通过 XSS 或链接欺骗等途径，让用户在本机（即拥有身份 cookie 的浏览器端）发起用户所不知道的请求。")])]),t._v(" "),v("p",[t._v("区别：")]),t._v(" "),v("ul",[v("li",[t._v("原理不同，CSRF 是利用网站 A 本身的漏洞，去请求网站 A 的 api；XSS 是向目标网站注入 JS 代码，然后执行 JS 里的代码。")]),t._v(" "),v("li",[t._v("CSRF 需要用户先登录目标网站获取 cookie，而 XSS 不需要登录")]),t._v(" "),v("li",[t._v("CSRF 的目标是用户，XSS 的目标是服务器")]),t._v(" "),v("li",[t._v("XSS 是利用合法用户获取其信息，而 CSRF 是伪造成合法用户发起请求")])]),t._v(" "),v("h2",{attrs:{id:"缓存"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#缓存"}},[t._v("#")]),t._v(" 缓存")]),t._v(" "),v("p",[t._v("缓存对于前端性能优化来说是个很重要的点，良好的缓存策略可以降低资源的重复加载提高网页的整体加载速度。")]),t._v(" "),v("p",[t._v("通常浏览器缓存策略分为两种：强缓存和协商缓存。")]),t._v(" "),v("h3",{attrs:{id:"强缓存"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#强缓存"}},[t._v("#")]),t._v(" 强缓存")]),t._v(" "),v("p",[t._v("实现强缓存可以通过两种响应头实现："),v("code",[t._v("Expires")]),t._v(" 和 "),v("code",[t._v("Cache-Control")]),t._v(" 。强缓存表示在缓存期间不需要请求，"),v("code",[t._v("state code")]),t._v(" 为 200")]),t._v(" "),v("div",{staticClass:"language-js extra-class"},[v("pre",{pre:!0,attrs:{class:"language-js"}},[v("code",[t._v("Expires"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Wed"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),t._v(" Oct "),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("2018")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("08")]),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("41")]),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("00")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token constant"}},[t._v("GMT")]),t._v("\n")])])]),v("p",[v("code",[t._v("Expires")]),t._v(" 是 HTTP / 1.0 的产物，表示资源会在 "),v("code",[t._v("Wed, 22 Oct 2018 08:41:00 GMT")]),t._v(" 后过期，需要再次请求。并且 "),v("code",[t._v("Expires")]),t._v(" 受限于本地时间，如果修改了本地时间，可能会造成缓存失效。")]),t._v(" "),v("div",{staticClass:"language-js extra-class"},[v("pre",{pre:!0,attrs:{class:"language-js"}},[v("code",[t._v("Cache"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("control"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" max"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("age"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),t._v("\n")])])]),v("p",[v("code",[t._v("Cache-Control")]),t._v(" 出现于 HTTP / 1.1，优先级高于 "),v("code",[t._v("Expires")]),t._v(" 。该属性表示资源会在 30 秒后过期，需要再次请求。")]),t._v(" "),v("h3",{attrs:{id:"协商缓存"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#协商缓存"}},[t._v("#")]),t._v(" 协商缓存")]),t._v(" "),v("p",[t._v("如果缓存过期了，我们就可以使用协商缓存来解决问题。协商缓存需要请求，如果缓存有效会返回 304。")]),t._v(" "),v("p",[t._v("协商缓存需要客户端和服务端共同实现，和强缓存一样，也有两种实现方式。")]),t._v(" "),v("h5",{attrs:{id:"last-modified-和-if-modified-since"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#last-modified-和-if-modified-since"}},[t._v("#")]),t._v(" Last-Modified 和 If-Modified-Since")]),t._v(" "),v("p",[v("code",[t._v("Last-Modified")]),t._v(" 表示本地文件最后修改日期，"),v("code",[t._v("If-Modified-Since")]),t._v(" 会将 "),v("code",[t._v("Last-Modified")]),t._v(" 的值发送给服务器，询问服务器在该日期后资源是否有更新，有更新的话就会将新的资源发送回来。")]),t._v(" "),v("p",[t._v("但是如果在本地打开缓存文件，就会造成 "),v("code",[t._v("Last-Modified")]),t._v(" 被修改，所以在 HTTP / 1.1 出现了 "),v("code",[t._v("ETag")]),t._v("。")]),t._v(" "),v("h5",{attrs:{id:"etag-和-if-none-match"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#etag-和-if-none-match"}},[t._v("#")]),t._v(" ETag 和 If-None-Match")]),t._v(" "),v("p",[v("code",[t._v("ETag")]),t._v(" 类似于文件指纹，"),v("code",[t._v("If-None-Match")]),t._v(" 会将当前 "),v("code",[t._v("ETag")]),t._v(" 发送给服务器，询问该资源 "),v("code",[t._v("ETag")]),t._v(" 是否变动，有变动的话就将新的资源发送回来。并且 "),v("code",[t._v("ETag")]),t._v(" 优先级比 "),v("code",[t._v("Last-Modified")]),t._v(" 高。")]),t._v(" "),v("h3",{attrs:{id:"选择合适的缓存策略"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#选择合适的缓存策略"}},[t._v("#")]),t._v(" 选择合适的缓存策略")]),t._v(" "),v("p",[t._v("对于大部分的场景都可以使用强缓存配合协商缓存解决，但是在一些特殊的地方可能需要选择特殊的缓存策略")]),t._v(" "),v("ul",[v("li",[t._v("对于某些不需要缓存的资源，可以使用 "),v("code",[t._v("Cache-control: no-store")]),t._v(" ，表示该资源不需要缓存")]),t._v(" "),v("li",[t._v("对于频繁变动的资源，可以使用 "),v("code",[t._v("Cache-Control: no-cache")]),t._v(" 并配合 "),v("code",[t._v("ETag")]),t._v(" 使用，表示该资源已被缓存，但是每次都会发送请求询问资源是否更新。")]),t._v(" "),v("li",[t._v("对于代码文件来说，通常使用 "),v("code",[t._v("Cache-Control: max-age=31536000")]),t._v(" 并配合策略缓存使用，然后对文件进行指纹处理，一旦文件名变动就会立刻下载新的文件。")])]),t._v(" "),v("h3",{attrs:{id:"使用-http-2-0"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#使用-http-2-0"}},[t._v("#")]),t._v(" 使用 HTTP / 2.0")]),t._v(" "),v("p",[t._v("因为浏览器会有并发请求限制，在 HTTP / 1.1 时代，每个请求都需要建立和断开，消耗了好几个 RTT 时间，并且由于 TCP 慢启动的原因，加载体积大的文件会需要更多的时间。")]),t._v(" "),v("p",[t._v("在 HTTP / 2.0 中引入了多路复用，能够让多个请求使用同一个 TCP 链接，极大的加快了网页的加载速度。并且还支持 Header 压缩，进一步的减少了请求的数据大小。")])])}),[],!1,null,null,null);a.default=s.exports}}]);