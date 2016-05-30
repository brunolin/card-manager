angular.module('brnApp').controller('createCtrl', ['$scope', 'Upload', '$http',
 function ($scope, Upload, $http){

   $scope.card = {};
   $scope.uploadCard = function(file, card) {
    //  console.log(file);
    //  console.log(card);
     $http.post('/r/upload', {file: file, card: card}).then(function(resp){console.log(resp);});
    //  if (file) {
    //    file.upload = Upload.upload({
    //      url: '../img/savedFiles/',
    //      data: {file: file, card: card}
    //    });
     //
    //    file.upload.then(function (resp) {
    //      file.result = resp.data;
    //    });
    //   }
   };

   $scope.clear = function clear(){
     $scope.card = null;
     $scope.picFile = null;
   };

   $scope.consulta = function consulta() {
     $http.get('/r/search').then(function (resp){
       console.log(resp.data);
     });
   };
}]);
