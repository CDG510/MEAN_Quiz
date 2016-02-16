triviaApp.controller('quizController', function ($scope, UsersFactory, QuestionFactory, $location, $routeParams, TestsFactory) {

		$scope.user = $routeParams.user
		$scope.needed = false

		QuestionFactory.getQuestions(function(data){

				random1 =Math.floor(Math.random() * data.length-1) + 1;
				random2 =Math.floor(Math.random() * data.length-1) + 1;

				if (random1 == random2) {
					random2 =Math.floor(Math.random() * data.length-1) + 1;
				}
				random3 =Math.floor(Math.random() * data.length-1) + 1;
				while (random3 == random2 || random3 == random1 || random2 == random1 || random1, random2, random3 == 5) {
					random2 =Math.floor(Math.random() * data.length-1) + 1;
					random3 =Math.floor(Math.random() * data.length-1) + 1;
				}

				Question1 = data[random1];
				Question2 = data[random2];
				Question3= data[random3];
				$scope.Questions = [Question1, Question2, Question3]
			});


		$scope.dashboard = function(){
			$location.path('/dashboard').search({user: $scope.user})
		}


//this will be to add quiz, add validations
		$scope.addTest = function(){
			if ($scope.quizAnswer1 == undefined || $scope.quizAnswer2 == undefined || $scope.quizAnswer3 == undefined) {
				$scope.needed = true;
				return
			}
			else {
				$scope.needed = false;
				Test = {answers: [$scope.quizAnswer1.answer, $scope.quizAnswer2.answer, $scope.quizAnswer3.answer], user: $scope.user }

				TestsFactory.addTest(Test, function(data){
				if (data == true){
					Test = {}
					$location.path('/dashboard').search({user: $scope.user, testSuccess: true})
				}

			});
			}
		}
	});
