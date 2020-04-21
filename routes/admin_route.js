let express = require('express');
let router = express.Router();
let adminController  = require('../controller/admin/adminController');


/* admin routes */
router.post('/signup', adminController.signUpAdmin);
router.post('/login', adminController.adminLogin);
router.get('/checkmoney', adminController.checkMoney)
router.post('/deposit', adminController.depositMoney);


module.exports = router;
