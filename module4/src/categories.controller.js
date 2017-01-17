//IIFE
(function(){
  'use strict';

  angular.module('MenuApp')
  .controller('MainListController', MainListController);

  MainListController.$inject = ['$rootScope','MenuDataService', 'items']
  function MainListController($rootScope, MenuDataService, items){
    var controller = this;
    //console.log("controller");
    //console.log(items);
    controller.items = items;
    var obj = $rootScope.$broadcast('shoppinglist:processing', { on: false });
    console.log("OFF:", obj);


  }

})();
