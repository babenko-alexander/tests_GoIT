const express = require('express');
const router = express.Router();
const TestControllers = require('../controllers/testControllers');

router.get('/', TestControllers.getTests);

router.get('/:id', TestControllers.getTest);

router.post('/', TestControllers.addTest);

router.put('/:id', TestControllers.editTest);

router.delete('/:id', TestControllers.deleteTest);

module.exports = router;