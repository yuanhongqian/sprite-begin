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


**void fire(messageName,params)**

<code>组件事件的触发函数</code>

参数：   

messageName：注册消息标识，字符串类型，必选项；  

params：需要传递的参数集，数组类型，可选项；  

返回值：无

示例：  

```javascript
//无参数事件触发 
button.fire("click");
//带参数事件触发
var params = new Array();
params.concat("George","John");
//params 是数组，这里传递了2个参数给login事件，接受参数参考上面on的示例
button.fire("login", params);
``` 

**void off(messageName,function)**  

<code>组件移除事件的触发函数</code>  

参数：  

messageName：注册消息标识，字符串类型，必选项；  

function：指定移除回调触发函数，函数类型，可选项；

返回值：无  

**注：** 若不指定移除函数，则移除组件所有注册 "事件名" 的触发函数；

示例：

```javascript
 //移除所有事件触发 
button.off("click");

//移除指定函数事件触发 
button.off("click",onButtonClick);
function onButtonClick(){
//函数触发
}
```  

**Array getOn(messageName)**  

<code>获取已绑定的事件的触发函数</code>  

参数：  

messageName：注册消息标识，字符串类型，必选项；  

返回值：返回消息已绑定的函数集，数组类型，数组成员为函数类型    

**注：** 若消息未绑定触发函数则返回空数组

示例：

```javascript
var eventarr = boxObj.getOn("click");
```  

## 动画相关 ##  

**void startAnimation(jsonData,function)**  

<code>启动UI组件动画</code>   

参数：  

jsonData：组件动画定义，Json类型 ，json属性如下：

> fillAfter：动画结束时UI组件是否停留在最后一帧，可选项，数字枚举型，【0,1】 
> 
> -  0：动画结束恢复原始状态（默认）； 
> 
> -  1：动画结束停留在最后一帧；
> 
> pivotX：缩放/旋转动画时设置起点x轴起点位置，取值0 - 1，可选项；
> 
> pivotY：缩放/旋转动画时设置起点y轴起点位置，取值0 - 1，可选项；
> 
> 注：pivotX，pivotY 设置的是位置比例，比如pivotX=0;pivotY=0 表示的控件左上角顶点位置；pivotX=0;pivotY=0.5 表示控件左侧Y轴中间位置；pivotX=0.5;pivotY=0.5标示控件中心点位置（默认就是该位置）；


animationSet：组件动画定义，Json数组格式，必选项，动画包括：opacity透明度动画，transfer位移动画，scale缩放动画，rotate旋转动画四种类型，Json参数定义如下：  

【opacity透明度动画】，json属性如下：  

> type：动画类型，字符串，固定为"opacity";  
> 
> delay：动画延迟时间，数字类型，单位毫秒；  
> 
> duration：动画过渡时间，数字类型，单位毫秒；  
> 
> curve：动画速率，字符串枚举型，【ease_in, ease_out, ease_in_out, linear】   
>  
> - ease_in：动画启动的时候慢；
> 
> - ease_out：动画结束的时候慢；
> 
> - ease_in_out：动画启动时候慢，中间快，结束的时候慢；
> 
> - linear动画速度不变（默认）；  
> 
> from：动画开始起始透明值，数字类型，取值0-1，0表示透明，1标识不透明；  
> 
> to：动画结束透明值，数字类型，取值0-1，0表示透明，0表示透明，1标识不透明；  


【transfer位移动画】，json属性如下： 

> type：动画类型，字符串，固定为"transfer";  
> 
> delay：动画延迟时间，数字类型，单位毫秒；
> 
> duration：动画过渡时间，数字类型，单位毫秒；
> 
> curve：动画速率，字符串枚举型，【ease_in, ease_out, ease_in_out, linear】
> 
> - ease_in：动画启动的时候慢；
> 
> - ease_out：动画结束的时候慢；
> 
> - ease_in_out：动画启动时候慢，中间快，结束的时候慢；
> 
> - linear动画速度不变（默认）；
> 
> fromX：起始x坐标；
> 
> fromY：起始y坐标；
> 
> toX：结束x坐标；
> 
> toY：结束y坐标；

【scale缩放动画】，json属性如下：  

> type：动画类型，字符串，固定为"scale"; 
> 
> delay：动画延迟时间，数字类型，单位毫秒；
> 
> duration：动画过渡时间，数字类型，单位毫秒；
> 
> curve：动画速率，字符串枚举型，【ease_in, ease_out, ease_in_out, linear】
> 
> - ease_in：动画启动的时候慢；
> 
> - ease_out：动画结束的时候慢；
> 
> - ease_in_out：动画启动时候慢，中间快，结束的时候慢；
> 
> - linear动画速度不变（默认）；
> 
> scaleFromX：起始x的伸缩比例；
> 
> scaleFromY：起始y的伸缩比例；
> 
> scaleToX：结束x的伸缩比例；
> 
> scaleToY：结束y的伸缩比例；

【rotate旋转动画】 ，json属性如下：

> type：动画类型，字符串，固定为"rotate";
> 
> delay：动画延迟时间，数字类型，单位毫秒；
> 
> duration：动画过渡时间，数字类型，单位毫秒；
> 
> curve：动画速率，字符串枚举型，【ease_in, ease_out, ease_in_out, linear】
> 
> - ease_in：动画启动的时候慢；
> 
> - ease_out：动画结束的时候慢；
> 
> - ease_in_out：动画启动时候慢，中间快，结束的时候慢；
> 
> - linear动画速度不变（默认）；
> 
> fromDegree：起始旋转角度，数字；
> 
> toDegree：结束旋转角度，数字；


function：组件动画结束回调函数，可选参数，入参为Json对象，定义如下：  

> code：回应状态码，数字【0,-1】  
> 
> -  0：执行动画成功；
> 
> - -1：执行动画失败； 


返回值：无

**注：** 该方法仅做动画效果，并不涉及UI组件真实属性变化，如果不设置fillAfter=1，那么该方法做完动画后，直接还原。 
