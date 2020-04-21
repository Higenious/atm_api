const admin = require('../../models/admin/adminModel').admin;
const atm_machine = require('../../models/account/atmModel').atm_machine;




/**  admin signup function  */
async function signUpAdmin(req, res) {
    console.log('signupm admin  being called');
    const { email, password } = req.body;
    if (email, password) {
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

    } else {
        res.send({ "meesage": "Please Enter required Details" })
    }
}





/** function for admin login */
async function adminLogin(req, res) {
    const { email, password } = req.body;
    if (email, password) {
        try {
            const query = { $and: [{ email: email }, { password: password }] }
            const result = await admin.find(query);
            if (result !== undefined && result.length > 0) {
                res.send(result);
            }
            else {
                res.send("Login Failure: Invalid email id or password");
            }
        } catch (Error) {
            res.send(Error);
        }
    } else {
        res.send('please Enter required Credentials')
    }
}







/** Todo ATMid  - check by ATM id*/
/** check Money in ATM function */
async function checkMoney(req, res) {
    try{
        const Finalresult = await atm_machine.find({});
        res.send(Finalresult)
       }
     catch(error){
         res.send(error);
     }
}







/** Deposit Money */
async function depositMoney(req, res){
    const reqBody = req.body;
    var note_2000 = reqBody.currency.note_2000;
    var note_200 =  reqBody.currency.note_200;
    var note_500 =  reqBody.currency.note_500;
    var note_100 =  reqBody.currency.note_100;
    let total_Currency = (2000 * note_2000 +  200 * note_200 + 500*note_500  + 100*note_100 );
    reqBody['total_Currency'] =total_Currency;
    try{
     const result = await atm_machine.find({atm_machineId : req.body.atm_machineId});
     const availlable_Currency = result[0].currency;
     let lastAmount = result[0].total_Currency;
     let newAmount = lastAmount + total_Currency;
     let newObje ={
         "note_2000" :  result[0]._doc.currency.note_2000 + note_2000,
         "note_500"  :  result[0]._doc.currency.note_500 + note_500,
         "note_200"  :  result[0]._doc.currency.note_200 + note_200,
         "note_100"  :  result[0]._doc.currency.note_100 + note_100,
     }
     try{
        const Finalresult = await atm_machine.findOneAndUpdate({atm_machineId :req.body.atm_machineId}, {$set:{total_Currency : newAmount, currency : newObje }}, {new: true});
        res.send(Finalresult)
       }
     catch(error){
         console.log('logger', error);
     }
     }catch (err) {
     res.send(err);
   }
}






/** modules exports */
module.exports.signUpAdmin = signUpAdmin;
module.exports.depositMoney = depositMoney;
module.exports.checkMoney = checkMoney;
module.exports.adminLogin = adminLogin;
