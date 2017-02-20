angular.module('friendsList').controller("mainCtrl", function($scope){

  $scope.friends=[
    "Norman Bates",
    "Mother",
    "Emma"
  ]

  $scope.addFriend = function(){
    $scope.friends.push($scope.newFriend)
    $scope.newFriend = '';
  }



})
