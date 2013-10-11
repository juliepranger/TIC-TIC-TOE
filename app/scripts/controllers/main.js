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
	  				waiting: true,
	  				over: false,
	  				turnCount: 0,
	  				cats: false,
	  			};

	  			$scope.gameId = $scope.boxes.push(newGame) - 1;
	  			$scope.queue.gameId = $scope.gameId;
	  			console.log("Player 1's game is: " + $scope.gameId);
	  		} else {
	  			console.log("I'm player 2!");
	  			$scope.player = "p2";

	  			$scope.gameId = $scope.queue.gameId;
	  			$scope.queue = {};
	  			console.log("Player 2's game is: " + $scope.gameId);
	  			$scope.boxes[$scope.gameId].waiting = false;

	  		};
	  	});
	  }); 
	  //end of Firebase stuff 

	 	//if box is already taken, choose an empty box
		//box isn't empty? great, we can determine Xs and Os now

	  $scope.won = false;

	  $scope.mark = function(cell) {

	  	if($scope.boxes[$scope.gameId].turn == $scope.player) {

	  		if($scope.boxes[$scope.gameId].over == false && cell.value != "") {
				alert("Please choose an empty box!")
				}
				else {

				  if($scope.boxes[$scope.gameId].turnCount % 2 != 1)
				    cell.value = 'X';
				  else
				    cell.value = 'O';

				  ++$scope.boxes[$scope.gameId].turnCount
					};
	  		};

			$scope.winCond(cell);

			if($scope.player == 'p1')
				$scope.boxes[$scope.gameId].turn = 'p2';
			else
				$scope.boxes[$scope.gameId].turn = 'p1';
			};

			//win conditions

		$scope.winCond = function(cell) {

			if(($scope.boxes[$scope.gameId].board[0][0].value != "") && $scope.boxes[$scope.gameId].board[0][0].value == $scope.boxes[$scope.gameId].board[0][1].value && $scope.boxes[$scope.gameId].board[0][1].value == $scope.boxes[$scope.gameId].board[0][2].value ||
		   ($scope.boxes[$scope.gameId].board[1][0].value != "") && $scope.boxes[$scope.gameId].board[1][0].value == $scope.boxes[$scope.gameId].board[1][1].value && $scope.boxes[$scope.gameId].board[1][1].value == $scope.boxes[$scope.gameId].board[1][2].value ||
		   ($scope.boxes[$scope.gameId].board[2][0].value != "") && $scope.boxes[$scope.gameId].board[2][0].value == $scope.boxes[$scope.gameId].board[2][1].value && $scope.boxes[$scope.gameId].board[2][1].value == $scope.boxes[$scope.gameId].board[2][2].value ||
		   ($scope.boxes[$scope.gameId].board[0][0].value != "") && $scope.boxes[$scope.gameId].board[0][0].value == $scope.boxes[$scope.gameId].board[1][1].value && $scope.boxes[$scope.gameId].board[1][1].value == $scope.boxes[$scope.gameId].board[2][2].value ||
		   ($scope.boxes[$scope.gameId].board[2][0].value != "") && $scope.boxes[$scope.gameId].board[2][0].value == $scope.boxes[$scope.gameId].board[1][1].value && $scope.boxes[$scope.gameId].board[1][1].value == $scope.boxes[$scope.gameId].board[0][2].value ||
		   ($scope.boxes[$scope.gameId].board[0][0].value != "") && $scope.boxes[$scope.gameId].board[0][0].value == $scope.boxes[$scope.gameId].board[1][0].value && $scope.boxes[$scope.gameId].board[1][0].value == $scope.boxes[$scope.gameId].board[2][0].value ||
		   ($scope.boxes[$scope.gameId].board[0][1].value != "") && $scope.boxes[$scope.gameId].board[0][1].value == $scope.boxes[$scope.gameId].board[1][1].value && $scope.boxes[$scope.gameId].board[1][1].value == $scope.boxes[$scope.gameId].board[2][1].value ||
		   ($scope.boxes[$scope.gameId].board[0][2].value != "") && $scope.boxes[$scope.gameId].board[0][2].value == $scope.boxes[$scope.gameId].board[1][2].value && $scope.boxes[$scope.gameId].board[1][2].value == $scope.boxes[$scope.gameId].board[2][2].value) 
				$scope.boxes[$scope.gameId].over = true;

			var cats = 0;

				for(var row = 0; row < $scope.boxes[$scope.gameId].board.length; ++row) {
					for(var col = 0; col < $scope.boxes[$scope.gameId].board.length; ++col) {
						if($scope.boxes[$scope.gameId].board[row][col].value != "")
							cats++;
					};
				};

					if(cats == 9 && $scope.boxes[$scope.gameId].over != true)
						$scope.boxes[$scope.gameId].cats = true;

			};

		$scope.click = function (button) {

			var reset = ($scope.queue.gameId = undefined)

			if ($scope.boxes[$scope.gameId].over == true || $scope.boxes[$scope.gameId].cats == true) {
			  location.reload;
		};

	};

})








