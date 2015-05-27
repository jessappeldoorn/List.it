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

   $stateProvider.state('history', {
     url: '/history',
     controller: 'History.controller',
     templateUrl: '/templates/history.html'
   });

 }]);

// add a controller
app.controller('Home.controller', ['$scope', '$firebaseArray', function($scope, $firebaseArray){
  var ref = new Firebase("https://justblocitoff.firebaseio.com/tasks");
// create a synchronized (psuedo read-only) array
// all server changes are downloaded in realtime
  $scope.tasks = $firebaseArray(ref);
  

  $scope.addTask = function() { // add task to list
    var newTask = {
      text: $scope.newTaskText,
      done: false,
      expired: false,
      created: new Date()

    };

    $scope.tasks.$add(newTask); // Push into array
    $scope.tasks.$save();
    $scope.newTaskText = " ";
    console.log("added new task");
  };

  $scope.completeTask = function(task) { // remove completed task from list
    var completedTask = {
      text: $scope.tasks[task].text,
      done: true,
      expired: false,
      created: new Date()
    };

    $scope.tasks.$add(completedTask);
    $scope.tasks.$save();
    $scope.tasks.$remove(task);

    console.log("did something");
  
  };



    $scope.deleteTask = function(task){
    $scope.tasks.$remove(task);
    $scope.tasks[task].done = true;
};

  $scope.expiredTask = function() {

  };

}]);

app.controller('History.controller', ['$scope', '$firebaseArray', function($scope, $firebaseArray) {
  var ref = new Firebase("https://justblocitoff.firebaseio.com/tasks");
// create a synchronized (psuedo read-only) array
// all server changes are downloaded in realtime
  $scope.tasks = $firebaseArray(ref);


  $scope.completeTask = function(task) {
    $scope.tasks.$remove(task);
  };

}]);






},{}]},{},[1]);