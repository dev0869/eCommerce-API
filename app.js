const Connect=require('./database/Connect')
const express=require('express');
const Router = require('./Routes/Product');
const app=express();

const PORT =5000;
app.get('/',(req,res)=>{
    res.send('hii world')
})
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
app.use('/DeveshApi/Products/',Router)

Connect().then(console.log('mongo is connected')).catch((error)=>{
    console.log('mongoose eror',error)
});

app.listen(PORT,()=>{
    console.log('Server connected')
})
