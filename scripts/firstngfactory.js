angular
  .module('FirstNgApp')
  .factory('firstNgFactory', function() {

  	var firstNgData = [
	    {
	       "type": "Condo",
	       "price": 220000,
	       "address": "213 Grove Street",
	       "description": "Excellente place, really nice view!"
	    },
	    {
	    	"type": "House",
	    	"price": 410500,
	    	"address": "245 Winding Place",
	    	"description": "Beautyful home with lots of space for big family!"
	    },
	    {
	    	"type": "Duplex",
	    	"price": 390500,
	    	"address": "657 River Lane",
	    	"description": "Great neibourhood and lot's of green space!"
	    }
	    ];
    
    function getFirstNg() {
    	return(firstNgData);
    }
      return {
      	getFirstNg: getFirstNg
      }
  });