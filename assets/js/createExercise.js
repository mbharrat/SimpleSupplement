var eCreate = angular.module('eCreate', []);

eCreate.controller('ExerciseCreateCtrl', ['$scope', function ($scope) {
	$scope.master = {};

	$scope.update = function(user) {
        $scope.master = angular.copy(user);
      };
	$scope.form = {
		name: "",
		part: "",
		difficulty: "",
		createdBy: "",
		description: ""
	};
	
}]);