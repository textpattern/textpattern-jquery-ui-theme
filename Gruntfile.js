module.exports = function (grunt) {
    'use strict';

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            sass: {
                files: 'src/sass/**',
                tasks: ['sass']
            }
        },

        compass: {
            dev: {
                options: {
                    config: 'config.rb',
                    force: true
                }
            }
        },

        copy: {
            dist: {
                files: [
                    {expand: true, cwd: 'src/', src: ['*'], dest: 'dist/hive/', filter: 'isFile'},
                    {expand: true, cwd: 'src/img/', src: ['**'], dest: 'dist/textpattern/images/'}
                ]
            }
        }

    });

    grunt.registerTask('sass', ['compass']);
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['sass', 'copy']);
    grunt.registerTask('travis', ['compass']);
};
