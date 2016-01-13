(function()
{
  "use strict";

  var app = angular.module("app", ["ngRoute"]);

  app.config(function($routeProvider)
    {
      $routeProvider.when("/home",
                    {
                      templateUrl: "pages/home.html",
                      controller: "IndexPageController"
                    })
                    .when("/about",
                    {
                        templateUrl: "pages/about.html"
                    })
                    .when("/products",
                    {
                      templateUrl: "pages/products.html"
                    })
                    .when("/contact",
                    {
                      templateUrl: "pages/contact.html",
                        controller: "FormController"
                    })
                      .when("/thankyou",
                      {
                          templateUrl: "pages/thankyou.html",
                          controller: "FormController"
                      })
                    .otherwise(
                    {
                      redirectTo: "/home"
                    });
    });

})();
