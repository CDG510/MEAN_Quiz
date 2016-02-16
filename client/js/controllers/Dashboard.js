triviaApp.controller('DashboardController', function ($scope, $routeParams, QuestionFactory, UsersFactory, TestsFactory, $location) {


		console.log($routeParams.user)
        $scope.user = $routeParams.user
        console.log($scope.user)

	$scope.questionAddMessage = false;
	$scope.testSuccess = false;

        if ($routeParams.success == true ){
        	$scope.questionAddMessage = true;
        }
        if ($routeParams.testSuccess == true){
        	$scope.testSuccess = true
        }

   //

        TestsFactory.getTests(function(data){
			$scope.Tests = data;
			$scope.currentTest = data[data.length-1]

		});

		$scope.newQuiz = function(){
			$location.path('/newQuiz').search({user: $scope.user})
		};

 		$scope.newQuestion = function(user){
			$location.path('/newQuestion').search({user: $scope.user});
			};


		$scope.dashboard = function(){
			$location.path('/dashboard').search({user: $scope.user})
		}

});
