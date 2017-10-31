angular.module('friendsList').controller('mainCtrl', function($scope){
    $scope.friends = ['Mike', 'Bryan', 'Matt', 'Jake', 'Crissy', 'Sarah'];

    $scope.addFriend = (newFriend) => {
      $scope.friends.push(newFriend);
    }
});
