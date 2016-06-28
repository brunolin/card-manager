angular.module('brnApp').controller('searchCtrl', ['$scope', '$http', '$uibModal', function($scope, $http, $uibModal){

  $scope.card = {};
  $scope.cards = [];
  $scope.pages = [];
  $scope.pagination = false;
  $scope.password = null;

  $scope.search = function search() {
    if($scope.card.name == ""){$scope.card.name=undefined;}
    if($scope.card.price == ""){$scope.card.price=undefined;}
    if($scope.card.date == ""){$scope.card.date=undefined;}
    $http.post('/r/search', $scope.card).then(function (resp){
      $scope.cardsResp = resp.data;

      if(resp.data.length > 4){
        $scope.pagination = true;
        pages(resp.data.length);
      }
      $scope.changePage(0);

      function forzera(array){
        var array2 = [];
        for(i = 0; i < array; i++){
          array2.push({id: i});
        }
        $scope.pages = array2;
        console.log($scope.pages);
      }

      function pages(num){
        $scope.pages = parseInt(num / 4);
        if((num % 4) > 0){
          $scope.pages ++;
        }
        forzera($scope.pages);
      }
    });
  };

  $scope.changePage = function changePage(page) {
    console.log(page);
    $scope.cards = [];
    for(i = page * 4; i < $scope.cardsResp.length; i++){
      $scope.cards.push($scope.cardsResp[i]);
    }
  }

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
  };

  $scope.isInvalid = function isInvalid(){
    if(!$scope.card.name && !$scope.card.price && !$scope.card.date) return true
  };

}]);
