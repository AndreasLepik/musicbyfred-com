var gulp = require('gulp');

gulp.task('html', function() {
    return gulp.src('src/*.html')
        .pipe(gulp.dest('dist/'));
});

gulp.task('css', function() {
    return gulp.src('src/*.css')
        .pipe(gulp.dest('dist/'));
});


exports.default = gulp.parallel('css', 'html');