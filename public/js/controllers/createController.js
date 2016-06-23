angular.module('brnApp').controller('createCtrl', ['$scope', 'Upload', '$http', 'alertify',
 function ($scope, Upload, $http, alertify){

   $scope.card = {};
   $scope.loading = false;

   $scope.uploadCard = function(file, card) {

    if (file) {
      $scope.loading = true;
      file.upload = Upload.upload({
        url: '/r/upload',
        data: card,
        file: file
      }).then(function(resp){
        $scope.loading = false;
        alertify.success('Sucesso');
      }, function(err){
        alertify.error('Deu ruim');
      });
     }
    };

   $scope.clear = function clear(){
     $scope.card = null;
     $scope.picFile = null;
   };
}]);
