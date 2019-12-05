import gulp from 'gulp';
import requireDir from 'require-dir';
import {serve} from './tasks/browserSync';
requireDir('./tasks');

gulp.task(
	'watch', 
	gulp.series(
		serve,
		gulp.parallel(
			'concat', 'concat:watch',
			'sass', 'sass:watch',
			'css', 'css:watch',
			'image', 'image:watch',
			'fonts', 'fonts:watch'
		)
	)
);

gulp.task(
	'build',
	gulp.parallel(
		'assets:build',
		'vendor:build',
		'views:build',
		'php:build',
	)
);

gulp.task('default', gulp.series('watch'));