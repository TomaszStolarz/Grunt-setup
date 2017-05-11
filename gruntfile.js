module.exports = function(grunt) { 
    // Project configuration.
    grunt.initConfig({ 

        watch: {
            css: {
                files: ['*.sass'],
                tasks: ['sass'],
                options: { 
                    spawn: false,
                },
            }
        },           

        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'style.css': 'style.sass'
                }
            }
        },

        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'images/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'images/build/' 
                }]
            }
        }
    });  

    // Load the plugins tasks
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    // Default task(s).
    grunt.registerTask('default', ['sass', 'watch']);
    grunt.registerTask('default', ['sass']);
    grunt.registerTask('default', ['sass', 'imagemin']);
};