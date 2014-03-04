module.exports = function(grunt) {

	/* Load Plugins */

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compress');
	grunt.loadNpmTasks('grunt-bump');


	grunt.initConfig({
		pkg: '<json:package.json>',
		compress: {
			main: {
				options: {
					archive: 'soda.zip',
					mode: 'zip'
				},
				files: [
					{
						cwd: 'soda/',
						src: '**/*',
						expand: true
					}
				]
			}
		},
		less: {
			generate: {
				files: {
					'soda/Custom.css': 'less/build-stable.less',
					'soda/canary.css': 'less/build-canary.less',
				}
			}
		},
		watch: {
			canary: {
				files: ['less/*.less','themes/*.less'],
				tasks: ['less:generate']
			},

		}

	});

	grunt.registerTask('default', ['less']);
};
