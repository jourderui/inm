/*jslint node: true */
/*global require, module, process */

/*
 * grunt-svg-sprites
 * https://github.com/thomaswelton/grunt-svg-sprites
 *
 * Copyright (c) 2014 thomaswelton
 * Licensed under the MIT license.
 */

module.exports = function (grunt) {
    "use strict";

    // Project configuration.
    grunt.initConfig({

        // Configuration to be run (and then tested).
        svg_sprites: {
            default_options: {
                options: {

                },
                src: 'app/img/svgicons/*.svg',
                dest: 'app/img/'
            }
        }

    });

    grunt.loadNpmTasks('grunt-svg-sprites');


};