	module.exports = function(grunt) {

		grunt.initConfig({
			jshint: {
				all: ['Gruntfile.js', 'app.js', 'public/js/*/*.js', '!public/js/lib/**', 'routes/**/*.js', 'models/*.js']
			},
			copy: {
				single: {
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
				}
			},
			clean: [
				'public/js/lib'
			]
		});

		grunt.loadNpmTasks('grunt-contrib-jshint');
		grunt.loadNpmTasks('grunt-contrib-copy');
		grunt.loadNpmTasks('grunt-contrib-clean');

		grunt.registerTask('default', ['jshint']);
		grunt.registerTask('test', ['jshint']);
		grunt.registerTask('build', ['jshint', 'clean', 'copy']);
	};