const gulp = require('gulp');
const rename = require('gulp-rename'); // rename files
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const nested = require('postcss-nested');
const short = require('postcss-short');
const assets  = require('postcss-assets');


gulp.task('mytask', function() {
	const tasks = [	assets({ loadPaths: ['.app/img/'], relativeTO: ['.app/css/']}),
					nested,
					short,
					autoprefixer ({browsers: ['last 2 versions']}),
					
					
			];
	return 	gulp.src('./app/css/style.css')
			.pipe(postcss(tasks))
			.pipe(gulp.dest('./dest'));
});

gulp.task( 'default', function() {
	gulp.watch('app/css/style.css', function(){
		gulp.run('mytask');
	})
});