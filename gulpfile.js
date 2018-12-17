var syntax        = 'scss'; // Syntax: sass or scss;

var gulp          = require('gulp'),
		gutil         = require('gulp-util' ),
		sass          = require('gulp-sass'),
		browserSync   = require('browser-sync'),
		concat        = require('gulp-concat'),
		uglify        = require('gulp-uglify'),
		cleancss      = require('gulp-clean-css'),
		rename        = require('gulp-rename'),
		autoprefixer  = require('gulp-autoprefixer'),
		notify        = require("gulp-notify"),
		rsync         = require('gulp-rsync');

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false,
		// open: false,
		// online: false, // Work Offline Without Internet Connection
		// tunnel: true, tunnel: "projectname", // Demonstration page: http://projectname.localtunnel.me
	})
});

gulp.task('styles', function() {
	return gulp.src('app/'+syntax+'/**/*.'+syntax+'')
	.pipe(sass({ outputStyle: 'expanded' }).on("error", notify.onError()))
	.pipe(rename({ suffix: '.min', prefix : '' }))
	.pipe(autoprefixer(['last 15 versions']))
	.pipe(cleancss( {level: { 1: { specialComments: 0 } } })) // Opt., comment out when debugging
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.stream())
});

gulp.task('js', function() {
	return gulp.src([

		// Libs
		'app/libs/jquery/dist/jquery.min.js',
		// 'app/libs/bootstrap/js/bootstrap.min.js',
		// 'app/libs/popper.js/dist/popper.js',
		'app/libs/sammy/sammy.js',
		'app/libs/sammy/plugins/sammy.json.js',
		'app/libs/sammy/min/plugins/sammy.template-latest.min.js',
		'app/libs/slick-carousel/slick/slick.min.js',
		'app/libs/handlebars/handlebars.js',
		'app/libs/select2/dist/js/select2.js',
		'app/libs/jquery-ui/jquery-ui.js',
		'app/libs/highlight/jquery.highlight.js',
		'app/libs/hilitor/hilitor.js',
		'app/libs/twbspagination/jquery.twbsPagination.min.js',
		'app/libs/json-easy-filter/jef-browser.js',
		
		// App
		
		// App: Controllers
		'app/js/controllers/home-controller.js',
		'app/js/controllers/users-controllers.js',
		'app/js/controllers/about-controllers.js',
		'app/js/controllers/contacts-controllers.js',
		'app/js/controllers/services-controllers.js',
		'app/js/controllers/catalog-controllers.js',
		'app/js/controllers/reviews-controllers.js',
		'app/js/controllers/pre-order-controllers.js',
		'app/js/controllers/object-controllers.js',
		'app/js/controllers/profile-controllers.js',
		
		// App: setup
		'app/js/templates.js',
		'app/js/data.js',
		'app/js/catalog-filter.js',
		'app/js/common.js', // Always at the end
	])
	.pipe(concat('scripts.min.js'))
	// .pipe(uglify()) // Mifify js (opt.)
	.pipe(gulp.dest('app/js'))
	.pipe(browserSync.reload({ stream: true }))
});

gulp.task('rsync', function() {
	return gulp.src('app/**')
	.pipe(rsync({
		root: 'app/',
		hostname: 'username@yousite.com',
		destination: 'yousite/public_html/',
		// include: ['*.htaccess'], // Includes files to deploy
		exclude: ['**/Thumbs.db', '**/*.DS_Store'], // Excludes files from deploy
		recursive: true,
		archive: true,
		silent: false,
		compress: true
	}))
});


gulp.task('watch', ['styles', 'js',  'browser-sync'], function() {
	gulp.watch('app/'+syntax+'/**/*.'+syntax+'', ['styles']);
	gulp.watch(['libs/**/*.js', 'app/js/**/*.js'], ['js']);
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/templates/*.template', browserSync.reload);
	gulp.watch('app/templates/*.handlebars', browserSync.reload);
	gulp.watch('app/data/*.json', browserSync.reload);
});

gulp.task('default', ['watch']);
