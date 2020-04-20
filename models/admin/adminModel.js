const mongoose = require('mongoose');
const schema = mongoose.Schema;



let adminSchema = new schema({
   email : {type: String,  unique :true },
   password : {type:String} 
})

module.exports.admin = mongoose.model('admin', adminSchema);