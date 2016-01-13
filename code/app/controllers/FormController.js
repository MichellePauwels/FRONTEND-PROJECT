(function ()
{
    var FormController = function($scope, $http)
    {
        $scope.submitForm = function()
        {
            if ($scope.contactForm.$valid)
            {
                emailjs.send("gmail","default",{name: $scope.name, email_from: $scope.email, content: $scope.question})
                    .then(function(response) {
                        console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
                        window.location = "#thankyou";
                    }, function(err) {
                        console.log("FAILED. error=", err);
                        window.location = "#error";
                    });
            }

        };
    };

    angular.module("app").controller("FormController", ["$scope", "$http", FormController]);

})();