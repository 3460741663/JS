## http

中台
后端的服务 越来越往后 越来越纯
提供数据： 
现在提供数据 API -> json

## thrift
返回数据时后端的某个方法的结果，自己组织格式
调用方自己去写接口
前端不支持，只有node支持thrift

## SSR
解决 SPA 的问题
node 支持

## ctx 
ctx: {
  req,
  res
}
第三方的中间件都是对ctx继续增强
koa-body
ctx.req.files
koa-view
ctx.res.render()