'use strict';

import gulp from 'gulp';
import gulpif from 'gulp-if';
import rename from 'gulp-rename';
import browserSync from 'browser-sync';
import yargs from 'yargs';
import debug from 'gulp-debug';
import {paths} from '../gulpfile.babel';
import webpack from 'webpack';
import webpackStream from 'webpack-stream';


const webpackConfig = require('../webpack.config');
const argv = yargs.argv;
const production = !!argv.production;


webpackConfig.mode = production ? 'production' : 'development';
webpackConfig.devtool = production ? false : 'source-map';

gulp.task('scripts',() => {
    return gulp.src(paths.scripts.src)
        .pipe(webpackStream(webpackConfig),webpack)
        .pipe(gulpif(production,rename({
            suffix: '.min'
        })))
        .pipe(gulp.dest(paths.scripts.dist))
        .pipe(debug({
            title: 'Js files'
        }))
        .on('end',browserSync.reload);
});