var gulp = require('gulp');
var spritesmith = require('gulp.spritesmith');

gulp.task('sprite', function () {
  var spriteData = gulp.src('p1/*.png').pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.css',
    // cssTemplate: 'handlebarsStr.css.handlebars'
  }));
  return spriteData.pipe(gulp.dest('output/p1'));
});


