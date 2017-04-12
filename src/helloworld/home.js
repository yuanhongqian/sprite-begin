require.config({
        jsPaths: {
            
        },
        componentPaths:{
           
        },
        cssPaths:{
            
        }     
});

var app = require("App");
var window = require("Window");

app.on("launch",function(e,jsonData)
{
 
    var type = jsonData.type;
     if(type =="normal")
     {
        //正常桌面启动
        //正常桌面启动
        var json = {};
        json.url = "res:myapp/index.uixml";
        json.target = "_blank";
        json.id = "DomTest";
        json.statusBarColor = "#f9f9f9";
        json.openAnimation = "push_r2l";
        json.closeAnimation = "push_r2l";
        json.data = {};
        json.data.text = "传值成功";
        window.open(json);
     }
     else if(type =="app")
     {
        //其他应用调用启动
       
     } 
     else if(type =="notification")
     {
        //推送消息启动
     } 
     else if(type =="localNotification")
     {
        //本地通知启动
     }
 });

