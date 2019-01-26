#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const lazaro = require('../src/');

const options = process.argv[2];

if (options === '-h' || options === '--help') {
    fs.createReadStream(path.join(__dirname, 'usage.txt'))
        .pipe(process.stdout);
} else {
    lazaro();
}
