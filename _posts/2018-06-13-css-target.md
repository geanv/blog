---
layout: post
title: "使用CSS的：target为页内跳转增加偏移"
categories: 技术
---
## 什么时候需要跳转偏移
为了阅读方便，很多网站都会为文章的内容增加一个可以跳转的目录，也就是Table of Content。

实现这种跳转最简单高效的方式就是直接使用HTML锚点。一个简单的例子：

在跳转的目标位置，添加一个锚点
```
<a id="title"></a>
<p>标题</p>
```
然后将链接指向这个位置
```
<a href="#title">跳转到标题</a>
```

不过这种跳转会存在一个问题，当页面存在导航栏的时候，跳转的位置会被覆盖在导航栏内。因此，需要为跳转增加一个偏移。

## 纯CSS的实现方法
JS能够很方便的跳转的偏移。最简单的方法，是直接用CSS的target选择器来实现：为目标锚点设置一个相对页面顶部的距离，这样跳转的位置正好保证标题不被挡住。

例如，目标锚点<a id="title"></a>所在父对象为post-content属性，就可以增加以下CSS属性
```
.post-content a:target {
    display: block;
    position: relative;
    top: -60px; 
    visibility: hidden;
}
```
TOC的链接不用做修改，指向#title即可。

## 参考

[1] CSS3 :target 选择器. http://www.w3school.com.cn/cssref/selector_target.asp