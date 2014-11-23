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
