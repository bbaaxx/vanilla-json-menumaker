
SystemJS.config({
  packages: {
    'js': {
      main: 'index.js',
      map: {
        'q': 'node_modules/q/q.js'
      }
    }
  }
});
