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



