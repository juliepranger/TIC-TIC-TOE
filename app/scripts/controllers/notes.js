'use strict';

angular.module('newproject1App')
	.controller('MainCtrl', function($scope, angularFire) {
//binding to firebase

$scope.games = [];
$scope.queue = {};

//binding to angular templates

$scope.player = "";
$scope.gameId = -1; 
			//div ng-repeat="cell in games[gameId].board"; ngbind="cell.value"
var games = new Firebase("https://tickytacky.firebaseio.com/games");
angularFire(games, $scope, "games").then(function() {

	var queue = new Firebase("https://tickytacky.firebaseio.com/queue");
	angularFire(queue, $scope, "queue").then(function() {
		if($scope.queue.gameId == undefined) {
			console.log("I'm player one!");
			$scope.player = "p1";
			// create game
			var newGame = {
				board: ["","",""],
				turn: 'p1'.
				over: false.
				turnCount: 0,
			};

			//add gameId to queue
			$scope.gameId = $scope.games.push(newGame) - 1;
			$scope.queue.gameId = $scope.gameId;
			console.log("Player 1's game is: " + $scope.gameId);

		} else {
			console.log("I'm player two!");
			$scope.player = "p2";
			// read game id from queue

			$scope.gameId = $scope.queue.gameId;
			$scope.queue = {};
			console.log("Player 2's game is: " + $scope.gameId);
			//clear the queue
		}
	});

  });

	//$scope.clickDiv/check win/resetGame

	$scope.mark = function(cell) {
		if($scope.player == $scope.games[$scope.Id].turn) {
			//play
			if($scope.player == 'p1') {
				$scope.games[$scope.gameId].turn = 'p2';
			} else {
				$scope.games[$scope.gameId].turn = 'p1';
			}
		}
	}

});