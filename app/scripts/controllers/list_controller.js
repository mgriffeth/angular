(function(){
  angular.module('CharacterList' )

  .controller('CharListController',
  ['$scope','$http', '$location','appUrl', function($scope, $http, $location, appUrl){

    $http.get(appUrl).success( function (results){
      $scope.characters = results;
    });

    $scope.charDelete = function(x){
      console.log(x);
      $http.delete(appUrl + x).success(function(){
        $location.path('/');
      });
    }

    $scope.showEdit = function(x){
      console.log(x);
      $location.path('edit/' + x);
    }


  }]);
}());
