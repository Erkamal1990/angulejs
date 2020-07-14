//Define module
var app = angular.module('firstApp',['ngRoute']);

// Define Routes
app.config(function($routeProvider,$locationProvider){
$routeProvider
	.when('/',{
		templateUrl : 'templates/dashboard.html',//Define html page template
		controller : 'MainController' // Define controller
	})
	.when('/login',{
		templateUrl : 'templates/login.html',
		controller  : 'loginController'
	})
	.otherwise({redirectTo : '/'})
	// Remove # in url
     $locationProvider.html5Mode(true);
})
// Define Routes

//Define Factory

//Define Controller
app.controller('MainController', function($scope){

})