module.exports = function() {
    $.gulp.task('img:dev', () => {
        return $.gulp.src('./dev/static/img/**/*.{png,jpg,gif,jpeg}')
            .pipe($.gulp.dest('./build/static/img/'));
    });

    $.gulp.task('img:build', () => {
        return $.gulp.src('./dev/static/img/**/*.{png,jpg,gif,jpeg}')
            // .pipe($.gp.tinypng(YOUR_API_KEY))
            .pipe($.gulp.dest('./build/static/img/'));
    });


    $.gulp.task('svg:copy', () => {
        return $.gulp.src('./dev/static/img/general/*.svg')
            .pipe($.gulp.dest('./build/static/img/general/'));
    });

    $.gulp.task('video:copy', () => {
        return $.gulp.src('./dev/static/video/**/*.*')
            .pipe($.gulp.dest('./build/static/video/'));
    });
};
