(function()
{
  "use strict";

  var IndexPageController = function($scope, $location) //alle params hier ook beneden schrijven
  {
    $scope.$on('$locationChangeStart', function(event, next, current)
    {
      var title = $location.path().substr(1);
      $scope.title = title.capitalizeFirstLetter();

      $scope.showHomeHeader = false;
      $scope.classHeader = "header-other";

      if($location.path() === "/home")
      {
        $scope.showHomeHeader = true;
        $scope.classHeader = "header-home";
      }
    });
  };

  String.prototype.capitalizeFirstLetter = function()
  {
    return this.charAt(0).toUpperCase() + this.slice(1);
  };

  angular.module("app").controller("IndexPageController", ["$scope", "$location", IndexPageController]); //$http is een get/post/put/delete uit te voeren, om de zoveel tijd iets ophalen

})();
