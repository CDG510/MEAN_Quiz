triviaApp.factory('TestsFactory', function ($http) {
		var Tests = [];
		var factory = {};

		factory.getTests = function (callback){
			 $http.get('/showTests').success(function(output){
			 	Tests = output;
			 	callback(Tests);
			 })
		}

		factory.addTest = function (test, callback){
            console.log(test);
            score = 0
            for (var i in test.answers) {
            	console.log(test.answers[i])
            	if (test.answers[i] == true) {
            		score++
            	}
            }
            console.log(score);
            finalScore = Math.floor((score/3) * 100) + "%"
            console.log(finalScore);
            test.Percentage = finalScore;
            test.Score = score+"/3"
            console.log(test);
			 $http.post('/addTest', test).success(function(output){
			 	Tests.push(output);
			 	console.log(Tests);
			 	callback(true);
			 });
		}

		

	return factory;
	});