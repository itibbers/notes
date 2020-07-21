# React-learning

## State

1. 不要直接修改 State

2. State 的更新可能是异步的

3. State 的更新会被合并

> 为什么会有 setState，setState 做了什么？

vue 是对数据添加监听，自动响应到 dom 上，setState 是更新数据的同时，更新 dom

这通常会被叫做“自上而下”或是“单向”的数据流。任何的 state 总是所属于特定的组件，而且从该 state 派生的任何数据或 UI 只能影响树中“低于”它们的组件。

> 函数为什么要绑定 this

```jsx
// 构造器中绑定
this.handleClick = this.handleClick.bind(this)
// 以下为class fields实验性语法
this.handleClick = () => { console.log(this) }

// 不推荐，可能会造成子组件性能问题
  <button onClick={() => this.handleClick()}>Click</button>

// 两种等价，第一种事件对象必须显示指定
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```

```jsx
class Comp extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <div></div>
  }
}
```

表单受控组件

预留字段：

key

props.children 默认 slot，也可以指向 slot-name，注意 react 中没有槽 slot 概念，一切可以使用 props 传递

```jsx
left = {
  <div></div>
}
```

## React 哲学

### 第一步：将设计好的 UI 划分为组件层级

可以将组件当作一种函数或者是对象来考虑，根据单一功能原则来判定组件的范围。

> 组件设计也符合设计模式原则

### 第二步：用 React 创建一个静态版本

最好将渲染 UI 和添加交互这两个过程分开。

**不应该使用 state** 构建静态版本，state 代表了随时间会产生变化的数据。

对于较为大型的项目来说，自下而上地构建，并同时为低层组件编写测试是更加简单的方式。

React **单向数据流**（也叫*单向绑定*）的思想使得组件模块化，易于快速开发。

组件即函数，props=函数形参，state=函数内变量

> 函数式编程思想

### 第三步：确定 UI state 的最小（且完整）表示

确定是否是 state：由用户行为触发改变且不依赖其它 state 或 props 的数据

### 第四步：确定 state 放置的位置

单向数据流，顺着组件层级从上往下传递，状态提升。

> 状态提升：有状态的组件没有渲染，有渲染的组件没有状态。

### 第五步：添加反向数据流

React 通过一种比传统的双向绑定略微繁琐的方法来实现反向数据传递。尽管如此，但这种需要显式声明的方法更有助于人们理解程序的运作方式。

> 函数式编程思想。另外确实不如 vue 双向绑定简洁。

由于 state 只能由拥有它们的组件进行更改，父组件可以将一个能够改变 state 的回调函数传递给子组件，从而更新应用。

语法：

```jsx
import { Fragment, createRef } from 'react'
```

## 代码分割

### import()

代码分割最佳方式是动态 import()语法，webpack 解析到该语法时，会自动进行代码分割。如果使用 create-react-app，该功能开箱即用。

当使用 babel 时，要确保正确解析 import 语法而不是将其转换，需要使用 babel-plugin-sync-dynamic-import 插件

```jsx
import("./math").then(math => {})

// .babelrc
{
  "plugins": ["sync-dynamic-import"]
}
```

### React.lazy()

```jsx
import React, { Suspense } from 'react'

const OtherComponent = React.lazy(() => import('./OtherComponent'))

function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <OtherComponent />
      </Suspense>
    </div>
  )
}
```

### 基于路由的代码分割

```jsx
import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const Home = lazy(() => import('./routes/Home'))
const About = lazy(() => import('./routes/About'))

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
      </Switch>
    </Suspense>
  </Router>
)
```

## 深入 JSX

### 在运行时选择类型

类似 vue 动态组件，在 JSX 中，不能将通用表达式作为 React 元素类型，需要先将它赋值给大写字母开头的变量，再渲染。

```jsx
import React from 'react'
import { PhotoStory, VideoStory } from './stories'

const components = {
  photo: PhotoStory,
  video: VideoStory,
}

function Story(props) {
  // 正确！JSX 类型可以是大写字母开头的变量。
  const SpecificStory = components[props.storyType]
  return <SpecificStory story={props.story} />
}
```

## Portals

```jsx
  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el
    );
  }
```

虽然脱离 DOM 树，但依然在 React 树中。

## Render props

类似 vue slot

# Hook

组件复用很容易形成嵌套地狱

复杂组件变得难以理解

从概念上讲，React 组件一直更像是函数。而 Hook 则拥抱了函数，同时也没有牺牲 React 的精神原则。

## Hook API 索引

### 基础 Hook

#### useState

> 函数式更新

```js
setCount((prevCount) => prevCount + 1)
```

`useState`不会自动合并对象，可以结合展开运算符来达到合并更新对象的效果。

useReducer 是另一种可选方案，它更适合用于管理包含多个子值的 state 对象。

> 惰性初始 state

只会在组件的初始渲染中起作用，后续渲染时会被忽略。

```js
const [state, setState] = useState(() => {
  const initialState = someExpensiveComputation(props)
  return initialState
})
```

> 跳过 state 更新

React 使用 [`Object.is` 比较算法](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is#Description) 来比较 state。

如果你在渲染期间执行了高开销的计算，则可以使用 `useMemo` 来进行优化。

#### useEffect

> 清除 effect

useEffect 可以返回一个清除函数。为防止内存泄漏，清除函数会在组件卸载前执行。如果组件多次渲染（通常如此），则**在执行下一个 effect 之前，上一个 effect 就已被清除**。

# Awesome-React

[React](https://zh-hans.reactjs.org/)

[React 生命周期](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

[了解 React 设计思想](https://github.com/react-guide/react-basic)

[webpack 中文文档](https://webpack.docschina.org/)

[Create-React-App 官方脚手架](https://create-react-app.dev)

[react-router](https://reacttraining.com/react-router/web/guides/quick-start)

### Code Splitting

[webpack-lazy-loading](https://webpack.docschina.org/guides/lazy-loading)

[loadable-vs-react-lazy/](https://loadable-components.com/docs/loadable-vs-react-lazy/)
