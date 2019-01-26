#!/usr/bin/env node
var fs = require('fs');
var path = require('path');
var lazaro = require('../src/');
var options = process.argv[2];

if (options === '-h' || options === '--help') {
    return fs.createReadStream(path.join(__dirname, 'usage.txt'))
        .pipe(process.stdout)
        ;
}

lazaro()
