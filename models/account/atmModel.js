const mongoose = require('mongoose');
const schema = mongoose.Schema;



let atm_machine = new schema({
   atm_machineId : {type:String, required: true, unique: true},
   currency : [
       { "2000" : {type:Number},
         "500"  : {type:Number},
         "200"  : {type:Number},
         "100"  : {type:Number},
       }
   ],
   totalCurrency : {type:Number},
   atm_AdddressCode : {type:String }
})


module.exports.atm_machine =mongoose.model('atm_machine', atm_machine);