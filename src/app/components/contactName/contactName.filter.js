(function(){
    angular.module('angularGulpDemos.filters').filter('contactName', function(){
        return function(input){
            return input.firstName + ' ' + input.surname;
        }
    })    
})();