const user = require("../../models/user/userModel").users;
const { check } = require('express-validator');








/** function for user login */
async function login(req, res) {
     const { card_number,  pin } = req.body
     if(card_number, pin && `${card_number}`.length === 8 && `${pin}`.length === 4){
      try{
         const query = { $and: [{ card_number: card_number },{ pin: pin } ] }
        const result =  await user.find(query);
           if(result !== undefined && result.length > 0){
            res.send(result);
           }
           else{         
            res.send( "Login Failure: Invalid card numnber or pin");
           }
      }catch(Error){
         res.send(Error);
      }       
     }else{
        res.send('please Enter required Credentials')
     }   
}








/** function for user sign Up */
async function signUp(req, res) {
    const { card_number, name, pin } = req.body
    if (card_number, name, pin && `${card_number}`.length === 8 && `${pin}`.length === 4) {
        const reqBody = req.body;
        try {
            const response = await user(reqBody).save();
            if (response) {
                console.log('Result', response);
                res.send({ "message": "user signed up successfully !", data: response, statusCode: 200 });
            }
        }
        catch (Error) {
            res.send(Error);
        }

    } else {
        res.send('please Enter required details');
    }

}






/** Withdraw Money */
 async function withdrawMoney(req, res) {
    const { withdrawal_money, card_number, pin } = req.body;
    console.log('withdrawalmoney', withdrawal_money);
    if(withdrawal_money <= 20000 ) {
     //res.send('you can continue');
     try{
        const query = { $and: [{ card_number: card_number },{ pin: pin } ] }
        const result =  await user.find(query);
          if(result !== undefined && result.length > 0){
           res.send(result);
          }
          else{         
           res.send( "Login Failure: Invalid card numnber or pin");
          }
     }catch(Error){
        res.send(Error);
     }       
    }else{
      res.send('limit exceed!');
    }
}





/** Get All users */
function check_Atm_Money(req, res) {
    res.status(200).send('Get ALl');
}



/** checkreqbody(card_number, pin); */
function checkreqbody(card_number, pin, req, res) {
    let card = card_number.toString().length;;
    console.log('card', typeof (card));
    if (card === 8) {


    } else {
        res.send('please pin number should be 8 digit only');
        req.destroy();
    }

};


/** Exporting modules */
module.exports.signUp = signUp;
module.exports.check_Atm_Money = check_Atm_Money;
module.exports.login = login;
module.exports.withdrawMoney = withdrawMoney;
