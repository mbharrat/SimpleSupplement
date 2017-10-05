sortApp = angular.module('sortApp', []);

sortApp.controller('mainController', function($scope, $http) {
	

	$http.get('assets/json/lift.json').success(function(response){
		$scope.exercises = response;
		alert("yay");
	});


});