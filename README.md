List.It
=================

List-It uses the Firebase API and AngularJS to create a single-page app that lists tasks with an expiration date.

## Use Case

To-do lists are notorious for collecting junk - tasks that you want to remember but constantly reprioritize. To solve the problem of to-do list clutter, I built List.It, a project I implemented while studying through the web development bootcamp, Bloc, Inc. List.It is a web application that manages your to-do lists by automatically deleting tasks that have not been completed after seven days.

Ff the task is not important enough to be completed within seven days, it does not belong on your to-do list.

## User Story Breakdown

| User Story | Description
| :-------: | :--------------: |
| **As a user, I want my tasks synced with a persistent backend** | Synchronize Data (an Array of Tasks) With Firebase |
| **As a user, I want to see my active tasks in a list as my default view** | Configure ui-router and controller to handle views and display tasks in a list using ngRepeat |
| **As a user, I want completed tasks and tasks older than seven days hidden from my main task views automatically** | Use ngHide or ngShow to keep the logic out of the controller and view |
| **As a user, I want expired and completed tasks presented in a separate view** | Create a separate state, template, controller and register them with your ui-router-driven routes. |
| **As a user, I want to submit new tasks with a description, priority level and three states: expired, completed or active** | Create an input with an ngModel tied to a $scope model at the top of the list. Allow the user to save the task by clicking a button or link. Use a <select> dropdown to hold all of the priority levels and choose one before submitting the task.  Use a $scope method to call the $add() method on the array to sync the task with Firebase and refresh. |
| **As a user, I want to mark tasks as complete** | Add a button or link inline with the task item. Include the trigger within the ngRepeat block so it will be scoped to the clicked item. |

## Grunt

This project base uses [Grunt](http://gruntjs.com/) to serve, build and watch project files in development. 

## Directory structure and Grunt

```
app/
 |__pages/
 |   |__index.html
 |__sass/
 |   |__styles.scss
 |__scripts/
 |   |__app.js
 |__templates/
 |   |__home.html
```

#### Browserify

[Browserify](http://browserify.org/) allows you to access Node modules included a given JS file while in the browser.

#### Sass

[Grunt Sass](https://github.com/gruntjs/grunt-contrib-sass) for compiling Sass into CSS.

#### Watch

[Grunt watch](https://github.com/gruntjs/grunt-contrib-watch) watches an array of files for changes and then executes Grunt tasks when a change is detected. Watch is useful for tasks like continuous unit testing (every time you save a file, that new file is tested), refreshing your browser automatically when changes are reflected, or compiling preprocessing languages like Sass or Jade into CSS or HTML.

#### Copy

[Grunt copy](https://github.com/gruntjs/grunt-contrib-copy) allows you to copy files from development folders like images, fonts or other static assets and put them in the folder that will be served on the frontend of your application.

#### Clean

[Grunt clean](https://github.com/gruntjs/grunt-contrib-clean) "cleans" or removes all files in your destination folder (the folder where you'll put your officially served content for your application) so that logic in your stylesheets, templates or scripts isn't accidentally overridden by previous code in the directory.

#### Hapi

[Grunt Hapi](https://github.com/athieriot/grunt-hapi) is a task that runs a server using [`HapiJS`](http://hapijs.com/). Happy is a Node Web Application framework with robust configuration options. Using Hapi allows us to use Angular for our application routing instead of relying on a backend to handle template requests.
