# JS

[[TOC]]

## for in for of forEach区别

for (let key in iterable)
for...in语句以任意顺序遍历一个对象自有的、继承的、可枚举的、非Symbol的属性。对于每个不同的属性，语句都会被执行。

-   可遍历数组、对象
-   每个不同的属性都会执行
-   常与hasOwnProperty搭配使用

for (let value of iterable)
for...of语句在可迭代对象（包括 Array，Map，Set，String，TypedArray，arguments 对象等等）上创建一个迭代循环，调用自定义迭代钩子，并为每个不同属性的值执行语句。

-   不能遍历对象
-   可迭代属性

```js
    Object.prototype.objCustom = function() {};
    Array.prototype.arrCustom = function() {};

    let iterable = [3, 5, 7];
    iterable.foo = 'hello';

    for (let i in iterable) {
      console.log(i); // logs 0, 1, 2, "foo", "arrCustom", "objCustom"
    }

    for (let i in iterable) {
      if (iterable.hasOwnProperty(i)) {
        console.log(i); // logs 0, 1, 2, "foo"
      }
    }

    for (let i of iterable) {
      console.log(i); // logs 3, 5, 7
    }
```

Array.prototype.forEach(function(currentValue[, index\[, array\]][, thisArg]){})

-   不直接改变原对象
-   不能使用break跳出循环
-   每次计算数组长度

## this

-   方法调用模式：this被绑定到该对象
-   函数调用模式：this被绑定到全局对象（设计缺陷，常用that暂替）
-   构造器调用模式：this被绑定到新对象
-   apply/call调用模式：选择this的值
-   箭头函数: 首个非箭头函数调用者

## 运行机制

> [从浏览器多进程到JS单线程，JS运行机制最全面的一次梳理](https://segmentfault.com/a/1190000012925872)

## 设计模式

### MVC MVP MVVM

> [MVC，MVP 和 MVVM 的图示](http://www.ruanyifeng.com/blog/2015/02/mvcmvp_mvvm.html)

## 性能优化

### preload

> [preload - MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Preloading_content)
