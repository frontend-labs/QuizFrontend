var app = angular.module('myApp',['ngRoute']);

//configuración de rutas
app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'templates/inicio.html'
	})
	.when('/examen', {
		controller: 'questionController',
		templateUrl: 'templates/examen.html'
	})
	.when('/resultado', {
		controller: 'resultController',
		templateUrl: 'templates/resultado.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});