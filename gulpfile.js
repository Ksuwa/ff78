var gulp = require('gulp');
var imageResize = require('gulp-image-resize');

gulp.task('default', function () {
	gulp.src('test.png')
	.pipe(imageResize({
		width : 100,
		height : 100,
		crop : true,
		upscale : false
	}))
	.pipe(gulp.dest('dist'));
});