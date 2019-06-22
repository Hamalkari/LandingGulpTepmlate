'use strict';

import gulp from 'gulp';
const requireDir = require('require-dir');
const paths = {
    views: {
        src: './src/views/index.pug',
        dist: './dist/',
        watch: './src/views/**/*.pug'
    },
    styles: {
        src: './src/styles/main.scss',
        dist: './dist/styles/',
        watch: './src/styles/**/*.scss'
    },
    scripts: {
        src: './src/js/index.js',
        dist: './dist/js/',
        watch: './src/js/**/*.js'
    },
    images: {
        src: './src/img/**/*.{jpg,jpeg,png,git,tiff}',
        dist: './dist/img/',
        watch: './src/img/**/*.{jpg,jpeg,png,git,svg}'
    },
    sprites: {
        src: './src/img/svg/*.svg',
        dist: './dist/img/sprites/',
        watch: './src/img/svg/*.svg'
    },
    fonts: {
        src: './src/fonts/**/*.{woff,woff2}',
        dist: './dist/fonts/',
        watch: './src/fonts/**/*.{woff,woff2}'
    }
};


requireDir('./gulp-tasks/');
export {paths};


export const development = gulp.series('clean',gulp.parallel(['views','styles','scripts','images','fonts','sprites']),gulp.parallel('serve'));
export const prod = gulp.series('clean',gulp.parallel(['views','styles','scripts','images','fonts','sprites']));

export default development;