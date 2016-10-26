module.exports = function(grunt) {

	grunt.initConfig({
		jshint: {
			all: ['Gruntfile.js', 'app.js', 'public/js/*/*.js', 'routes/**/*.js', 'models/*.js']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.registerTask('default', ['jshint']);
	grunt.registerTask('test', ['jshint']);
};