let express = require('express');
let router = express.Router();
const userController = require('../controller/user/userController.js');



/* GET users listing. */
router.post('/signup', userController.signUp);
router.post('/login', userController.login);
router.post('/withdraw', userController.withdrawMoney);
router.get('/checkatmmoney', userController.check_Atm_Money);

router.get('*', function(req, res) {
    res.status(404).send({ message: 'Router not found.' })
  });
  


module.exports = router;
