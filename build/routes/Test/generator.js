function readFile(e,r,t){fs.readFile(e,function(e,a){if(e)console.log("读取文件fail "+e);else{var n=iconv.decode(a,"utf-8");n=t(n),fs.appendFile(r,n,function(e){e?console.log("fail "+e):console.log("写入文件ok")})}})}var https=require("https"),zlib=require("zlib"),crypto=require("crypto"),fs=require("fs"),path=require("path"),iconv=require("iconv-lite");module.exports=function(e){e.get("/generator",function(e,r){r.render("Test/generator.html",{title:"自动生成"})}),e.post("/generator",function(e,r){var t=process.cwd(),a=e.body.objId,n=a[0].toUpperCase()+a.substr(1),o=path.join(t,"models/template4.md"),i=path.join(t,"models/"+a+".js");readFile(o,i,function(e){return e.replace(/#name#/g,a).replace(/#Name#/g,n)}),readFile(o=path.join(t,"routes/Server/template4.md"),i=path.join(t,"routes/Server/"+a+".js"),function(e){return e.replace(/#name#/g,a).replace(/#Name#/g,n)}),readFile(o=path.join(t,"views/Server/template4.md"),i=path.join(t,"views/Server/"+a+"List.html"),function(e){return e.replace(/#name#/g,a).replace(/#Name#/g,n)}),readFile(o=path.join(t,"public/default/assets/js/template4.md"),i=path.join(t,"public/default/assets/js/Server/"+a+".js"),function(e){return e.replace(/#name#/g,a).replace(/#Name#/g,n)}),r.render("Test/generator.html",{title:"生成成功"})})};