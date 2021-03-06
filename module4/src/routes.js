//IIFE
(function(){
  'use strict'

  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');


    $stateProvider
    .state('home', {
      url: '/',
      //template: '<div><h2>Home PAge</h2></div>'
      templateUrl: 'src/template/home.template.html'
    })
    .state('mainList', {
      url: '/main-list',
      //template: '<div><h2>main-list PAge</h2></div>'
      templateUrl: 'src/template/main-list.template.html',
      controller: 'MainListController as mainList',
      //resolve
      resolve: {
        items: ['$rootScope','MenuDataService', function ($rootScope, MenuDataService) {
          //console.log("data resolved");
          var obj = $rootScope.$broadcast('shoppinglist:processing', {on: true});
          console.log("ON:", obj);
          return MenuDataService.getAllCategories();
        }]
      }

    })
    /*
    .state('mainList.itemDetail', {
      templateUrl: 'src/template/item-details-comp.template.html',
      controller: 'ItemDetailController as itemDetail',
      params: {
        itemId: null
      },
      resolve: {
            items: ['$stateParams', 'MenuDataService',
                  function ($stateParams, MenuDataService) {
                    console.log($stateParams.itemId);
                    return MenuDataService.getItemsForCategory($stateParams.itemId);
                  }]
          }
    })
    */
    .state('itemDisp', {
      url: '/itemDisp/{itemId}',
      templateUrl: 'src/template/item-details-comp.template.html',
      controller: 'ItemDetailController as itemDetail',
      resolve: {
            items: ['$rootScope', '$stateParams', 'MenuDataService',
                  function ($rootScope, $stateParams, MenuDataService) {
                    //console.log($stateParams.itemId);
                    $rootScope.$broadcast('shoppinglist:processing', {on: true});
                    
                    return MenuDataService.getItemsForCategory($stateParams.itemId);
                  }]
          }

    });

  }
})();
