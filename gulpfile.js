var gulp = require('gulp');

gulp.task('html', function() {
    return gulp.src('src/*.html')
        .pipe(gulp.dest('dist/'));
});

gulp.task('css', function() {
    return gulp.src('src/*.css')
        .pipe(gulp.dest('dist/'));
});

gulp.task('images', function() {
    return gulp.src('src/images/*')
        .pipe(gulp.dest('dist/images/'));
});


exports.default = gulp.parallel('images', 'css', 'html');