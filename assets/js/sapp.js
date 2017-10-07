sortSapp = angular.module('sortSapp', []);

sortSapp.controller('suppController', function($scope, $http) {
	

	$http.get('assets/json/supp.json').success(function(response){
		$scope.supplements = response;
		alert("supp yay");
	});


});