const gulp = require("gulp");
const sass = require ("gulp-sass");
const postcss = require("gulp-postcss");
const nano = require("cssnano");
const prefixer = require ('autoprefixer');

// include out image min library
const imagemin = require('gulp-imagemin');

// define some common tasks for Gulp to run

// like compile and minify SASS files:
function compile(done) {
    gulp.src("sass/*.scss")
    .pipe(sass())
    .on("error", sass.logError)
    .pipe(postcss([prefixer(), nano()]))
    .pipe(gulp.dest("public/css"))
    done()
}

// minify every image
function squashImages(done) {
    gulp.src("./images/**")
    .pipe(imagemin())
    .pipe(gulp.dest("./dist/images"))
    done()
}

exports.compile = compile;
exports.squash = squashImages;