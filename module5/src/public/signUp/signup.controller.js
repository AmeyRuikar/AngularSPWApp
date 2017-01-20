//IIFE
(function () {
"use strict";

angular.module('public')
.controller('signUpController', signUpController);

signUpController.$inject = ['MenuService', 'PrefService'];
function signUpController(MenuService, PrefService) {
  var $ctrl = this;
  $ctrl.error = false;
  $ctrl.errorFlag = false;
  $ctrl.doneFlag = false;

  $ctrl.checkCategory = function(){
    console.log("checking category now...", $ctrl.item);

    MenuService.checkItem($ctrl.item).then(function(response){
      console.log(response);

      if(!response.data.error){
        console.log("success");
          $ctrl.doneFlag = true;
          $ctrl.errorFlag = false;
          PrefService.setObject({fname: $ctrl.fname, lname: $ctrl.lname,contact: $ctrl.contact,email:$ctrl.email,favItem: $ctrl.item });
      }
      else{
        console.log("failed");
        $ctrl.doneFlag = false;
        $ctrl.errorFlag = true;
      }


    });


  }

}


})();
