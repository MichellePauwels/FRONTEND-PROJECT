(function()
{
  "use strict";

  var app = angular.module("app", ["ngRoute"]);

  app.config(function($routeProvider) //$ toont aan dat het een angular var is
    {
      $routeProvider.when("/home",
                    {
                      templateUrl: "pages/home.html",
                      controller: "IndexPageController"
                    })
                    .when("/about",
                    {
                        templateUrl: "pages/about.html"
                        //controller: "imagesDetailsController"
                    })
                    .when("/products",
                    {
                      templateUrl: "pages/products.html"
                    })
                    .when("/contact",
                    {
                      templateUrl: "pages/contact.html"
                    })
                    .otherwise(
                    {
                      redirectTo: "/home"
                    });
    });

})();
