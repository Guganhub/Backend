const express = require('express');
const router = express.Router();

const {registerUser, loginUser,logoutUser,getUser,loginStatus,updateUser,changePassword,forgotPassword,resetpassword} = require('../controllers/userController.js')
const protect = require('../middleware/authMiddleware')



router.post('/register',registerUser)
router.post('/login',loginUser);
router.get('/logout',logoutUser);
router.get('/getuser',protect,getUser)
router.get('/loggedin',loginStatus)
router.patch('/updateuser',protect,updateUser);
router.patch('/changepassword',protect,changePassword);
router.post('/forgotpassword',forgotPassword)
router.put('/resetpassword/:resetToken',resetpassword)




module.exports= router;