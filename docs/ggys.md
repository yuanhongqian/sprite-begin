<h1>公共样式</h1>

----------

Sprite盒模型基于 CSS 盒模型，每个UI组件均可视作一个盒子，如下图所示：  

<img  src="image/ggys_1.png" />    

## 取值说明   

> Color颜色   

Sprite支持多种取值类型，具体描述如下：    

RGB（rgb(255, 0, 0)）；  

RGBA（rgba(255, 0, 0, 0.5)）；  

十六进制（#rrggbb）；  

色值关键字（black|silver|gray|white|red|green|blue|yellow|transparent）；


> 绘制单位  

dp，全称device independent pixels，一种基于屏幕密度的抽象单位，与设备屏幕有关。在每英寸160点的屏幕上，1dp=1px。在Sprite中，使用dp作为界面元素的尺寸度量单位，double型，使用时可省略dp，直接写数字。  

如： style="width:20;border-size:0.5";





