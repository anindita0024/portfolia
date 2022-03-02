const mongoose = require('mongoose');

const CatagoriSchema = new mongoose.Schema({
    
   name:{
       type:String,
       required:true
   }

},
{timestamps:true}
);

module.exports=mongoose.model("Catagori",CatagoriSchema)