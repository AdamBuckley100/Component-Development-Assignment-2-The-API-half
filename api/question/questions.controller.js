var _ = require('lodash')
var datastore = require('../datastore');

// Get list of questions
exports.index = function(req, res) /* req is request. res is response. */
{
    return res.json(200, datastore.questions); /* In English: return the questions in the datastore and have the response be in json form... the number 200 indicates success. */ 
};
 
// Get a single question
exports.show = function(req, res)
{
	/* Below: index is a variable that ... is equal to the act of finding an id in the questions datastore that is equal to
	the id that the client is looking for (the id in the paramater) */
    var index = _.findIndex(datastore.questions, 
	
           function(question)
		   
		{
			
              return question.id == req.params.id; /* return the id of the question THAT matches the id of the question which the client specified. */
			  
        });  
		
     if (index != -1)
	 
	 {
		 /* Below: return the sigle question with the id that the client specified. */
        return res.json( datastore.questions[index] );
		
     }
	  
      else
		  
        {
			
         return res.send(404) /* 400 and 404 and over indicates failure (failure to find) */
		 
       }   

};

// Creates a new question in datastore.
exports.create = function(req, res)
{
    var nextId = 0 /* just to initialise */
	
    var last = _.last(datastore.questions)
	
    if (last != undefined) /* if last is not undefined (not nothing) */
	{
       nextId = last.id + 1
    }
	else /* else it's the first id */
	{
      nextId = 1
    }
	
    var question =
	{
       id: nextId, /* as defined above */
       name: req.body.name, /* what the name was specified as by the client */
       address: req.body.address /* what the address was specified as by the client */
    };
	
    datastore.questions.push(question) /* now add that question variable to the questions datastore */
	
    return res.json(201, question); /* return a 201, meaning that it worked successfully */
};

// Deletes a question from datastore.
exports.destroy = function(req, res)
{
	/* removing the question from the questions datastore that has an id that is equal to the id specified by the client */
    var elements = _.remove(datastore.questions, 
           function(question)
		{
              return question.id == req.params.id;
        }
		);
		
     if (elements.length == 1) /* aparently elements has to have a length of 1 for the deletion to have had been successful. */
	 {
        return res.send(200); /* the deletion was successful */
        }
      else
        {
         return res.send(404) /* the deletion was unsuccessful */
      }
	  
};
