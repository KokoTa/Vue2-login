# vue-login

> 登录管理

## 介绍

1. 此项目利用 Github token 来进行登录和获取数据

2. router.forEach 的作用是在路由跳转之前检查目的路由是否需要验证，以及检查本地状态是否存在路由 -> 管理路由状态

3. axios.interceptors 的作用是在请求发送前给头信息添加token，以及返回响应错误时进行处理 -> 管理请求响应状态

## 流程

**未输入token流程**： 登录页未填写token -> 无router和axios操作，直接返回错误提示  

**输入token成功流程**： 登录页填写token -> 给状态赋值token -> 路由跳转前检查已存在token -> 发送请求前添加token -> 路由跳转 -> 响应返回 -> 获得数据  

**输入token失败流程**： 登录页填写token -> 给状态赋值token -> 路由跳转前检查已存在token -> 发送请求前添加token -> 路由跳转 -> 响应失败 -> 清除token并跳转回登录页  

**本地缓存流程**： 登陆成功的过程中已缓存token -> 刷新页面 -> 给状态赋值token -> 后接成功流程  

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
