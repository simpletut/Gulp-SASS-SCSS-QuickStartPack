'use strict';

// dependencies
var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var changed = require('gulp-changed');
var sassInheritance = require('gulp-better-sass-inheritance');
var chmod = require('gulp-chmod');
var cached = require('gulp-cached');
var gulpif = require('gulp-if');
var wait = require('gulp-wait');
var notify = require('gulp-notify');
var babel = require('gulp-babel');



///////////////
// - SCSS/CSS
///////////////

var SCSS_SRC = './projectAssets/scss/**/*.scss';
var SCSS_Inheritance = './projectAssets/scss/';
var SCSS_DEST = './projectAssets/css';

gulp.task('compile_scss', function() {
    return gulp.src(SCSS_SRC)

      // Timeout (Windows/Sublime Text V2 Fix)
      .pipe(wait(200))

      //filter out unchanged scss files, only works when watching 
      .pipe(gulpif(global.isWatching, cached('sass')))

      //find files that depend on the files that have changed 
      .pipe(sassInheritance({base: SCSS_Inheritance}))

      //process scss files 
      .pipe(sass())
      .on('error', function (err) {
            console.log(err.toString());
            notify.onError({
                title: "Gulp SASS Error"
                //title: "Gulp error in " + err.plugin,
                //message:  err.toString()
            })(err);

            this.emit('end');
        })

      .pipe(minifyCSS())
	    .pipe(rename({ suffix: '.min' }))
	   
      // Uncomment if required
      //.pipe(chmod(755))

      //save all the files 
      .pipe(gulp.dest(SCSS_DEST));
});

gulp.task('watch_scss', ['compile_scss'], function() {
    global.isWatching = true;
    gulp.watch(SCSS_SRC, ['compile_scss']);
});

///////////////
// - JS
///////////////

var js_SRC = ['./projectAssets/js/scripts.js'];
var js_DEST = './projectAssets/js';

// Minify JS
gulp.task('minify_js', function(){
	gulp.src(js_SRC)

  .pipe(babel({
      presets: ['es2015']
  }))
  .on('error', function (err) {
    console.log(err.toString());
    notify.onError({
        //title: "Gulp Javascript Error"
        title: "Gulp error in " + err.plugin,
        message:  err.toString()
    })(err);

    this.emit('end');
  })

	.pipe(uglify())
	.pipe(rename({ suffix: '.min' }))
	.pipe(changed(js_DEST))
	.pipe(gulp.dest(js_DEST));

});

// detect changes in JS
gulp.task('watch_js', function(){
	gulp.watch(js_SRC, ['minify_js']);
});



// Run tasks
gulp.task('default', ['watch_scss', 'watch_js']);


