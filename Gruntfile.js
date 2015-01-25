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

        'http-server': {
            'dev': {
                'root': 'target/public',
                'port': 8080,
                'host': '0.0.0.0'
            }
        }
    });

    grunt.registerTask('build', ['sync:build']);
    grunt.registerTask('start', ['build', 'http-server:dev']);
    grunt.registerTask('default', ['build']);
};
