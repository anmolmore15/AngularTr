module.exports = function(grunt) {
    grunt.initConfig({
       
       //Define tasks for grunt
       ts: {
                default : {
                    src: ["tsScripts/*.ts"],
                    dest:["scripts"]
                }
            },
       watch: {
                files: 'tsScripts/*.ts',
                tasks: ['ts']
        },
       uglify: {
            build: {
               src: 'scripts.js',
               dest: 'bundle.js'
            }
        },
       //pkg: grunt.file.readJSON('package.json'),    
       concat: {
            dist: {
                src: ['scripts/*.js'],
                dest: 'scripts.js'
            },
        }
    });
 
    grunt.loadNpmTasks("grunt-ts");
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('mergejs', ['concat'] );
    grunt.registerTask('monitor', ['watch'] );
    grunt.registerTask('minify', ['uglify'] )
    
  grunt.registerTask("default", ["ts","mergejs","minify"]);
};


//http://jessefreeman.com/dev-techniques/automating-typescript-with-node-and-grunt/