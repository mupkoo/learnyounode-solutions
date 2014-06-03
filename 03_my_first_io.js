var fs = require('fs'),
    file = process.argv[2],
    buffer,
    lines;

if (!file) console.log('Please, enter the file name as parameter');

buffer = fs.readFileSync(file);
lines = buffer.toString().split("\n");

console.log(buffer.toString().split("\n").length - 1);
