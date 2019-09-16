## 弹出类 组件
1. html 结构  
  和页面的主体内容同级，不应该嵌套在页面里面

## 面向对象
  编程范式，解决一类问题

  定义一个vue组件，<template> <script> <style>
  实际上是一个构造函数
  ## 1
  import Toast from '';
  <Toast/>
  ## 2
  手动去拿到 Toast 的构造函数
  vue.extend()
  生成了一个toast实例