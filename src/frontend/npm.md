# 了解下 npm

[TOC]

## 前言

npm 是世界上最大的软件注册表。来自各大洲的开源开发人员使用 npm 共享和借用软件包，许多组织也使用 npm 管理私人开发。

1. npm cli 命令了解多少？
2. 你是什么时候通过什么方式“学会”npm 的？

其实常用的命令确实就几个，但是多掌握几个会使我们对项目把控更加**丝滑**。

## 常见问题

为什么要 package-lock.json？

install 更新了 package-lock，要不要 push，会产生什么影响？

升级了 node 版本，要不要重新 install，install 之前要不要删除 node_modules？

各种版本号^~x.x.x 有什么区别？

如何更新依赖，update 做了什么操作？

## cli 命令

包管理相关

| 命令            | alias                     | 描述                                               | 备注                                                                                                                                                                                                                                                                                                                                                                                                        | 分类   |      |
| --------------- | ------------------------- | -------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ---- |
| init            |                           | 创建一个 package.json 文件                         |                                                                                                                                                                                                                                                                                                                                                                                                             | 包管理 |      |
| install         | i                         | 安装包                                             |                                                                                                                                                                                                                                                                                                                                                                                                             | 包管理 |      |
| install-test    |                           | Install package(s) and run tests                   | npm install && npm test                                                                                                                                                                                                                                                                                                                                                                                     | 包管理 |      |
| uninstall       | remove, rm, r, un, unlink | 卸载包                                             |                                                                                                                                                                                                                                                                                                                                                                                                             | 包管理 |      |
| ci              |                           | Install a project with a clean                     | 1. 与 install 相似，用于自动化环境或者在任何情况下都要确保干净安装依赖项，比 install 更快更严格。<br />2. 要求项目必须有 package-lock.json 或 npm-shrinkwrap.json。<br />3. 如果 package-lock.json 与 package.json 中的依赖项不匹配，则退出并显示错误，而还是更新 package-lock.json。<br />4. 如果 node_modules 已经存在，它将在开始安装之前自动删除。<br />5. 永远不会写入 package.json 和 package-locks。 | 包管理 | 构建 |
| install-ci-test |                           | Install a project with a clean slate and run tests | npm ci && npm test                                                                                                                                                                                                                                                                                                                                                                                          | 包管理 |      |
| link            | ln                        | 全局安装当前项目                                   | 为当前项目创建一个软链                                                                                                                                                                                                                                                                                                                                                                                      | 包管理 |      |
| ls              | list, la, ll              | 列出安装的包                                       |                                                                                                                                                                                                                                                                                                                                                                                                             | 包管理 |      |
| outdated        |                           | 检查过时的包                                       | 红色表示有一个新版本符合项目 semver 要求，因此应该立即进行更新。<br />黄色表示有较新的版本超过 semver 要求（通常是 major or minor），因此请谨慎操作。                                                                                                                                                                                                                                                       | 包管理 | 依赖 |
| update          | up, upgrade               | 更新依赖                                           |                                                                                                                                                                                                                                                                                                                                                                                                             | 包管理 | 依赖 |
| prune           |                           | 移除无关的包                                       | 无关的包指的是没有在父包的依赖关系列表中列出的包。如果指定--production 或 NODE_ENV=production，这个命令将移除 `devDependencies` 配置信息中列出的包                                                                                                                                                                                                                                                          | 包管理 | 构建 |
| audit           |                           | 运行安全审计                                       | 安全检查，更新安装兼容性的包 ex: npm i moment@1                                                                                                                                                                                                                                                                                                                                                             | 包管理 |      |
| dedupe          | ddp                       | 减少包重复                                         | 貌似现在会自动 ddp，不知道从哪个版本开始的，不影响使用                                                                                                                                                                                                                                                                                                                                                      | 包管理 |      |
| edit            |                           | 编辑已经安装的包                                   | npm edit react，默认用 vi 打开                                                                                                                                                                                                                                                                                                                                                                              | 包管理 |      |
| pack            |                           | 打包                                               |                                                                                                                                                                                                                                                                                                                                                                                                             | 包管理 |      |
| publish         |                           | 发布包                                             |                                                                                                                                                                                                                                                                                                                                                                                                             | 包管理 |      |
| unpublish       |                           | Remove a package from the registry                 |                                                                                                                                                                                                                                                                                                                                                                                                             | 包管理 |      |
| search          |                           | 查询包                                             |                                                                                                                                                                                                                                                                                                                                                                                                             | 包管理 |      |
| rebuild         |                           | 重新构建包                                         | 执行 install 后的 c++编译过程                                                                                                                                                                                                                                                                                                                                                                               | 包管理 |      |
| run-script      |                           | Run arbitrary package scripts                      |                                                                                                                                                                                                                                                                                                                                                                                                             | 包管理 |      |
| start           |                           | start 脚本                                         | npm run start，如果 `"scripts"` 对象中没有定义 `"start"` 属性， 默认执行 `node server.js` 命令。                                                                                                                                                                                                                                                                                                            | 包管理 |      |
| restart         |                           | Restart a package                                  | Order: prerestart prestop stop poststop restart prestart start poststart postrestart                                                                                                                                                                                                                                                                                                                        | 包管理 |      |
| stop            |                           | stop 脚本                                          | npm run stop                                                                                                                                                                                                                                                                                                                                                                                                | 包管理 |      |
| test            | t, tst                    | test 脚本                                          | npm run test                                                                                                                                                                                                                                                                                                                                                                                                | 包管理 |      |
| shrinkwrap      |                           | 锁定依赖包的版本                                   | 此命令将根据 `package-lock.json` 文件创建一个新的或覆盖已有的 `npm-shrinkwrap.json` 文件。                                                                                                                                                                                                                                                                                                                  | 包管理 |      |
| dist-tag        | dist-tags                 | 管理包标签                                         | 该命令以前称为`npm tag`，仅创建新标签，因此语法不同。                                                                                                                                                                                                                                                                                                                                                       | 包管理 |      |
| version         |                           | 更新项目 version                                   | major minor patch                                                                                                                                                                                                                                                                                                                                                                                           | 包管理 |      |

