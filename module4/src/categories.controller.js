//IIFE
(function(){
  'use strict';

  angular.module('MenuApp')
  .controller('MainListController', MainListController);

  MainListController.$inject = ['MenuDataService', 'items']
  function MainListController(MenuDataService, items){
    var controller = this;
    console.log("controller");
    console.log(items);
    controller.items = items

  }

})();
