---
layout: post
title: 如何让Edge（Chromium版本）滚动效果与Chrome一样
categories: 技术
---

在经过一段时间的Beta测试后，今年年初Microsoft正式发布了基于Chromium内核版本的Edge浏览器（以下简称Edge）。对于在国内无法使用Chrome同步的同学来讲，又多了一个浏览器的选择。

## Edge的滚动手感
Edge在浏览网页上提供了与Chrome几乎一样的体现，无论是简洁的界面，还是流畅的渲染都是熟悉的感觉。至于其对隐私与性能优化，相信大多数人并不能有直接的体会。但唯有一点，对从Chrome切换过来的同学来讲，会很不适应，就是平滑滚动（Smooth Scrolling）的手感，非常不一样。

Edge默认在滚动中加入了一定的加速度，使用滚动的开始与停止非线性的感觉更为明显，比较接近Windows系统内置版本的Edge。这种滚动在设置界面中无法直接关闭，对于不习惯的同学，可以采用如下方法。

## 修改配置的方法
首先进入Edge的后台配置，在地址栏输入：

```
edge://flags/
```
找到与配置项 `#edge-experimental-scrolling`。可以看到该配置的介绍如下：

```
Microsoft Edge scrolling personality
Enable Microsoft Edge scrolling personality for scroll and touch gesture animations. – Windows
```
也就是Edge定制的滚动动画。 将其设置为Disabled。


设置界面截图
设置完成后，重启浏览器。打开网页，滚动两下，是不是熟悉的感觉又回来了。