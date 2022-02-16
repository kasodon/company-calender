const express = require('express');
const router = express.Router();
const {getAllData} = require('../controllers/calender');

router.route('/').get(getAllData);
// router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;