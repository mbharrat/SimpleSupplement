sortSapp = angular.module('sortSapp', []);

sortSapp.controller('suppController', function($scope, $http) {
	
//-----------------------------------------------------------------------
//          Populates database from JSON file using AJAX request
//-----------------------------------------------------------------------
	$http.get('assets/json/supp.json').success(function(response){
		$scope.supplements = response;
		alert("supp yay");
	});
//-----------------------------------------------------------------------
//              Create drop down filter for price
//-----------------------------------------------------------------------
	//Contains the filter options
  $scope.filterOptions = {
    suppPrices: [
      {id : 2, name : 'Show All', rating: 6 },
      {id : 3, name : '$', rating: '$' },
      {id : 4, name : '$$', rating: '$$'},
      {id : 5, name : '$$$', rating: '$$$'}
    ]
  };                 
  //Mapped to the model to filter
  $scope.filterItem = {
    suppPrices: $scope.filterOptions.suppPrices[0]
  }

  //Custom filter - filter based on the rating selected
  $scope.customFilter = function (data) {
    if (data.price === $scope.filterItem.suppPrices.name) {
      return true;
    } else if ($scope.filterItem.suppPrices.name === 'Show All') {
      return true;
    } else {
      return false;
    }
  };  
//-----------------------------------------------------------------------

});