# XSS
cross site script 跨站脚本攻击
用不合法的途径，往web页面里面插入可执行的代码

执行可执行代码
1. 放射型
  xss代码存在url中，服务器解析请求，把xss的代码一并返回，web网页得到响应，执行力xss代码
过程像一次反射。

2. 存储型
  xss代码有没有永久保留在服务器（数据库,文件...)中
3. 

## 防护
编码 html 编码，< ->"&lt;" "" -> "&nbsp;"

过滤 onError 属性 onClick  <script>XX<script>
校正 