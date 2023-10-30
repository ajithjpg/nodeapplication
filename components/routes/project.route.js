const express = require('express');
const router = express.Router({ mergeParams: true });
const{createproject} = require('../controller/project')
router.post('/create',createproject)

module.exports = router;