module.exports = function(grunt) {
    require('time-grunt')(grunt);
    require('jit-grunt')(grunt, {
        'bower': 'grunt-bower-task'
    });

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        'clean': {
            'build': [
                'target'
            ]
        },

        'sync': {
            'build': {
                'files': [{
                    'cwd': 'src/main/public',
                    'src': '**',
                    'dest': 'target/public'
                }]
            }
        },

        'bower': {
            'build': {
                'options': {
                    'cleanTargetDir': true,
                    'copy': false // Believe it or not. Otherwise wiredep doesn't work...
                }
            }
        },

        'wiredep': {
            'build': {
                'src': [
                    'target/public/index.html'
                ],
                'options': {
                }
            }
        },

        'browserify': {
            'target/public/app.js': [
                'src/main/js/app.js'
            ]
        },

        'watch': {
            'dev': {
                'files': ['src/main/public/**', 'bower.json', 'src/main/js/**'],
                'tasks': ['build']
            }
        },

        'http-server': {
            'dev': {
                'root': 'target/public',
                'port': 8080,
                'host': '0.0.0.0'
            }
        },

        'parallel': {
            'dev': {
                'tasks': [{
                    'grunt': true,
                    'args': ['http-server:dev']
                }, {
                    'grunt': true,
                    'args': ['watch:dev']
                }]
            },
            'options': {
                'stream': true
            }
        }
    });

    grunt.registerTask('build', ['bower:build', 'sync:build', 'wiredep:build', 'browserify']);
    grunt.registerTask('start', ['build', 'parallel:dev']);
    grunt.registerTask('default', ['build']);
};
