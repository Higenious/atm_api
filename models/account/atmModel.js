const mongoose = require('mongoose');
const schema = mongoose.Schema;



let atm_machine = new schema({
   atm_machineId : {type:String, required: true, unique: true},
   currency : 
       { 
         "note_2000"  : {type:Number},
         "note_500"  : {type:Number},
         "note_200" : {type:Number},
         "note_100"  : {type:Number},
       }
   ,
   total_Currency : {type:Number},
   atm_AdddressCode : {type:String }
})


module.exports.atm_machine =mongoose.model('atm_machine', atm_machine);