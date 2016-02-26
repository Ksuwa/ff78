var gulp = require('gulp');
var imageResize = require('gulp-image-resize');

gulp.task('default', function () {
	gulp.src('img/portfolio/main/*/*.jpg')
		.pipe(imageResize({
			width : 300,
			height : 200,
			crop : true,
			upscale : false
		}))
		.pipe(gulp.dest('img/portfolio/mini'));
});