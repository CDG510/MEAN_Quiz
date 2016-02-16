triviaApp.factory('UsersFactory', function ($http) {
		var users = [];
		var factory = {};

		factory.getUsers = function (callback){
			 $http.get('/showUsers').success(function(output){
			 	Users = output;
			 	callback(Users);
			 })
		}

		factory.addUser = function (user, callback){

			 $http.post('/newUser', user).success(function(output){
			 	users.push(output);
			 	callback(users);
			 });
		}

		factory.keepUser = function(callback){
			$http.get('/showUsers').success(function(output){
				user = output[output.length-1]
				callback(user);
		})
		}

	return factory;
	});
