'use strict';

// dependencies
var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var changed = require('gulp-changed');



///////////////
// - SCSS/CSS
///////////////

var SCSS_SRC = './src/Assets/scss/**/*.scss';
var SCSS_DEST = './src/Assets/css';

// Compile SCSS
gulp.task('compile_scss', function(){

	gulp.src(SCSS_SRC)
	.pipe(sass().on('error', sass.logError))
	.pipe(minifyCSS())
	.pipe(rename({ suffix: '.min' }))
	.pipe(changed(SCSS_DEST))
	.pipe(gulp.dest(SCSS_DEST));


});

// detect changes in SCSS
gulp.task('watch_scss', function(){
	gulp.watch(SCSS_SRC, ['compile_scss']);
});

///////////////
// - JS
///////////////

var js_SRC = ['./src/Assets/js/scripts.js'];
var js_DEST = './src/Assets/js/minify_js';

// Minify JS
gulp.task('minify_js', function(){
	gulp.src(js_SRC)
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


