'use strict';

angular.module('newproject1App')
  .controller('MainCtrl', function ($scope, angularFire) {
	  $scope.boxes = [];
	  $scope.queue = {};
	  $scope.gameId = - 1;
	  $scope.playerNo = "";

//set up queue, games

	  var boxesDatabase = new Firebase("https://tickytacky.firebaseio.com/boxes");
	  angularFire(boxesDatabase, $scope, "boxes").then(function() {

	  	var queue = new Firebase("https://tickytacky.firebaseio.com/queue");
	  	angularFire(queue, $scope, "queue").then(function () {
	  		if($scope.queue.gameId == undefined) {
	  			console.log("I'm player 1!");
	  			$scope.player = "p1";

	  			var newGame = {
	  				board: [[{value: ""}, {value: ""}, {value: ""}], 
			  			[{value: ""}, {value: ""}, {value: ""}],
			  			[{value: ""}, {value: ""}, {value: ""}]],
	  				turn: 'p1',
	  				over: false,
	  				turnCount: 0,
	  			};

	  			$scope.gameId = $scope.boxes.push(newGame) - 1;
	  			$scope.queue.gameId = $scope.gameId;
	  			console.log("Player 1's game is: " + $scope.gameId);
	  		} else {
	  			console.log("I'm player two!");
	  			$scope.player = "p2";

	  			$scope.gameId = $scope.queue.gameId;
	  			$scope.queue = {};
	  			console.log("Player 2's game is: " + $scope.gameId);

	  		};
	  	});
	  });
	 }); 

	//   var myTurn = 1

	//   $scope.won = false;

	//   $scope.mark = function(cell) {
	//     // cell is passed in as an object
	//     // (so it's a reference to the original)

	//     //if box is already taken, choose an empty box
	// if($scope.won == false) {
	//   if(cell.value == 'X' || cell.value == 'O')
	//   	alert("Please choose an empty cell!");

	//   //box isn't empty? great, we can determine Xs and Os now

	//   else {
	// 	  if(myTurn % 2 == 0)
	// 	    cell.value = 'X';
	// 	  else
	// 	    cell.value = 'O';

	// 	  myTurn++
	// 	  };
	// 	  console.log("line 32");
	// 	  $scope.winCond(cell);
	// 	  console.log("line 34");
	//   };
	// }

//win conditions

	// $scope.winCond = function(cell) {
	// 	console.log("line 40");
	// if(($scope.boxes[0][0].value != "") && $scope.boxes[0][0].value == $scope.boxes[0][1].value && $scope.boxes[0][1].value == $scope.boxes[0][2].value ||
	//    ($scope.boxes[1][0].value != "") && $scope.boxes[1][0].value == $scope.boxes[1][1].value && $scope.boxes[1][1].value == $scope.boxes[1][2].value ||
	//    ($scope.boxes[2][0].value != "") && $scope.boxes[2][0].value == $scope.boxes[2][1].value && $scope.boxes[2][1].value == $scope.boxes[2][2].value ||
	//    ($scope.boxes[0][0].value != "") && $scope.boxes[0][0].value == $scope.boxes[1][1].value && $scope.boxes[1][1].value == $scope.boxes[2][2].value ||
	//    ($scope.boxes[2][0].value != "") && $scope.boxes[2][0].value == $scope.boxes[1][1].value && $scope.boxes[1][1].value == $scope.boxes[0][2].value ||
	//    ($scope.boxes[0][0].value != "") && $scope.boxes[0][0].value == $scope.boxes[1][0].value && $scope.boxes[1][0].value == $scope.boxes[2][0].value ||
	//    ($scope.boxes[0][1].value != "") && $scope.boxes[0][1].value == $scope.boxes[1][1].value && $scope.boxes[1][1].value == $scope.boxes[2][1].value ||
	//    ($scope.boxes[0][2].value != "") && $scope.boxes[0][2].value == $scope.boxes[1][2].value && $scope.boxes[1][2].value == $scope.boxes[2][2].value)
	// 	$scope.won = true;
	// }

// var cats = 0;

// 	for(var row=0, row < $scope.boxes.length, ++row) {
// 		for(var col=0, col < $scope.boxes.length, ++col) {
// 			if($scope.boxes.value[row][col] != "")
// 				cats++;
// 		}
// 	}
// 	if(cats == 9 && $scope.won != true)
// 		alert("Cat's game!");
	// 	var total = $scope.boxes
	// if(($scope.boxes.value != "1" && total = "9") && ($scope.won != true))



	// if($scope.won == true) 
	// 		alert("Congratulations! You win!");
	// 	}

	// })






