// module permtie acceder de forma globla en cualquier parte del proyecto lo definido 
module.exports = function(grunt){
	grunt.initConfig({
		compass: {
			dist:{
				options:{
					sassDir : 'dev/css/sass', // recurso 
					cssDir : 'dist/css', // destino 
					environment: 'production'
				}
			},
			dev: {
				options:{
					sassDir: 'dev/css/sass',
					cssDir: 'dev/css/stylesheets'
				}
			}			
		}
	});

	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.registerTask("default",['compass']);
}