import gulp from 'gulp';
import babel from 'gulp-babel';
import uglify from 'gulp-uglify';
import notify from 'gulp-notify';
import rename from 'gulp-rename';
import folders from './folders';
import {reload} from './browserSync';

gulp.task('babel', () =>
	gulp.src(`${folders.assetsSrc}/js/babel/*.babel.js`)
		.pipe(babel())
		.on('error', notify.onError({
			title: 'Babel Error',
			message: '<%= error.message %>'
		}))
		.pipe(uglify())
		.pipe(rename({suffix: '.min', prefix : ''}))
		.pipe(gulp.dest(`${folders.assetsSrc}/js/libs`))
);

gulp.task('babel:watch', () =>
	gulp.watch(`${folders.assetsSrc}/js/babel/*.babel.js`, gulp.series('babel', reload))
);