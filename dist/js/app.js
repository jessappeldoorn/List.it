(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
blocitoff.controller('home.controller', ['$scope', '$firebaseArray', function($scope, $firebaseArray) {
  var ref = new Firebase("https://justblocitoff.firebaseio.com/tasks");

  $scope.tasks = $firebaseArray(ref);


 //var sync = $firebase(ref);

 // create a synchronized (psuedo read-only) array
// all server changes are downloaded in realtime
//var tasksArray = sync.$asArray();

// place it in the scope for use in the DOM
$scope.tasks = tasksArray;

var tasks = sync.$asArray();


  $scope.testAdd = function(){
    tasks.$add({note: 'finish user story 1'});
    tasks.$add({note: 'grocery shopping'});
    tasks.$add({note: 'clean bedroom'});
};

}]);

/*blocitoff.controller('home.controller', ['$scope', '$firebaseArray', function($scope, $firebaseArray) {
  var ref = new Firebase("https://justblocitoff.firebaseio.com/");
  $scope.tasks = $firebaseArray(ref);

  // var thing = 'whatever';
 // $scope.task.$add(thing);

  $scope.testAdd = function(){
    $scope.tasks.$add({note: 'checkpoint'});
    $scope.tasks.$add({note: 'goodbye'});
}

}]);*/




},{}]},{},[1]);