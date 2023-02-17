const mongoose=require('mongoose')
const uri='mongodb+srv://DeveshBisht:7533054803qwe@cluster0.pgonves.mongodb.net/cluster0?retryWrites=true&w=majority'
mongoose.set("strictQuery", false);
const Connect=()=>{
   console.log('hyy')
    return mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    
}

module.exports=Connect;