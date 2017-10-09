sortSapp = angular.module('sortSapp', []);

sortSapp.controller('suppController', function($scope, $http) {
	

	$http.get('assets/json/supp.json').success(function(response){
		$scope.supplements = response;
		alert("supp yay");
	});
	//Contains the filter options
  $scope.filterOptions = {
    stores: [
      {id : 2, name : 'Show All', rating: 6 },
      {id : 3, name : '$', rating: 5 },
      {id : 4, name : '$$', rating: 4 },
      {id : 5, name : '$$$', rating: 3 }
    ]
  };


});