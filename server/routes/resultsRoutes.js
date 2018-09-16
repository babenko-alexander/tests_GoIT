const express = require('express');
const router = express.Router();
const ResultsController = require('../controllers/resultsController');

router.get('/all', ResultsController.getAllResults);
router.get('/', ResultsController.getUserResults);

module.exports = router;