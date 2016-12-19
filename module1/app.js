//IIFE
(function(){

  angular.module("LunchCheck", [])
  .controller('LunchCheckController', LunchCheckController);

  //minification
  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope){
    $scope.foodItems = "";
    $scope.resultState = "";

    // var items = $scope.foodItems;

    $scope.checkStatus = function(){

      var currentStr = $scope.foodItems;

      if(currentStr == ""){
        $scope.resultState = "Please enter data first";
        return;
      }

      var items = [];
      items = currentStr.split(',');

      if(items.length != 0){
        if(items.length <= 3){
          $scope.resultState = "Enjoy!";
        }
        else{
            $scope.resultState = "Too Much!";
        }
      }
      else{
          $scope.resultState = "Enjoy!";
      }

    }

  }
})();
