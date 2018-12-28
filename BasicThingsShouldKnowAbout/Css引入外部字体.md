第一步，在CSS中引入字体并给名字取一个合适的名字，如下
```
@font-face {
    /* font-properties */
    font-family: CustomFont;
    src:url('pictos/pictos-web.woff'),  
    url('pictos/pictos-web.ttf'),
    url('pictos/pictos-web.eot'); /* IE9 */
}
```
font-family定义字体的名字，接下来的src是加载字体文件的位置，之所有有多个url就是因为浏览器兼容问题。

第二步，使用刚刚定义的字体，如下
```
div {
    font-family: CustomFont;
}
```