配置相关

| 命令        | alias         | 描述                               | 备注                                                   | 分类 |
| ----------- | ------------- | ---------------------------------- | ------------------------------------------------------ | ---- |
| config      | c             | 管理 npm 配置文件                  |                                                        | 配置 |
| bin         |               | 显示 npm 的 bin 文件夹的路径       | -g 显示全局                                            | 配置 |
| root        |               | 显示 npm 根目录                    |                                                        | 配置 |
| prefix      |               | 显示（目录）前缀                   |                                                        | 配置 |
| bugs        | issues        | 浏览器中打开指定包的 issues 页面   | npm bugs package                                       | 配置 |
| docs        | home          | 浏览器打开指定包文档页             |                                                        | 配置 |
| repo        |               | 在浏览器中打开指定包的源码仓库页面 |                                                        | 配置 |
| doctor      |               | 检查环境                           |                                                        | 配置 |
| hook        |               | 管理源 hooks                       |                                                        | 配置 |
| help        |               | 显示 npm 帮助                      |                                                        | 配置 |
| help-search |               | 搜索帮助文档                       |                                                        | 配置 |
| ping        |               | Ping npm 注册表                    |                                                        | 配置 |
| view        | info, show, v | View registry info                 |                                                        | 配置 |
| completion  |               | 使 npm 命令可以 tab 补全           | npm completion >> /usr/local/etc/bash_completion.d/npm | 配置 |

账户相关

