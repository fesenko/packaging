module.exports = function(grunt) {
    require('./src/helpers/number.js');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        mkdir: {
            all: {
                options: {
                    create: ['build']
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
                    'build/css/global.css': 'src/css/global.scss'
                }
            }
        },

        clean: ['./build/**/*'],

        copy: {
            main: {
                files: [
                    { expand: true, src: ['img/**'], dest: 'build/' },
                    { expand: true, cwd: 'src/css/', src: ['*.css'], dest: 'build/css/' },
                    { expand: true, cwd: 'src/js/', src: ['*'], dest: 'build/js/' },
                    { expand: true, cwd: 'doc/', src: ['*'], dest: 'build/doc/' },
                    { expand: true, cwd: 'src/', src: ['*.*', 'Sitemap', '.htaccess'], dest: 'build/' }
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
                                'dist/jquery.js'
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
                },{
                    src: 'src/views/delivery.hbs',
                    dest: 'build/delivery.html'
                }, {
                    src: 'src/views/catalog/checks.hbs',
                    dest: './build/catalog/checks.html',
                }, {
                    src: 'src/views/catalog/containers.hbs',
                    dest: './build/catalog/containers.html',
                }, {
                    src: 'src/views/catalog/film_pof.hbs',
                    dest: './build/catalog/film_pof.html',
                }, {
                    src: 'src/views/catalog/food_stretch.hbs',
                    dest: './build/catalog/food_stretch.html',
                }, {
                    src: 'src/views/catalog/pallet_stretch.hbs',
                    dest: './build/catalog/pallet_stretch.html',
                }, {
                    src: 'src/views/catalog/shrink.hbs',
                    dest: './build/catalog/shrink.html',
                }, {
                    src: 'src/views/catalog/vacuum_packages.hbs',
                    dest: './build/catalog/vacuum_packages.html',
                }, {
                    src: 'src/views/catalog/containers_ps.hbs',
                    dest: './build/catalog/containers_ps.html',
                }, {
                    src: 'src/views/catalog/labels.hbs',
                    dest: './build/catalog/labels.html',
                }, {
                    src: 'src/views/catalog/stretch_wrap.hbs',
                    dest: './build/catalog/stretch_wrap.html',
                }],
                partials: [
                    'src/views/header.hbs',
                    'src/views/footer.hbs',
                    'src/views/metrika.hbs',
                    'src/views/liveinternet.hbs'
                ],
                templateData: ''
            },
            dynamicTemplateData: {
                files: [{
                    src: 'src/views/catalog.hbs',
                    dest: 'build/catalog.html'
                }, {
                    src: 'src/views/prices.hbs',
                    dest: 'build/prices.html'
                }],
                templateData: {
                    catalog: require('./data/catalog.json'),
                    price: require('./data/prices.json')
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-mkdir');
    grunt.loadNpmTasks('grunt-bower');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-compile-handlebars');

    grunt.registerTask('build', function() {
        grunt.task.requires('clean');
        grunt.task.run(['sass', 'copy', 'compile-handlebars', 'bower']);
    });

    grunt.registerTask('default', ['clean', 'build']);
};
