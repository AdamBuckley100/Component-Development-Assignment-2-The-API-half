var _ = require('lodash')
var datastore = require('../datastore');

function findProduct(id) {
    var index = _.findIndex(datastore.products,function(product) {
              return product.id == id;
        }); 
    if (index !== -1) {
       return datastore.products[index] ;
      }
    else {
      return null ;
    }  
}

// Get list of products
exports.index = function(req, res) {
    return res.json(200, datastore.products);
} ;

exports.show = function(req, res) {
    var id = parseInt(req.params.id , 10) ;
    var product = findProduct(req.params.id) ; 
     if (product) {
        return res.json(product);
      }
      else {
         return res.send(404)
       }
};

// Creates a new product in datastore.
exports.create = function(req, res) {
    var new_id = 0;
    if (datastore.products.length > 0 ) {
      new_id = 1 +  datastore.products[datastore.products.length -1].id;
    }
    var product = {
		  id: new_id,
		  name: req.body.name,
		  description: req.body.description,
		  questions : []
      }
    datastore.products.push(products)
    return res.json(201, product);
};

// Update an existing product in datastore.
exports.update = function(req, res) {
      var index = _.findIndex(datastore.products, function(product) {
           return product.productId == req.params.productId;
        } );      
      if (index !== -1) {
          datastore.products.splice(index, 1, 
               {name: req.body.name, address: req.body.address , 
                         phone_number: req.body.phone_number });
          return res.send(200);
        } 
      return res.send(404) ;
};

// add a question
exports.add_question = function(req, res) {
    var id = parseInt(req.params.id) ;
    var product = findProduct(id);
    if (product) {
       var new_id = 0;
       if (product.questions.length > 0 ) {
          new_id = product.questions.length ;
       }
       var question = {
              id : new_id,
              subject: req.body.subject,
              query: req.body.query,
              /*upvotes: 0*/
      }
       product.questions.push(question)
       return res.send(200, product) 
    } else {
        return res.send(404)
    }
};

// Deletes a product from datastore.
exports.destroy = function(req, res) {
    var elements = _.remove(datastore.products , 
           function(product) {
              return product.productId == req.params.productId;
        });  
     if (elements.length == 1) {
        return res.send(200);
        }
      else
        {
         return res.send(404)
      }
};