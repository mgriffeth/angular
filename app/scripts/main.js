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
