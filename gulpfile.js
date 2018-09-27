// including plugins
var gulp = require('gulp')
, coffee = require("gulp-coffee");
 
// task
gulp.task('compile-coffee', function () {
    gulp.src('./list.coffee') // path to your file
    .pipe(coffee())
    .pipe(gulp.dest('./'));
});