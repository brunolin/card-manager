angular.module('brnApp', ['ngFileUpload', 'ngAnimate', 'ui.bootstrap']).controller('brnCtrl', ['$scope', function($scope){

  $scope.selected = {};
  $scope.menu = [{name: 'Add card', id: 'create'},{name: 'Search card', id: 'search'}];

  $scope.menuSelected = function menuSelected(item){
      $scope.selected.menu = item.id
      $scope.selectedTemplate = 'template/' + item.id + '.html';
  };

}]);
