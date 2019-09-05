# CSS

[[TOC]]

## BFC

当一个元素浮动之后，它会被移出正常的文档流，然后向左或者向右平移，一直平移直到碰到了所处的容器的边框，或者碰到另外一个浮动的元素。

总结下面试：

 - 大拇指：body爸爸元素哈哈哈哈哈哈哈哈
 - 食指：float除none以外的浮动元素
 - 中指：position绝对定位元素包括absolute fixed
 - 无名指：overflow除visible以外的值 hidden auto scroll
 - 小指：display: flex inline-block table-cells

**BFC的应用：**

1. 清除浮动
2. 布局
3. 解决块级盒边距重叠


## 像素

> [CSS像素、物理像素、逻辑像素、设备像素比、PPI、Viewport](https://github.com/jawil/blog/issues/21)

rem

viewport = 可视区域，可能比浏览器/webview的可视区域要大
移动端 默认viewport = 980/1024px
width=device-width

retina屏，分辨率提高，尺寸不变
css 1px = 2px 物理，放大缩小也有影响
window.devicePixelRatio = 物理像素 / 独立像素

可视区域
document.documentElement.clientWidth
window.innerWidth

```js
! function() {
    function Rem() {}
    Rem.prototype.reset = function() {
        var html = document.documentElement;
        // 750设计稿，base=100
        var base = Math.min(html.clientWidth, 750) / 750 * 100;
        // 设置html基础字体大小100px
        html.style.fontSize = base + "px";


        // 设置后实际大小，因为可能不是100
        var scale = parseFloat(window.getComputedStyle(html).fontSize);
        // 目标和实际比
        var rate = base / scale;
        // 如果比值不为1，即实际有偏差，将目标乘以比率
        1 !== rate && (html.style.fontSize = base * rate + "px");
    };


    window.Adapter = new Rem();
    window.Adapter.reset();
    window.onload = function() {
        window.Adapter.reset();
    };
    window.onresize = function() {
        window.Adapter.reset();
    };
}();
```

```less
@one = 100rem; // 一个字号单位为100rem
width: 24/@one;
```

## 小技巧

1. 移动端必须指定默认值（默认大约1.2）
2. 推荐使用无单位数值 https://codepen.io/itibbers/pen/pXMgpO
3. 无障碍主段落内容至少为1.5
4. font: size/line-height family;
5. 等比矩形 :after padding
6. outline 不占空间
7. button:disabled { cursor: not-allowed; }
8. width: fill-available; fit-content; max-content; min-content;
9. --percent: 50; background-size: calc(var(--percent) * 1%);
