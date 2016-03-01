/**
 * Created by NathanBriscoe on 3/1/16.
 */
var gulp = require('gulp');

var paths = {
    vendor: ['node_modules/angular/angular.min.js', 'node_modules/ng-file-upload/dist/ng-file-all.min.js'],
    dest: 'public/vendor/'
};

gulp.task('copy-vendor', [], function (){
   // move vendor scripts, whatever that means...
    return gulp.src(paths.vendor)
        .pipe(gulp.dest(paths.dest));
});

gulp.task('default', ['copy-vendor'], function (){

});