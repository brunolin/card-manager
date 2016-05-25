angular.module('brnApp', ['ngFileUpload']).controller('brnCtrl', ['$scope', function($scope){

  $scope.selected = {};
  $scope.menu = [{name: 'Cadastrar', id: 'create'},{name: 'Consultar', id: 'search'}];

  $scope.menuSelected = function menuSelected(item){
      $scope.selected.menu = item.id
      $scope.selectedTemplate = 'template/' + item.id + '.html';
  };

}]);
