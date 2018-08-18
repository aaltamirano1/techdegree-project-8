var gulp = require('gulp'),
	minifyjs = require('gulp-uglify'),
	concat = require('gulp-concat'),
	sass = require('gulp-sass'),
	minifycss = require('gulp-clean-css'),
	maps = require('gulp-sourcemaps'),
	rename = require('gulp-rename'),
	image = require('gulp-image'),
	del = require('del'),
	connect = require('gulp-connect');

// set up the gulp scripts command.
gulp.task('scripts', function(){
	return gulp.src(['js/circle/**.js','js/global.js'])
	.pipe(maps.init()) // start writing sourcemap for js when gulp scripts is run.
	.pipe(concat('all.min.js')) // concatenate js files into all.min.js file.
	.pipe(maps.init({loadMaps: true})) // allows sourcemap to keep track after css is minified
	.pipe(minifyjs()) // minify js.
	.pipe(maps.write('.')) 
	.pipe(gulp.dest('dist/scripts')); // copy concatenated and minified js file to dist/scripts folder.
});

// set up the gulp styles command.
gulp.task('styles', function(){
	return gulp.src('sass/global.scss')
	.pipe(maps.init())  // start writing sourcemap for css when gulp styles is run.
	.pipe(sass()) // compile the project’s SCSS files one CSS file.
	.pipe(rename('all.min.css')) // rename file all.min.css.
	.pipe(maps.init({loadMaps: true})) // allows sourcemap to keep track after css is minified
	.pipe(minifycss()) // minify css.
	.pipe(maps.write('.'))
	.pipe(gulp.dest('dist/styles')); // // copy complied and minified css file to dist/styles folder.
});

// set up gulp images command to optimize the size of the project’s JPEG and PNG files.
gulp.task('images', function(){
	return gulp.src('images/**')
	.pipe(image())
	.pipe(gulp.dest('dist/content')); // copy optimized images to dist/content folder.
});

// set up gulp clean command to delete all of the files and folders in the dist folder.
gulp.task('clean', function(){
	return del(['dist/content', 'dist/scripts', 'dist/styles']);
});

// set up gulp clean commad to run the clean, scripts, styles, and images tasks with confidence that the clean task completes before the other commands.
gulp.task('build', ['clean'], function(){
	gulp.start(['scripts', 'styles', 'images']);
});

// set up gulp command to run the build task and serve my project using a local web server (localhost:8080).
gulp.task('default', ['build'], function(){
	connect.server({
    livereload: true
  });
});