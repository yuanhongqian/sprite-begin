<h1>Flex布局原理</h1>

----------

Sprite从web中借鉴了Flexbox模式，采用facebook提供的布局库css-layout，Flexbox让常见UI布局构建变的简单，比如按比例划分容器区间，同时支持按内容弹性扩展容器大小。  

## flexbox布局

Sprite采用Flexbox布局模型，工作原理和web上的CSS基本一致，可视为子集，以下为详细说明。  

> flex-direction  

定义flex 容器中 flex 成员项的排列方向，【row, column】  

row：从左到右  

column：从上到下（默认）  


> flex-wrap  

定义flex容器中若成员项排列超过一行后，是否进行换行，【nowrap, wrap】  

nowrap：单行显示，不换行；（默认）  

wrap：多行显示，支持自动换行；  



 
## 注意问题

