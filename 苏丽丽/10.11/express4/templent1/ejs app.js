var express=require('express');
var app=express();
app.set("views","./views");
app.set("view engine","ejs");
app.get("/",function (req,res) {
    res.render('index',{title:'这个一个测试文档',h1:'consolidate',description:'<b>话哈哈哈</b>'})
})
app.listen(4000)