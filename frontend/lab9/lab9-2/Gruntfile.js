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
		},
		jsdoc:{
			dist:{
				src:['dist/js/*.js','app.js'],
				options:{
					destination:'docs'
				}
			}
		},
		jshint:{
			options:{
				curly:true,
				eqeqeq:true,
				eqnull:true,
				browser:true,
				indent:4,
				globals:{
					jQuery:true
				}
			},
			files:{
					src:['dist/js/lab9-2.js','*.js']
			}
		},
		htmlhint:{
			html1:{
				options:{
					'tag-pair':true,
					'doctype-first':true,
					'id-unique':true
				},
				src:['*.html']
			}
		},
		rev:{
			options:{
				encoding: 'uft-8',
				algorithm: 'md5',
				length:8
			},
			dist:{
					files:{
						src:['dist/js/lab9-2.js']
					}
			}
		}
	});


	// Herramientas que necesitas para ejecutar la tareas
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-jsdoc');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-htmlhint');
	grunt.loadNpmTasks('grunt-rev');


	//(nombretarea,tarea_ejecutar)
	grunt.registerTask("default",['compass','jsdoc','jshint','htmlhint','rev']);
	//grunt.registerTask('docs',['jsdoc']);
	grunt.registerTask('testjshint',['jshint']);
	//grunt.registerTask('testhtmlhint',['rev']);
	//grunt.registerTask('testhtmlhint',['htmlhint']);


};
