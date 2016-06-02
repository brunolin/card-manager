angular.module('brnApp').controller('searchCtrl', ['$scope', '$http', '$uibModal', function($scope, $http, $uibModal){

  $scope.card = {};
  $scope.cards = [];
  $scope.password = null;

  $scope.search = function search() {
    if($scope.card.name == ""){$scope.card.name=undefined;}
    if($scope.card.price == ""){$scope.card.price=undefined;}
    if($scope.card.date == ""){$scope.card.date=undefined;}
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

  $scope.auth = function auth(){
    $http.post('/r/clear-all', {password: $scope.password}).then(function (resp){
      $scope.success = resp.data;
    });
  }

  $scope.isInvalid = function isInvalid(){
    if(!$scope.card.name && !$scope.card.price && !$scope.card.date) return true
  }
}]);
