## 静态资源
静态：不会随着服务器与和那些改变的资源，资源放到服务器上面的
    常见的静态资源：html css js jpg

## 浏览器
    file://.html
    http://localhost:9090/
    支持了俩个不同的协议
    
    1. 浏览器知道这是一个HTML
    2. script img link scr属性 浏览器会请求对应的src 得到结果
    3. 服务器 要返回对应的内容 js/css
    4. http://127.0.0.1:8080/static/demo.jpg 
        和磁盘路径一一对应
        req.url === c:/static/x.png
        作用：统一处理了 静态资源的请求
        
        静态资源的请求 都会有某些特点
        static.u51.com 51.com/static/a.jpg

## 异步
    1. 回调
    2. promise 