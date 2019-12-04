import gulp from 'gulp';
import sass from 'gulp-sass';
import sassGlob from 'gulp-sass-glob';
import csscomb 	from 'gulp-csscomb';
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS	from 'gulp-clean-css';
import rename from 'gulp-rename';
import folders from './folders';
import {reload} from './browserSync';

gulp.task('sass', () => gulp
	.src(`${folders.assetsSrc}/sass/**/*.+(sass|scss)`)
		.pipe(sassGlob())
		.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
		.pipe(csscomb())
		.pipe(autoprefixer({
			cascade: false
		}))
		.pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(rename({suffix: '.min', prefix : ''}))
		.pipe(gulp.dest(`${folders.assetsBuild}/css`))
);

gulp.task('sass:watch', () => {
	gulp.watch(`${folders.assetsSrc}/sass/**/*.+(sass|scss)`, gulp.series('sass', reload));
});
