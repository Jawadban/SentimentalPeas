app.controller('FriendController', ['$scope', '$location', 'dataFactory', function($scope, $location, dataFactory) {
	$scope.statmentOne = 'Please choose one resturants';
	$scope.data = dataFactory.data;
  dataFactory.friendGetsThreeChoices();
}]);