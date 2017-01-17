//IIFE
(function(){
  'use strict';

  angular.module('data')
  .service('MenuDataService', MenuDataService);

  MenuDataService.$inject = ['$rootScope','$http'];
  function MenuDataService($rootScope, $http){
    var service = this;

    service.getAllCategories = function(){
      //$rootScope.$broadcast('shoppinglist:processing', {on: true});
      var response = $http({
      method: "GET",
      url: "https://davids-restaurant.herokuapp.com/categories.json"

      }).then(function(result){

      //console.log(result.data);
      return result.data;
    });

      return response;
    };

    service.getItemsForCategory = function(categoryShortName){
      //$rootScope.$broadcast('shoppinglist:processing', {on: true});
      var response = $http({
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/menu_items.json?category=" + categoryShortName)

      }).then(function(result){

        //console.log(result.data);
        return result.data;
      });

      return response;
    };
  }

})();
