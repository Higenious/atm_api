const admin =  require('../../models/admin/adminModel').admin; 
const atm_machine = require('../../models/account/atmModel').atm_machine;




/**  admin signup function  */
async function signUpAdmin(req, res){
    console.log('signupm admin  being called');
    const {email , password} = req.body;
    if(email, password ){
        const reqBody = req.body;
        try {
            const response = await admin(reqBody).save();
            console.log('response-->***', response);
            if (response) {
                console.log('Result', response);
                res.send({ "message": "admin signed up successfully !", data: response, statusCode: 200 });
            }
        }
        catch (Error) {
            res.send(Error);
        }

    }else{
        res.send({"meesage":"Please Enter required Details"})
    } 
}





/** function for admin login */
async function adminLogin(req, res){
    const {email, password} = req.body;
    if(email, password){
        try{
           const query = { $and: [{ email: email },{ password: password } ] }
           const result =  await admin.find(query);
             if(result !== undefined && result.length > 0){
              res.send(result);
             }
             else{         
              res.send( "Login Failure: Invalid email id or password");
             }
        }catch(Error){
           res.send(Error);
        }       
       }else{
          res.send('please Enter required Credentials')
       }   
} 





/** Deposit Money */
function depositMoney(req, res){
    const {atm_machineId, currency, totalCurrency, atm_AdddressCode} = req.body;
   /** Todo  */   
} 



/** Todo */
/** check Money  function */ 
function checkMoney(){

} 


/** modules exports */
module.exports.signUpAdmin =signUpAdmin;
module.exports.depositMoney = depositMoney;
module.exports.checkMoney =checkMoney;
module.exports.adminLogin =adminLogin;