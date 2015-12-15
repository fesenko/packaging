module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        mkdir: {
            all: {
                options: {
                    create: ['build/catalog']
                }
            }
        },

        sass: {
            dist: {
                options: {
                    style: 'expanded',
                    noCache: true,
                    'sourcemap=none': ''
                },
                files: {
                    'build/css/global.css': 'css/global.scss'
                }
            }
        },

        clean: ['./build/'],

        copy: {
            main: {
                files: [
                    { expand: true, src: ['img/**'], dest: 'build/' },
                    { expand: true, src: ['css/*.css'], dest: 'build/' },
                    { expand: true, cwd: 'src/js/', src: ['*'], dest: 'build/js/' }
                ]
            }
        },

        bower: {
            dev: {
                dest: 'build/',
                css_dest: 'build/css/',
                fonts_dest: 'build/fonts/',
                js_dest: 'build/js/',
                options: {
                    packageSpecific: {
                        jquery: {
                            keepExpandedHierarchy: false,
                            files: [
                                'dist/jquery.min.js'
                            ]
                        },
                        bootstrap: {
                            keepExpandedHierarchy: false,
                            files: [
                                'dist/fonts/**',
                                'dist/css/*.min.css',
                                'dist/js/bootstrap.min.js'
                            ]
                        }
                    }
                }
            }
        },

        'compile-handlebars': {
            allStatic: {
                files: [{
                    src: 'src/views/index.hbs',
                    dest: 'build/index.html'
                }, {
                    src: 'src/views/contacts.hbs',
                    dest: 'build/contacts.html'
                }, {
                    src: 'src/views/*/*.hbs',
                    dest: 'build/catalog/',
                    ext: '.html'
                }],
                partials: [
                    'src/views/header.hbs',
                    'src/views/footer.hbs'
                ],
                templateData: ''
            },
            dynamicTemplateData: {
                files: [{
                    src: 'src/views/catalog.hbs',
                    dest: 'build/catalog.html'
                }],
                templateData: require('./data/catalog.json')
            }
        }
    });

    grunt.loadNpmTasks('grunt-mkdir');
    grunt.loadNpmTasks('grunt-bower');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-compile-handlebars');

    grunt.registerTask('compile-handlebars', function() {
        grunt.task.requires('mkdir');
    });

    grunt.registerTask('mkdir', function() {
        grunt.task.requires('clean');
        console.log(grunt.task);
    });

    grunt.registerTask('sass', function() {
        grunt.task.requires('clean');
    });

    grunt.registerTask('copy', function() {
        grunt.task.requires('clean');
    });

    grunt.registerTask('default', ['clean', 'mkdir', 'sass', 'compile-handlebars', 'copy']);
};
