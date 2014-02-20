module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            options: {
              banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },

            dist: {
                src: [
                    'js/scripts.js', 
                    'js/jquery.js'  
                ],
                dest: 'js/production.js',
            },

        },
        watch: {
            files: ['**/scripts.js'],
            tasks: ['concat'],
        },

    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['concat']);

};

