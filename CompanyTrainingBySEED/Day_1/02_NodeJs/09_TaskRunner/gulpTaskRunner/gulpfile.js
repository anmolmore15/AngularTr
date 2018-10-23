
var gulp = require('gulp');
var gutil = require('gulp-util');
var clean = require('gulp-clean');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var concat=require('gulp-concat');
var uglify=require('gulp-uglify');


var destPath = './libs/';

/*simple Demo for  defining Task and scheulding task to run */
/* gulp.task('default', function() {
  return gutil.log('Gulp is running Simple Task!')
});  */


//independent task
/*gulp.task('mytask', function() {
   return gutil.log('Gulp is running mytask!')
});

//dependent task
gulp.task('dependenttask', ['mytask'], function() {
   return gutil.log('Gulp is running dependenttask!')
});

//setting  the task for execution
gulp.task('default', ['dependenttask']);
*/

// Delete the dist directory
/*gulp.task('clean', function () {
    return gulp.src(destPath)
        .pipe(clean());
});*/

var tsProject = ts.createProject('./tsScripts/tsconfig.json', {
    typescript: require('typescript')
});
gulp.task('ts', function (done) {
    //var tsResult = tsProject.src()
    var tsResult = gulp.src(["./App/tsScripts/*.ts"])
        .pipe(ts(tsProject), undefined, ts.reporter.fullReporter());
    return tsResult.js.pipe(gulp.dest('./Dist/public/assets/scripts'));
});

gulp.task('watch', ['watch.ts']);

gulp.task('watch.ts', ['ts'], function () {
    return gulp.watch('./App/tsScripts/*.ts', ['ts']);
});



gulp.task('copyHtml', function() {
  // copy any html files in source/ to public/
  gulp.src('./App/source/*.html').pipe(gulp.dest('./Dist/public'));
});

//gulp.task('default', ['ts','copyHtml']);


//gulp.watch('source/javascript/**/*.js', ['jshint']);


 //only uglify if gulp is ran with '--type production'

gulp.task('build-js', function() {
  return gulp.src('./Dist/public/assets/scripts/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('bundle.js'))
    .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop()) 
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./Dist/public/assets/scripts/bundle'));
});

gulp.task('default', ['ts','copyHtml','build-js']);