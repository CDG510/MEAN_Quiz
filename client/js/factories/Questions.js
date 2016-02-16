triviaApp.factory('QuestionFactory', function ($http) {
		var questions = [];
		var factory = {};

		factory.getQuestions = function (callback){
			$http.get('/showQuestions', {}).success(function(output){
				callback(output);
			})
		}
		//get all the topics


		factory.addQuestion = function (question, callback){
			//add more validations here
			if (question.question.length < 15 || question.answer.length < 1 || question.fake1.length < 1 || question.fake2.length < 1){
				callback(false)
			}
			else {
				$http.post('/newQuestion', question).success(function(output){
				//go to db with the info we received
				callback(true)
			});

			}
		}

	//add a function to get questions, check answers


		return factory;
	});
