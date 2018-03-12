#!/usr/bin/env node
var fs = require('fs');
var path = require('path');
var lazaro = require('../');
var options = process.argv[2];

if (options === '-h' || options === '--help') {
    return fs.createReadStream(path.join(__dirname, 'usage.txt'))
        .pipe(process.stdout)
    ;
} else if(options.length > 0) {
    return console.error("An error occurred!", 1)
}

lazaro()
