<h1>公共方法</h1>

----------
  
## 事件相关 ##

本节目录：  
> 
> [void on(messageName,function)](#jjxg_1)   
> 
> [void fire(messageName,params)](#jjxg_2)   
> 
> [void off(messageName,function)](#jjxg_3)  
>  
> [Array getOn(messageName)](#jjxg_4)   


<span id="jjxg_1">**void on(messageName,function)**</span>

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


<span id="jjxg_2">**void fire(messageName,params)**</span>

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

<span id="jjxg_3">**void off(messageName,function)** </span>

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

<span id="jjxg_4">**Array getOn(messageName)**</span>  

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

本节目录：  
> 
> [void startAnimation(jsonData,function)](#dhxg_1)   
> 
> [void startAnimator(jsonData,function)](#dhxg_2)   
> 
> [void startKeyFrameAnimator(jsonData,function)](#dhxg_3)  
>  
> [void  releaseAnimator()](#dhxg_4)   

<span id="dhxg_1">**void startAnimation(jsonData,function)**</span>

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
> animationSet：组件动画定义，Json数组格式，必选项，动画包括：opacity透明度动画，transfer位移动画，scale缩放动画，rotate旋转动画四种类型，Json参数定义如下：

** 注：** 

- pivotX，pivotY 设置的是位置比例，比如pivotX=0;pivotY=0 表示的控件左上角顶点位置；pivotX=0;pivotY=0.5 表示控件左侧Y轴中间位置；pivotX=0.5;pivotY=0.5标示控件中心点位置（默认就是该位置）；

- animationSet存放的是动画json数组，如果有多种动画同时执行，定义各种动画的json数据，存放在animationSet数组里即可。


animationSet数组格式中各个动画Json属性定义如下：  

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

示例：  

```javascript
var jsonData = {};
jsonData.fillAfter = 0;
var animationSet = new Array();
var opacityAni = {};
opacityAni.type = "opacity";
opacityAni.delay = 1000;
opacityAni.duration = 1000;
opacityAni.curve = "ease_out";
opacityAni.from = 0;
opacityAni.to = 1;
animationSet.push(opacityAni);

jsonData.animationSet = animationSet;

//启动动画
button.startAnimation(jsonData,function(code){
//动画结束后，回调里面做处理
});

```

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

示例： 

```javascript
var jsonData = {};
jsonData.fillAfter = 0;
var animationSet = new Array();

var transferAni = {};
transferAni.type = "transfer";
transferAni.delay = 0;
transferAni.duration = 1000;
transferAni.curve = "ease_out";
transferAni.fromX = 0;
transferAni.toX = 100;
transferAni.fromY = 0;
transferAni.toY = -100;
animationSet.push(transferAni);

jsonData.animationSet = animationSet;

//启动动画
button.startAnimation(jsonData,function(code){
//动画结束后，回调里面做处理
});

```


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


示例： 

```javascript
var jsonData = {};
jsonData.fillAfter = 0;
var animationSet = new Array();

var scaleAni = {};
scaleAni.type = "scale";
scaleAni.delay = 0;
scaleAni.duration = 1000;
scaleAni.curve = "ease_out";
scaleAni.scaleFromX = 1;
scaleAni.scaleToX = 2;
scaleAni.scaleFromY = 1;
scaleAni.scaleToY = 2;
animationSet.push(scaleAni);

jsonData.animationSet = animationSet;

//启动动画
button.startAnimation(jsonData,function(code){
//动画结束后，回调里面做处理
});

```


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


示例：  


```javascript  
var jsonData = {};
//这里设置从右下角旋转
jsonData.pivotX = 1;
jsonData.pivotY = 1;
jsonData.fillAfter = 0;
var animationSet = new Array();

var rotateAni = {};
rotateAni.type = "rotate";
rotateAni.duration = 1000;
rotateAni.curve = "ease_out";
rotateAni.fromDegree = 0;
rotateAni.toDegree = 180;
animationSet.push(rotateAni);

jsonData.animationSet = animationSet;

//启动动画
button.startAnimation(jsonData,function(code){
//动画结束后，回调里面做处理
});  

```   

function：组件动画结束回调函数，可选参数，入参为Json对象，定义如下：  

> code：回应状态码，数字【0,-1】  
> 
> -  0：执行动画成功；
> 
> - -1：执行动画失败；

返回值：无

**注：**  该方法仅做动画效果，并不涉及UI组件真实属性变化，如果不设置fillAfter=1，那么该方法做完动画后，直接还原。 

示例：  

```javascript

//多种动画组合
var jsonData = {};
//这里设置从右下角旋转
jsonData.pivotX = 1;
jsonData.pivotY = 1;
jsonData.fillAfter = 0;
var animationSet = new Array();
//缩放动画
var scaleAni = {};
scaleAni.type = "scale";
scaleAni.delay = 0;
scaleAni.duration = 1000;
scaleAni.curve = "ease_out";
scaleAni.scaleFromX = 1;
scaleAni.scaleToX = 2;
scaleAni.scaleFromY = 1;
scaleAni.scaleToY = 2;
animationSet.push(scaleAni);
//旋转动画
var rotateAni = {};
rotateAni.type = "rotate";
rotateAni.duration = 1000;
rotateAni.curve = "ease_out";
rotateAni.fromDegree = 0;
rotateAni.toDegree = 180;
animationSet.push(rotateAni);

jsonData.animationSet = animationSet;
//启动动画
button.startAnimation(jsonData,function(code){
//动画结束后，回调里面做处理
});

```  

<span id="dhxg_2">**void startAnimator(jsonData,function)**</span>  

<code>启动UI组件属性动画</code>  

参数：  

jsonData：组件属性动画设置对象，json类型，定义如下：  

> animators：动画集数组，动画顺序执行，数组中每个成员均为json对象，必选项；

**注：** animators组数中动画会按照数组顺序依次执行。

animators中 json属性定义如下：  

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
> pivotX：缩放/旋转动画时设置起点x轴起点位置，取值0 - 1，可选项；；
> 
> pivotY：缩放/旋转动画时设置起点y轴起点位置，取值0 - 1，可选项；
  
> props：需要修改的属性动画值，Json对象，属性定义如下：  
> 
> - x：控件左上角X轴坐标，数字；
> 
> - y：控件左上角Y轴坐标，数字；
> 
> - translationX：控件X轴方向位移，数字；
> 
> - translationY：控件Y轴方向位移，数字；
> 
> - scaleX：控件X轴方向缩放比例，数字；
> 
> - scaleY：控件Y轴方向缩放比例，数字；
> 
> - rotation：控件Z轴旋转角度，数字；
> 
> - rotationX：控件X轴旋转角度，数字；
> 
> - rotationY：控件Y轴旋转角度，数字；
> 
> - opacity：控件透明度设置，数字，取值，[0,1]；
> 
> - backgroundColor：背景色设置，字符串类型，#rrggbbaa，red、yellow等，可以用rgba(0, 0, 0, 0.5)方式来设置。  

**注：** 如果需要组合动画同时执行，都设置在props里面即可。

function：组件动画结束回调函数，可选参数，入参为Json对象，定义如下：  

> code：回应状态码，数字【0,-1】
> 
> -   0：执行动画成功；
> 
> -  -1：执行动画失败； 

返回值：无

**注：** 

- 该方法调用会引起UI组件真实属性变化，不过如果动画结束后调用releaseAnimator()方法释放动画，并执行document.refresh()，动画会全部还原。 如果希望后续有document.refresh()操作继续刷新组件，有不希望组件动画还原，可以在动画结束的回调函数里面通过setStyle方式，修改其style样式，这样控件就永远固定在动画结束位置了。
 
- 属性动画开始后，组件会受到动画的保护，如果在没有releaseAnimator()释放动画前，组件是不会被document.refresh()刷新的。

示例：

```javascript

//示例中，两个动画会按照先后顺序执行，其中动画一里面是组合动画

var jsonData = {};
var aniAry = new Array();
//第一个动画，同时做缩放和旋转动画
var jsonAni1 = {};
jsonAni1.delay = 0;
jsonAni1.duration = 1000;
jsonAni1.curve = "linear";
jsonAni1.props = {};
jsonAni1.props.scaleX = 0.5;
jsonAni1.props.scaleY = 0.5;
jsonAni1.props.rotation = 350;
jsonAni1.props.y = 150;
jsonAni1.props.x = 200;
aniAry.push(jsonAni1);

//第二个动画，做背景色动画
var jsonAni2 = {};
jsonAni2.delay = 0;
jsonAni2.duration = 1000;
jsonAni2.curve = "ease_out";
jsonAni2.props = {};          
jsonAni2.props.backgroundColor = "rgba(0, 0, 0, 0.5)"; 
aniAry.push(jsonAni2);
jsonData.animators = aniAry;
testBtn.startAnimator(jsonData, function(code){

});
```

<span id="dhxg_3">**void startKeyFrameAnimator(jsonData,function)**</span>  

<code>启动UI组件关键帧动画</code>    


参数：  

jsonData：组件关键帧动画设置对象，json类型，定义如下：  

> type：关键帧动画类型，包括【translationX, translationY,scaleX,scaleY,scale,rotate, rotationX , rotationY,opacity, backgroundColor】  
> 
> duration：动画过渡时间，数字类型，单位毫秒；
> 
> settings：关键帧设置，顺序执行，数组类型：



settings数组中每个成员均为json对象，定义如下：


> value：动画关键帧设置，不同type，value值对应如下；
> 
> - translationX：控件X轴方向位移，数字；
> 
> - translationY：控件Y轴方向位移，数字；
>  
> - scaleX：控件X轴方向缩放比例，数字；
>  
> - scaleY：控件Y轴方向缩放比例，数字；
>  
> - scale：控件缩放比例，数字；
>  
> - rotation：控件Z轴旋转角度，数字；
>  
> - rotationX：控件X轴旋转角度，数字；
>  
> - rotationY：控件Y轴旋转角度，数字；
>  
> - opacity：控件透明度设置，数字，取值，[0,1]；
>  
> - backgroundColor：背景色设置，字符串类型，#rrggbbaa；
> 
>  keyTimes：到关键帧时指定时间点比例，数字类型，0-1之间；
>  
> curve：动画速率，字符串枚举型，【ease_in, ease_out, ease_in_out, linear】
> 
> -  ease_in：动画启动的时候慢；
> 
> -  ease_out：动画结束的时候慢；
> 
> -  ease_in_out：动画启动时候慢，中间快，结束的时候慢；
> 
> -  linear动画速度不变（默认）；



 

function：组件动画结束回调函数，可选参数，入参为Json对象，定义如下：  

> code：回应状态码，数字【0,-1】  
> 
> -  0：执行动画成功；
> 
> - -1：执行动画失败； 


返回值：无  

示例：  

```javascript
var jsonData = {};
jsonData.type = "scale";
jsonData.duration = 300;

var settings = new Array();

var json = {};
json.value = 0.01;
json.keyTimes = 0;
json.curve = "linear";
settings.push(json);

json = {};
json.value = 1.1;
json.keyTimes = 0.5;
json.curve = "linear";
settings.push(json);

json = {};
json.value = 1.0;
json.keyTimes = 1.0;
json.curve = "ease_out";
settings.push(json);

jsonData.settings = settings;
thisDom.startKeyFrameAnimator(jsonData, aniCallBack);

```

**注：**   

- 帧动画本质上也是属性动画，其值修改后，组件真实属性也会变化，与属性动画不同的时，可以自己控制，在某个时间段上的动画效果的值。
 
- 帧动画执行后需要调用releaseAnimator()方法释放动画，效果和属性动画一样。

  
<span id="dhxg_4">**void releaseAnimator()**</span>  

<code>结束控件动画</code>    

参数：无

返回值：无  

**注：** UI组件执行startAnimator() ，startKeyFrameAnimator()后，需要调用该方法告知系统动画已完成，document.refresh()刷新方法方可生效。  

 

## 尺寸和位置 ##  
本节目录：  
> 
> [jsonData getFrame()](#cchwz_1)   
> 
> [void setFrame(frame)](#cchwz_2)   
> 
> [jsonData getCenter()](#cchwz_3)  
>  
> [jsonData getAbsoluteFrame()](#cchwz_4)   


**jsonData getFrame()**  

<code>获取组件在父容器中的位置</code> 

参数：无  

返回值：json数据格式，定义如下：  

> x：float型，水平位置；  
> 
> y：float型，垂直位置；  
> 
> width：float型，宽度；  
> 
> height：float型，高度；

**注：** 该方法获取的是组件布局完毕后在父容器中的实际位置，与样式中的width和height是有区别的，比如style样式里面设置的是flex:1，该组件布局完成后就会有个实际的width、height、x和y值，但是样式是没有设置width和height样式属性的，所以只能通过v.getFrame().width来得到宽度，不能通过v.getStyle("width");得到宽度，如果没有定义width样式v.getStyle("width")会得到一个null值。  



**setFrame(frame)**  

<code>设置组件在父容器中的位置</code>  

参数：   

frame：json数据格式，定义如下：  

> x：float型，水平位置，必选项；
> 
> y：float型，垂直位置，必选项；
> 
> width：float型，宽度，必选项；
> 
> height：float型，高度，必选项；

返回值：无  

**注：**   

- 通过该方法设置frame， width，height设置至组件css样式中，x、y不会修改样式中的left和top属性。

- 设置frame后，如果执行了document.refresh()，x和y就会还原，如果不希望还原可以在通过setStyle()手动设置对应样式。



**jsonData getCenter()**  

<code>获取组件中心点在父容器中的位置</code>  

参数：无  

返回值：json数据格式，定义如下：  

> x：float型，水平位置；
>
> y：float型，垂直位置；


**jsonData getAbsoluteFrame()**  


<code>获取组件在绘制窗口中的位置</code>

参数：无 

返回值：json数据格式，定义如下： 

> x：float型，水平位置；
> 
> y：float型，垂直位置；
> 
> width：float型，宽度；
> 
> height：float型，高度；

**注：**  如果组件通过js动态加载进行布局，在android上可能不能马上获取到getAbsoluteFrame的值，需要做一个定时处理来获取。  



## 普通Dom节点操作 ##   




