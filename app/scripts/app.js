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
app.controller('Home.controller', ['$scope', '$firebaseArray', '$interval', function($scope, $firebaseArray, $interval){
  var ref = new Firebase("https://justblocitoff.firebaseio.com/tasks");
// create a synchronized (psuedo read-only) array
// all server changes are downloaded in realtime
  $scope.tasks = $firebaseArray(ref);
  

  $scope.addTask = function(task) { // add task to list
    $scope.tasks.$add({
      text: $scope.newTaskText,
      done: false,
      expired: false,
      created: new Date(),
    });

    $scope.tasks.$add(); // Push into array
    $scope.newTaskText = " ";
   // console.log("added new task");
  };

  $scope.completeTask = function(task) { // remove completed task from list
    $scope.tasks.$add({ 
      done: true 
    });
    $scope.tasks.$save();

    console.log("did something");
  
  };
    $scope.deleteTask = function(task){
    $scope.tasks.$remove(task);
};

  $scope.expiredTask = function(task) {
    //if(task.created )
      $scope.tasks.$add({
      expired: true
    });

      $scope.tasks.$save();
      };
      console.log("$scope.expiredTask - Interval occurred");
  

    //$interval( function(){ $scope.expiredTask(); }, 3000);



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





