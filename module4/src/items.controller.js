//IIFE
(function(){
  'use strict';

  angular.module('MenuApp')
  .controller('ItemDetailController', ItemDetailController);

  ItemDetailController.$inject = ['$rootScope','MenuDataService', 'items']
  function ItemDetailController($rootScope,MenuDataService, items){
    var controller = this;
    console.log("controller items");
    //console.log(items);
    controller.category = items['category']['name'];
    controller.items = items["menu_items"];
    $rootScope.$broadcast('shoppinglist:processing', { on: false });
  }

})();
