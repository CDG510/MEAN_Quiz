triviaApp.controller('UsersController', function ($scope, $location, $routeParams, UsersFactory) {

		$scope.Users = [];
		$scope.user = []

		$scope.addUser = function(){
			 user = {name: $scope.newUser.name};
			 UsersFactory.addUser(user, function(data){

			 	$scope.user = data;
			     //once added, go the /dashboard and take the $scope.newUser too
                 $location.path('/dashboard').search({user: $scope.newUser.name});
			 });
		}
	})

		// $scope.showPage = function($index){
		// 	console.log($index);
		// }
