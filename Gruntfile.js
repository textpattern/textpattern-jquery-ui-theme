module.exports = function (grunt) {
    'use strict';

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');

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
        },

        jshint: {
            files: ['Gruntfile.js'],
            options: {
                bitwise: true,
                camelcase: true,
                curly: true,
                eqeqeq: true,
                es3: true,
                forin: true,
                immed: true,
                indent: 4,
                latedef: true,
                noarg: true,
                noempty: true,
                nonew: true,
                quotmark: 'single',
                undef: true,
                unused: true,
                strict: true,
                trailing: true,
                browser: true,
                globals: {
                    $: false,
                    jQuery: false,
                    module: true
                }
            }
        }

    });

    grunt.registerTask('test', ['jshint']);
    grunt.registerTask('sass', ['compass']);
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['jshint', 'sass', 'copy']);
    grunt.registerTask('travis', ['jshint', 'compass']);
};
