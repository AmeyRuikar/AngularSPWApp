//IIFE
(function(){
  'use strict';

  var toBuyList = [
    {name: 'chips', quantity: 4},
    {name: 'salsa', quantity: 2},
    {name: 'cake', quantity: 3},
    {name: 'soda', quantity: 4},
    {name: 'soup', quantity: 6}
  ];

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ["ShoppingListCheckOffService"];
  function ToBuyController(ShoppingListCheckOffService){
    var obj = this;
    obj.toBuyObjects = ShoppingListCheckOffService.toBuyList;

    obj.moveItem = function(index){
      ShoppingListCheckOffService.moveToPurchasedList(index);
    }

  }

  AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"];
  function AlreadyBoughtController(ShoppingListCheckOffService){
    var obj = this;
    obj.purchased = ShoppingListCheckOffService.purchasedList;

  }

  function ShoppingListCheckOffService(){
    var service = this;
    service.toBuyList = toBuyList;
    service.purchasedList = [];

    service.moveToPurchasedList = function(index){
      var temp = {};
      temp = service.toBuyList[index];
      service.toBuyList.splice(index, 1);
      service.purchasedList.push(temp);
    };

    //move
    //remove
  }




})();
