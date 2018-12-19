HTTP协议，超文本传输协议  
- 用于Web浏览器和网站服务器之间传递信息
  - 以明文方式发送内容,不提供任何方式的数据加密
    - 如果攻击者截获了服务器与Web浏览器之间的传输报文，就可以直接获取其中的信息
    - 因此不适合传输敏感信息，如：银行卡号、密码等


而HTTPS在HTTP的基础上加入了SSL协议，SSL依靠证书来验证服务器的身份，并为浏览器和服务器之间的通信加密。


参考：
    [HTTP原理和SSL原理](https://github.com/zoro-web/blog/issues/3)
    [完全吃透TLS/SSL](https://juejin.im/post/5b305758e51d4558ce5ea0d9)
    [HTTP与HTTPS的区别](https://www.cnblogs.com/wqhwe/p/5407468.html)