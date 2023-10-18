const express = require('express');
const { getuser, createUser, updateUser, deleteUser } = require('../controllers/userconroller');
const router =express.Router();

router.route('/user').get(getuser);
router.route('/user/new').post(createUser);
router.route('/user/update/:id').put(updateUser);
router.route('/user/delete/:id').delete(deleteUser);

module.exports= router;