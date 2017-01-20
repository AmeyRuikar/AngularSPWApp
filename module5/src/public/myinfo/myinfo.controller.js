//IIFE
(function(){
'use strict';

  angular.module('public')
  .controller('myInfoController', myInfoController);

  myInfoController.$inject = ['PrefService', 'MenuService'];

  function myInfoController(PrefService, MenuService){
      var $ctrl = this;
      var obj;

      if(PrefService.getObject() != undefined){

          $ctrl.obj = PrefService.getObject();
          MenuService.checkItem($ctrl.obj.favItem).then(function(repsone){
            $ctrl.moreInfo = repsone.data;
            $ctrl.signedup = true;
          });
          //console.log("Pref", obj);

      }
      else{
        $ctrl.signedup = false;
      }


  }
})();
