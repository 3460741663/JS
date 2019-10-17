## 跨域
浏览器的安全策略
a.com 请求 b.com 的时候会被阻止，不允许

## cors
cors origin resource share
跨域资源共享，
规定了一些http的首部字段，允许服务器声明哪些站点有资源的访问权限

## 跨域分简单请求和非简单请求
简单请求： html原生form表单可以发出去的请求 1： 正式请求
非简单：分俩步请求： 1. 预检请求，试探一下是否支持跨域 2：正式请求

## 规则
  cookie只能放在域名下，不能放到ip下
  ctx.set('Access-Control-Allow-Methods', 'POST, GET');只能列举
   1. 预检请求，试探一下是否支持跨域 2：正式请求 预检请求是options
