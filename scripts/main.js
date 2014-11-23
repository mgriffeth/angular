(function(){


 angular.module('CharacterList', ['ngRoute'])
 .constant ({
   'appUrl': 'http://tiy-atl-fe-server.herokuapp.com/collections/ngmcg/'
 })

 .config( function ($routeProvider){

   $routeProvider.when('/',{
     templateUrl:'templates/list-temp.html',
     controller: 'CharListController'
   }),
   $routeProvider.when('/add', {
     templateUrl:'templates/add-temp.html',
     controller: 'AddCharController'
   }),
   $routeProvider.when('/edit/:charId',{
     templateUrl:'templates/edit-temp.html',
     controller: 'CharEditController'
   })
 });

//   $scope.characters = [
//     {
//       name:'Conan',
//       class:'barbarian',
//       type: 'fighter',
//       available: true
//     },
//     {
//       name:'Gandalf',
//       class:'wizard',
//       type: 'mage',
//       available: false
//     },
//     {
//       name:'Pik',
//       class:'theif',
//       type: 'stealth',
//       available: true
//     }
//   ];
//
//   $scope.choose = function (x, y){
//     alert("You've chosen " + x + " the " + y);
//   }
//
//
// })
}());

(function(){

  angular.module('CharacterList')
    .factory('charFactory',['appUrl','$scope',function(appUrl,$scope){

      function getChars(){
        $http.get(appUrl);
        };





        return{
          getChar:getChar
        };
    }]);
}());

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
