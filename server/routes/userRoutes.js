const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/userControllers');

router.get('/', userControllers.getUsers);

router.get('/:id', userControllers.getUser);

router.post('/', userControllers.addUser);

router.put('/:id', userControllers.editUser);

router.delete('/:id', userControllers.deleteUser);

module.exports = router;