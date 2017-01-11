//IIFE
(function(){

  angular.module('MenuApp')
  .component('foodItems', {
    templateUrl: 'src/template/item-details.template.html',
    bindings: {
      items: '<'
    }
  });

})();
