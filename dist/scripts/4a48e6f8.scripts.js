"use strict";angular.module("newproject1App",["firebase"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("newproject1App").controller("MainCtrl",["$scope","angularFire",function(a,b){a.boxes=[],a.queue={},a.gameId=-1,a.playerNo="";var c=new Firebase("https://tickytacky.firebaseio.com/boxes");b(c,a,"boxes").then(function(){var c=new Firebase("https://tickytacky.firebaseio.com/queue");b(c,a,"queue").then(function(){if(void 0==a.queue.gameId){console.log("I'm player 1!"),a.player="p1";var b={board:[[{value:""},{value:""},{value:""}],[{value:""},{value:""},{value:""}],[{value:""},{value:""},{value:""}]],turn:"p1",waiting:!0,over:!1,turnCount:0,cats:!1};a.gameId=a.boxes.push(b)-1,a.queue.gameId=a.gameId,console.log("Player 1's game is: "+a.gameId)}else console.log("I'm player 2!"),a.player="p2",a.gameId=a.queue.gameId,a.queue={},console.log("Player 2's game is: "+a.gameId),a.boxes[a.gameId].waiting=!1})}),a.won=!1,a.mark=function(b){a.boxes[a.gameId].turn==a.player&&(0==a.boxes[a.gameId].over&&""!=b.value?alert("Please choose an empty box!"):(b.value=1!=a.boxes[a.gameId].turnCount%2?"X":"O",++a.boxes[a.gameId].turnCount)),a.winCond(b),a.boxes[a.gameId].turn="p1"==a.player?"p2":"p1"},a.winCond=function(){(""!=a.boxes[a.gameId].board[0][0].value&&a.boxes[a.gameId].board[0][0].value==a.boxes[a.gameId].board[0][1].value&&a.boxes[a.gameId].board[0][1].value==a.boxes[a.gameId].board[0][2].value||""!=a.boxes[a.gameId].board[1][0].value&&a.boxes[a.gameId].board[1][0].value==a.boxes[a.gameId].board[1][1].value&&a.boxes[a.gameId].board[1][1].value==a.boxes[a.gameId].board[1][2].value||""!=a.boxes[a.gameId].board[2][0].value&&a.boxes[a.gameId].board[2][0].value==a.boxes[a.gameId].board[2][1].value&&a.boxes[a.gameId].board[2][1].value==a.boxes[a.gameId].board[2][2].value||""!=a.boxes[a.gameId].board[0][0].value&&a.boxes[a.gameId].board[0][0].value==a.boxes[a.gameId].board[1][1].value&&a.boxes[a.gameId].board[1][1].value==a.boxes[a.gameId].board[2][2].value||""!=a.boxes[a.gameId].board[2][0].value&&a.boxes[a.gameId].board[2][0].value==a.boxes[a.gameId].board[1][1].value&&a.boxes[a.gameId].board[1][1].value==a.boxes[a.gameId].board[0][2].value||""!=a.boxes[a.gameId].board[0][0].value&&a.boxes[a.gameId].board[0][0].value==a.boxes[a.gameId].board[1][0].value&&a.boxes[a.gameId].board[1][0].value==a.boxes[a.gameId].board[2][0].value||""!=a.boxes[a.gameId].board[0][1].value&&a.boxes[a.gameId].board[0][1].value==a.boxes[a.gameId].board[1][1].value&&a.boxes[a.gameId].board[1][1].value==a.boxes[a.gameId].board[2][1].value||""!=a.boxes[a.gameId].board[0][2].value&&a.boxes[a.gameId].board[0][2].value==a.boxes[a.gameId].board[1][2].value&&a.boxes[a.gameId].board[1][2].value==a.boxes[a.gameId].board[2][2].value)&&(a.boxes[a.gameId].over=!0);for(var b=0,c=0;c<a.boxes[a.gameId].board.length;++c)for(var d=0;d<a.boxes[a.gameId].board.length;++d)""!=a.boxes[a.gameId].board[c][d].value&&b++;9==b&&1!=a.boxes[a.gameId].over&&(a.boxes[a.gameId].cats=!0)},a.click=function(){a.queue.gameId=void 0,(1==a.boxes[a.gameId].over||1==a.boxes[a.gameId].cats)&&location.reload}}]);