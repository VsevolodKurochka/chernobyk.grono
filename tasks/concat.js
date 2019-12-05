import gulp from 'gulp';
import folders from './folders';
import {reload} from './browserSync';

gulp.task('concat', () =>
	gulp.src(`${folders.assetsSrc}/js/**/*`)
		.pipe(gulp.dest(`${folders.assetsBuild}/js`))
);

gulp.task('concat:watch', () =>
	gulp.watch(`${folders.assetsSrc}/js/**/*`, gulp.series('concat', reload))
);