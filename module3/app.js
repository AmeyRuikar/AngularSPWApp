//IIFE
(function(){
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', foundItemsDirective);


function  foundItemsDirective(){
  var ddo = {
    templateUrl: 'list.html',
    scope: {
      foundItem: '<',
      onRemove: '&'
    },
    controller: foundItemsDirectiveController,
    controllerAs: 'Narrow',
    bindToController: true
  };

  return  ddo;
}

function foundItemsDirectiveController(){
  var narrow = this;
}



NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService){
  var NarrowMenu = this;
  NarrowMenu.shortListed = [];
  NarrowMenu.flag = 0;

  NarrowMenu.NarrowDown = function(){
    console.log("check for: ", NarrowMenu.ip);
    if(NarrowMenu.ip == ""){
      NarrowMenu.shortListed = [];
      NarrowMenu.flag = 1;
      return;
    }

    var promise = MenuSearchService.getMatchedMenuItems(NarrowMenu.ip);

    promise.then(function (response) {
      //menu.categories = response.data;
      //attach to some list
      console.log(response);
      if(response.length == 0){
        NarrowMenu.flag = 1;
      }
      else{
        NarrowMenu.flag = 0;
      }
      NarrowMenu.shortListed = response;

    })
    .catch(function (error) {
      console.log("Something went terribly wrong.");
    });

  }

  NarrowMenu.removeItem = function(ind){

    NarrowMenu.shortListed.splice(ind, 1);
  }


}

MenuSearchService.$inject = ['$http'];
function MenuSearchService($http){

  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    var response = $http({
      method: "GET",
      url: "https://davids-restaurant.herokuapp.com/menu_items.json"
    }).then(function(result){
      //console.log(result.data);

      var foundItems = [];
      for(var item in result.data["menu_items"]){
        if(result.data["menu_items"][item]['description'].toLowerCase().indexOf(searchTerm) !== -1){
          foundItems.push(result.data["menu_items"][item]);
        }
      }
      return foundItems;

    });

    return response;
  };

}

})();
