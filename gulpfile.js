var gulp = require('gulp');
var plumber = require('gulp-plumber');
var babel = require('gulp-babel');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

gulp.task('serve', ['js','css'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("app/sass/*.scss", ['css']);
    gulp.watch("app/*.js", ['js']);


    //js
    gulp.watch("dist/**/*.js").on('change', browserSync.reload);
    //css
    gulp.watch("dist/css/**/*.css").on('change', browserSync.reload);
    //HTML
    gulp.watch("*.html").on('change', browserSync.reload);
});


gulp.task('js', function() {
    return gulp.src('app/*.js')
        .pipe(plumber())
        .pipe(babel({
            presets: ["es2015"]
        }))
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream());
});

gulp.task('css', function () {
    return gulp.src('app/sass/**/*.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist/css'));
});
gulp.task('build:js', ['js']);
gulp.task('build:css', ['css']);
gulp.task('default', ['serve']);