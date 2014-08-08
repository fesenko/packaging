module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'css/global.css': 'css/global.scss'
                }
            }
        },

        html2js: {
            options: {
                base: '.',
                module: 'ui-templates',
                rename: function (modulePath) {
                    var moduleName = modulePath.replace('views/partials/ui-bootstrap-tpls/', '').replace('.html', '');
                    return 'template' + '/' + moduleName + '.html';
                }
            },
            main: {
                src: ['views/partials/ui-bootstrap-tpls/**/*.html', 'views/*.html'],
                dest: 'views/ui-templates.js'
            }
        },

        watch: {
            css: {
                files: ['css/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-html2js');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['sass', 'html2js', 'watch']);
};
