import gulp 						from 'gulp';
import install 					from 'gulp-install';

gulp.src(['./package.json'])
	.pipe(install());
