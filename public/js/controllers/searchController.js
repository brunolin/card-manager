angular.module('brnApp').controller('searchCtrl', ['$scope', '$http', '$uibModal', function($scope, $http, $uibModal){

  $scope.card = {};
  $scope.cards = [];
  $scope.password = null;

  $scope.search = function search() {
    $http.post('/r/search', $scope.card).then(function (resp){
      $scope.cards = resp.data;
    });
  };


  $scope.clear = function clear(){
    $scope.card = {};
    $scope.cards = [];
  };

  $scope.logIn = function logIn(){
    $uibModal.open(
      {
        templateUrl: './../template/login.html',
        controller: 'searchCtrl',
        size: 'sm'
      }
    )
  };

  $scope.isInvalid = function isInvalid(){
    if(!$scope.card.name && !$scope.card.price && !$scope.card.date) return true
  }
}]);
