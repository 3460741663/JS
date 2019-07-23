## 帧
刷新 60HZ 每秒60次
60 / 1000ms 16.666 ms / 1次
## 资源阻塞

## 浏览器工作进程
1. 主进程
2. 插件
3. GPU
4. 渲染

## 渲染
1. JS执行
2. HTTP请求
3. 定时器
4. 事件
5. 页面绘制布局

js 和 页面绘制布局 是互斥的
因为JS可以改变DOM

## event loop
MacoTask(宏任务): 同步代码 setTimeOut setInterval  new Promise()是同步的
MicroTask(微任务) Promise.then nextTick

宏任务 ->微任务->任务-> 渲染 宏任务 ->微任务-> 渲染 宏任务 ->微任务-> 渲染 宏任务 ->微任务-> 渲染