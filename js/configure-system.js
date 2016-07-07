SystemJS.config({
    packages: {
        'js': {
            main: 'index.js',
            map: {
                'bluebird': 'node_modules/bluebird/js/browser/bluebird.js',
                'q': 'node_modules/q/q.js',
                'jsdom-global': 'node_modules/jsdom-global/index.js'
            }
        }
    }
});
//# sourceMappingURL=configure-system.js.map
