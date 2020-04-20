const mongoose = require('mongoose');
const schema = mongoose.Schema;



let UserSchema = new schema({
   name : {type: String},
   card_number : {type:Number, required:true, unique :true, maxlength: 8 , minlength:8},
   pin : {type:Number, maxlength:8, required:true},
   balance : {type:Number},
   
})

module.exports.users = mongoose.model('users', UserSchema);