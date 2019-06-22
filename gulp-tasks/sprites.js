'use strict';

import {paths} from '../gulpfile.babel';
import gulp from 'gulp';
import svg from 'gulp-svg-sprite';
import svgmin from 'gulp-svgmin';
import debug from 'gulp-debug';
import browswerSync from 'browser-sync';


gulp.task('sprites',() => {
    return gulp.src(paths.sprites.src)
        .pipe(svgmin({
            js2svg: {
                pretty: true
            }
        }))
        .pipe(svg({
            shape: {
                dest: 'intermediate-svg'
            },
            mode: {
                stack: {
                    sprite: '../sprite.svg'
                }
            }
        }))
        .pipe(gulp.dest(paths.sprites.dist))
        .pipe(debug({
            title: 'Sprites'
        }))
        .on('end',browswerSync.reload);
});