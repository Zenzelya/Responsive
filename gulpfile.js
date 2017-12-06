const gulp = require('gulp');
const rename = require('gulp-rename'); // rename files
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const nested = require('postcss-nested');
const short = require('postcss-short');
//const assets  = require('postcss-assets');
const imagemin = require('gulp-imagemin');


gulp.task('mytask', function() { 
	const tasks = [	nested,
					short,
					autoprefixer ({browsers: ['last 2 versions']}),
					
					
			];
	return 	gulp.src('./app/css/style.css')
			.pipe(postcss(tasks))
			.pipe(gulp.dest('./dest/css'));
});

gulp.task( 'default', function() {
	gulp.watch('app/css/style.css', function(){
		gulp.run('mytask');
	})
});

gulp.task('compress', function() {
  gulp.src('./app/img/*')
  .pipe(imagemin())
  .pipe(gulp.dest('./dest/img'))
});

/*
ulp.task('mytask', function() { 
	const tasks = [	assets({ loadPaths: ['img/']}),
					nested,
					short,
					autoprefixer ({browsers: ['last 2 versions']}),
					
					
			];
	return 	gulp.src('./app/css/style.css')
			.pipe(postcss(tasks))
			.pipe(gulp.dest('./dest/css'));
});
*/