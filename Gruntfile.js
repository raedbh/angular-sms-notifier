module.exports = function(grunt) {
// Load all grunt tasks matching the ['grunt-*', '@*/grunt-*'] patterns
require('load-grunt-tasks')(grunt);

// Project configuration.
grunt.initConfig({
  wiredep: {
    task: {
        // Files that should be updated when running `grunt wiredep`
        src: [
        '.wiredep'
        ]
      }
    },
    // Grunt express - our webserver
    // https://github.com/blai/grunt-express
    express: {
      all: {
        options: {
          bases: "src/",
          port: 9081,
          hostname: "0.0.0.0",
          livereload: true
        }
      }
    },
    // grunt-watch will monitor the projects files
    // https://github.com/gruntjs/grunt-contrib-watch
    watch: {
      all: {
        files: '**/*.html',
        options: {
          livereload: true
        }
      }
    },

    // grunt-open will open your browser at the project's URL
    // https://www.npmjs.org/package/grunt-open
    open: {
      all: {
        path: 'http://localhost:9081/#/notify'
      }
    }
  });

// Tasks
grunt.registerTask('server', [
  'express',
  'open',
  'watch'
  ]);

};
