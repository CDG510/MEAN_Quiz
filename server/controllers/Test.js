var mongoose = require('mongoose');
var Question = mongoose.model('Question');
var User = mongoose.model('User');
var Test = mongoose.model('Test');

module.exports = (function(){
	return {
		//this will grab all questions to select for quiz
		index: function(req, res){
			Test.find({}, function(err, Tests){
				//find all Orders
				if (err){
					console.log(err)
				}
				else{
					res.send(JSON.stringify(Tests));
				}
			})		// })
		},

		create: function(req, res){

			 var test = new Test({user: req.body.user, Percentage: req.body.Percentage, Score: req.body.Score});
			 test.save(function(err, result){
			 	if(err){
			 		console.log(er)
			 	}
			 	else{
			 		console.log(result)
			 		res.send(JSON.stringify(result));
			 	}
			 })
		}

		}
}) ()
