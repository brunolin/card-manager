angular.module('brnApp').controller('createCtrl', ['$scope', 'Upload', '$timeout',
 function ($scope, Upload, $timeout){

   $scope.card = {};
   $scope.uploadCard = function(file, card) {
     console.log(file);
     console.log(card);
     if (file) {
       file.upload = Upload.upload({
         url: '../img/savedFiles/',
         data: {file: file, card: card}
       });

       file.upload.then(function (resp) {
         file.result = resp.data;
       });
      }
   };

   $scope.clear = function clear(){
     $scope.card = null;
     $scope.picFile = null;
   }
}]);
