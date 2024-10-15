const express = require("express");
const cors = require("cors")
const app = express();
const port = 8080;
const bodyparser = require('body-parser');
app.use(bodyparser.json());
app.use(cors())

app.use(cors({
    origin: '*', 
    allowedHeaders: ['Content-Type', 'Authorization']
  }));


app.use("/user",function(req,res){
res.send('yes');
});
app.listen(port,() =>{
    console.log(`server is runing on the port8080 ${port} `)
});







