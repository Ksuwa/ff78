var gulp = require('gulp');
var imageResize = require('gulp-image-resize');
var watermark = require("gulp-watermark");

gulp.task('default', function () {
	gulp.src('img/portfolio/scr-main/*/*.{jpg,JPG}')//resize big images to small
		.pipe(imageResize({
			width : 300,
			height : 200,
			crop : true,
			upscale : false
		}))
		.pipe(gulp.dest('img/portfolio/mini'));

gulp.src('img/portfolio/scr-main/*/*.{jpg,JPG}')//add watermark to photos
	.pipe(watermark({
		image: 'img/watermark.png',
		resize: '50%',
		gravity: 'South'
	}))
	.pipe(gulp.dest('img/portfolio/main'));
});