var fs         =require( 'fs');
var gulp       =require( 'gulp');
var browserify =require( 'browserify');
var babelify   =require( 'babelify');
var util       =require( 'gulp-util');
var buffer     =require( 'vinyl-buffer');
var source     =require( 'vinyl-source-stream');
var uglify     =require( 'gulp-uglify');
var sourcemaps =require( 'gulp-sourcemaps');

gulp.task('compile', () => {
  browserify('./build/npm/index.js', { debug: false, fullPaths: false })
    .add(require.resolve('babel-polyfill'))
    .transform(babelify.configure({presets: ['es2015']}))
    .bundle()
    .on('error', util.log.bind(util, 'Browserify Error'))
    .pipe(source('index.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify({ mangle: false }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./build/bower/'));
});
