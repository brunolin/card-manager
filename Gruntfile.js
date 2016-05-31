
module.exports = function(grunt) {
  grunt.initConfig({
    watch: {
      jade: {
        files: 'app/jade/**/*.jade',
        tasks: ['jade']
      },
      sass: {
        files: 'app/scss/*.scss',
        tasks: ['sass']
      }
    },
    browserSync: {
      default_options: {
        bsFiles: {
          src: [
            'public/css/*.css',
            'public/*.html',
            'public/js/**/*.js'
          ]
        },
        options: {
          watchTask: true,
          server: {
            baseDir: "./public"
          }
        }
      }
    },
    jade: {
        compile: {
            options: {
                pretty: true
            },
            files: [ {
              cwd: "app/jade",
              src: "**/*.jade",
              dest: "public/",
              expand: true,
              ext: ".html"
            } ]
        }
    },
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'public/css/main.css': 'app/scss/testing.scss'
        }
      }
    },
    nodemon: {
      dev: {
        script: 'server.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-nodemon');

  grunt.registerTask('default', ['browserSync', 'watch']);

};
