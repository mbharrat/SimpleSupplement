var sCreate = angular.module('sCreate', []);

sCreate.controller('SuppCreateCtrl', ['$scope', function ($scope) {
	$scope.master = {};

	$scope.update = function(user) {
        $scope.master = angular.copy(user);
      };
	$scope.form = {
		sname: "",
		company: "",
		price: "",
		goal: "",
		activeIngred: "",
		description: ""

	};
	
}]);