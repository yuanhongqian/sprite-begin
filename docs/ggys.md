<h1>公共样式</h1>

----------

Sprite盒模型基于 CSS 盒模型，每个UI组件均可视作一个盒子，如下图所示：  

<img  src="image/ggys_1.png" />    

## 取值说明   

**Color颜色**   

> Sprite支持多种取值类型，具体描述如下：    
> 
> RGB（rgb(255, 0, 0)）；  
> 
> RGBA（rgba(255, 0, 0, 0.5)）；  
> 
> 十六进制（#rrggbb）；  
> 
> 色值关键字（black|silver|gray|white|red|green|blue|yellow|transparent）；


**绘制单位**  

> dp，全称device independent pixels，一种基于屏幕密度的抽象单位，与设备屏幕有关。在每英寸160点的屏幕上，1dp=1px。在Sprite中，使用dp作为界面元素的尺寸度量单位，double型，使用时可省略dp，直接写数字。  
> 
> 如： style="width:20;border-size:0.5";  


##  尺寸   

**width**  

> UI组件宽度，数字，单位dp（可省略），示例：width:50;    
> 
> fill_screen用于占满当前屏幕宽度，示例：width:fill_screen;  

**height**  
 
> UI组件高度，数字，单位dp（可省略），示例：height:50;    
> 
> fill_screen用于占满当前屏幕高度，示例：height:fill_screen;

##  定位  


**position** 

> 定位模式，【relative ,absolute】  
> 
> - relative：生成相对定位的元素，相对于其正常布局位置进行定位。（默认）；  
> 
> - absolute：生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位；

**top**   

> 距离上方的偏移量，数字，默认为 0；


**bottom**   

> 距离下方的偏移量，数字，默认为 0；

**left**  

> 距离左方的偏移量，默认为 0；


**right**   

> 距离右方的偏移量，默认为 0；

**注：**

- 当控件为布局为绝对定位时，其位置相对于父容器的绝对位置。

- 布局为绝对定位时，如果没有直接给出width和height，其容器大小需要通过设定top、left、right和bottom来限制大小。


## 内边距 ##  

**padding**  

> UI组件内边距，上 右 下 左 ，默认 0 0 0 0， 示例：padding:5 5 5 5 
> 
> 值为一个时表示四边，示例：padding:5;   
> 
> 值为二个时表示，第一个表示上下，二个表示左右，示例pading:5 4;


**padding-left**  

> UI组件内左边距，默认 0 示例：padding-left:5;


**padding-right**  

> UI组件内右边距，默认 0 示例：padding-right:5;


**padding-top**  
 
> UI组件内顶边距，默认 0 示例：padding-top:5;


**padding-bottom**  

> UI组件内底边距，默认 0 示例：padding-bottom:5;



## 边框 ##  

