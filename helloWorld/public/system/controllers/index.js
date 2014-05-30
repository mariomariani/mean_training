'use strict';

angular.module('mean.system').controller('IndexController', ['$scope', '$http', '$location', 'Global', 
	function ($scope, $http, $location, Global) {
    $scope.global = Global;

    // This object will be filled by the form
            $scope.user = {};


            $scope.register = function() {
                $scope.usernameError = null;
                $scope.registerError = null;
                $http.post('/save_event', {
                    email: $scope.user.email,
                    // Event date
                    username: $scope.user.username,
                    name: $scope.user.name
                })
                    .success(function() {
                        // authentication OK
                        $scope.registerError = 0;
                        $location.url('/');
                    })
                    .error(function(error) {
                        // Error: authentication failed
                        if (error === 'Username already taken') {
                            $scope.usernameError = error;
                        } else {
                            $scope.registerError = error;
                        }
                    });
            };

}]);