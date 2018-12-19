### cookie
[不同浏览器对 Cookie 数量和大小的限制，是不一样的。一般来说，单个域名设置的 Cookie 不应超过30个，每个 Cookie 的大小不能超过4KB-阮一峰Javascript入门](https://wangdoc.com/javascript/bom/cookie.html)

使用场合
- 对话（session）管理：保存登录、购物车等需要记录的信息。
- 个性化：保存用户的偏好，比如网页的字体大小、背景色等等。
- 追踪：记录和分析用户行为。 
   
有些开发者使用 Cookie 作为客户端储存。这样做虽然可行，但是并不推荐，因为 Cookie 的设计目标并不是这个，它的容量很小（4KB），缺乏数据操作接口，而且会影响性能。客户端储存应该使用 Web storage API 和 IndexedDB。




cookie 本身不是用来做服务器端存储的（计算机领域有很多这种“狗拿耗子”的例子，例如 CSS 中的 float），它是设计用来在服务器和客户端进行信息传递的，因此我们的每个 HTTP 请求都带着 cookie。但是 cookie 也具备浏览器端存储的能力（例如记住用户名和密码），因此就被开发者用上了。
使用起来也非常简单，document.cookie = ....即可。

但是 cookie 有它致命的缺点：

- 存储量太小，只有 4KB
- 所有 HTTP 请求都带着，会影响获取资源的效率
- API 简单，需要封装才能用