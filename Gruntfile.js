	module.exports = function(grunt) {

		grunt.initConfig({
			pkg: grunt.file.readJSON('package.json'),

			jshint: {
				all: ['Gruntfile.js', 'app.js', 'client/js/*/*.js', 'routes/**/*.js', 'models/*.js']
			},


			copy: {
				jslib: {
					files: [
						{src: ['node_modules/angular/angular.min.js'], dest: 'public/js/lib/angular.min.js'},
						{src: ['node_modules/angular/angular.min.js.map'], dest: 'public/js/lib/angular.min.js.map'},
						{src: ['node_modules/angular-resource/angular-resource.min.js'], dest: 'public/js/lib/angular-resource.min.js'},
						{src: ['node_modules/angular-resource/angular-resource.min.js.map'], dest: 'public/js/lib/angular-resource.min.js.map'},
						{src: ['node_modules/angular-route/angular-route.min.js'], dest: 'public/js/lib/angular-route.min.js'},
						{src: ['node_modules/angular-route/angular-route.min.js.map'], dest: 'public/js/lib/angular-route.min.js.map'},
						{src: ['node_modules/angular-socket-io/socket.min.js'], dest: 'public/js/lib/socket.min.js'},
						{src: ['node_modules/angular-socket-io/socket.min.js.map'], dest: 'public/js/lib/socket.min.js.map'},
						{src: ['node_modules/angular-moment/angular-moment.min.js'], dest: 'public/js/lib/angular-moment.min.js'},
						{src: ['node_modules/angular-moment/angular-moment.min.js.map'], dest: 'public/js/lib/angular-moment.min.js.map'},
						{src: ['node_modules/moment/min/moment.min.js'], dest: 'public/js/lib/moment.min.js'},
						{src: ['node_modules/moment-locale-fr/fr.js'], dest: 'public/js/lib/moment.fr.js'}
					]
				},

				img: {
    				files: [
						{src: ['client/img/header.jpg'], dest: 'public/img/header.jpg'}
					]
				},

				templates: {
    				files: [
						{src: ['client/templates/admin/lives.html'], dest: 'public/templates/admin/lives.html'},
						{src: ['client/templates/admin/liveDetails.html'], dest: 'public/templates/admin/liveDetails.html'},
						{src: ['client/templates/live/liveDisplay.html'], dest: 'public/templates/live/liveDisplay.html'},
					]
				},

			},


			clean: [
				'public/'
			],


			cssmin: {
  				client: {
    				files: [{
      				expand: true,
      				cwd: 'client/css',
      				src: ['*.css', '!*.min.css'],
      				dest: 'public/css',
      				ext: '.min.css'
    				}]
  				}
			},


			usebanner: {
    			client: {
      				options: {
        				position: 'top',
        				banner: '/*\n<%= pkg.name %> v<%= pkg.version %>\nhttps://git.sherlockstd.io/SherlockStd/WebinarJS\n*/\n',
        				linebreak: true
      				},
      				files: {
        				src: [ 'public/js/**/*.min.js', '!public/js/lib/*.*', 'public/css/*.min.css' ]
      				}
    			}
  			},


			ngAnnotate: {
    			options: {
        			singleQuotes: true
    			},
    			app: {
        			files: {
            			'public/js/admin/admin.js': ['client/js/admin/admin.js'],
        				'public/js/admin/router.js': ['client/js/admin/router.js'],
        				'public/js/live/live.js': ['client/js/live/live.js'],
        				'public/js/live/router.js': ['client/js/live/router.js']
					}
    			}
			},


			concat: {
    			ngAdmin: {
        			src: ['./public/js/admin/*.js'],
        			dest: './public/js/admin.js'
    			},
				ngLive: {
        			src: ['./public/js/live/*.js'],
        			dest: './public/js/live.js'
    			},
			},


			uglify: {
    			client: {
      				files: {
        				'public/js/admin.min.js': ['public/js/admin.js'],
        				'public/js/live.min.js': ['public/js/live.js'],
      				}
    			}
  			}
		});

		grunt.loadNpmTasks('grunt-contrib-jshint');
		grunt.loadNpmTasks('grunt-contrib-copy');
		grunt.loadNpmTasks('grunt-contrib-clean');
		grunt.loadNpmTasks('grunt-contrib-uglify');
		grunt.loadNpmTasks('grunt-contrib-cssmin');
		grunt.loadNpmTasks('grunt-banner');
		grunt.loadNpmTasks('grunt-ng-annotate');
		grunt.loadNpmTasks('grunt-contrib-concat');

		grunt.registerTask('default', ['jshint']);
		grunt.registerTask('test', ['jshint']);
		grunt.registerTask('build', ['jshint', 'clean', 'copy', 'ngAnnotate', 'concat', 'cssmin', 'uglify',  'usebanner']);
	};