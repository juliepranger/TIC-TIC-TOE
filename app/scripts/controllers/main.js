'use strict';

angular.module('newproject1App')
  .controller('MainCtrl', function ($scope, angularFire) {
	  $scope.boxes = [];

	  var database = new Firebase("https://tickytacky.firebaseio.com");
	  angularFire(database, $scope, "boxes").then(function() {
	  	$scope.boxes = [[{value: ""}, {value: ""}, {value: ""}], 
		  [{value: ""}, {value: ""}, {value: ""}],
		  [{value: ""}, {value: ""}, {value: ""}]];
	  });
	  var myTurn = 1

	  $scope.won = false;

	  $scope.mark = function(cell) {
	    // cell is passed in as an object
	    // (so it's a reference to the original)

	    //if box is already taken, choose an empty box
	if($scope.won == false) {
	  if(cell.value == 'X' || cell.value == 'O')
	  	alert("Please choose an empty cell!");

	  //box isn't empty? great, we can determine Xs and Os now

	  else {
		  if(myTurn % 2 == 0)
		    cell.value = 'X';
		  else
		    cell.value = 'O';

		  myTurn++
		  };
		  console.log("line 32");
		  $scope.winCond(cell);
		  console.log("line 34");
	  };
	}

//win conditions

	$scope.winCond = function(cell) {
		console.log("line 40");
	if(($scope.boxes[0][0].value != "") && $scope.boxes[0][0].value == $scope.boxes[0][1].value && $scope.boxes[0][1].value == $scope.boxes[0][2].value ||
	   ($scope.boxes[1][0].value != "") && $scope.boxes[1][0].value == $scope.boxes[1][1].value && $scope.boxes[1][1].value == $scope.boxes[1][2].value ||
	   ($scope.boxes[2][0].value != "") && $scope.boxes[2][0].value == $scope.boxes[2][1].value && $scope.boxes[2][1].value == $scope.boxes[2][2].value ||
	   ($scope.boxes[0][0].value != "") && $scope.boxes[0][0].value == $scope.boxes[1][1].value && $scope.boxes[1][1].value == $scope.boxes[2][2].value ||
	   ($scope.boxes[2][0].value != "") && $scope.boxes[2][0].value == $scope.boxes[1][1].value && $scope.boxes[1][1].value == $scope.boxes[0][2].value ||
	   ($scope.boxes[0][0].value != "") && $scope.boxes[0][0].value == $scope.boxes[1][0].value && $scope.boxes[1][0].value == $scope.boxes[2][0].value ||
	   ($scope.boxes[0][1].value != "") && $scope.boxes[0][1].value == $scope.boxes[1][1].value && $scope.boxes[1][1].value == $scope.boxes[2][1].value ||
	   ($scope.boxes[0][2].value != "") && $scope.boxes[0][2].value == $scope.boxes[1][2].value && $scope.boxes[1][2].value == $scope.boxes[2][2].value)
		$scope.won = true;
	
	else 
		console.log("this is working");
		
		if($scope.won == true) 
			alert("Congratulations! You win!");
		}

	})






//room availability, player assignments






