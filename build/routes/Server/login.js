var crypto=require("crypto"),model=require("../../model.js"),User=model.user,auth=require("./auth");module.exports=function(e){e.get("/admin",auth.checkLogin),e.get("/admin",function(e,i){i.render("Server/index.html",{title:"主页",user:e.session.admin,websiteTitle:model.db.config.websiteTitle})}),e.get("/admin/login",auth.checkNotLogin),e.get("/admin/login",function(e,i){i.render("Server/login.html",{title:"登录",user:e.session.admin,websiteTitle:model.db.config.websiteTitle})}),e.post("/admin/login",auth.checkNotLogin),e.post("/admin/login",function(e,i){var t=crypto.createHash("md5").update(e.body.password).digest("hex");User.getFilter({name:e.body.name}).then(function(n){return n?n.password!=t?i.redirect("/admin/login"):(e.session.admin=n,void i.redirect("/admin")):i.redirect("/admin/login")}).catch(function(e){})})};