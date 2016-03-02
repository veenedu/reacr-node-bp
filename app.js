var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.static("public"));

//default route
app.get("/",function(req,res){
  res.send('Hello Server Running');
})

app.listen(PORT,function(){
  console.log('Server running on: '+PORT);
});
