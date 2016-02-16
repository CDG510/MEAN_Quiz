triviaApp.controller('QuestionController', function ($scope, $routeParams, $location, QuestionFactory) {

		$scope.user = $routeParams.user

		$scope.success = false;
		$scope.nameFail = false;


//this will be to add question, add validations
		$scope.addQuestion = function(){

			question = {name: $scope.user, question: $scope.makeQuestion.description , answer: $scope.makeQuestion.correct, fake1: $scope.makeQuestion.fakeAnswer1, fake2: $scope.makeQuestion.fakeAnswer2 };
			if ($scope.makeQuestion.description == undefined){
				$scope.nameFail = true;
				return
			}
			console.log(question)
			QuestionFactory.addQuestion(question, function(data){
				if (data == false) {
					$scope.fail = true;
				}
				else {
					$scope.success = true;
					$location.path('/dashboard').search({user: $scope.user, success: true})
				}


				//if added and all passed
				//redirect back to dash
			});

		}

		$scope.newQuestion = function(user){
			$location.path('/newQuestion').search({user: $scope.user});
			};


		$scope.dashboard = function(){
			$location.path('/dashboard').search({user: $scope.user})
		}
	});
