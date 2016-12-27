var express = require('express');

var controller = require('./questions.controller');

var router = express.Router();

router.get('/', controller.index); /* if the parameters in the URL is just "/" and a get request is made, then just the list of questions
is returned. (the exports.index method/function in the questions.controller.js file is envoked. */

router.get('/:id', controller.show); /* get request */

router.post('/', controller.create); /* creation request.. using post for creation instead of put */

router.delete('/:id', controller.destroy); /* delete.destroy request */

module.exports = router;

