const express=require("express")
const bodyparser=require("body-parser")

const app=express();
var values=[];
app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded({extended:true}));



app.get("/",function(req,res){
   var today=new Date();
   var options={
    weekday:'long',
    day:'numeric',
    month:"long"
};

var day=today.toLocaleDateString("en-US",options)
   res.render("list",{kindofday:day,newlistItems:values})
   
   
});
app.post("/",function(req,res){
   var  value=req.body.newItem
 values.push(value);    
    res.redirect("/")
})
app.listen(3001,function(){
    console.log("30001 has started")
});