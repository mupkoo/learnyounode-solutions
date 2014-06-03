var fs = require('fs'),
    file = process.argv[2],
    lines;

fs.readFile(file, function (err, data) {
    lines = data.toString().split('\n').length - 1;

    console.log(lines);
});
