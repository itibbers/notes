# 浅入浅出 rc-field-form

## 前言

rc-field-form 是 antd form 的核心组成部分，antd 其实是对 rc-\*组件的一层简单封装。

今天主要分享下我对 rc-field-form 内部原理的认识。一起深入了解了一下 rc-field-form 的工作原理，当工作中遇到复杂表单时可以做到游刃有余。

## 基本用法

```bash
npm repo rc-field-form
```

基本用法

```jsx
import Form, { Field } from 'rc-field-form'

const Demo = () => (
  <Form
    onFinish={(values) => {
      console.log('Finish:', values)
    }}
  >
    <Field name='username'>
      <Input placeholder='Username' />
    </Field>
    <Field name='password'>
      <Input placeholder='Password' />
    </Field>

    <button type='submit'>Submit</button>
  </Form>
)

const Demo2 = () => {
  const [form] = Form.useForm()
  return <Form form={form} />
}
```

用法也很简单，有几个基本组成部分：FormStore、Form 组件、Field 组件。

## FormStore

```js
const [form] = Form.useForm()
```

返回一个 form 单例，包含各种 form 操作的函数。

```js
function useForm<Values = any>(form?: FormInstance<Values>): [FormInstance<Values>] {
  const formRef = React.useRef<FormInstance>();
  const [, forceUpdate] = React.useState({});

  if (!formRef.current) {
    if (form) {
      formRef.current = form;
    } else {
      // Create a new FormStore if not provided
      const forceReRender = () => {
        forceUpdate({});
      };

      const formStore: FormStore = new FormStore(forceReRender);

      formRef.current = formStore.getForm();
    }
  }

  return [formRef.current];
}
```

FormStore 是一个类，存储了 Form 表单数据，并定义了各种对数据的操作。当我们调用 useForm 时，内部就会创建一个 FormStore 的实例，并通过 useRef 缓存起来，也就是说在调用 useForm 的组件创建直到销毁这段时间内，无论组件渲染多少次，FormStore 只会实例化一次。

这里实际上调用了`formStore.getForm()`，只暴露了一些 public 方法，把 FormStore 的其他方法属性隐藏，外部使用时就更安全。

这些方法就是我们日常使用 Form 实例的常见方法，但和 antd 中的 Form 实例稍有不同。

1. getInternalHooks 在 antd Form 暴露的类型定义中是没有的，这是 rc-field-form 的 Form 组件和 Field 组件中需要用到的方法，antd 在类型中把它隐藏了，但实际上还是存在，只是我们日常开发中不应该去使用这个方法。
2. antd@4 scrollToField 方法没有，这个方法是 antd 实现的。

可以看下 FormStore 各种部分。

## Form

Form 主要做下面这几件事

1. 初始化 Form 实例
2. 注册回调函数，onFieldsChange、onValuesChange、onFinish
3. 设置初始值（仅当第一次渲染时会设置 store，其他情况下仅设置 initialValues）
4. 提供 FieldContext.Provider
5. 渲染子节点

## Field

Field 组件主要有以下几个工作

1. 通过 React Context 获取 Form 实例
2. 向 FormStore 注册自身
3. 向子组件注入 value 和 onChange（value 通过 Form 实例从 FormStore 中获取）
4. 渲染子组件

## 总结

rc-field-form 主要利用了 React Context 做了个状态管理，来将 Form/Field 结合在一起。

![img](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e08e5248834d4a2285ed67579971c52d~tplv-k3u1fbpfcp-watermark.image)
