var angular = require('angular');

var App = angular.module('App', []).controller('mainCtrl', ['$scope', function($scope){
    $scope.title = "myApp"; 
}]);

require('./chatApp.js');
require('./chatInput.js');
require('./chatBubble.js');
