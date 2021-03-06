var express = require('express');
 
var controller = require('./products.controller');

var router = express.Router();

router.get('/', controller.index);

router.get('/:id', controller.show);

router.post('/', controller.create);

router.put('/:id', controller.update);

router.post('/:id/comments', controller.add_comment); /* this is supposed to allow me to add comments on the product details page */ 

router.delete('/:id', controller.destroy);

module.exports = router;