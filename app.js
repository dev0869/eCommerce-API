const Connect=require('./database/Connect')
const express=require('express');
const Router = require('./Routes/Product');
const cors=require('cors')
const app=express();

const PORT =5000;
app.get('/',(req,res)=>{
    res.send('hii world')
})
app.use(cors({
    origin:"*",
    credentials:true
}))
app.use('/DeveshApi/Products/',Router)

Connect().then(console.log('mongo is connected')).catch((error)=>{
    console.log('mongoose eror',error)
});

app.listen(PORT,()=>{
    console.log('Server connected')
})