| 命令      | alias           | 描述                           | 备注        | 分类 |
| --------- | --------------- | ------------------------------ | ----------- | ---- |
| access    |                 | 设置已发布包的访问级别         |             | 账户 |
| adduser   | login, add-user | 添加一个注册源用户账户         |             | 账户 |
| deprecate |                 | 作废指定包的指定版本           |             | 账户 |
| logout    |                 | 注册源账户退出                 |             | 账户 |
| org       |                 | 组织相关管理                   |             | 账户 |
| owner     | author          | 管理软件包所有者               |             | 账户 |
| profile   |                 | 更改注册表配置文件中的个人资料 |             | 账户 |
| star      |                 | 标记你所喜欢的包               | star unstar | 账户 |
| stars     |                 | 查看 star 过的包               |             | 账户 |
| team      |                 | 管理组织团队及其关系           |             | 账户 |
| token     |                 | 管理权限 token                 |             | 账户 |
| whoami    |                 | 显示 npm 用户名                |             | 账户 |

八百年用不到

| 命令    | alias | 描述                        | 备注                                                                  | 分类 |
| ------- | ----- | --------------------------- | --------------------------------------------------------------------- | ---- |
| build   |       | 构建一个包                  | npm link/install 内部调用，约等于内部执行 npm run build               | 内部 |
| bundle  |       | 此命令 1.0 版本中已被删除   | 现在默认行为是安装依赖包到本地空间                                    |      |
| cache   |       | 操作包缓存                  | 主要供内部使用，默认目录~/.npm/\_cacache，npm cache verify 脱机验证。 | 内部 |
| explore |       | Browse an installed package | 实测没效果                                                            |      |

## semver

#### 依赖地狱

通俗而言，“依赖地狱”指开发者安装某个软件包时，发现这个软件包里又依赖不同特定版本的其它软件包。随着系统功能越来越复杂，依赖的软件包越来越多，依赖关系也越来越深，这个时候可能面临版本控制被锁死的风险。

因此，Github 起草了一个具有指导意义的，统一的版本号表示规则，称为 Semantic Versioning(语义化版本表示)。该规则规定了版本号如何表示，如何增加，如何进行比较，不同的版本号意味着什么。

