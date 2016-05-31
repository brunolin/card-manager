angular.module('brnApp').controller('searchCtrl', ['$scope', '$http', function($scope, $http){

  $scope.card = {};
  $scope.cards = [];

  $scope.search = function search() {
    $http.post('/r/search', $scope.card).then(function (resp){
      $scope.cards = resp.data;
    });
  };

  $scope.clear = function clear(){
    $scope.card = {};
    $scope.cards = [];
  };

  $scope.isInvalid = function isInvalid(){
    if(!$scope.card.name && !$scope.card.price && !$scope.card.date) return true
  }
}]);
