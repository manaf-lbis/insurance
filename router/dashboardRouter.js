const router = require('express').Router();
const dashboardController = require('../controller/dashboardController')




router.get('/', dashboardController.login)
router.get('/dashboard', dashboardController.dashboard)
router.post('/addInsurance',dashboardController.addNewInsurance);
router.get('/dashboardDetails',dashboardController.getDashboard)


module.exports = router