下面是遵从了 Semver 规范的 React 依赖图，[截图来自 npm.broofa.com](http://xn--npm-sk6et42cumh2n2c.broofa.com):

![](https://tva1.sinaimg.cn/large/007S8ZIlgy1gia1xozb5sj313s0cfwgi.jpg)

可以看出，遵从了 Semver 规范的包依赖非常清晰，没有出现循环依赖、依赖冲突等常见问题。

#### 版本格式

版本格式：主版本号.次版本号.修订号，版本号递增规则如下：

- 主版本号(major)：当你做了不兼容的 API 修改，
- 次版本号(minor)：当你做了向下兼容的功能性新增，可以理解为 Feature 版本，
- 修订号(patch)：当你做了向下兼容的问题修正，可以理解为 Bug fix 版本。

先行版本号及版本编译信息可以加到“主版本号.次版本号.修订号”的后面，作为延伸。

#### 先行版本

当要发布**大版本**或者**核心的 Feature**时，但是又不能保证这个版本的功能 100% 正常。这个时候就需要通过发布**先行版本**。比较常见的先行版本包括：内测版、灰度版本了和 RC 版本。Semver 规范中使用 alpha、beta、rc(以前叫做 gama)来修饰即将要发布的版本。它们的含义是：

- alpha: 内部版本
- beta: 公测版本
- rc: 即 Release candiate，正式版本的候选版本

比如：1.0.0-alpha.0, 1.0.0-alpha.1, 1.0.0-beta.0, 1.0.0-rc.0, 1.0.p-rc.1 等版本。alpha, beta, rc 后需要带上次数信息。

#### 版本发布准则

列举出比较实用的一些规则：

- 标准的版本号必须采用 XYZ 的格式，并且 X、Y 和 Z 为非负的整数，禁止在数字前方补零，版本发布需要严格递增。例如：1.9.1 -> 1.10.0 -> 1.11.0。
- 某个软件版本发行后，任何修改都必须以新版本发行。
- 1.0.0 的版本号用于界定公共 API。当你的软件发布到了正式环境，或者有稳定的 API 时，就可以发布 1.0.0 版本了。
- 版本的优先层级指的是不同版本在排序时如何比较。判断优先层级时，必须把版本依序拆分为主版本号、次版本号、修订号及先行版本号后进行比较。

#### npm 包依赖

项目对包的依赖可以使用下面的 3 种方法来表示(假设当前版本号是 16.2.0):

- 兼容模块新发布的补丁版本：~16.2.0、16.2.x、16.2
- 兼容模块新发布的小版本、补丁版本：^16.2.0、16.x、16
- 兼容模块新发布的大版本、小版本、补丁版本：\*、x

```json
{
  "dependencies": {
    "foo": "1.0.0 - 2.9999.9999",
    "bar": ">=1.0.2 <2.1.2",
    "baz": ">1.0.2 <=2.3.4",
    "boo": "2.0.1",
    "qux": "<1.0.0 || >=2.3.1 <2.4.5 || >=2.5.2 <3.0.0",
    "asd": "http://asdf.com/asdf.tar.gz",
    "til": "~1.2",
    "elf": "~1.2.3",
    "two": "2.x",
    "thr": "3.3.x",
    "lat": "latest",
    "dyl": "file:../dyl"
  }
}
```

#### npm 包发布

通常我们发布一个包到 npm 仓库时，我们的做法是先修改 package.json 为某个版本，然后执行 npm publish 命令。手动修改版本号的做法建立在你对 Semver 规范特别熟悉的基础之上，否则可能会造成版本混乱。npm 考虑到了这点，它提供了相关的命令来让我们更好的遵从 Semver 规范：

- 升级补丁版本号：npm version patch
- 升级小版本号：npm version minor
- 升级大版本号：npm version major

当执行 npm publish 时，会首先将当前版本发布到 npm registry，然后更新 dist-tags.latest 的值为新版本。

当执行 npm publish --tag=next 时，会首先将当前版本发布到 npm registry，并且更新 dist-tags.next 的值为新版本。这里的 next 可以是任意有意义的命名（比如：v1.x、v2.x 等等）

#### 参考

- [语义化版本 2.0.0](https://semver.org/lang/zh-CN/)

## npm install 时 package-lock.json 的更新策略

#### 为什么需要 lockfiles？

npm install 的输入是 package.json，它的输出是一棵 node_modules 树。理想情况下，npm install 应该像纯函数一样工作，对于同一个 package.json 总是生成完全相同的 node_modules 树。在某些情况下，确实如此。但在其他很多情况中，npm 无法做到这一点。有以下原因：

- 不同版本的 npm 的安装算法不同。
- 某些依赖项自上次安装以来，可能已发布了新版本，因此将根据 package.json 中的 semver-range version 更新依赖。
- 某个依赖项的依赖项可能已发布新版本，即使使用了固定依赖项说明符（1.2.3 而不是 ^1.2.3），它也会更新。

为了在不同的环境下生成相同的 node_modules，npm 使用 package-lock.json 或 npm-shrinkwrap.json。这两个文件都被称为 lockfiles。无论何时运行 npm install，npm 都会生成或更新 lockfiles。以下只讨论其中的 package-lock.json。

#### 不同 npm 版本下 npm install 的规则

- npm 5.0.x 版本：不管 package.json 中依赖是否有更新，npm i 都会根据 package-lock.json 下载。针对这种安装策略，有人提出了这个 issue - [#16866](https://github.com/npm/npm/issues/16866) ，大概意思是我明明手动改了 package.json，为啥不给我升级包！然后就导致了 5.1.0 的问题...
- 5.1.0 版本后：当 package.json 中的依赖项有新版本时，npm install 会无视 package-lock.json 去下载新版本的依赖项并且更新 package-lock.json。针对这种安装策略，又有人提出了一个 issue - [#17979](https://github.com/npm/npm/issues/17979) ，参考 npm 贡献者 iarna 的评论，得出 5.4.2 版本后的规则。「大人，时代变了」
- 5.4.2 版本后：
  - 如果只有一个 package.json 文件，运行 `npm i` 会根据它生成一个 package-lock.json 文件。
  - 如果 package.json 的 semver-range version 和 package-lock.json 中版本兼容，即使此时 package.json 中有新的版本，执行 `npm i` 也还是会根据 package-lock.json 下载 。
  - 如果手动修改了 package.json 的 version ranges，且和 package-lock.json 中版本不兼容，那么执行 `npm i` 时 package-lock.json 将会更新到兼容 package.json 的版本。

#### 如果切换了源，该怎么正确的更新 locksfile？

node_modules 下的每个包在下载的时候会在 package.json 中指定 \_resolved 字段，当去更新 package-lock.json 时，会去 copy 这个字段，而不是当前 npm 指定的源，后面即使更新了源，也不会改变已经下载的包的 \_resolved 字段。

是否可以通过删除整个 node_modules 重新下载来解决这个问题？根据 npm@5.4.2 版本后 npm install 规则，如果 package-lock.json 中的**版本**跟 package.json 中的**版本**兼容，npm install 还是会根据 package-lock.json 文件描述去下载包资源。注意只会校验版本，如果版本兼容，并不会更新 package-lock.json 文件，源还是没有变。npm update 实际证明同样不会更新源，除非这个包更新了。

正确操作：可以通过删掉 package-lock.json，执行 npm install 重新生成一份 locksfile 的方式来解决源变化。

#### 参考

- [npm-locks](https://docs.npmjs.com/files/package-locks)
- [Why does “npm install” rewrite package-lock.json?](https://stackoverflow.com/questions/45022048/why-does-npm-install-rewrite-package-lock-json)
- [npm install 生成的 package-lock.json 是什么文件？有什么用？](https://www.zhihu.com/question/62331583)

## npm ci

#### 介绍

- ci：Continuous Integration。
- npm 版本至少是 [v5.7.1](https://github.com/npm/npm/releases/tag/v5.7.1)。
- 此命令与 npm install 类似，不同之处在于它旨在用于自动化环境，例如集成测试环境、线上环境、或者您希望确保干净安装依赖项的任何情况。通过跳过某些面向用户的功能，它可以比常规的 npm install 快得多。它也比常规安装更严格，它可以捕获由于本地环境的增量安装引起的错误或不一致。

#### npm ci 和 npm install 差异

- 项目必须存在 package-lock.json 或 npm-shrinkwrap.json。
- 如果 lockfiles 中的依赖和 package.json 中不匹配，npm ci 会退出并且报错，而不是去更新 lockfiles。
- npm ci 只能安装整个项目的依赖，无法安装单个依赖。
- 如果 node_modules 已经存在，它将在 npm ci 开始安装之前自动删除。
- npm ci 永远不会改变 package.json 和 package-lock.json。

#### 补充

- npm install 读取 package.json 创建依赖项列表，并使用 package-lock.json 来通知要安装这些依赖项的哪个版本。如果某个依赖项在 package.json 中，但是不在 package-lock.json 中，运行 npm install 会将这个依赖项的确定版本更新到 package-lock.json 中。
- npm ci 是根据 package-lock.json 去安装确定的依赖，package.json 只是用来验证是不是有不匹配的版本，假设 package-lock.json 中存在一个确定版本的依赖 A，如果 package.json 中不存在依赖 A 或者依赖 A 版本和 lock 中不兼容，npm ci 就会报错。

#### 参考

- [npm-ci](https://docs.npmjs.com/cli/ci.html)
- [what-is-the-difference-between-npm-install-and-npm-ci](https://stackoverflow.com/questions/52499617/what-is-the-difference-between-npm-install-and-npm-ci)

## 其他文章链接

[TypeScript 踩坑之旅](https://juejin.im/post/6844903892094812173)

[[译文\]一步步构建发布一个 TypeScript NPM 包](https://juejin.im/post/6844903892119977998)

[npm install package-lock.json 的更新策略](https://juejin.im/post/6844903903193104398)

[[译\]浏览器语言首选项](https://juejin.im/post/6844903927469572104)

[Date.prototype.toLocaleString()](https://juejin.im/post/6844903938647392263)

![](https://tva1.sinaimg.cn/large/007S8ZIlgy1gia27n9v37j30d70blacz.jpg)
