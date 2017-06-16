angular
  .module('FirstNgApp')
  .controller('firstNgController', function($scope, firstNgFactory) {

	  	$scope.recipes;

	  	firstNgFactory.getFirstNg.then(function successCallback(data) {
	  		$scope.recipes = data.data;
	  	}, function errorCallback(error) {
	  		console.log(error.json);
	  	

   });

