module.exports = function(grunt) {

  grunt.initConfig({
    copy: {
      html5shiv: {
        expand: true,
        cwd: 'node_modules/html5shiv/dist',
        src: 'html5shiv.js',
        dest: 'dist/js/',
      },
      owljs: {
        expand: true,
        cwd: 'node_modules/owl.carousel/dist',
        src: 'owl.carousel.js',
        dest: 'dist/js/',
      },
      owlcss: {
        expand: true,
        cwd: 'node_modules/owl.carousel/dist/assets',
        src: 'owl.carousel.css',
        dest: 'dist/styles/',
      },
      maincss: {
        expand: true,
        cwd: 'styles/',
        src: 'style.css',
        dest: 'dist/styles/',
      },
      html: {
        expand: true,
        cwd: 'html/',
        src: 'index.html',
        dest: 'dist/',
      }
    },
    concat: {
      options: {
        separator: ';'
      },
      javascript: {
        src: 'js/*.js',
        dest: 'dist/js/script.min.js'
      },
    },
    uglify: {
      js: {
        src: 'dist/js/script.min.js',
        dest: 'dist/js/script.min.js'
      },
    },
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'styles',
          src: ['*.scss'],
          dest: 'styles',
          ext: '.css'
        }]
      }
    },
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'img/',
          src: ['**/*.{png,jpg}'],
          dest: 'dist/img'
        }]
      }
    },
    watch: {
      sass: {
        files: ['styles/*.scss'],
        tasks: ['sass']
      },
    }

  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  grunt.registerTask('default', ['concat','uglify','sass','copy','imagemin']);

};
