List.It
=================

List-It uses the Firebase API and AngularJS to create a single-page app that lists tasks with an expiration date.

## Use Case

To-do lists are notorious for collecting junk - tasks that you want to remember but constantly reprioritize. To solve the problem of to-do list clutter, you will build Blocitoff. Blocitoff is a web application that will manage your to-do lists by automatically deleting tasks that have not been completed after seven days.

Our hypothesis is that if the task is not important enough to be completed within seven days, it does not belong on your to-do list.

## User Story Breakdown

| User Story | Description
| :-------: | :--------------: |
| **As a user, I want my tasks synced with a persistent backend** | Synchronize Data (an Array of Tasks) With Firebase |
| **Creating a New Game Project** | Create a basic 2d game project as provided by Xcode |
| **Adding Assets** | [`02-adding-assets.md`](https://github.com/Bloc/swiftris-checkpoints/blob/master/02-adding-assets.md) | Import the assets required for Swiftrs: images, sounds, icons |
| **And Array We Go** | [`03-array-we-go.md`](https://github.com/Bloc/swiftris-checkpoints/blob/master/03-array-we-go.md) | Create the custom 2D array class which will maintain Swiftris' game board |
| **A Ticking Clock** | [`04-a-ticking-clock.md`](https://github.com/Bloc/swiftris-checkpoints/blob/master/04-a-ticking-clock.md) | Add the logic for tracking the time between each of the shape's descents |
| **Block Party** | [`05-block-party.md`](https://github.com/Bloc/swiftris-checkpoints/blob/master/05-block-party.md) | Build the class which will represent each individual square block on the board |
| **Shaping Up** | [`06-shaping-up.md`](https://github.com/Bloc/swiftris-checkpoints/blob/master/06-shaping-up.md) | Create the class responsible for arranging blocks into Tetromino shapes |
| **Let Them Fall** | [`07-let-them-fall.md`](https://github.com/Bloc/swiftris-checkpoints/blob/master/07-let-them-fall.md) | Add the logic required to support the descent of an active Shape object |
| **Playing by the Rules** | [`08-playing-by-the-rules.md`](https://github.com/Bloc/swiftris-checkpoints/blob/master/08-playing-by-the-rules.md) | Introduce a significant portion of Swiftris' game logic |
| **Touch Me, Move Me** | [`09-touch-me-move-me.md`](https://github.com/Bloc/swiftris-checkpoints/blob/master/09-touch-me-move-me.md) | Add gesture detection to Swiftris, permit user control |
| **Adding Flare** | [`10-adding-flare.md`](https://github.com/Bloc/swiftris-checkpoints/blob/master/10-adding-flare.md) | Finally, add fanciful animations and visual elements for displaying the player's level and score |


## Grunt

This project base uses [Grunt](http://gruntjs.com/) to serve, build and watch project files in development. We've configured Grunt to work for you, but if you're interested in learning more about how Grunt works, look at Grunt's [Getting Started Guide](http://gruntjs.com/getting-started) or watch [Egghead's introduction to Grunt video](https://egghead.io/lessons/gruntjs-introduction-to-grunt).

## Running the application

Run the application using

```
$ grunt
```

The application runs on port 3000 (configured in the [`Gruntfile.js`](https://github.com/joelip/base-frontend-project/blob/master/server.js)). To change the port, modify the number highlighted below

```js
connect: {
  server: {
    options: {
      // Change this value here to the desired port number
      port: 3000,
      hostname: 'localhost',
      base: './dist',
      useAvailablePort: true
    }
  }
}
```

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

Grunt looks for files using a defined pattern so that it knows what to compile and copy and where to put it. To edit the files that Grunt watches, look at the array of files in the `watch` task in `Gruntfile.js`. The default watched files are

```js
  files: [
      './app/scripts/**/*.js',
      './app/sass/**/*.scss',
      './app/pages/**/*.html',
      './app/templates/**/*.html',
      'Gruntfile.js'
  ]
```

Add any files or directories to Grunt's watch task using the [Grunt conventions for performing file operations](http://gruntjs.com/configuring-tasks#files).

### Sass

Make sure that all of your Sass files are included in the `sass` directory. When you create new Sass files in addition to `styles.scss`, make sure that you include them in `styles.scss` with an `@import` statement. For example, if you create a `home.scss` file to match our `home.html` template, include it in `styles.scss` with

```sass
@import "home";
```

and it will be automatically populated in the compiled CSS file when you save any Sass file.

### Difference between Pages and Templates

The `pages` directory is where you should keep application layouts. That is, these are full pages where you'll put a base HTML structure that might hold a `ui-view` or another dynamic block of HTML based on differing routes, app states, etc.

Templates are partials, or smaller sets of HTML that will be populated into the pages. The distinction is similar to the differene between `index.html` and the HTML files in the `templates` directory in Bloc Jams.


## Grunt plugins

A list of the plugins used by Grunt and what they're used for.

#### Browserify

[Browserify](http://browserify.org/) allows you to access Node modules included a given JS file while in the browser.

#### Sass

[Grunt Sass](https://github.com/gruntjs/grunt-contrib-sass) for compiling Sass into CSS.

#### Autoprefixer

[Autoprefixer](https://github.com/nDmitry/grunt-autoprefixer) allows you to write CSS free of worrying about vendor prefixes. No need to add `-webkit`, `-moz`, `-ms`, etc to the beginning of your CSS3, because the Grunt Autoprefixer task takes care of it for you.

#### Watch

[Grunt watch](https://github.com/gruntjs/grunt-contrib-watch) watches an array of files for changes and then executes Grunt tasks when a change is detected. Watch is useful for tasks like continuous unit testing (every time you save a file, that new file is tested), refreshing your browser automatically when changes are reflected, or compiling preprocessing languages like Sass or Jade into CSS or HTML.

#### Copy

[Grunt copy](https://github.com/gruntjs/grunt-contrib-copy) allows you to copy files from development folders like images, fonts or other static assets and put them in the folder that will be served on the frontend of your application.

#### Clean

[Grunt clean](https://github.com/gruntjs/grunt-contrib-clean) "cleans" or removes all files in your destination folder (the folder where you'll put your officially served content for your application) so that logic in your stylesheets, templates or scripts isn't accidentally overridden by previous code in the directory.

#### Hapi

[Grunt Hapi](https://github.com/athieriot/grunt-hapi) is a task that runs a server using [`HapiJS`](http://hapijs.com/). Happy is a Node Web Application framework with robust configuration options. Using Hapi allows us to use Angular for our application routing instead of relying on a backend to handle template requests.
