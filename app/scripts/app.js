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
app.controller('Home.controller', ['$scope', '$firebaseArray', function($scope, $firebaseArray) {
  var ref = new Firebase("https://justblocitoff.firebaseio.com/tasks");
// create a synchronized (psuedo read-only) array
// all server changes are downloaded in realtime
  $scope.tasks = $firebaseArray(ref);

  $scope.addTask = function() {
    $scope.tasks.$add({
      done: false,
      text: $scope.newTaskText,
      destructed: false,
    });
    $scope.newTaskText = " ";
  };

  $scope.deleteTask = function(task){
    $scope.tasks.$remove(task)
}

  //$scope.completedTask = function() {
    //$scope.tasks = false;
  //};

// ADD TO FIREBASE

/*  $scope.testAdd = function(){
    $scope.tasks.$add({ note: 'finish user story 1'});
    $scope.tasks.$add({ note: 'grocery shopping'});
    $scope.tasks.$add({ note: 'clean bedroom'});
	};*/

  app.directive()
}]);

app.controller('History.controller', ['$scope', '$firebaseArray', function($scope, $firebaseArray) {
  var ref = new Firebase("https://justblocitoff.firebaseio.com/tasks");
// create a synchronized (psuedo read-only) array
// all server changes are downloaded in realtime
  $scope.tasks = $firebaseArray(ref);


  $scope.completeTask = function(task) {
    $scope.tasks.$remove(task)
}

// ADD TO FIREBASE

/*  $scope.testAdd = function(){
    $scope.tasks.$add({ note: 'finish user story 1'});
    $scope.tasks.$add({ note: 'grocery shopping'});
    $scope.tasks.$add({ note: 'clean bedroom'});
  };*/
}]);





