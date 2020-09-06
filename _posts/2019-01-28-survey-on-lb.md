---
layout: post
title: "A survey on network load balancer"
categories: 技术
---

网络负载均衡通常指基于IP转发的负载均衡器，它们以IP地址、TCP/UDP端口为要素，对数据报文进行转发，来达到均衡网络流量负载的作用。

网络负载均衡作为计算机网络的一种关键技术，在现代分布式系统中扮演着非常关键的作用。 互联网时代的应用，普遍采用了C/S架构，构建于网络协议之上。这使得负载均衡无论在私有云还是公有云场景，都成为一种基础服务。

本文主要调研了当前主流的网络负载均衡的现状，并总结对比了其中的关键技术。

## 主要的网络负载均衡技术
### Linux Virtual Server
基于Linux内核Netfilter实现的4层负载均衡，支持TCP/UDP协议，提供会话状态管理的能力。已经进入内核mainline。

参考地址： https://github.com/torvalds/linux/tree/master/net/netfilter/ipvs

### DPVS
由爱奇艺（iQiyi）研发并开源的基于DPDK的用户态4层负载均衡，基于IPVS开发而来。

地址：https://github.com/iqiyi/dpvs

### Meglev
Google研发的4层负载均衡，提供会话管理的能力，并提出了meglev 一致性 Hash算法。

参考地址： https://research.google/pubs/pub44824/

### GitHub Load Balancer Director
Github研发的4层 无状态负载均衡，通过GUE（Generic UDP Encapsulation） 封装原始报文，采用 DSR（Direct Server Return）模式，回程流量无需经过GLB。

参考地址： https://github.com/github/glb-director

### Facebook Katran
Faceebook基于Linux内核eXpress Data Path (XDP) 与 eBPF 研发的4层负载均衡。采用DSR模式。

参考地址：https://engineering.fb.com/open-source/open-sourcing-katran-a-scalable-network-load-balancer/
