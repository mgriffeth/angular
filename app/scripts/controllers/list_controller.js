(function(){
  angular.module('CharacterList' )

  .controller('CharListController',
  ['$scope','$http', '$location','appUrl', function($scope, $http, $location, appUrl){

    $http.get(appUrl).success( function (results){
      $scope.characters = results;
    });

  

    $scope.showEdit = function(x){
      console.log(x);
      $location.path('edit/' + x);
    }


  }]);
}());
