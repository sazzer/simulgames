module.exports = function(grunt) {
    require('time-grunt')(grunt);
    require('jit-grunt')(grunt, []);

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
                    'cwd': 'public',
                    'src': '**',
                    'dest': 'target/public'
                }]
            }
        },

        'watch': {
            'dev': {
                'files': ['public/**'],
                'tasks': ['build'],
                'options': {
                    'spawn': true
                }
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

    grunt.registerTask('build', ['sync:build']);
    grunt.registerTask('start', ['build', 'parallel:dev']);
    grunt.registerTask('default', ['build']);
};
