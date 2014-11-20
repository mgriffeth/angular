(function(){
  angular.module('CharacterList').controller('CharEditController',
  ['$scope','$http','appUrl','$location','$routeParams',function($scope, $http, appUrl, $location, $routeParams){

  $http.get(appUrl + $routeParams.charId).success(function(data){
    console.log(data);
    $scope.character = data;
  })

  $scope.charEdit = function(character){
    console.log(character._id)
    $http.put(appUrl + character._id, $scope.character).success(function(data){
      console.log(data);
      $location.path('/');
    })
  }

  }]);
}());
