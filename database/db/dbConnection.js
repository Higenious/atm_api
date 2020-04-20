const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/Atm';

mongoose.connect(url,{useNewUrlParser: true , useUnifiedTopology: true }, function(err, result){
   if(err){
       console.log('failed to connect databaase', err)
   }else{
       console.log('successfully connected to database');
   }
})



