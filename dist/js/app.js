(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// add angular module
// inject firebase
var app = angular.module("Blocitoff", ["firebase", "ui.router"]);

 app.config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider) {
   $locationProvider.html5Mode(true);
 
   $stateProvider.state('home', {
     url: '/',
     controller: 'Home.controller',
     templateUrl: '/templates/home.html'
   });
 }]);
// add a controller
app.controller('Home.controller', ['$scope', '$firebaseArray', function($scope, $firebaseArray) {
  var ref = new Firebase("https://justblocitoff.firebaseio.com/tasks");
// create a synchronized (psuedo read-only) array
// all server changes are downloaded in realtime
  $scope.tasks = $firebaseArray(ref);

  $scope.addTask = function() {
    $scope.tasks.$add({
      text: $scope.newTaskText
    });
  };

// ADD TO FIREBASE

  $scope.testAdd = function(){
    $scope.tasks.$add({ note: 'finish user story 1'});
    $scope.tasks.$add({ note: 'grocery shopping'});
    $scope.tasks.$add({ note: 'clean bedroom'});
	};
}]);




},{}]},{},[1]);