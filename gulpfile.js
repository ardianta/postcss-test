var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var cssnano = require('cssnano');
var precss = require('precss');


gulp.task('css', function(){
    const plugins = [
        precss,
        autoprefixer,
        cssnano
    ];
    return gulp.src('src/css/*.scss')
        .pipe(postcss(plugins))
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write('maps/'))
        .pipe(rename("main.min.css"))
        .pipe(gulp.dest('dist/css/'));
});