module.exports = function(grunt) {
    'use strict';
    require('load-grunt-tasks')(grunt, {
        pattern: ['grunt-*']
    });

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        config: {
            'cssSrcDir': 'src/sass',
            'cssTargetDir': 'css',
            'jsSrcDir': 'src/js',
            'jsTargetDir': 'js'
        },
        copy: {
	        dev: {
                files: [{
	                dest: '../dist/font/',
	                src: '*',
                    cwd: 'src/font/',
                    expand: true
                }]
	        },
	        dist: {
                files: [{
	                dest: '../dist/font/',
	                src: '*',
                    cwd: 'src/font/',
                    expand: true
                }]		        
            },
            zip: {
                files: [{
                    cwd: '../dist',
                    src: '**/*',
                    dest: 'assets/',
                    expand: true
                }]
            }
        },
        clean: {
            dev: ['dev'],
            dist: ['dist'],
            all: ['dev', 'dist'],
            zip: ['assets']
        },
        sass: {
            dev: {
                options: {
                    includePaths: ['<%= config.cssSrcDir %>'],
                    sourceMaps: true
                },
                files: {
                    '../dist/<%=  config.cssTargetDir %>/style.css': '<%=  config.cssSrcDir %>/style.scss'
                }
            },
            dist: {
                options: {
                    outputStyle: 'compressed'
                },
                files: {
                    '../dist/<%=  config.cssTargetDir %>/style.css': '<%=  config.cssSrcDir %>/style.scss'
                }
            }
        },
        postcss: {
            options: {
                map: true,
                processors: [
                    require('autoprefixer-core')({ browsers: ['last 2 versions'] })
                ]
            },
            dev: {
                src: '../dist/<%=  config.cssTargetDir %>/*.css'
            },
            dist: {
                src: '../dist/<%=  config.cssTargetDir %>/*.css'
            }
        },
		uglify: {
			js: {
				files: {
                    '../dist/<%=  config.jsTargetDir %>/vendor.js': ['<%=  config.jsSrcDir %>/libs/jquery-*.js','<%=  config.jsSrcDir %>/libs/wordcloud2.js'],
                    '../dist/<%=  config.jsTargetDir %>/script.js': ['<%=  config.jsSrcDir %>/**/*.js'],
				}
			}
		},
        watch: {
            css: {
                files: '<%=  config.cssSrcDir %>/**/*.scss',
                tasks: ['sass:dev','copy:dev','postcss:dev']
            }
        },
        zip: {
            dist: {
              src: [
                '**',
                '!node_modules',
                '!node_modules/**',
                '!src',
                '!src/**',
                '!dist',
                '!dist/**',
                '!.git',
                '!.gitignore',
                '!Gruntfile.js',
                '!package-lock.json'
              ],
              dest: `../build/${require('./package.json').name}.zip`
            }
        }
    });

    grunt.registerTask('build', [
        'sass:dist',
        'postcss:dist',
        'copy:dist',
        'uglify'
    ]);
    grunt.registerTask('default', [
        'sass:dev',
        'postcss:dev',
        'copy:dev',
        'uglify',
        'watch'
    ]);
    grunt.registerTask('buildzip', [
        'build',
        'copy:zip',
        'zip',
        'clean:zip'
    ]);
};