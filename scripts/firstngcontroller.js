angular
  .module('FirstNgApp')
  .controller('firstNgController', function($scope, firstNgFactory) {

    $scope.first = firstNgFactory.getFirstNg();

  });