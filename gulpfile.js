let gulp = require('gulp'),

    uglify = require('gulp-uglify'),

    concat = require('gulp-concat'),

    rename = require('gulp-rename'),

    cssMin = require('gulp-clean-css');
gulp.task('default', ['scripts', 'stylesheets']);
gulp.task('stylesheets', () => {

    return gulp.src('./public/stylesheets/**/*.css')

    .pipe(concat('main.css'))

    .pipe(gulp.dest('./public/dist/stylesheets'))

    .pipe(rename('main.min.css'))

    .pipe(cssMin())

    .pipe(gulp.dest('./public/dist/stylesheets'));

});
gulp.task('scripts', () => {

    return gulp.src('./public/javascripts/**/*.js')

    .pipe(concat('main.js'))

    .pipe(gulp.dest('./public/dist/javascripts'))

    .pipe(rename('main.min.js'))

    .pipe(uglify())

    .pipe(gulp.dest('./public/dist/javascripts'));

});
gulp.watch('./public/javascripts/**/*.js').on('change',

    () => {
        return gulp.src('./public/javascripts/**/*.js')

        .pipe(concat('main.js'))

        .pipe(gulp.dest('./public/dist/javascripts'))

        .pipe(rename('main.min.js'))

        .pipe(uglify())

        .pipe(gulp.dest('./public/dist/javascripts'));

    }

);

gulp.watch('./public/stylesheets/**/*.css').on('change',

    () => {
        return gulp.src('./public/stylesheets/**/*.css')

        .pipe(concat('main.css'))

        .pipe(gulp.dest('./public/dist/stylesheets'))

        .pipe(rename('main.min.css'))

        .pipe(cssMin())

        .pipe(gulp.dest('./public/dist/stylesheets'));

    }

);