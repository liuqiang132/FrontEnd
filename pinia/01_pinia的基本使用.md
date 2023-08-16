## Pinia 中文文档

### 1. pinia概述
```
Pinia 最初是在 2019 年 11 月左右重新设计使用 Composition API 。从那时起，最初的原则仍然相同，但 Pinia 对 Vue 2 和 Vue 3 都有效，并且不需要您使用组合 API。 除了安装和 SSR 之外，两者的 API 都是相同的，并且这些文档针对 Vue 3，并在必要时提供有关 Vue 2 的注释，以便 Vue 2 和 Vue 3 用户可以阅读！
```
### 2.为什么要使用 Pinia？
```
Pinia 是 Vue 的存储库，它允许您跨组件/页面共享状态。 如果您熟悉 Composition API，您可能会认为您已经可以通过一个简单的 export const state = reactive({}). 这对于单页应用程序来说是正确的，但如果它是服务器端呈现的，会使您的应用程序暴露于安全漏洞。 但即使在小型单页应用程序中，您也可以从使用 Pinia 中获得很多好处：

dev-tools 支持
跟踪动作、突变的时间线
Store 出现在使用它们的组件中
time travel 和 更容易的调试
热模块更换
在不重新加载页面的情况下修改您的 Store
在开发时保持任何现有状态
插件：使用插件扩展 Pinia 功能
为 JS 用户提供适当的 TypeScript 支持或 autocompletion
服务器端渲染支持
```
