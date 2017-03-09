<h1>公共方法</h1>

----------
  
## 事件相关 ##

**void on(messageName,function)**

<code> 组件注册事件的触发函数</code>

参数：  

messageName：注册消息标识，字符串类型，必选项；

function：绑定回调触发函数，函数类型，必选项，函数入参定义如下：

> event：事件类型，Event对象，定义包括：
> 
> -  type：消息标识，字符串类型；
> 
> -  target：触发事件的目标组件，dom对象；
> 
> -  timestamp：事件触发的时间戳,单位毫秒，数字类型 
> 
> param：可变参数，根据fire触发传参来定；

返回值：无

示例：   

```javascript
//注册系统点击事件
button.on("click", function (event) {
    var eventType = event.type;
    var targetObj = event.target;
    var timestamp = event.timestamp;
});
//注册自定义事件
button.on("login", function (event, param1, param2) {
    var eventType = event.type;
    //获取传递参数1
    var p1 = param1;
    //获取传递参数2
    var p2 = param2;
});

```




