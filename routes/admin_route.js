let express = require('express');
let router = express.Router();
let adminController  = require('../controller/admin/adminController');


/* admin routes */
router.post('/signup', adminController.signUpAdmin);
router.post('/login', adminController.adminLogin);
router.post('/deposit', adminController.depositMoney);
router.post('/checkmoney', adminController.checkMoney);



module.exports = router;
