//IIFE
(function(){
'use strict';

angular.module('common')
.service('PrefService', PrefService);

function PrefService(){

  var object;
  var service = this;

  service.setObject = function(obj){
    object = obj;
    console.log(object);
    return;
  }

  service.getObject = function(){
    return object;
  }
}

})();
