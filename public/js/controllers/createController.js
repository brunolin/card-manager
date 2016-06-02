angular.module('brnApp').controller('createCtrl', ['$scope', 'Upload', '$http',
 function ($scope, Upload, $http){

   $scope.card = {};
   $scope.uploadCard = function(file, card) {
    //  console.log(file);
    //  console.log(card);
    //$http.post('/r/upload', {file: file, card: card}).then(function(resp){console.log(resp);});
    if (file) {
      file.upload = Upload.upload({
        url: '/r/upload',
        data: card,
        file: file
      });
     }
    };

   $scope.clear = function clear(){
     $scope.card = null;
     $scope.picFile = null;
   };
}]);
