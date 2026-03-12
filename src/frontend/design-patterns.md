# Design pattern

## 简介

**📝 官方简介**

设计模式代表了最佳的实践，通常被有经验的面向对象的软件开发人员所采用。设计模式是软件开发人员在软件开发过程中面临的一般问题的解决方案。这些解决方案是众多软件开发人员经过相当长的一段时间的试验和错误总结出来的。

设计模式是一套被反复使用的、多数人知晓的、经过分类编目的、代码设计经验的总结。使用设计模式是为了重用代码、让代码更容易被他人理解、保证代码可靠性。 毫无疑问，设计模式于己于他人于系统都是多赢的，设计模式使代码编制真正工程化，设计模式是软件工程的基石，如同大厦的一块块砖石一样。

**✏️ 个人理解**

> 面向过程 - 流水账
>
> 面向对象 - 类的约束
>
> 函数式编程 - 设计模式约束

主要介绍下设计模式的原则、基础分类的概念。

设计模式就是我们组织一段复杂代码的模板，其实在我们的代码中有很多设计模式的体现，比如 MVC、MVVM、模块化、组件化，设计模式其实是前人总结下来的一种组织代码的最佳实践。在众多模式中，模式之间的边界可能不是那么清晰。

在不同的编程语言中，设计模式侧重点可能也会不一样，比如策略模式在我们[函数是一等公民](https://blog.fundebug.com/2019/06/25/javascript-first-class-function/) JS 代码中，相当简单以及常见。另外为什么在 JS 中越来越不推荐类、继承、mixin，比如 React Hooks,Vue3，这其实也是设计模式在前端这个环境下的实践。

当我们脱离了面向对象中类的约束后，设计模式在函数式编程中对我们的约束以前价值体现就更突显了。

> 实践是检验真理的唯一标准 🤣——毛泽东

## 原则

**S – Single Responsibility Principle 单一职责原则**

- 一个程序只做好一件事
- 如果功能过于复杂就拆分开，每个部分保持独立

> renderXXX(), handleXXX(), XXComponent 反例：<XXSelect />

**O – OpenClosed Principle 开放/封闭原则**

- 对扩展开放，对修改封闭
- 增加需求时，扩展新代码，而非修改已有代码

> 只增不减，删减代码永远是危险的。尤其是改变字段的数据结构。
>
> 项目面临持续增长的问题，解决方法？

L – Liskov Substitution Principle 里氏替换原则

- 子类能覆盖父类
- 父类能出现的地方子类就能出现

I – Interface Segregation Principle 接口隔离原则

- 保持接口的单一独立
- 类似单一职责原则，这里更关注接口

> Typescript - Interface

D – Dependency Inversion Principle 依赖倒转原则

- 面向接口编程，依赖于抽象而不依赖于具体
- 使用方只关注接口而不关注具体类的实现

> React 哲学，逻辑/UI 组件分离也是一种体现

## 分类

**创建型**

- ⭐️ 单例模式：实例化一次
- 原型模式：继承
- ⭐️ 工厂模式：对象加工厂
- 抽象工厂模式：接口加工厂
- 建造者模式：组合加工厂

**结构型**

- 装饰者模式：加工厂+类
- ⭐️ 代理模式：代理转发、监听，反向代理，多对一
- 适配器模式：封装、适配新的需求，类似代理模式
- 外观模式：对底层封装，提供对外接口
- 组合模式：链式调用，将对象组合成树型结构
- 享元模式：大量细粒度对象共享一个元对象，线程池
- 桥接模式：抽象与实现分离，无情解耦，会增加内耗，性价比不高

**行为型**

- ⭐️ 观察者模式：一对多，多个观察者监听某个对象的变化，注意避免过度使用
- 迭代器模式：ES6 Iterator、forEach
- ⭐️ 策略模式：策略对象+策略类（执行器）
- 模板方法模式：类似继承，抽象父类，子类 slot
- ⭐️ 职责链模式：冒泡、原型链、.then()
- 命令模式：对象调用对象方法
- 备忘录模式：缓存列表
- 状态模式：不同状态对应不同行为，类化的大型 switch case
- 访问者模式：回调，父类接收子类访问自己
- ⭐️ 中介者模式：对象之间关系交由中介处理
- 解释器模式：语义化+迭代器

### 单例模式

**示例**

```js
let promise = promise || new Promise()

// store
```

**优点**

- 划分命名空间，减少全局变量
- 增强模块性，把自己的代码组织在一个全局变量名下，放在单一位置，便于维护
- 只会实例化一次，简化了代码的调试和维护

**缺点**

- 由于单例模式提供的是一种单点访问，所以它有可能导致模块间的强耦合 从而不利于单元测试。无法单独测试一个调用了来自单例的方法的类，而只能把它与那个单例作为一个单元一起测试。

### 原型模式

原型模式（prototype）是指用原型实例指向创建对象的种类，并且通过拷贝这些原型创建新的对象。

原型继承、类继承。

### 工厂模式

**示例**

```js
function Vue(options) {
  if (process.env.NODE_ENV !== 'production' && !(this instanceof Vue)) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}

initMixin(Vue)
stateMixin(Vue)
eventsMixin(Vue)
lifecycleMixin(Vue)
renderMixin(Vue)
```

**优点**

- 创建对象的过程可能很复杂，但我们只需要关心创建结果。
- 构造函数和创建者分离, 符合“开闭原则”
- 一个调用者想创建一个对象，只要知道其名称就可以了。
- 扩展性高，如果想增加一个产品，只要扩展一个工厂类就可以。

**缺点**

- 添加新产品时，需要编写新的具体产品类,一定程度上增加了系统的复杂度
- 考虑到系统的可扩展性，需要引入抽象层，在客户端代码中均使用抽象层进行定义，增加了系统的抽象性和理解难度

### 装饰者模式

**示例**

- 比如现在有 4 种型号的自行车，我们为每种自行车都定义了一个单独的类。现在要给每种自行车都装上前灯、尾 灯和铃铛这 3 种配件。如果使用继承的方式来给每种自行车创建子类，则需要 4×3 = 12 个子类。 但是如果把前灯、尾灯、铃铛这些对象动态组合到自行车上面，则只需要额外增加 3 个类。

- ES7 Decorator [阮一峰](http://es6.ruanyifeng.com/#docs/decorator)

```js
class Cellphone {
  create() {
    console.log('生成一个手机')
  }
}
class Decorator {
  constructor(cellphone) {
    this.cellphone = cellphone
  }
  create() {
    this.cellphone.create()
    this.createShell(cellphone)
  }
  createShell() {
    console.log('生成手机壳')
  }
}
// 测试代码
let cellphone = new Cellphone()
cellphone.create()

console.log('------------')
let dec = new Decorator(cellphone)
dec.create()
```

**优点**

- 装饰类和被装饰类都只关心自身的核心业务，实现了解耦。
- 方便动态的扩展功能，且提供了比继承更多的灵活性。

**缺点**

- 多层装饰比较复杂。
- 常常会引入许多小对象，看起来比较相似，实际功能大相径庭，从而使得我们的应用程序架构变得复杂起来

### 代理模式

**示例**

- 事件代理
- ES6 的 proxy [阮一峰 Proxy](http://es6.ruanyifeng.com/#docs/proxy)
- jQuery.proxy()方法
- img lazy load

```js
// 先申明一个奶茶妹对象
var TeaAndMilkGirl = function (name) {
  this.name = name
}
// 这是京东ceo先生
var Ceo = function (girl) {
  this.girl = girl
  // 送结婚礼物 给奶茶妹
  this.sendMarriageRing = function (ring) {
    console.log('Hi ' + this.girl.name + ', ceo送你一个礼物：' + ring)
  }
}
// 京东ceo的经纪人是代理，来代替送
var ProxyObj = function (girl) {
  this.girl = girl
  // 经纪人代理送礼物给奶茶妹
  this.sendGift = function (gift) {
    // 代理模式负责本体对象实例化
    new Ceo(this.girl).sendMarriageRing(gift)
  }
}
// 初始化
var proxy = new ProxyObj(new TeaAndMilkGirl('奶茶妹'))
proxy.sendGift('结婚戒') // Hi 奶茶妹, ceo送你一个礼物：结婚戒
```

**优点**

- 代理模式能将代理对象与被调用对象分离，降低了系统的耦合度。代理模式在客户端和目标对象之间起到一个中介作用，这样可以起到保护目标对象的作用
- 代理对象可以扩展目标对象的功能；通过修改代理对象就可以了，符合开闭原则；

**缺点**

处理请求速度可能有差别，非直接访问存在开销

### 适配器模式

**示例**

```js
class Plug {
  getName() {
    return 'iphone充电头'
  }
}

class Target {
  constructor() {
    this.plug = new Plug()
  }
  getName() {
    return this.plug.getName() + ' 适配器Type-c充电头'
  }
}

let target = new Target()
target.getName() // iphone充电头 适配器转Type-c充电头
```

- 封装旧接口
- vue 计算属性

**优点**

- 可以让任何两个没有关联的类一起运行。
- 提高了类的复用。
- 适配对象，适配库，适配数据

**缺点**

- 额外对象的创建，非直接调用，存在一定的开销（且不像代理模式在某些功能点上可实现性能优化)
- 如果没必要使用适配器模式的话，可以考虑重构，如果使用的话，尽量把文档完善

### 外观模式

为子系统的一组接口提供一个一致的界面，定义了一个高层接口，这个接口使子系统更加容易使用

**场景**

- 设计初期，应该要有意识地将不同的两个层分离，比如经典的三层结构，在数据访问层和业务逻辑层、业务逻辑层和表示层之间建立外观 Facade
- 在开发阶段，子系统往往因为不断的重构演化而变得越来越复杂，增加外观 Facade 可以提供一个简单的接口，减少他们之间的依赖。
- 在维护一个遗留的大型系统时，可能这个系统已经很难维护了，这时候使用外观 Facade 也是非常合适的，为系统开发一个外观 Facade 类，为设计粗糙和高度复杂的遗留代码提供比较清晰的接口，让新系统和 Facade 对象交互，Facade 与遗留代码交互所有的复杂工作。

参考： 大话设计模式

```js
let addMyEvent = function (el, ev, fn) {
  if (el.addEventListener) {
    el.addEventListener(ev, fn, false)
  } else if (el.attachEvent) {
    el.attachEvent('on' + ev, fn)
  } else {
    el['on' + ev] = fn
  }
}
```

- 小程序
- 多态

**优点**

- 减少系统相互依赖。
- 提高灵活性。
- 提高了安全性

**缺点**

- 不符合开闭原则，如果要改东西很麻烦，继承重写都不合适。

> 封装组件也是一种外观模式体现，过度封装可能带来一系列问题，逻辑/UI 分离、分层

### 组合模式

- 将对象组合成树形结构，以表示“整体-部分”的层次结构。
- 通过对象的多态表现，使得用户对单个对象和组合对象的使用具有一致性。

> 树型

```js
class TrainOrder {
  create() {
    console.log('创建火车票订单')
  }
}
class HotelOrder {
  create() {
    console.log('创建酒店订单')
  }
}

class TotalOrder {
  constructor() {
    this.orderList = []
  }
  addOrder(order) {
    this.orderList.push(order)
    return this
  }
  create() {
    this.orderList.forEach((item) => {
      item.create()
    })
    return this
  }
}
// 可以在购票网站买车票同时也订房间
let train = new TrainOrder()
let hotel = new HotelOrder()
let total = new TotalOrder()
total.addOrder(train).addOrder(hotel).create()
```

- next.config.js 中的插件

### 享元模式

运用共享技术有效地支持大量细粒度对象的复用。系统只使用少量的对象，而这些对象都很相似，状态变化很小，可以实现对象的多次复用。由于享元模式要求能够共享的对象必须是细粒度对象，因此它又称为轻量级模式，它是一种对象结构型模式。

**场景**

- 文件上传需要创建多个文件实例的时候
- 如果一个应用程序使用了大量的对象，而这些大量的对象造成了很大的存储开销时就应该考虑使用享元模式

**优点**

- 大大减少对象的创建，降低系统的内存，使效率提高。

**缺点**

- 提高了系统的复杂度，需要分离出外部状态和内部状态，而且外部状态具有固有化的性质，

> 队列型

### 桥接模式

桥接模式（Bridge）将抽象部分与它的实现部分分离，使它们都可以独立地变化。

```js
class Color {
  constructor(name) {
    this.name = name
  }
}
class Shape {
  constructor(name, color) {
    this.name = name
    this.color = color
  }
  draw() {
    console.log(`${this.color.name} ${this.name}`)
  }
}

//测试
let red = new Color('red')
let yellow = new Color('yellow')
let circle = new Shape('circle', red)
circle.draw()
let triangle = new Shape('triangle', yellow)
triangle.draw()
```

**优点**

- 有助于独立地管理各组成部分， 把抽象化与实现化解耦
- 提高可扩充性

**缺点**

- 大量的类将导致开发成本的增加，同时在性能方面可能也会有所减少。

### 观察者模式

定义了一种一对多的关系，让多个观察者对象同时监听某一个主题对象，这个主题对象的状态发生变化时就会通知所有的观察者对象，使它们能够自动更新自己，当一个对象的改变需要同时改变其它对象，并且它不知道具体有多少对象需要改变的时候，就应该考虑使用观察者模式。

- 发布 & 订阅
- 一对多

**优点**

- 支持简单的广播通信，自动通知所有已经订阅过的对象
- 目标对象与观察者之间的抽象耦合关系能单独扩展以及重用
- 增加了灵活性
- 观察者模式所做的工作就是在解耦，让耦合的双方都依赖于抽象，而不是依赖于具体。从而使得各自的变化都不会影响到另一边的变化。

**缺点**

过度使用会导致对象与对象之间的联系弱化，会导致程序难以跟踪维护和理解

> 写时一时爽，重构火葬场

> 基类中耦合发布订阅
>
> OC tableRef

### 迭代器模式

示例

- Array.prototype.forEach
- jQuery 中的\$.each()
- ES6 Iterator

优点

- 访问一个聚合对象的内容而无需暴露它的内部表示。
- 为遍历不同的集合结构提供一个统一的接口，从而支持同样的算法在不同的集合结构上进行操作

### 策略模式

**场景**

- 如果在一个系统里面有许多类，它们之间的区别仅在于它们的'行为'，那么使用策略模式可以动态地让一个对象在许多行为中选择一种行为。
- 一个系统需要动态地在几种算法中选择一种。
- 表单验证

计算奖金

1. 基础版

```js
var calculateBouns = function (salary, level) {
  if (level === 'A') {
    return salary * 4
  }
  if (level === 'B') {
    return salary * 3
  }
  if (level === 'C') {
    return salary * 2
  }
}
// 调用如下：
console.log(calculateBouns(4000, 'A')) // 16000
console.log(calculateBouns(2500, 'B')) // 7500
```

2. 使用组合函数重构代码

```js
var performanceA = function (salary) {
  return salary * 4
}
var performanceB = function (salary) {
  return salary * 3
}

var performanceC = function (salary) {
  return salary * 2
}
var calculateBouns = function (level, salary) {
  if (level === 'A') {
    return performanceA(salary)
  }
  if (level === 'B') {
    return performanceB(salary)
  }
  if (level === 'C') {
    return performanceC(salary)
  }
}
// 调用如下
console.log(calculateBouns('A', 4500)) // 18000
```

3. 使用策略模式重构代码

```js
var performanceA = function () {}
performanceA.prototype.calculate = function (salary) {
  return salary * 4
}
var performanceB = function () {}
performanceB.prototype.calculate = function (salary) {
  return salary * 3
}
var performanceC = function () {}
performanceC.prototype.calculate = function (salary) {
  return salary * 2
}
// 奖金类
var Bouns = function () {
  this.salary = null // 原始工资
  this.levelObj = null // 绩效等级对应的策略对象
}
Bouns.prototype.setSalary = function (salary) {
  this.salary = salary // 保存员工的原始工资
}
Bouns.prototype.setlevelObj = function (levelObj) {
  this.levelObj = levelObj // 设置员工绩效等级对应的策略对象
}
// 取得奖金数
Bouns.prototype.getBouns = function () {
  // 把计算奖金的操作委托给对应的策略对象
  return this.levelObj.calculate(this.salary)
}
var bouns = new Bouns()
bouns.setSalary(10000)
bouns.setlevelObj(new performanceA()) // 设置策略对象
console.log(bouns.getBouns()) // 40000

bouns.setlevelObj(new performanceB()) // 设置策略对象
console.log(bouns.getBouns()) // 30000
```

4. JS 版本策略模式

```js
var obj = {
  A: function (salary) {
    return salary * 4
  },
  B: function (salary) {
    return salary * 3
  },
  C: function (salary) {
    return salary * 2
  },
}
var calculateBouns = function (level, salary) {
  return obj[level](salary)
}
console.log(calculateBouns('A', 10000)) // 40000
```

**优点**

- 利用组合、委托、多态等技术和思想，可以有效的避免多重条件选择语句
- 提供了对开放-封闭原则的完美支持，将算法封装在独立的 strategy 中，使得它们易于切换，理解，易于扩展
- 利用组合和委托来让 Context 拥有执行算法的能力，这也是继承的一种更轻便的代替方案

**缺点**

- 会在程序中增加许多策略类或者策略对象
- 要使用策略模式，必须了解所有的 strategy，必须了解各个 strategy 之间的不同点，这样才能选择一个合适的 strategy

### 模板方法模式

模板方法模式由两部分结构组成，第一部分是抽象父类，第二部分是具体的实现子类。通常在抽象父类中封装了子类的算法框架，包括实现一些公共方法和封装子类中所有方法的执行顺序。子类通过继承这个抽象类，也继承了整个算法结构，并且可以选择重写父类的方法。

```js
class Beverage {
  constructor({ brewDrink, addCondiment }) {
    this.brewDrink = brewDrink
    this.addCondiment = addCondiment
  }
  /* 烧开水，共用方法 */
  boilWater() {
    console.log('水已经煮沸=== 共用')
  }
  /* 倒杯子里，共用方法 */
  pourCup() {
    console.log('倒进杯子里===共用')
  }
  /* 模板方法 */
  init() {
    this.boilWater()
    this.brewDrink()
    this.pourCup()
    this.addCondiment()
  }
}
/* 咖啡 */
const coffee = new Beverage({
  /* 冲泡咖啡，覆盖抽象方法 */
  brewDrink: function () {
    console.log('冲泡咖啡')
  },
  /* 加调味品，覆盖抽象方法 */
  addCondiment: function () {
    console.log('加点奶和糖')
  },
})
coffee.init()
```

**场景**

- 一次性实现一个算法的不变的部分，并将可变的行为留给子类来实现
- 子类中公共的行为应被提取出来并集中到一个公共父类中的避免代码重复

**优点**

- 提取了公共代码部分，易于维护

**缺点**

- 增加了系统复杂度，主要是增加了的抽象类和类间联系

### 职责链模式

使多个对象都有机会处理请求，从而避免请求的发送者和接受者之间的耦合关系，将这些对象连成一条链，并沿着这条链传递该请求，直到有一个对象处理它为止

**场景**

- JS 中的事件冒泡
- 作用域链
- 原型链

**优点**

- 降低耦合度。它将请求的发送者和接收者解耦。
- 简化了对象。使得对象不需要知道链的结构
- 增强给对象指派职责的灵活性。通过改变链内的成员或者调动它们的次序，允许动态地新增或者删除责任
- 增加新的请求处理类很方便。

**缺点**

- 不能保证某个请求一定会被链中的节点处理，这种情况可以在链尾增加一个保底的接受者节点来处理这种即将离开链尾的请求。
- 使程序中多了很多节点对象，可能再一次请求的过程中，大部分的节点并没有起到实质性的作用。他们的作用仅仅是让请求传递下去，从性能当面考虑，要避免过长的职责链到来的性能损耗。

### 命令模式

```js
// 接收者类
class Receiver {
  execute() {
    console.log('接收者执行请求')
  }
}

// 命令者
class Command {
  constructor(receiver) {
    this.receiver = receiver
  }
  execute() {
    console.log('命令')
    this.receiver.execute()
  }
}
// 触发者
class Invoker {
  constructor(command) {
    this.command = command
  }
  invoke() {
    console.log('开始')
    this.command.execute()
  }
}

// 仓库
const warehouse = new Receiver()
// 订单
const order = new Command(warehouse)
// 客户
const client = new Invoker(order)
client.invoke()
```

**优点**

- 对命令进行封装，使命令易于扩展和修改
- 命令发出者和接受者解耦，使发出者不需要知道命令的具体执行过程即可执行

**缺点**

- 使用命令模式可能会导致某些系统有过多的具体命令类。

### 备忘录模式

在不破坏封装性的前提下，捕获一个对象的内部状态，并在该对象之外保存这个状态。这样以后就可将该对象恢复到保存的状态。

**场景**

- 分页控件
- 撤销组件

**优点**

- 给用户提供了一种可以恢复状态的机制，可以使用户能够比较方便地回到某个历史的状态

**缺点**

- 消耗资源。如果类的成员变量过多，势必会占用比较大的资源，而且每一次保存都会消耗一定的内存。

### 状态模式

允许一个对象在其内部状态改变的时候改变它的行为，对象看起来似乎修改了它的类

不同状态对应不同行为，类化的大型 switch case

**优点**

- 定义了状态与行为之间的关系，封装在一个类里，更直观清晰，增改方便
- 状态与状态间，行为与行为间彼此独立互不干扰
- 用对象代替字符串来记录当前状态，使得状态的切换更加一目了然

**缺点**

- 会在系统中定义许多状态类
- 逻辑分散

### 访问者模式

表示一个作用于某对象结构中的各元素的操作。它使你可以在不改变各元素的类的前提下定义作用于这些元素的新操作。

回调，父类接收子类访问自己

```js
// 访问者
class Visitor {
  constructor() {}
  visitConcreteElement(ConcreteElement) {
    ConcreteElement.operation()
  }
}
// 元素类
class ConcreteElement {
  constructor() {}
  operation() {
    console.log('ConcreteElement.operation invoked')
  }
  accept(visitor) {
    visitor.visitConcreteElement(this)
  }
}
// client
let visitor = new Visitor()
let element = new ConcreteElement()
elementA.accept(visitor)
```

**场景**

- 对象结构中对象对应的类很少改变，但经常需要在此对象结构上定义新的操作
- 需要对一个对象结构中的对象进行很多不同的并且不相关的操作，而需要避免让这些操作"污染"这些对象的类，也不希望在增加新操作时修改这些类。

**优点**

- 符合单一职责原则
- 优秀的扩展性
- 灵活性

**缺点**

- 具体元素对访问者公布细节，违反了迪米特原则
- 违反了依赖倒置原则，依赖了具体类，没有依赖抽象。
- 具体元素变更比较困难

### 中介者模式

解除对象与对象之间的紧耦合关系。增加一个中介者对象后，所有的 相关对象都通过中介者对象来通信，而不是互相引用，所以当一个对象发生改变时，只需要通知 中介者对象即可。中介者使各对象之间耦合松散，而且可以独立地改变它们之间的交互。中介者 模式使网状的多对多关系变成了相对简单的一对多关系（类似于观察者模式，但是单向的，由中介者统一管理。）

**场景**

- 系统中对象之间存在比较复杂的引用关系，导致它们之间的依赖关系结构混乱而且难以复用该对象
- 想通过一个中间类来封装多个类中的行为，而又不想生成太多的子类。

```js
class A {
  constructor() {
    this.number = 0
  }
  setNumber(num, m) {
    this.number = num
    if (m) {
      m.setB()
    }
  }
}
class B {
  constructor() {
    this.number = 0
  }
  setNumber(num, m) {
    this.number = num
    if (m) {
      m.setA()
    }
  }
}
class Mediator {
  constructor(a, b) {
    this.a = a
    this.b = b
  }
  setA() {
    let number = this.b.number
    this.a.setNumber(number * 10)
  }
  setB() {
    let number = this.a.number
    this.b.setNumber(number / 10)
  }
}

let a = new A()
let b = new B()
let m = new Mediator(a, b)
a.setNumber(10, m)
console.log(a.number, b.number)
b.setNumber(10, m)
console.log(a.number, b.number)
```

**优点**

- 使各对象之间耦合松散，而且可以独立地改变它们之间的交互
- 中介者和对象一对多的关系取代了对象之间的网状多对多的关系
- 如果对象之间的复杂耦合度导致维护很困难，而且耦合度随项目变化增速很快，就需要中介者重构代码

**缺点**

- 系统中会新增一个中介者对象，因 为对象之间交互的复杂性，转移成了中介者对象的复杂性，使得中介者对象经常是巨大的。中介 者对象自身往往就是一个难以维护的对象。

### 解释器模式

给定一个语言, 定义它的文法的一种表示，并定义一个解释器, 该解释器使用该表示来解释语言中的句子。

```js
class Context {
  constructor() {
    this._list = [] // 存放 终结符表达式
    this._sum = 0 // 存放 非终结符表达式(运算结果)
  }

  get sum() {
    return this._sum
  }
  set sum(newValue) {
    this._sum = newValue
  }
  add(expression) {
    this._list.push(expression)
  }
  get list() {
    return [...this._list]
  }
}

class PlusExpression {
  interpret(context) {
    if (!(context instanceof Context)) {
      throw new Error('TypeError')
    }
    context.sum = ++context.sum
  }
}
class MinusExpression {
  interpret(context) {
    if (!(context instanceof Context)) {
      throw new Error('TypeError')
    }
    context.sum = --context.sum
  }
}

/** 以下是测试代码 **/
const context = new Context()

// 依次添加: 加法 | 加法 | 减法 表达式
context.add(new PlusExpression())
context.add(new PlusExpression())
context.add(new MinusExpression())

// 依次执行: 加法 | 加法 | 减法 表达式
context.list.forEach((expression) => expression.interpret(context))
console.log(context.sum)
```

**优点**

- 易于改变和扩展文法。
- 由于在解释器模式中使用类来表示语言的文法规则，因此可以通过继承等机制来改变或扩展文法

**缺点**

- 执行效率较低，在解释器模式中使用了大量的循环和递归调用，因此在解释较为复杂的句子时其速度慢
- 对于复杂的文法比较难维护

## 总结

设计模式分类基本思想不变，写法变种很多，需要再深入研究下，在研究过程中，也会不断提高自己对代码结构的把控能力。
