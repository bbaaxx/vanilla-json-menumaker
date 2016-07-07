
SystemJS.config({
  packages: {
    'js': {
      main: 'index.js',
      map: {
        'bluebird': 'node_modules/bluebird/js/browser/bluebird.js',
        'q': 'node_modules/q/q.js'
      }
    }
  }
});
