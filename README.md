JS Seed
============

A somewhat opinionated Starter Kit relying on Gulp + Webpack.

It includes the following tools, tasks, and workflows:

- Compass
- React (JSX compilation to JS)
  - Flux'ish structure
  - react-router and some basic routes
- LiveReload
- Static Server
- Image optimization
- Error Notifications in Notification Center
- Superagent (from npm) for super clean and lightweight AJAX business
- Karma for test running (Jasmine for writing your tests)
- Project-based .vimrc (`<leader>t` runs your tests if you don't have
    watching for your test-file changes turned on).
- Uses PureCSS from Yahoo's CDN

If you've never used Node or npm before, you'll need to install Node.
If you use homebrew, do:
```
brew install node
```

Otherwise, you can download and install from [here](http://nodejs.org/download/).

### Install gulp globally
Gulp must be installed globally in order to use the command line tools. *You may need to use `sudo`*
```
npm install -g gulp
```

### Install compass (if you haven't already)
The gulp-compass module relies on Compass already being installed on your system.
```
gem install compass --pre
```
### Install npm dependencies
```
npm install
```
This runs through all dependencies listed in `package.json` and downloads them
to a `node_modules` folder in your project directory.

### Run gulp
```
gulp
```

This will create and run the task defined in `gulpfile.js`. If you're on OS X,
and have Chrome installed, a window will open displaying the demo page. If not,
you can visit http://localhost:3002 to view the test page. Browsersync keeps
all of your source changes in sync with the browser in a livereload fashion.

### Run tests
```
gulp test
```

### TODO

- add more stubbed out modules for flux/reflux/fluxxor architecture
