// add angular module
// inject firebase
blocitoff = angular.module('Blocitoff', ["firebase", "ui.router"]);

 blocitoff.config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider) {
   $locationProvider.html5Mode(true);
 
   $stateProvider.state('home', {
     url: '/',
     controller: 'home.controller',
     templateUrl: '/templates/home.html'
   });
 }]);
// add a controller
 blocitoff.controller('home.controller', ['$scope', function($scope) {

 }]);





