var gulp = require('gulp');
var ts = require('gulp-typescript');
var tslint = require("gulp-tslint");

var tsProject = ts.createProject('tsconfig.json');

gulp.task('scripts', function() {
	var tsResult = gulp.src('src/**/*.ts')
					.pipe(ts(tsProject));

});

gulp.task("tslint", () =>
    gulp.src('src/**/*.ts')
        .pipe(tslint())
        .pipe(tslint.report("verbose", {
            emitError: false
        }))
);

gulp.task('watch', ['tslint', 'scripts'], function() {
    gulp.watch('src/**/*.ts', ['scripts']);
});
