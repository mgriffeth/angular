(function(){
  angular.module('CharacterList')
  .controller('AddCharController',
  ['$scope','$http','appUrl', '$location', function($scope, $http, appUrl,  $location){

    $scope.character = {};

    $scope.charAdd = function(){

        $http.post(appUrl, $scope.character).success(function(data){
          $location.path('/');

      });
    };
  }]);
}());
