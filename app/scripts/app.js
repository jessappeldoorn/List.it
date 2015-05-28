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

// home controller
app.controller('Home.controller', ['$scope', '$firebaseArray', '$interval', '$timeout', function($scope, $firebaseArray, $interval, $timeout){
  var ref = new Firebase("https://justlistit.firebaseio.com");

// create a synchronized (psuedo read-only) array
  $scope.tasks = $firebaseArray(ref);
  
  $scope.addTask = function() { // add task to list
    var today = new Date();
    var newTask = {
      text: $scope.newTaskText,
      done: false,
      expired: false,
      created: today.getDay()
    };

    $scope.tasks.$add(newTask); // Push into array
    $scope.newTaskText = " ";

    $timeout( function(){ $scope.expiredTask(); }, 5000);
  };

    /*$interval(function(){
      $scope.tasks.$add({
      done: true
      });
      $scope.tasks.$save();
      },3000);
        };*/

  $scope.completeTask = function(task) { // remove completed task from list
    task.done = true;
    $scope.tasks.$save(task);
  };
 
  $scope.deleteTask = function(task){
    $scope.tasks.$remove(task);
  };

  $scope.expiredTask = function(task) {
     task.expired = true;
     $scope.tasks.$save(task);
  };


     // $scope.tasks.$save();
      //$interval( function(){ $scope.expiredTask(); }, 3000);
      //};
      //console.log("$scope.addTask - Interval occurred");
  

     // $scope.callAtTimeout = function() {
     // $scope.tasks.$add({
       // expired: true
       //console.log("this function sucks");
     //};
     // });
   //   $scope.tasks.$save();

     //   console.log("$scope.callAtTimeout - Timeout occurred");
          //  $timeout( function(){ $scope.callAtTimeout(); }, 3000);

    //  $timeout( function(){ $scope.callAtTimeout(); }, 3000);


   // };

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





