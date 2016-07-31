module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    babel: {
      options: {
        sourceMap: false,
        presets: ['es2015']
      },
      dist: {
        files: [{
          expand: true,     // Enable dynamic expansion.
          cwd: 'js/src',    // Src matches are relative to this path
          src: ['*.js'],
          dest: 'js/dist',  // Destination path prefix.
          ext: '.js',       // Dest filepaths will have this extesion.
          extDot: 'first'   // Extensions is filenames begin after the first
        }]
      }
    },
    watch: {
      babel: {
        files: 'js/src/*.js',
        tasks: ['babel']
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default',['babel']);
};
