(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// add angular module
// inject firebase
var app = angular.module("Blocitoff", ["firebase", "ui.router"]);

 app.config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider) {
   $locationProvider.html5Mode(true);
 
   $stateProvider.state('home', {
     url: '/',
     controller: 'Main.controller',
     templateUrl: '/templates/home.html'
   });

   $stateProvider.state('history', {
     url: '/history',
     controller: 'Main.controller',
     templateUrl: '/templates/history.html'
   });

   $stateProvider.state('profile', {
     url: '/profile',
     controller: 'Profile.controller',
     templateUrl: '/templates/profile.html'
   });

 }]);

// home controller
app.controller('Main.controller', ['$scope', '$firebaseArray', '$interval', '$timeout', function($scope, $firebaseArray, $interval, $timeout){
  var ref = new Firebase("https://justlistit.firebaseio.com");

// create a synchronized (psuedo read-only) array
  $scope.tasks = $firebaseArray(ref);
  var fireTime = Firebase.ServerValue.TIMESTAMP;
  $scope.priorityLevel = ['High', 'Low'];
  $scope.priority = "Priority";
  
  $scope.addTask = function() { // add task to list
    var newTask = {
      text: $scope.newTaskText,
      done: false,
      expired: false,
      created: fireTime,
      priority: $scope.priority
    };

    $scope.tasks.$add(newTask); // Push into array
    $scope.newTaskText = "";
    $scope.priority = "Priority";
  };

  $scope.completeTask = function(task) { // remove completed task from list
    task.done = true;
    $scope.tasks.$save(task);
  };
 
  $scope.deleteTask = function(task){
    $scope.tasks.$remove(task);
  };

  $scope.expiredTask = function() {
    console.log("Called expiredTask!");
    $scope.tasks.forEach(function(task){
      var createdAt = task.created,
      currentTime = new Date().getTime(),
      expiredTime = 604800000;

      if( currentTime - createdAt > expiredTime ){
        console.log("Expire this task " + task);
        task.expired = true;
        $scope.tasks.$save(task);
      }
      else {
      console.log("Did not expire " + task);  
      }
    });
  }

  $interval( function(){ $scope.expiredTask(); }, 86400000);

  $scope.setPriority = function(priority) {
    $scope.priority = priority;
  };

  $scope.highPriority = function(task) {
    if (task.priority === "High") {
      return true;
    } else {
      return false;
    }
  };

  $scope.setNewPriority = function(task) {
    task.priority = "High";
    $scope.tasks.$save(task);
  }


}]);

app.controller('Profile.controller', ['$scope', '$firebaseArray', function($scope, $firebaseArray) {
  var ref = new Firebase("https://justlistit.firebaseio.com");
// create a synchronized (psuedo read-only) array
// all server changes are downloaded in realtime
  $scope.user = $firebaseArray(ref);


  $scope.addUser = function() {
    var newUser = {
      name: $scope.newUserName,
      email: $scope.newUserEmail,
      city: $scope.newUserCity,
      state: $scope.newUserState,
      country: $scope.newUserCountry,
      password: $scope.newUserPassword
    };

    $scope.user.$add(newUser); // Push into array
    $scope.newUserName = "";
  };

}]);






},{}]},{},[1]);