
const express = require('express');
const router = express.Router();
const personController = require('../controllers/personController');

router.get('/', personController.getAllPersons);
router.post('/', personController.createPerson);
// Add similar routes for update and delete

module.exports = router;
