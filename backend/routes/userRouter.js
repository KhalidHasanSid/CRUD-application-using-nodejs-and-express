const express = require('express');
const router = express.Router();
const {getUser,getUsers,updateUser,deleteUser,createUser} = require('../controller/userController.js');

router.get('/',getUsers);
router.get('/:id',getUser);
router.post('/',createUser);
router.put('/:id',updateUser);
router.delete('/:id',deleteUser);


module.exports = router;