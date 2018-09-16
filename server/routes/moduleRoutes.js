const express = require('express');
const router = express.Router();
const ModuleControllers = require('../controllers/moduleControllers');

router.get('/', ModuleControllers.getModules);

router.get('/:id', ModuleControllers.getModule);

router.post('/', ModuleControllers.addModule);

router.put('/:id', ModuleControllers.editModule);

router.delete('/:id', ModuleControllers.deleteModule);

module.exports = router;