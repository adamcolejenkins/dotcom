'use strict';

import config from '../config';
import gulp   from 'gulp';
import s3     from 'gulp-s3-deploy';

gulp.task('deploy', ['prod'], function() {

  // Upload build to Amazon S3
  return gulp.src(config.buildDir + '**')
    .pipe(s3(config.s3Credentials));

});