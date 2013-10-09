'use strict';

angular.module('newproject1App')
  .controller('MainCtrl', function ($scope) {
	  $scope.boxes = [[{value: ""}, {value: ""}, {value: ""}], 
	  [{value: ""}, {value: ""}, {value: ""}],
	  [{value: ""}, {value: ""}, {value: ""}]];


	  var myTurn = 1

	  $scope.mark = function(cell) {
	    // cell is passed in as an object
	    // (so it's a reference to the original)

	  if(myTurn % 2 == 0)
	    cell.value = 'X';
	  else
	    cell.value = 'O';

	  myTurn++;
	  //   if(myTurn == 1)
	  //    myTurn = 2;
	  //   else
	  //    myTurn = 1;

	  };
  });
