var gulp = require('gulp');
const imagemin = require('gulp-imagemin');

gulp.task('html', function() {
    return gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));
});

gulp.task('css', function() {
    return gulp.src('src/*.css')
        .pipe(gulp.dest('dist'));
});

gulp.task('images', function() {
    return gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));
});


exports.default = gulp.parallel('images', 'css', 'html');