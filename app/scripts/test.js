$scope.priorityLevel = 'low';

  $scope.addTask = function() { // adding a method to the scope
    $scope.tasks.$add({
      text: $scope.newTaskText,
      created: new Date(),
      done: false,
      expired: false
    });
    $scope.newTaskText = " ";
  };


  $scope.completeTask = function(task) {
    var completedTask = {
      done: true,
      text: $scope.tasks[task],
      created: new Date(),
      expired: false
    }

    $scope.tasks.$add(completedTask);
    $scope.tasks.$save();
    $scope.tasks.$remove(task);
  }

  $scope.deleteTask = function(task) {
    $scope.tasks.$remove(task);
  }

  $scope.destroyTask = function() {
    for(var i=0; i < $scope.tasks.length; i++) {
      var taskAge = moment().diff(moment($scope.tasks[i].timestamp, "MMM Do, hh:mmA"), "minutes");
        if ((taskAge > 7) & !$scope.tasks[i].complete) {
          var newDestroyedTask = {
            done: false,
            name: $scope.tasks[i].text,
            priority: $scope.tasks[i].priority,
            timestamp: $scope.tasks[i].timestamp,
            destructed: true
          }

          $scope.tasks.$add(newDestroyedTask);
          $scope.tasks.$save();
          $scope.tasks.$remove(i);
        }
    }
  }
$scope.destroyTask();