# 完成一个sprite应用

----------

本节主要通过一个示例讲解Sprite应用开发过程细节，以及使用中的一些注意事项，本章节应用的数据来源以  天行数据网提供的 社会新闻接口为数据源。[http://www.tianapi.com/#news](http://www.tianapi.com/#news)，开发者学习过程中可自行注册一个账号，避免接口有试用次数限制。

<h2 id="cid_0">新建工程项目</h2>

打开mbuilder5，新建一个Sprite应用 

<img src="image/spriteapp_1.png"/>

需要访问的接口数据来源：

<img src="image/spriteapp_2.png"/>

接口中用到的key值，开发者自行申请。

该示例可能会用到一些Sprite封装组件，可以从“[Sprite官方UI组件](https://github.com/yuanhongqian/sprite-official-ui/tree/master/src)”获取，然后把sprite_component目录放在自己应用目录下，如图：

<img src="image/spriteapp_3.png"/>

在home.js入口文件地方，添加需要应用的组件，代码如下：

```javascript
require.config({
    jsPaths: {

    },
    componentPaths: {
        //官方封装组件引用  
        "buttonUI": "res:sprite_component/button/button.component",
        "titlebarUI": "res:sprite_component/titlebar/titlebar.component",
        "menubarUI": "res:sprite_component/menubar/menubar.component",
        "gridmenuUI": "res:sprite_component/gridmenu/gridmenu.component",
        "newsliderUI": "res:sprite_component/newslider/newslider.component",
        "checkboxUI": "res:sprite_component/checkbox/checkbox.component",
        "radioUI": "res:sprite_component/radio/radio.component",
        "switchUI": "res:sprite_component/switch/switch.component",
        "selectUI": "res:sprite_component/select/select.component",
        "tabbarUI": "res:sprite_component/tabbar/tabbar.component",
        "indexbarUI": "res:sprite_component/indexbar/indexbar.component",
        "popmenuUI": "res:sprite_component/popmenu/popmenu.component",
        "popbottommenuUI": "res:sprite_component/popbottommenu/popbottommenu.component"
    },
    cssPaths: {

    }
});
```


<h2 id="cid_0">列表展示</h2>

工程创建好后，下面就可以编写列表布局页面myapp/list_news.uixml。

现在myapp/list_news.uixml变成我们的应用第一个界面，修改下home.js的应用启动代码，并且修改下打开页面的状态栏为透明。

<img src="image/spriteapp_4.png"/>


**第一步，编写基本布局：**

根据接口可以返回来的数据内容，编写列表页面，代码如下：

```html
<page>
      <script>
            <![CDATA[
        var window = require("Window");
            var document = require("Document");
            require("titlebarUI");
            require("tabbarUI");

            //设置系统状态栏前景色为白色
            window.setStatusBarMode("light");
            window.on("loaded", function (e) {
                  var titlebarid = document.getElement("titlebarid");
                  var tabbarid = document.getElement("tabbarid");
                  titlebarid.on("ltextClick", function (e) {
                        window.close();
                  });

                  var json = {
                        datas: [
                              { "text": "娱乐" },
                              { "text": "体育" },
                              { "text": "NBA" },
                              { "text": "足球" },
                              { "text": "科技" },
                              { "text": "创业" },
                              { "text": "苹果" }
                        ]
                  };
                  tabbarid.loadData(json);
            });
        
        ]]>
      </script>
      <style>
            .rootBox {
                  background-color: #e5e5e5;
                  width: fill_screen;
                  height: fill_screen;
            }
            
            titlebar {
                  background-color: #549FF7;
                  title-color: #ffffff;
                  left-color: #ffffff;
                  height: 66;
                  padding: 20 0 0 0;
            }
            
            tabbar {
                  background-color: #ffffff
            }
            
            .newlist {
                  flex-direction: row;
                  justify-content: center;
                  align-items: center;
                  padding: 0 6 0 6;
                  background-color: #ffffff;
            }
            
            .newlist-cell-texttbox {
                  height: 75;
                  flex: 1;
                  flex-direction: column;
                  margin: 0 8 0 8;
            }
            
            .list-cell-text {
                  text-align: left;
                  font-size: 17;
                  color: #000000;
            }
            
            .newlist-cell-bottom {
                  flex-wrap: nowrap;
                  flex-direction: row;
                  align-items: center;
            }
            
            .newlist-cell-apply-box {
                  justify-content: center;
                  align-items: center;
                  background-color: #ececec;
                  border-radius: 8;
                  padding: 0;
            }
            
            .newlist-cell-type {
                  text-align: left;
                  singleline: true;
                  font-size: 13;
                  color: #a8a8a8;
            }
            
            .newlist-cell-image {
                  width: 100;
                  height: 75;
                  margin: 8 6 8 6;
                  scaleType: cover;
                  cacheType: memory;
                  fade: true;
            }
            
            .newlist-cell-apply-text {
                  text-align: right;
                  singleline: true;
                  font-size: 12;
                  color: #909090;
                  margin: 1 4 1 4;
            }
            
            .flex1 {
                  flex: 1;
            }
      </style>
      <ui>
            <box class="rootBox">
                  <titlebar id="titlebarid" ltext="返回" title="新闻列表" />
                  <tabbar id="tabbarid" bindid="sliderid" />
                  <slider style="flex:1" id="sliderid">
                        <box>
                              <box class="newlist  bg-white" style="">
                                    <image src="https://inews.gtimg.com/newsapp_ls/0/1371600988_150120/0?0.3978508608415723" defaultSrc="spritetest/page/yuanhongqian/image/wangyi/default_null_src.png"
                                          class="newlist-cell-image" />
                                    <box class="newlist-cell-texttbox" style="">
                                          <text class="list-cell-text">周立波延迟至少6月审 喊话： 多宣传我捐款的事</text>
                                          <box class="flex1"></box>
                                          <box class="newlist-cell-bottom">
                                                <text class="newlist-cell-type">腾讯明星</text>
                                                <box class="flex1" />
                                                <box class="newlist-cell-apply-box">
                                                      <text class="newlist-cell-apply-text">2017-04-08 06:45</text>
                                                </box>
                                          </box>
                                    </box>
                              </box>

                        </box>
                        <box>
                              <text>第2页</text>
                        </box>
                        <box>
                              <text>第3页</text>
                        </box>
                        <box>
                              <text>第4页</text>
                        </box>
                        <box>
                              <text>第5页</text>
                        </box>
                        <box>
                              <text>第6页</text>
                        </box>
                        <box>
                              <text>第7页</text>
                        </box>

                  </slider>

            </box>
      </ui>
</page>
```
上述示例先编写了页面大体结构，里面用了官方封装组件titlebar和tabbar，具体是使用说明可以参考[《Sprite官方UI组件》](https://gitdocument.exmobi.cn/sprite-official-ui/index.html)  

上述代码只做了列表的一个模块，后面会把这个模块放在list里面做展示，代码效果如图：

<img src="image/spriteapp_5.png" width="250"/>

<h2 id="cid_0">详情展示</h2>


<h2 id="cid_0">应用打包</h2>

 


