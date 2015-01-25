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
                    'cwd': 'public',
                    'src': '**',
                    'dest': 'target/public'
                }]
            }
        },

        'bower': {
            'build': {
                'options': {
                    'targetDir': 'target/public/components',
                    'cleanTargetDir': true
                }
            }
        },

        'watch': {
            'dev': {
                'files': ['public/**', 'bower.json'],
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

    grunt.registerTask('build', ['bower:build', 'sync:build']);
    grunt.registerTask('start', ['build', 'parallel:dev']);
    grunt.registerTask('default', ['build']);
};
