var gulp        = require('gulp');
var browserSync = require('browser-sync');

// Static server
gulp.task('server', function () {
   browserSync({
   	server: 'app/'
  	});
});
gulp.task('html', function(){
	//tarea a realizar en html
});
gulp.task('js', function(){
	//tarea a realizar en js
});
gulp.task('css', function(){
	//tarea a realizar en css
});

gulp.task('watch', function () {
	gulp.start('server');
	gulp.watch("app/*.html", ['html', browserSync.reload]);
	gulp.watch("app/js/*.js", ['js', browserSync.reload]);
	gulp.watch("app/css/*.css", ['css', browserSync.reload]);
});