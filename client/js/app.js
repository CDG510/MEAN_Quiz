var triviaApp = angular.module('triviaApp', ['ngRoute']);

triviaApp.config(function ($routeProvider, $locationProvider) {
  $routeProvider
  .when('/',{templateUrl: '/static/partials/login.html'})
  
  .when('/dashboard',{templateUrl: '/static/partials/Dashboard.html'})

    .when('/newQuiz', {templateUrl: '/static/partials/user.html'})

    .when('/newQuestion', {templateUrl: '/static/partials/newQuestion.html'})

  .otherwise({

    redirectTo: '/'
  });

});
