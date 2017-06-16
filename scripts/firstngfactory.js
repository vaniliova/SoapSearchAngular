angular
	.module('FirstNgApp')
	.factory('firstNgFactory', function($http) {


	  	function getFirstNg() {
	  		return $http.get('data/data.json');
	  	}

	  	return {
	  		getFirstNg: getFirstNg
	  	}

	});