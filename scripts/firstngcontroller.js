angular
  .module('FirstNgApp')
  .controller('firstNgController', function($scope, firstNgFactory) {

	  	$scope.recipes = firstNgFactory.getFirstNg();

	 //  Code for firstNgFilter.js	
	 // $scope.priceInfo {
  // 			min: 0,
  // 			max: 3
		// };
   });